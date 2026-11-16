---
name: slide-deck
description: Create or edit the reveal.js talk decks in slides/ (and the deck cards on index.html) without content overflowing the slide. Use whenever you add, change or restyle a slide, write a new deck, or the user says a slide "ล้น" / overflows / is cut off. Includes layout limits and an overflow checker that must pass before you say the work is done.
---

# Slide decks: build them so nothing overflows or disappears

Decks live in `slides/*.html`. Each is a reveal.js page where every slide is a fixed
**1280 × 720** canvas, laid out with absolute positions. The browser never wraps or
scrolls a slide for you: anything too wide or too tall is simply cut off on the
projector. The user has hit this more than once, so **overflow is a bug, and a
change is not done until the checker below returns `[]`.**

## The checker (run it every time)

```bash
node ~/.claude/skills/browser-automation/browser.mjs \
  "file://$PWD/slides/<deck>.html" \
  --script .claude/skills/slide-deck/check-overflow.mjs --timeout 180000
```

- Run it on **every deck you touched**. Run it on all decks when you change shared CSS.
- It shows every fragment (the last click state) and reports, per slide:
  - `EDGE`: an element sticks out of the 1280 × 720 slide
  - `CARD`: an element sticks out of its content card (`.nc > .in`)
  - `TEXT`: text runs past its box: sideways into the padding, or down past the border.
    This covers code lines hidden by `overflow: hidden`, prompt boxes, pills and cards.
  - `LOW`: text color too close to its background (contrast ratio below 3), e.g. dark code
    text on a dark `pre`.
- `script []` means clean. Anything else: fix the slide and run it again.
- Deliberate bleed (the cover's fading chevron rows, a box meant to scroll) is skipped
  for `.chev-rows` and for anything with a `data-overflow-ok` attribute. Add that attribute
  only when the overflow is a design choice, and tell the user you did.
- The checker finds overflow, not ugliness. For any new or redesigned diagram slide,
  also take a screenshot and look at it (browser-automation skill) before reporting.

## Layout limits

Slide coordinates (dark DevFest decks: agents-cli, hermes, embeddinggemma2):

| Area | Value |
|---|---|
| Content card `.nc` | left 40, top 40, 1200 × 640 |
| Usable width inside `.in` (padding 56 each side) | **1088 px** |
| Eyebrow + `h2` header | ends around y = 165 |
| Bottom `.ask` bar (if the slide has one) | content must end above **y ≈ 570** |
| Without `.ask` | content must end above **y ≈ 640** |

Rules that prevent the overflows we have actually had:

1. **Code lines are the #1 cause.** `pre` has `overflow: hidden`, so a long line is cut,
   not wrapped. Before writing a code block, check the longest line:
   `max chars ≈ (box width − 48) ÷ (0.6 × font-size)` (Roboto Mono is 0.6 em wide;
   48 = code padding + border).

   | Box width | 15 px | 14 px | 13 px | 12 px |
   |---|---|---|---|---|
   | 1088 (full) | 115 | 123 | 133 | 144 |
   | 700 | 72 | 77 | 83 | 90 |
   | 600 | 61 | 65 | 70 | 76 |
   | 534 (half of a 2-column grid) | 54 | 57 | 62 | 67 |

   Too long → break the line, don't shrink below 12 px:
   shell with `\` continuations, Python with parentheses or implicit string
   concatenation (`("part one "` newline `"part two")`), JS by moving `.method(` to the
   next line. The command must still run exactly as before.
2. **Grids:** columns must not grow past their share. Use
   `grid-template-columns: minmax(0, 1fr) …` or give children `min-width: 0`
   (`.grid > * { min-width: 0 }`). One long unbreakable line in a `1fr` column pushes the
   whole row off the slide.
3. **Flows** (`.flow` with nodes and arrows): 3 nodes fit with default sizes. For 4 or 5 nodes
   use `.flow.tight` (smaller gap, arrows and font; `code` may wrap) or put them on two rows.
4. **No `white-space: nowrap` on anything that can be long** (commands in node boxes, URLs).
5. **Fixed heights** (`height:270px` on a card) only with spare room. When you add a bullet,
   check the height still fits, or drop the fixed height.
6. **Long URLs and file paths:** put them in a `.cmd`/link with a short visible label, or break them.
7. **Dark decks and code color:** the shared theme sets `.reveal .hljs { color: #1e1e1e }` for light
   decks. Every dark deck needs `.reveal pre code.hljs { color: var(--dk-text); }`, or plain code text
   is black on black. The `LOW` check catches it.
8. **Absolute diagrams** (boxes with `left/top`): keep every box inside the 1088 × ~400 area
   you reserve, and keep labels inside their boxes (short text, `<br>` on purpose).

## Building a new deck

- Start from the most similar existing deck: copy its `<head>` (theme CSS, fonts, icons
  sprite) and the closing `<script>` blocks, then replace the `<section>`s. Keep slide markup
  patterns (`.nc > .in`, `.eyebrow`, `h2`, `.pc`, `.grid`, `.ask`, `aside.notes`).
- Assets are one level up: `../images/…`, `../fonts/…` (decks are in `slides/`).
- Keep `hashOneBasedIndex: true` and `fragmentInURL: false` in `Reveal.initialize`, so the URL
  (`#/7`) matches the slide counter (`7 / 33`). Slide links and scripts use 1-based `#/n`.
- Speaker notes go in `<aside class="notes">`, in Thai, like the other decks.
- Add a card for the new deck to `index.html`.
- Then run the checker on the new deck, fix until `[]`, and screenshot the diagram slides.

## Reporting

Say which decks you checked and that the checker returned `[]` for each. If you exempted
something with `data-overflow-ok`, say what and why.
