/* Learning Roadmap engine: renders the roadmap whose id is in <body data-roadmap> */
(function () {
  const ROADMAPS = window.ROADMAPS || [];
  const BY_ID = window.ROADMAPS_BY_ID || {};
  const params = new URLSearchParams(location.search);
  const reqId = document.body.dataset.roadmap || params.get("id") || "agentic-architect";
  const RM = BY_ID[reqId] || ROADMAPS[0];
  if (!RM) return;

  const ROOT = window.RM_ROOT || "../";
  const LOGO = ROOT + "../images/shared/logos/";
  const S = ROOT + "../slides/";
  const DATA = RM.data || { domains: {}, modules: {} };
  const DECKS = RM.decks || {};
  const RELATED = RM.related || {};
  const STAGES = RM.stages || [];
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  const extAttr = ' target="_blank" rel="noopener noreferrer"';

  /* ---------- page chrome & switcher ---------- */
  document.title = RM.title + " · Learning Roadmaps";
  document.documentElement.style.setProperty("--rm-accent", RM.accent || "#4285f4");
  document.getElementById("brand-logo").src = LOGO + RM.logo;
  document.getElementById("brand-title").textContent = RM.brandTitle || RM.title;
  document.getElementById("rm-kicker").textContent = RM.kicker;
  document.getElementById("_top").textContent = RM.title;
  document.getElementById("rm-intro").innerHTML = RM.intro;
  document.getElementById("rm-tip").textContent = RM.tip || "";

  const setCap = (elId, cap) => {
    const el = document.getElementById(elId);
    if (!cap) { el.parentElement.style.display = "none"; return; }
    el.textContent = cap.label;
    el.href = cap.href;
    if (cap.external) { el.target = "_blank"; el.rel = "noopener noreferrer"; }
  };
  setCap("start", RM.startCap);
  setCap("finish", RM.finishCap);

  document.getElementById("rm-switcher").innerHTML =
    '<a class="back-all" href="' + ROOT + 'index.html">← All Roadmaps</a>' +
    ROADMAPS.map(r =>
      '<a href="' + r.url + '" style="--c:' + r.accent + '"' +
      (r.id === RM.id ? ' class="active" aria-current="page"' : "") + '>' +
      '<img src="' + LOGO + r.logo + '" alt="">' + esc(r.shortTitle) + '</a>'
    ).join("");

  const hasDecks = STAGES.some(s => [...s.l, ...s.r].some(x => x[3] === "d"));
  const hasQuiz = STAGES.some(s => [...s.l, ...s.r].some(x => x[3] === "q"));
  document.getElementById("rm-legend").innerHTML =
    '<span><i class="m"' + (STAGES.every(s => s.c === STAGES[0].c) ? ' style="background:' + STAGES[0].c + ';border-color:' + STAGES[0].c + '"' : '') + '></i>Domain</span>' +
    '<span><i></i>Study module</span>' +
    (hasDecks ? '<span><i class="d"></i>Talk deck</span>' : "") +
    (hasQuiz ? '<span><i class="q"></i>' + esc(RM.practiceLabel || "Practice") + '</span>' : "") +
    '<span><i class="x"></i>Done</span>';

  const BLURB = {
    r: {
      takeaway: "One-page recap of the domain: the top pitfalls, the summary grid and the “if you see X, pick Y” decision matrix. Read it right after the modules and again before exam day.",
      qa: "Short questions and answers that check you can explain each module in your own words. Expand all and test yourself."
    },
    q: "Exam-style multiple-choice simulator for this domain, about 10 questions per module. Filter by module, see why each answer is right, and use “Retry missed only” until you clear them."
  };

  const pageOf = id => {
    const m = /sec(\d)/.exec(id);
    return m ? "sec" + m[1] + ".html" : null;
  };
  const hrefOf = id => {
    if (id.startsWith("deck:")) return { href: S + id.slice(5) + ".html", external: false };
    if (RM.hasLocalDocs) {
      const p = pageOf(id);
      if (p) return { href: p + "#" + id, external: false };
    }
    const mod = DATA.modules[id];
    if (mod && mod.url) return { href: mod.url, external: true };
    return null;
  };

  const TAG = { d: "Talk deck", q: RM.practiceLabel || "Practice", r: "Review" };
  const conceptsOf = id => (DATA.modules[id] || {}).concepts || [];

  /* ---------- progress ---------- */
  const KEY = RM.storageKey || ("doc-roadmap-" + RM.id);
  let done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} };
  const toggle = k => { if (done[k]) delete done[k]; else done[k] = 1; save(); paint(); };
  const ccount = id => conceptsOf(id).filter((_, i) => done[id + "~" + i]).length;

  /* ---------- render the map ---------- */
  const INDEX = {};
  const sub = s => ([id, num, label, kind = "m"]) => {
    INDEX[id] = { id, num, label, kind, stage: s };
    const n = conceptsOf(id).length;
    return '<div class="node ' + kind + (kind === "d" ? " deck" : kind === "q" ? " quiz" : "") + (s.opt ? " opt" : "") + '" data-id="' + id + '">' +
      '<button class="chk" type="button" aria-label="Mark done: ' + esc(label) + '">✓</button>' +
      '<button class="open" type="button"><span class="lbl">' + (num ? '<span class="num">' + num + '</span>' : "") + esc(label) + '</span>' +
      (TAG[kind] ? ' <span class="tag">· ' + esc(TAG[kind]) + '</span>' : "") + '</button>' +
      (n ? '<span class="cc" data-cc="' + id + '">0/' + n + '</span>' : "") + '</div>';
  };
  document.getElementById("stages").innerHTML = STAGES.map(s => {
    INDEX[s.k] = { id: s.k, label: s.t, kind: "main", stage: s };
    return '<section class="stage" style="--c:' + s.c + '">' +
      '<div class="side l">' + (s.l || []).map(sub(s)).join("") + '</div>' +
      '<div class="mid"><div class="node main" data-id="' + s.k + '">' +
        '<button class="chk" type="button" aria-label="Mark done: ' + esc(s.t) + '">✓</button>' +
        '<button class="open" type="button"><small>' + esc(s.n.toUpperCase()) + '</small><span class="lbl">' + esc(s.t) + '</span></button></div>' +
        (s.w ? '<span class="weight">' + esc(RM.weightLabel || "Exam weight") + ' <b>' + esc(s.w) + '</b></span>' : "") + '</div>' +
      '<div class="side r">' + (s.r || []).map(sub(s)).join("") + '</div>' +
    '</section>';
  }).join("");

  const rm = document.getElementById("rm"), svg = document.getElementById("wires");
  const nodes = [...rm.querySelectorAll(".node")];

  function paint() {
    let n = 0;
    nodes.forEach(el => { const on = !!done[el.dataset.id]; el.classList.toggle("done", on); el.querySelector(".chk").setAttribute("aria-pressed", on); if (on) n++; });
    rm.querySelectorAll("[data-cc]").forEach(el => { const id = el.dataset.cc, t = conceptsOf(id).length, c = ccount(id); el.textContent = c + "/" + t; el.classList.toggle("full", c === t); el.title = c + " of " + t + " key concepts ticked"; });
    document.getElementById("count").textContent = n + " / " + nodes.length + " done";
    document.getElementById("fill").style.width = (nodes.length ? 100 * n / nodes.length : 0) + "%";
    draw();
    if (cur) { renderDrawer(cur); drawKg(); }
  }

  function draw() {
    const o = rm.getBoundingClientRect();
    const box = el => { const r = el.getBoundingClientRect(); return { l: r.left - o.left, r: r.right - o.left, t: r.top - o.top, b: r.bottom - o.top, x: r.left - o.left + r.width / 2, y: r.top - o.top + r.height / 2 }; };
    const narrow = matchMedia("(max-width: 900px)").matches;
    const mains = [...rm.querySelectorAll(".node.main")].map(box);
    const st = box(document.getElementById("start")), fin = box(document.getElementById("finish"));
    const xs = narrow ? 14 : st.x;
    let p = "";
    if (narrow) p += '<path class="spine" d="M' + xs + ' ' + st.b + ' V' + fin.t + '"/>';
    else {
      const pts = [st, ...mains, fin];
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1], b = pts[i], my = (a.b + b.t) / 2;
        p += '<path class="spine" d="M' + a.x + ' ' + a.b + ' C' + a.x + ' ' + my + ' ' + b.x + ' ' + my + ' ' + b.x + ' ' + b.t + '"/>';
      }
    }
    rm.querySelectorAll(".stage").forEach(stage => {
      const m = box(stage.querySelector(".node.main"));
      stage.querySelectorAll(".side .node").forEach(el => {
        const b = box(el), cls = "branch" + (el.classList.contains("done") ? " done" : "");
        let d;
        if (narrow) d = "M" + xs + " " + b.y + " H" + b.l;
        else if (b.x < m.x) { const mx = (m.l + b.r) / 2; d = "M" + m.l + " " + m.y + " C" + mx + " " + m.y + " " + mx + " " + b.y + " " + b.r + " " + b.y; }
        else { const mx = (m.r + b.l) / 2; d = "M" + m.r + " " + m.y + " C" + mx + " " + m.y + " " + mx + " " + b.y + " " + b.l + " " + b.y; }
        p += '<path class="' + cls + '" d="' + d + '"/>';
      });
    });
    if (cur && kg.isConnected) {
      const n = box(nodeEl(cur)), k = box(kg), x = Math.min(Math.max(n.x, k.l + 24), k.r - 24);
      p += '<path class="spine" style="stroke:' + INDEX[cur].stage.c + ';stroke-width:3" d="M' + n.x + ' ' + n.b + ' C' + n.x + ' ' + (n.b + k.t) / 2 + ' ' + x + ' ' + (n.b + k.t) / 2 + ' ' + x + ' ' + k.t + '"/>';
    }
    svg.innerHTML = p;
    drawKg();
  }

  /* ---------- knowledge graph: the clicked box unfolds into its concepts, right on the map ---------- */
  const kg = document.createElement("section");
  kg.className = "kg"; kg.setAttribute("aria-live", "polite");
  let cur = null, openK = new Set();
  const still = matchMedia("(prefers-reduced-motion: reduce)"), mq = matchMedia("(max-width: 900px)");
  const nodeEl = id => rm.querySelector('.node[data-id="' + CSS.escape(id) + '"]');
  const leaf = (href, kind, label, external) =>
    '<a href="' + href + '"' + (external ? extAttr : "") + '><span class="k ' + kind + '">' +
    ({ doc: "Docs", deck: "Deck", quiz: "Practice" }[kind] || "Link") + '</span>' + esc(label) + (external ? " ↗" : "") + '</a>';
  const goNode = mid => {
    const it = INDEX[mid];
    if (!it) return "";
    const t = conceptsOf(mid).length, c = ccount(mid);
    return '<button class="kn go" type="button" data-go="' + mid + '"><span class="dot' + (done[mid] ? " on" : "") + '"></span><span>' + (it.num ? '<span class="num">' + it.num + ' </span>' : "") + esc(it.label) + '</span>' +
      (t ? '<span class="bar" title="' + c + '/' + t + ' concepts"><i style="width:' + (100 * c / t) + '%"></i></span>' : "") + '</button>';
  };

  function renderDrawer(id) {
    const it = INDEX[id], s = it.stage;
    kg.style.setProperty("--c", s.c);
    let kicker, title, intro = "", kids = [], leaves = [], primary = "";
    if (it.kind === "main") {
      kicker = s.n + (s.w ? " · " + (RM.weightLabel || "exam weight").toLowerCase() + " " + s.w : "");
      title = s.t;
      if (s.opt) intro = '<p>Talk decks that go beyond the exam syllabus. Nice to have, not needed to pass.</p>';
      (DATA.domains[s.k] || []).forEach(g => kids.push('<div class="kn goal"><div class="kn-b">' + g + '</div></div>'));
      [...(s.l || []), ...(s.r || [])].filter(x => s.opt || !x[0].startsWith("deck:")).forEach(x => kids.push(goNode(x[0])));
      if (!s.opt) {
        if (RM.hasLocalDocs) primary = '<a class="btn pri" href="' + s.k + '.html">Open Domain page →</a>';
        else if (s.doc) primary = '<a class="btn pri" href="' + s.doc + '"' + extAttr + '>Open Official Docs ↗</a>';
        if (RM.examHref) leaves.push(leaf(RM.examHref + "#section-" + (STAGES.indexOf(s) + 1), "quiz", s.n + " practice test", false));
      }
    } else if (it.kind === "d") {
      const key = id.slice(5), [t, desc] = DECKS[key] || [it.label, ""];
      kicker = "Talk deck" + (s.opt ? " · optional" : " · " + s.n); title = t; intro = '<p>' + esc(desc) + '</p>';
      Object.keys(RELATED).filter(m => RELATED[m].includes(key)).forEach(m => kids.push(goNode(m)));
      const link = hrefOf(id);
      if (link) primary = '<a class="btn pri" href="' + link.href + '">Open deck →</a>';
    } else {
      const d = DATA.modules[id] || {}, cs = d.concepts || [];
      kicker = s.n + " · " + s.t + (it.num ? " · Module " + it.num : ""); title = it.label;
      if (RM.hasLocalDocs) {
        if (it.kind === "q") intro = '<p>' + BLURB.q + '</p>';
        if (it.kind === "r") intro = '<p>' + BLURB.r[id.endsWith("qa") ? "qa" : "takeaway"] + '</p>';
      }
      if (d.goals && d.goals.length) intro += '<ul>' + d.goals.map(x => '<li>' + x + '</li>').join("") + '</ul>';
      cs.forEach((c, i) => {
        const k = id + "~" + i, on = !!done[k], open = openK.has(k);
        kids.push('<div class="kn' + (open ? " open" : "") + (on ? " done" : "") + '" data-k="' + k + '"><div class="kn-h">' +
          '<button class="chk" type="button" data-ck="' + k + '" aria-pressed="' + on + '" aria-label="Mark concept done: ' + esc(c.n) + '">✓</button>' +
          '<button class="kn-t" type="button" data-open="' + k + '" aria-expanded="' + open + '"><b>' + esc(c.n) + '</b>' + (c.tag ? '<small>' + esc(c.tag) + '</small>' : "") + '</button></div>' +
          '<div class="kn-b">' + (c.what ? '<p><em>What it is</em>' + c.what + '</p>' : "") + (c.why ? '<p><em>Why you need it</em>' + c.why + '</p>' : "") + '</div></div>');
      });
      const link = hrefOf(id);
      if (link) {
        const btnTxt = link.external
          ? (it.kind === "q" ? "Open Lab / Practice ↗" : "Open Official Docs ↗")
          : (it.kind === "q" ? "Start practice →" : "Open study module →");
        primary = '<a class="btn pri" href="' + link.href + '"' + (link.external ? extAttr : "") + '>' + btnTxt + '</a>';
      }
      (RELATED[id] || []).forEach(k => { if (DECKS[k]) leaves.push(leaf(S + k + ".html", "deck", DECKS[k][0], false)); });
      (d.resources || []).forEach(res => leaves.push(leaf(res.url, res.kind || "doc", res.label, /^https?:/.test(res.url))));
      if (RM.hasLocalDocs) {
        if (it.kind !== "q" && INDEX["mcq-" + s.k]) leaves.push(leaf(hrefOf("mcq-" + s.k).href, "quiz", s.n + " practice questions", false));
        leaves.push(leaf("exam.html#section-" + s.k.slice(3), "quiz", "Mock exam · " + s.n, false));
      }
      else if (RM.examHref) leaves.push(leaf(RM.examHref + (it.num ? "#sub-" + it.num : "#section-" + (STAGES.indexOf(s) + 1)), "quiz", (it.num ? "Module " + it.num : s.n) + " practice questions", false));
    }
    const hasConcepts = it.kind !== "main" && it.kind !== "d" && conceptsOf(id).length;
    kg.innerHTML = '<svg class="kg-wires" aria-hidden="true"></svg>' +
      '<div class="kg-head"><div class="kg-kicker">' + esc(kicker) + '</div><div class="kg-title" id="kg-title">' + esc(title) + '</div>' + intro +
      '<div class="kg-actions">' + primary +
      '<button class="btn' + (done[id] ? " ok" : "") + '" type="button" data-done>' + (done[id] ? "✓ Done" : "Mark as done") + '</button>' +
      (hasConcepts ? '<button class="btn link" type="button" data-fold>' + (openK.size ? "Collapse all" : "Expand all") + '</button>' : "") +
      '<span class="sp"></span><button class="btn kg-step" type="button" data-step="-1" aria-label="Previous box">←</button><button class="btn kg-step" type="button" data-step="1" aria-label="Next box">→</button></div>' +
      '<button class="btn kg-x" type="button" data-close aria-label="Fold the graph back">✕</button></div>' +
      (kids.length ? '<div class="kg-nodes">' + kids.join("") + '</div>' : "") +
      (leaves.length ? '<div class="kg-res">' + leaves.join("") + '</div>' : "");
    kg.setAttribute("aria-labelledby", "kg-title");
  }

  function drawKg() {
    const svgK = kg.querySelector(".kg-wires"), head = kg.querySelector(".kg-head"); if (!svgK || !head) return;
    const o = kg.getBoundingClientRect(), h = head.getBoundingClientRect();
    const x0 = h.left + h.width / 2 - o.left, y0 = h.bottom - o.top, trunk = 12;
    const items = [...kg.querySelectorAll(".kg-nodes > *, .kg-res a")].map(el => {
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2 - o.left, t: r.top - o.top, l: r.left - o.left, m: r.top + r.height / 2 - o.top, res: el.tagName === "A", done: el.classList.contains("done") };
    });
    const rows = [];
    items.forEach(it => { const row = rows.find(r => Math.abs(r.t - it.t) < 8 && r.res === it.res); if (row) row.items.push(it); else rows.push({ t: it.t, res: it.res, items: [it] }); });
    rows.sort((a, b) => a.t - b.t);
    let p = "";
    const line = (d, cls) => { p += '<path class="' + (cls || "") + '" d="' + d + '"/>'; };
    if (mq.matches) {
      const last = items.length ? Math.max(...items.map(i => i.m)) : y0;
      line("M" + x0 + " " + y0 + " V" + (y0 + 12) + " H" + trunk + " V" + last);
      items.forEach(i => line("M" + trunk + " " + i.m + " H" + i.l, i.res ? "res" : i.done ? "done" : ""));
    } else {
      rows.forEach((row, k) => {
        const bus = row.t - 14, xs = row.items.map(i => i.x), cls = row.res ? "res" : "";
        if (k === 0) line("M" + x0 + " " + y0 + " V" + bus);
        else line("M" + x0 + " " + y0 + " V" + (y0 + 10) + " H" + trunk + " V" + bus + " H" + Math.min(...xs), cls);
        line("M" + Math.min(x0, ...xs) + " " + bus + " H" + Math.max(x0, ...xs), cls);
        row.items.forEach(i => line("M" + i.x + " " + bus + " V" + i.t, i.res ? "res" : i.done ? "done" : ""));
      });
    }
    svgK.innerHTML = p;
  }
  const follow = ms => { const end = performance.now() + ms; const f = () => { draw(); if (performance.now() < end) requestAnimationFrame(f); }; requestAnimationFrame(f); };
  function place() {
    if (!cur) return;
    const n = nodeEl(cur);
    if (mq.matches) n.after(kg); else n.closest(".stage").appendChild(kg);
  }

  function openDrawer(id) {
    if (cur === id) { closeDrawer(); return; }
    kg.getAnimations({ subtree: true }).forEach(a => a.cancel());
    if (kg.isConnected) kg.remove();
    cur = id; openK = new Set();
    nodes.forEach(n => n.classList.toggle("sel", n.dataset.id === id));
    renderDrawer(id); place(); draw();
    try { history.replaceState(null, "", location.pathname + location.search + "#" + id); } catch (e) {}
    const n = nodeEl(id), nr = n.getBoundingClientRect();
    if (!still.matches && kg.animate) {
      kg.animate([{ opacity: 0, clipPath: "inset(0 0 100% 0 round 18px)" }, { opacity: 1, clipPath: "inset(0 0 0 0 round 18px)" }], { duration: 420, easing: "cubic-bezier(.2, .8, .2, 1)" });
      kg.querySelectorAll(".kg-head, .kn, .kg-res a").forEach((el, i) => {
        const r = el.getBoundingClientRect();
        el.animate([{ transform: "translate(" + (nr.left + nr.width / 2 - r.left - r.width / 2) + "px, " + (nr.top + nr.height / 2 - r.top - r.height / 2) + "px) scale(.2)", opacity: 0 }, { transform: "none", opacity: 1 }],
          { duration: 560, delay: i * 40, easing: "cubic-bezier(.2, .8, .2, 1)", fill: "backwards" });
      });
      follow(1100);
    }
    scrollTo({ top: nr.top + scrollY - 130, behavior: still.matches ? "auto" : "smooth" });
  }
  function closeDrawer() {
    if (!cur) return;
    const id = cur; cur = null;
    nodes.forEach(n => n.classList.remove("sel"));
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
    const fin = () => { kg.getAnimations({ subtree: true }).forEach(a => a.cancel()); kg.remove(); draw(); };
    if (!still.matches && kg.animate) {
      const nr = nodeEl(id).getBoundingClientRect();
      kg.querySelectorAll(".kg-head, .kn, .kg-res a").forEach(el => {
        const r = el.getBoundingClientRect();
        el.animate([{ transform: "none", opacity: 1 }, { transform: "translate(" + (nr.left + nr.width / 2 - r.left - r.width / 2) + "px, " + (nr.top + nr.height / 2 - r.top - r.height / 2) + "px) scale(.2)", opacity: 0 }], { duration: 260, easing: "ease-in", fill: "forwards" });
      });
      kg.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 280, fill: "forwards" }).onfinish = fin;
      follow(300);
    } else fin();
  }
  const order = () => nodes.map(n => n.dataset.id);
  const step = dir => { const o = order(), i = o.indexOf(cur); if (i >= 0) openDrawer(o[(i + dir + o.length) % o.length]); };

  rm.addEventListener("click", e => {
    if (e.target.closest(".kg")) return;
    const node = e.target.closest(".node"); if (!node) return;
    if (e.target.closest(".chk")) toggle(node.dataset.id); else openDrawer(node.dataset.id);
  });
  kg.addEventListener("click", e => {
    const t = e.target.closest("[data-ck], [data-open], [data-go], [data-fold], [data-done], [data-close], [data-step]"); if (!t) return;
    if (t.dataset.ck) { toggle(t.dataset.ck); return; }
    if (t.dataset.open) {
      const k = t.dataset.open, el = t.closest(".kn");
      if (openK.has(k)) openK.delete(k); else openK.add(k);
      el.classList.toggle("open", openK.has(k)); t.setAttribute("aria-expanded", openK.has(k));
      kg.querySelector("[data-fold]") && (kg.querySelector("[data-fold]").textContent = openK.size ? "Collapse all" : "Expand all");
      follow(350); return;
    }
    if (t.dataset.go) { openDrawer(t.dataset.go); return; }
    if ("fold" in t.dataset) {
      const all = [...kg.querySelectorAll(".kn[data-k]")].map(n => n.dataset.k);
      openK = openK.size ? new Set() : new Set(all); renderDrawer(cur); follow(350); return;
    }
    if ("done" in t.dataset) { toggle(cur); return; }
    if ("close" in t.dataset) { closeDrawer(); return; }
    if (t.dataset.step) step(+t.dataset.step);
  });
  new ResizeObserver(() => drawKg()).observe(kg);
  mq.addEventListener("change", () => { place(); draw(); });
  addEventListener("keydown", e => {
    if (!cur || e.target.closest("input, textarea")) return;
    if (e.key === "Escape") closeDrawer();
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
  });
  document.getElementById("reset").addEventListener("click", () => { done = {}; save(); paint(); });
  new ResizeObserver(draw).observe(rm);
  if (document.fonts) document.fonts.ready.then(draw);
  paint();
  const h = decodeURIComponent(location.hash.slice(1));
  if (INDEX[h]) requestAnimationFrame(() => openDrawer(h));
})();
