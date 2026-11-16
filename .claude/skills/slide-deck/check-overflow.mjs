// Overflow checker for the reveal.js decks in slides/.
//
// Run with the browser-automation skill's runner:
//   node ~/.claude/skills/browser-automation/browser.mjs \
//     "file://$PWD/slides/<deck>.html" \
//     --script .claude/skills/slide-deck/check-overflow.mjs --timeout 120000
//
// Returns [] when every slide is clean. Otherwise one entry per bad slide:
//   { slide, title, problems: [...] }
//
// It forces every fragment visible (the last click state) and checks each slide for:
//   1. EDGE  - an element sticking out of the 1280x720 slide
//   2. CARD  - an element sticking out of its content card (.nc > .in)
//   3. TEXT  - text running past the box that holds it (sideways: into the padding; down: past the border):
//              cards, code, pills, list items, and any element that clips its content
//   4. LOW   - text whose color is too close to its background (contrast ratio < 3)
// Text is measured with Range rects, so code lines hidden by `overflow: hidden` are still caught.

export default async function run(page) {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.waitForFunction(() => document.querySelectorAll('.reveal .slides > section').length > 0);
  await page.waitForTimeout(1200); // fonts + highlight.js
  await page.addStyleTag({
    content: '.reveal .fragment{opacity:1!important;visibility:visible!important;transform:none!important}',
  });
  const n = await page.evaluate(() => document.querySelectorAll('.reveal .slides > section').length);
  const bad = [];

  for (let i = 0; i < n; i++) {
    await page.evaluate((i) => { location.hash = '#/' + (i + 1); }, i); // decks use hashOneBasedIndex
    await page.waitForTimeout(350);
    const res = await page.evaluate(() => {
      const T = 1.5; // px tolerance
      const sec = document.querySelector('.reveal .slides > section.present');
      if (!sec) return null;
      const S = sec.getBoundingClientRect();
      // reveal scales the 1280x720 canvas; convert screen px back to slide px
      const k = S.width / 1280;
      const px = (v) => Math.round(v / k);
      const out = new Set();
      const label = (el) => {
        const cls = typeof el.className === 'string' ? el.className.trim().split(/\s+/).slice(0, 2).join('.') : '';
        const txt = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40);
        return `${el.tagName.toLowerCase()}${cls ? '.' + cls : ''} "${txt}"`;
      };
      // decorative bleed that is meant to be cut off (cover chevron rows, or anything marked data-overflow-ok)
      const exempt = (el) => !!el.closest('.chev-rows, [data-overflow-ok]');
      const visible = (el) => {
        if (el.closest('aside.notes') || exempt(el)) return false;
        const cs = getComputedStyle(el);
        return cs.display !== 'none' && cs.visibility !== 'hidden' && el.getBoundingClientRect().width > 0;
      };
      const outside = (r, B) => r.left < B.left - T || r.top < B.top - T || r.right > B.right + T || r.bottom > B.bottom + T;
      const by = (r, B) => `${px(Math.max(r.right - B.right, B.left - r.left, 0))}px x / ${px(Math.max(r.bottom - B.bottom, B.top - r.top, 0))}px y`;

      const els = [...sec.querySelectorAll('*')].filter((el) => {
        // skip SVG internals (paths/text are drawn inside their own viewBox)
        if (el instanceof SVGElement && el.tagName.toLowerCase() !== 'svg') return false;
        return visible(el);
      });

      for (const el of els) {
        const r = el.getBoundingClientRect();
        // 1. slide edge
        if (outside(r, S)) out.add(`EDGE ${label(el)} by ${by(r, S)}`);
        // 2. content card
        const card = el.closest('.nc > .in');
        if (card && card !== el) {
          const C = card.getBoundingClientRect();
          if (outside(r, C)) out.add(`CARD ${label(el)} by ${by(r, C)}`);
        }
      }

      // 3. text past the box that holds it: horizontally past the content box (inside the padding),
      //    vertically past the border.
      //    Holders: cards, code, pills, list items, and anything that clips (overflow != visible).
      //    Text is measured with Range rects, so lines hidden by overflow:hidden are still caught.
      const clipping = els.filter((el) => {
        const cs = getComputedStyle(el);
        return (cs.overflowX !== 'visible' || cs.overflowY !== 'visible') && !el.matches('.nc > .in, .nc, svg');
      });
      const holders = new Set([...sec.querySelectorAll('.pc, pre > code, .cmd, .chip, .tag, .ask, li, .numbox, .node, .eg-b'), ...clipping]);
      // text inside an absolutely positioned badge that deliberately sits on a holder's edge is skipped
      const floating = (node, h) => {
        for (let el = node.parentElement; el && el !== h; el = el.parentElement)
          if (/absolute|fixed/.test(getComputedStyle(el).position)) return true;
        return false;
      };
      for (const h of holders) {
        if (!visible(h)) continue;
        const H = h.getBoundingClientRect();
        const cs = getComputedStyle(h);
        const f = (v) => parseFloat(v) || 0;
        const inner = {
          left: H.left + f(cs.borderLeftWidth) + f(cs.paddingLeft),
          right: H.right - f(cs.borderRightWidth) - f(cs.paddingRight),
          // vertical: up to the border (glyph boxes of big fonts poke into the padding a little, that is fine)
          top: H.top + f(cs.borderTopWidth),
          bottom: H.bottom - f(cs.borderBottomWidth),
        };
        const walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
          if (!node.textContent.trim() || !visible(node.parentElement) || floating(node, h)) continue;
          const range = document.createRange();
          range.selectNodeContents(node);
          let hit = false;
          for (const r of range.getClientRects()) {
            if (r.width && outside(r, inner)) {
              out.add(`TEXT ${label(h)} "${node.textContent.trim().slice(0, 30)}" by ${by(r, inner)}`);
              hit = true;
              break;
            }
          }
          if (hit) break;
        }
      }
      // 4. LOW contrast: text color vs the background behind it (WCAG ratio < 3)
      const rgb = (c) => { const m = c.match(/[\d.]+/g); return m ? m.map(Number) : [0, 0, 0, 0]; };
      const lum = ([r, g, b]) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
      const bgOf = (el) => {
        for (let e = el; e; e = e.parentElement) {
          const cs = getComputedStyle(e);
          if (cs.backgroundImage !== 'none' && !e.matches('section')) return null; // gradient / image: skip
          const c = rgb(cs.backgroundColor);
          if ((c[3] ?? 1) >= 0.5) return c;
        }
        return rgb(getComputedStyle(document.body).backgroundColor);
      };
      const seen = new Set();
      const tw = document.createTreeWalker(sec, NodeFilter.SHOW_TEXT);
      let tn;
      while ((tn = tw.nextNode())) {
        const el = tn.parentElement;
        if (!tn.textContent.trim() || seen.has(el) || !visible(el) || el.closest('svg')) continue;
        seen.add(el);
        const cs = getComputedStyle(el);
        if (parseFloat(cs.opacity) < 0.5) continue;
        if (parseFloat(cs.webkitTextStrokeWidth) > 0) continue; // outlined glyphs (DevFest { } badge) stay readable
        const bg = bgOf(el); if (!bg) continue;
        const fg = rgb(cs.color);
        const [a1, a2] = [lum(fg), lum(bg)].sort((x, y) => y - x);
        const ratio = (a1 + 0.05) / (a2 + 0.05);
        if (ratio < 3) out.add(`LOW ${label(el)} contrast ${ratio.toFixed(2)} (${cs.color} on rgb(${bg.slice(0, 3).join(', ')}))`);
      }
      return { title: sec.dataset.title || '', problems: [...out].slice(0, 8) };
    });
    if (res && res.problems.length) bad.push({ slide: i + 1, title: res.title, problems: res.problems });
  }
  return bad;
}
