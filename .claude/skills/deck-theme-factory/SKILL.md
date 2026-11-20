---
name: "deck-theme-factory"
description: "Use when the user wants to pick, change or apply a visual theme (colors, typography) to slides, docs or HTML pages, including Thai-language decks."
---

# Deck Theme Factory

Apply a coherent visual theme to a deck or page. A theme = palette + typefaces + type scale + usage rules.

## Workflow
1. If the user has brand assets (logo, hex codes, fonts), build the theme from them. Otherwise offer 3 themes from the library below and let the user pick one (show name, mood, palette hexes).
2. Write the theme as a short spec before applying it:
   - dark, light, accent 1, accent 2 (hex), body text color, muted color
   - heading face, body face, code face (Google Fonts)
   - type scale (e.g. 112 / 60 / 32 / 26 / 24 px)
3. Apply it consistently: every slide sets its background; dark color for cover and closing, light for content, one accent statement slide.
4. Change only colors and fonts unless the user asks for layout changes.

## Rules
- Text contrast at least 4.5:1 (3:1 for 44px+). Put dark text on light accents.
- Toned whites and blacks (#F6F5F1, #0F1B2D), not pure #FFFFFF/#000000.
- Two accents must differ in lightness, not hue alone; prefer blue/orange over red/green.
- 1–3 typefaces. Thai text needs a Thai-capable face: IBM Plex Sans Thai, Noto Sans Thai, Sarabun, Prompt, Kanit, Anuphan, Bai Jamjuree.
- Code blocks: JetBrains Mono or Fira Code on the dark color.

## Theme library
| Name | Mood | Dark | Light | Accent 1 | Accent 2 | Heading / Body |
|---|---|---|---|---|---|---|
| Midnight Tech | developer, infra | #0F1B2D | #F6F5F1 | #2F6FED | #E8833A | IBM Plex Sans Thai / IBM Plex Sans Thai |
| Fresh Market | retail, friendly | #17352B | #F7F5EE | #2E8B57 | #F2B134 | Prompt / Sarabun |
| Clean Corporate | management, reports | #1E2A3A | #FAFAF7 | #3A6EA5 | #C8A24A | Anuphan / Sarabun |
| Warm Editorial | storytelling | #2B1E1A | #FBF6EF | #B4561A | #4F7A8C | Bai Jamjuree / Sarabun |
| Bold Promo | campaigns, posters | #111111 | #FFF8E7 | #E63946 | #1D4ED8 | Kanit / Prompt |
| Calm Minimal | training, quiet | #24303A | #F4F4F1 | #5B7C99 | #9AA88F | Noto Sans Thai / Noto Sans Thai |

## Output
Apply the theme directly to the artifact or file. Tell the user in one line which theme was applied and what changed.