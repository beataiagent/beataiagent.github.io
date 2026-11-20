# Beat AI Agent — Talk Decks & Learning Roadmaps

Collection of interactive talk decks, certification learning roadmaps on **on-device ML**, **Gemini**, and **AI Agents** on Google Cloud — by **Punsiri Boonyakiat** (*Google Developer Expert, Cloud AI*).

🌐 **Live Site:** [https://beataiagent.github.io](https://beataiagent.github.io)

---

## 🎤 Talk Decks

### Deck Keyboard Shortcuts

- `←` / `→` or `Space`: Navigate slides
- `O`: Toggle all-slides overview grid
- `F`: Fullscreen mode
- `N` or `S`: Open speaker notes window
- `E`: Export current slide to PDF
- `Shift + E`: Export full slide deck to PDF

---

## 🗺️ Learning Roadmaps (3 Tracks)

Interactive study & certification tracks located in [`roadmap/index.html`](roadmap/index.html):

| Track | Category | Highlights | Path |
| :--- | :--- | :--- | :--- |
| **Agentic Architect Learning Roadmap** | Google Cloud Cert | 5 exam domains, 35 study modules, related talk decks, study guide & 118 practice questions | [`roadmap/agentic-architect/`](roadmap/agentic-architect/index.html) |
| **LINE API Expert Learning Roadmap** | LINE Developers | Messaging API, Flex Messages, LINE Login (OAuth 2.0/OIDC), LIFF, MINI App, Beacon & practice tests | [`roadmap/line-api-expert/`](roadmap/line-api-expert/index.html) |
| **Data Engineer Certification Roadmap** | Google Cloud Cert | 5 official PDE exam domains: Pub/Sub, Dataflow, Dataproc, BigQuery, BigLake, Bigtable, Spanner, BQML & FinOps | [`roadmap/data-engineer/`](roadmap/data-engineer/index.html) |

---

## 🎬 Animated Teaching Videos (Remotion)

The [`animation/`](animation/README.md) directory contains a Remotion project that converts every HTML slide deck in `slides/*.html` into an animated `1920×1080` MP4 teaching video.

```bash
cd animation

# Install dependencies
npm install

# Launch interactive Remotion Studio to preview all 20 video compositions
npm run studio

# Re-extract slide decks after editing slides/*.html
npm run extract -- --all

# Render a specific deck to out/<deck-id>.mp4 (or --all for all 20 decks)
npm run render -- adk-hitl

# Render QA still PNGs of every slide into out/stills/<deck-id>/
npm run still -- adk-hitl
```



## 🚀 Running Locally

Because the slide decks and roadmaps are static HTML/CSS/JS with self-hosted fonts and assets, you can serve the root directory with any static HTTP server:

```bash
# Using Python
python3 -m http.server 8000

# Or using Node.js
npx serve .
```

Then open:
- **Talk Decks Home:** `http://localhost:8000/`
- **Learning Roadmaps:** `http://localhost:8000/roadmap/`

---

