/* Mock exam for the GCP Agentic Architecture Cert Prep site.
   Questions live in <script id="quiz-data" type="application/json"> on exam.html.
   Three ways to study:
     - Exam simulation: timed, questions weighted by domain, no feedback until you submit, flag + navigator
     - Practice: instant feedback by domain or subtopic, unseen-first or mistakes-only
     - Mistake bank: every question whose last answer was wrong, across all runs
   Per-question history is kept in localStorage so weak subtopics show up on the home view. */
(function () {
  "use strict";
  const DATA = JSON.parse(document.getElementById("quiz-data").textContent);
  // Near-identical pairs in the source bank: hide the later copy so it isn't asked twice
  const DUPES = DATA.meta.dupes || { "1.1-8": "1.1-2", "3.1-13": "3.1-14" };
  const SECTIONS = DATA.sections;
  const Q = DATA.questions.filter(q => !DUPES[q.id]);
  const BY_ID = Object.fromEntries(Q.map(q => [q.id, q]));
  const PASS = DATA.meta.passScore || 70;
  const LETTERS = "ABCDE";
  const COLORS = DATA.meta.colors || { 1: "#4285f4", 2: "#34a853", 3: "#fbbc04", 4: "#ea4335", 5: "#a142f4" };
  const SUBS = SECTIONS.flatMap(s => s.subtopics.map(t => ({ ...t, section: s.id })));
  // where each exam-guide subtopic is taught on this site
  const STUDY = DATA.meta.study || {
    "1.1": [["sec1-ces-omnichannel", "1.3 CES: Flows, Playbooks & Omnichannel"], ["sec1-platform-selection", "1.2 Agent Designer vs. Code-First ADK"]],
    "1.2": [["sec1-platform-selection", "1.2 Multimodal ingestion & Agent Search ACLs"], ["sec3-rag-grounding", "3.4 RAG Engine, Agent Search & Caching"]],
    "2.1": [["sec2-cicd-sandboxing", "2.3 CI/CD Automation & Sandboxing"], ["sec2-mcp-subagents", "2.2 MCP Tooling & Subagents"]],
    "2.2": [["sec2-context-skills", "2.1 Context, Custom Skills & Secrets"], ["sec2-mcp-subagents", "2.2 MCP Tooling & Subagents"]],
    "3.1": [["sec3-single-agent", "3.1 Single-Agent Design & ADK Params"], ["sec3-state-memory", "3.5 State, Sessions & Memory Bank"]],
    "3.2": [["sec3-rag-grounding", "3.4 RAG Engine, Agent Search & Caching"], ["sec3-mcp-tools", "3.3 MCP Toolbox & Custom Tools"]],
    "3.3": [["sec3-workflows", "3.2 Multi-Agent Workflow Patterns"], ["sec3-a2a-protocol", "3.6 A2A Protocol & Agent Cards"]],
    "4.1": [["sec4-evaluation", "4.1 Trajectory Eval & Rubric Syntax"], ["sec4-observability", "4.4 Tracing, Monitoring & Optimization"]],
    "4.2": [["sec4-runtimes", "4.2 Agent Runtime, Cloud Run & GKE"], ["sec4-cicd", "4.3 Agent Starter Pack & CI/CD Gates"]],
    "5.1": [["sec5-identity", "5.2 Agent Identity & OAuth 2.0"], ["sec5-perimeter", "5.1 Follow the Prompt: Perimeter"]],
    "5.2": [["sec5-callbacks", "5.3 ADK Callbacks & HITL"], ["sec5-identity", "5.2 Agent Identity & OAuth 2.0"]]
  };
  const studyHref = slug => /[.:/#]/.test(slug) ? slug : "sec" + slug[3] + ".html#" + slug;
  const [NQ, NS] = DATA.meta.examSizes || [25, 50];
  const EXAMS = [
    { id: "quick", n: NQ, min: NQ * 2, label: "Quick check" },
    { id: "standard", n: NS, min: NS * 2, label: "Standard mock" },
    { id: "marathon", n: Q.length, min: Q.length * 2, label: "Whole bank" }
  ];

  /* ---------- storage ---------- */
  const SK = DATA.meta.storageKey ? "-" + DATA.meta.storageKey : "";
  const HKEY = "doc-exam-history-v1" + SK, RKEY = "doc-exam-run-v1" + SK;
  const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
  const store = (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  let hist = load(HKEY, { q: {}, runs: [] });
  hist.q = hist.q || {}; hist.runs = hist.runs || [];
  const record = (id, ok) => { const h = hist.q[id] || { n: 0, ok: 0 }; h.n++; if (ok) h.ok++; h.last = ok; h.at = Date.now(); hist.q[id] = h; };

  /* ---------- helpers ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sec = id => SECTIONS.find(s => s.id === id);
  const sub = code => SUBS.find(s => s.code === code);
  const correctSet = q => q.type === "multi" ? q.correct : [q.correct];
  const isRight = (q, sel) => { const c = correctSet(q); return !!sel && sel.length === c.length && c.every(x => sel.includes(x)); };
  const fmtTime = ms => { ms = Math.max(0, ms); const s = Math.floor(ms / 1000), h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60; return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(s % 60).padStart(2, "0"); };
  const ago = t => { const d = Math.floor((Date.now() - t) / 864e5); return d <= 0 ? "today" : d === 1 ? "yesterday" : d + "d ago"; };
  const pct = (a, b) => b ? Math.round(100 * a / b) : 0;

  function weighted(n) {
    // largest-remainder split of n questions across sections by exam weight, then random picks inside each
    const tot = SECTIONS.reduce((a, s) => a + s.weight, 0);
    const raw = SECTIONS.map(s => ({ s, x: n * s.weight / tot }));
    raw.forEach(r => { r.k = Math.floor(r.x); });
    let left = n - raw.reduce((a, r) => a + r.k, 0);
    raw.slice().sort((a, b) => (b.x - b.k) - (a.x - a.k)).forEach(r => { if (left > 0) { r.k++; left--; } });
    return shuffle(raw.flatMap(r => shuffle(Q.filter(q => q.section === r.s.id)).slice(0, r.k)));
  }

  /* ---------- runs ---------- */
  let run = load(RKEY, null), view = run ? "resume" : "home", result = null, timer = 0;
  const saveRun = () => store(RKEY, run);

  function start(mode, title, qs, minutes) {
    if (!qs.length) return;
    run = { mode, title, ids: qs.map(q => q.id), opt: Object.fromEntries(qs.map(q => [q.id, shuffle(q.options.map((_, i) => i))])),
      i: 0, sel: {}, locked: {}, flags: {}, t0: Date.now(), limit: minutes ? minutes * 60000 : 0 };
    saveRun(); view = "run"; render(); scrollTo(0, 0);
  }
  function startExam(id) { const e = EXAMS.find(x => x.id === id); start("exam", e.label + " · " + e.n + " questions", e.n >= Q.length ? shuffle(Q) : weighted(e.n), e.min); }
  function startPractice(kind, key, order) {
    let pool = kind === "section" ? Q.filter(q => q.section === key) : kind === "sub" ? Q.filter(q => q.subtopic === key) : kind === "mistakes" ? Q.filter(q => hist.q[q.id] && hist.q[q.id].last === false) : Q;
    if (order === "mistakes") pool = pool.filter(q => hist.q[q.id] && hist.q[q.id].last === false);
    // unseen first, then the ones answered wrong last time, then the rest
    const rank = q => { const h = hist.q[q.id]; return !h ? 0 : h.last === false ? 1 : 2; };
    pool = shuffle(pool); if (order !== "random") pool.sort((a, b) => rank(a) - rank(b));
    const title = kind === "section" ? "Domain " + key + ": " + sec(key).title : kind === "sub" ? key + " " + sub(key).title : kind === "mistakes" ? "Mistake bank" : "All questions";
    start("practice", title + (order === "mistakes" && kind !== "mistakes" ? " · mistakes only" : ""), pool);
  }

  function finish() {
    clearInterval(timer);
    const r = run, ids = r.ids;
    // practice: only the ones actually answered; exam: every question counts
    const graded = r.mode === "exam" ? ids : ids.filter(id => r.locked[id]);
    let ok = 0;
    graded.forEach(id => { const good = isRight(BY_ID[id], r.sel[id]); if (good) ok++; if (r.mode === "exam" && r.sel[id] && r.sel[id].length) record(id, good); });
    if (graded.length) hist.runs.unshift({ mode: r.mode, title: r.title, ok, total: graded.length, at: Date.now(), ms: Date.now() - r.t0 });
    hist.runs = hist.runs.slice(0, 20); store(HKEY, hist);
    result = { ...r, graded, ok, pct: pct(ok, graded.length), ms: Date.now() - r.t0, filter: "all" };
    run = null; store(RKEY, null); view = "results"; render(); scrollTo(0, 0);
  }

  /* ---------- actions ---------- */
  const cur = () => BY_ID[run.ids[run.i]];
  function pick(idx) {
    const q = cur(); if (run.locked[q.id]) return;
    let s = run.sel[q.id] || [];
    if (q.type === "multi") s = s.includes(idx) ? s.filter(x => x !== idx) : s.length < q.correct.length ? [...s, idx] : s;
    else s = [idx];
    run.sel[q.id] = s;
    if (run.mode === "practice" && q.type === "single") lock();
    else { saveRun(); render(); }
  }
  function lock() {
    const q = cur(), s = run.sel[q.id] || [];
    if (run.mode !== "practice" || run.locked[q.id] || s.length !== correctSet(q).length) return;
    run.locked[q.id] = 1; record(q.id, isRight(q, s)); store(HKEY, hist); saveRun(); render();
  }
  function go(i) { if (i < 0 || i >= run.ids.length) return; run.i = i; saveRun(); render(); document.getElementById("ex").scrollIntoView({ block: "start" }); }
  function next() {
    const q = cur();
    if (run.mode === "practice" && !run.locked[q.id]) { lock(); return; }
    if (run.i < run.ids.length - 1) go(run.i + 1); else if (run.mode === "practice") finish(); else { view = "submit"; render(); }
  }

  /* ---------- views ---------- */
  const root = document.getElementById("ex");
  function render() {
    clearInterval(timer);
    root.innerHTML = view === "home" ? home() : view === "resume" ? resume() : view === "run" ? quiz() : view === "submit" ? confirmSubmit() : results();
    if (view === "run" && run.limit) { tick(); timer = setInterval(tick, 1000); }
  }
  function tick() {
    const left = run.t0 + run.limit - Date.now(), el = document.getElementById("ex-timer");
    if (el) { el.textContent = fmtTime(left); el.classList.toggle("low", left < 5 * 60000); }
    if (left <= 0) finish();
  }

  function stats() {
    const seen = Q.filter(q => hist.q[q.id]).length, wrong = Q.filter(q => hist.q[q.id] && hist.q[q.id].last === false).length;
    const right = Q.filter(q => hist.q[q.id] && hist.q[q.id].last === true).length;
    return { seen, wrong, right };
  }
  function subStats(code) {
    const qs = Q.filter(q => q.subtopic === code), seen = qs.filter(q => hist.q[q.id]);
    return { total: qs.length, seen: seen.length, right: seen.filter(q => hist.q[q.id].last).length };
  }

  function home() {
    const st = stats();
    const weights = SECTIONS.map(s => '<i style="width:' + s.weight + '%;background:' + COLORS[s.id] + '" title="' + esc(s.title) + " " + s.weight + '%"></i>').join("");
    const rows = SECTIONS.map(s => {
      const qs = Q.filter(q => q.section === s.id);
      return '<section class="ex-dom" style="--c:' + COLORS[s.id] + '"><div class="ex-dom-h"><div><span class="ex-code">DOMAIN ' + s.code + ' · ' + s.weight + '% ' + (DATA.meta.weightLabel || "OF EXAM") + '</span><h3>' + esc(s.title) + '</h3></div>' +
        '<button class="ex-btn sm" data-a="practice" data-k="section" data-v="' + s.id + '">Practice all ' + qs.length + '</button></div>' +
        s.subtopics.map(t => {
          const m = subStats(t.code), w = pct(m.seen, m.total), acc = m.seen ? pct(m.right, m.seen) : null;
          return '<div class="ex-sub"><div class="ex-sub-t"><span class="ex-code">' + t.code + '</span> ' + esc(t.title) +
            '<div class="ex-study">Study: ' + (STUDY[t.code] || []).map(([slug, l]) => '<a href="' + studyHref(slug) + '">' + esc(l) + '</a>').join(" · ") + '</div></div>' +
            '<div class="ex-meter" title="' + m.seen + ' of ' + m.total + ' answered"><div class="ex-track"><i style="width:' + w + '%"></i></div><span>' + m.seen + '/' + m.total + (acc == null ? "" : ' · <b class="' + (acc >= PASS ? "ok" : "bad") + '">' + acc + '%</b>') + '</span></div>' +
            '<button class="ex-btn sm ghost" data-a="practice" data-k="sub" data-v="' + t.code + '">Practice</button></div>';
        }).join("") + '</section>';
    }).join("");
    const runs = hist.runs.slice(0, 5).map(r => '<li><b class="' + (pct(r.ok, r.total) >= PASS ? "ok" : "bad") + '">' + pct(r.ok, r.total) + '%</b> ' + esc(r.title) + ' <span>' + r.ok + '/' + r.total + ' · ' + ago(r.at) + (r.mode === "exam" ? " · " + fmtTime(r.ms) : "") + '</span></li>').join("");
    return '<div class="ex-hero"><div class="kicker">Practice exam · ' + Q.length + ' questions</div><h1>' + esc(DATA.meta.heading || 'Mock Exam') + '</h1>' +
      '<p>' + (DATA.meta.intro || 'Scenario questions for the five exam domains. Every answer is explained and links to the Google documentation page it comes from, plus the module on this site that teaches it.') + '</p>' +
      '<div class="ex-stats"><div><b>' + st.seen + '<small>/' + Q.length + '</small></b>answered</div><div><b class="ok">' + st.right + '</b>right last time</div><div><b class="bad">' + st.wrong + '</b>in mistake bank</div><div><b>' + PASS + '%</b>target score</div></div></div>' +

      '<h2 class="ex-h">1 · Timed exam simulation</h2><p class="ex-note">Questions are drawn in proportion to each domain\'s exam weight. No answers are shown until you submit. Flag questions to come back to, and jump around with the question map. Pace: 2 minutes per question.</p>' +
      '<div class="ex-modes">' + EXAMS.map(e => '<button class="ex-mode" data-a="exam" data-v="' + e.id + '"><b>' + e.label + '</b><span>' + e.n + ' questions · ' + e.min + ' min</span></button>').join("") + '</div>' +

      '<h2 class="ex-h">2 · Practice with instant feedback</h2><p class="ex-note">Pick a domain or a subtopic. Questions you have never seen come first, then the ones you got wrong last time. The bar shows how many you have answered, and the % shows how many were right on your last try.</p>' +
      '<div class="ex-modes"><button class="ex-mode" data-a="practice" data-k="all"><b>All questions</b><span>' + Q.length + ' questions, unseen first</span></button>' +
      '<button class="ex-mode" data-a="practice" data-k="mistakes"' + (st.wrong ? "" : " disabled") + '><b>Mistake bank</b><span>' + (st.wrong ? st.wrong + " to fix" : "Nothing to fix yet") + '</span></button></div>' +
      '<div class="ex-weight">' + weights + '</div>' + rows +

      (runs ? '<h2 class="ex-h">Recent runs</h2><ul class="ex-runs">' + runs + '</ul>' : "") +
      '<p class="ex-note small">' + esc(DATA.meta.citationNote) + ' ' + (DATA.meta.disclaimer || 'These are study questions written from the exam guide topics, not official exam content.') + (Object.keys(DUPES).length ? ' ' + Object.keys(DUPES).length + ' near-duplicate questions from the source set are hidden.' : '') +
      (hist.runs.length || Object.keys(hist.q).length ? ' <button class="ex-link" data-a="wipe">Reset my history</button>' : "") + '</p>';
  }

  function resume() {
    const answered = Object.keys(run.sel).filter(k => run.sel[k].length).length;
    const left = run.limit ? run.t0 + run.limit - Date.now() : 0;
    return '<div class="ex-card ex-center"><div class="kicker">Unfinished ' + (run.mode === "exam" ? "exam" : "practice") + '</div><h2>' + esc(run.title) + '</h2>' +
      '<p>' + answered + ' of ' + run.ids.length + ' answered' + (run.limit ? " · " + (left > 0 ? fmtTime(left) + " left on the clock" : "time is up") : "") + '.</p>' +
      '<div class="ex-row"><button class="ex-btn" data-a="resume">' + (run.limit && left <= 0 ? "See results" : "Continue") + '</button><button class="ex-btn ghost" data-a="abandon">Discard and go back</button></div></div>';
  }

  function optionsHtml(q, showAnswer) {
    const sel = run.sel[q.id] || [], corr = correctSet(q);
    return run.opt[q.id].map((i, pos) => {
      let cls = "ex-opt", tag = "";
      const picked = sel.includes(i), right = corr.includes(i);
      if (showAnswer) {
        if (right && picked) { cls += " right"; tag = "Correct"; }
        else if (right) { cls += " right"; tag = q.type === "multi" ? "Missed" : "Answer"; }
        else if (picked) { cls += " wrong"; tag = "Your pick"; }
        else cls += " dim";
      } else if (picked) cls += " picked";
      return '<button class="' + cls + '" data-a="pick" data-v="' + i + '"' + (showAnswer ? " disabled" : "") + ' aria-pressed="' + picked + '">' +
        '<span class="ex-letter">' + LETTERS[pos] + '</span><span class="ex-otext">' + esc(q.options[i]) + '</span>' + (tag ? '<span class="ex-otag">' + tag + '</span>' : "") + '</button>';
    }).join("");
  }
  function explainHtml(q, ok) {
    const study = (STUDY[q.subtopic] || []).map(([slug, l]) => '<a class="ex-ref study" href="' + studyHref(slug) + '">📘 ' + esc(l) + '</a>').join("");
    const refs = (q.references || []).map(r => '<a class="ex-ref" href="' + esc(r.url) + '" target="_blank" rel="noopener noreferrer">🔗 ' + esc(r.label) + '</a>').join("");
    return '<div class="ex-explain ' + (ok ? "x-ok" : "x-bad") + '"><b>' + (ok ? "Correct" : "Not quite") + ' · why</b><p>' + esc(q.explanation) + '</p><div class="ex-refs">' + refs + study + '</div></div>';
  }

  function quiz() {
    const q = cur(), s = sec(q.section), t = sub(q.subtopic), exam = run.mode === "exam";
    const sel = run.sel[q.id] || [], need = correctSet(q).length, locked = !!run.locked[q.id];
    const answered = run.ids.filter(id => (run.sel[id] || []).length).length;
    const okSoFar = run.ids.filter(id => run.locked[id] && isRight(BY_ID[id], run.sel[id])).length, lockedN = Object.keys(run.locked).length;
    const last = run.i === run.ids.length - 1;
    let nav;
    if (exam) nav = '<button class="ex-btn ghost" data-a="prev"' + (run.i ? "" : " disabled") + '>← Back</button><button class="ex-btn ghost' + (run.flags[q.id] ? " flagged" : "") + '" data-a="flag">⚑ ' + (run.flags[q.id] ? "Flagged" : "Flag for review") + '</button><span class="sp"></span><button class="ex-btn" data-a="next">' + (last ? "Review & submit" : "Next →") + '</button>';
    else if (locked) nav = '<span class="sp"></span><button class="ex-btn" data-a="next">' + (last ? "See results" : "Next question →") + '</button>';
    else if (q.type === "multi") nav = '<span class="ex-hint">' + sel.length + ' / ' + need + ' selected</span><span class="sp"></span><button class="ex-btn" data-a="lock"' + (sel.length === need ? "" : " disabled") + '>Check answer</button>';
    else nav = '<span class="ex-hint">Pick an answer · keys A–' + LETTERS[q.options.length - 1] + '</span><span class="sp"></span><button class="ex-btn ghost" data-a="skip">Skip</button>';
    const map = exam ? '<div class="ex-map" aria-label="Question map">' + run.ids.map((id, k) => '<button data-a="goto" data-v="' + k + '" class="' + ((run.sel[id] || []).length ? "a " : "") + (run.flags[id] ? "f " : "") + (k === run.i ? "c" : "") + '" aria-label="Question ' + (k + 1) + '">' + (k + 1) + '</button>').join("") + '</div>' : "";
    return '<div class="ex-top"><div class="ex-title"><span class="kicker">' + (exam ? "Exam simulation" : "Practice") + '</span><b>' + esc(run.title) + '</b></div>' +
      (run.limit ? '<span class="ex-timer" id="ex-timer"></span>' : "") +
      '<span class="ex-chip">' + (exam ? answered + " / " + run.ids.length + " answered" : okSoFar + " / " + lockedN + " correct") + '</span>' +
      '<button class="ex-btn sm ghost" data-a="' + (exam ? "submit" : "end") + '">' + (exam ? "Submit" : "End") + '</button><button class="ex-btn sm ghost" data-a="quit" title="Your progress is kept so you can continue later">Pause</button></div>' +
      '<div class="ex-prog"><i style="width:' + pct(run.i + 1, run.ids.length) + '%;background:' + COLORS[s.id] + '"></i></div>' +
      '<div class="ex-card" style="--c:' + COLORS[s.id] + '">' +
      '<div class="ex-qmeta"><span class="ex-tag">' + t.code + ' · ' + esc(t.title) + '</span>' + (q.type === "multi" ? '<span class="ex-tag multi">Select ' + need + '</span>' : "") + '<span class="ex-qn">Question ' + (run.i + 1) + ' of ' + run.ids.length + '</span></div>' +
      '<p class="ex-prompt">' + esc(q.prompt) + '</p><div class="ex-opts">' + optionsHtml(q, locked) + '</div>' +
      (locked ? explainHtml(q, isRight(q, sel)) : "") + '</div>' +
      '<div class="ex-nav">' + nav + '</div>' + map +
      '<p class="ex-keys">Keys: <kbd>A</kbd>–<kbd>E</kbd> choose · <kbd>Enter</kbd> ' + (exam ? "next" : "check / next") + (exam ? ' · <kbd>←</kbd><kbd>→</kbd> move · <kbd>F</kbd> flag' : "") + '</p>';
  }

  function confirmSubmit() {
    const un = run.ids.filter(id => !(run.sel[id] || []).length).length, fl = Object.keys(run.flags).length;
    return '<div class="ex-card ex-center"><div class="kicker">Ready to submit?</div><h2>' + esc(run.title) + '</h2>' +
      '<p>' + (run.ids.length - un) + ' of ' + run.ids.length + ' answered.' + (un ? ' <b class="bad">' + un + ' unanswered</b> will count as wrong.' : "") + (fl ? ' <b>' + fl + ' flagged</b> for review.' : "") + '</p>' +
      '<div class="ex-row"><button class="ex-btn" data-a="finish">Submit exam</button>' +
      (fl ? '<button class="ex-btn ghost" data-a="goto" data-v="' + run.ids.indexOf(Object.keys(run.flags)[0]) + '">Review flagged</button>' : "") +
      (un ? '<button class="ex-btn ghost" data-a="goto" data-v="' + run.ids.findIndex(id => !(run.sel[id] || []).length) + '">Go to first unanswered</button>' : "") +
      '<button class="ex-btn ghost" data-a="back">Back to questions</button></div></div>';
  }

  function results() {
    const r = result, ids = r.graded, pass = r.pct >= PASS;
    const groupBars = (keyOf, items) => items.map(it => {
      const qs = ids.filter(id => keyOf(BY_ID[id]) === it.key); if (!qs.length) return "";
      const ok = qs.filter(id => isRight(BY_ID[id], r.sel[id])).length, p = pct(ok, qs.length);
      return '<div class="ex-bar"><span class="n">' + it.label + '</span><div class="ex-track"><i style="width:' + p + '%;background:' + it.color + '"></i></div><span class="v ' + (p >= PASS ? "ok" : "bad") + '">' + ok + '/' + qs.length + ' · ' + p + '%</span>' + (it.study || "") + '</div>';
    }).join("");
    const domBars = groupBars(q => q.section, SECTIONS.map(s => ({ key: s.id, label: '<b>' + s.code + '</b> ' + esc(s.title), color: COLORS[s.id] })));
    const weak = SUBS.map(t => { const qs = ids.filter(id => BY_ID[id].subtopic === t.code); const ok = qs.filter(id => isRight(BY_ID[id], r.sel[id])).length; return { t, n: qs.length, ok, p: pct(ok, qs.length) }; })
      .filter(x => x.n && x.p < PASS).sort((a, b) => a.p - b.p);
    const weakHtml = weak.length ? '<h2 class="ex-h">Study next</h2><p class="ex-note">Subtopics below ' + PASS + '% in this run, weakest first.</p><div class="ex-weak">' + weak.map(x =>
      '<div class="ex-sub"><div class="ex-sub-t"><span class="ex-code">' + x.t.code + '</span> ' + esc(x.t.title) + ' <b class="bad">' + x.ok + '/' + x.n + '</b><div class="ex-study">' + (STUDY[x.t.code] || []).map(([slug, l]) => '<a href="' + studyHref(slug) + '">📘 ' + esc(l) + '</a>').join(" · ") + '</div></div>' +
      '<button class="ex-btn sm ghost" data-a="practice" data-k="sub" data-v="' + x.t.code + '">Practice</button></div>').join("") + '</div>' : "";
    const f = r.filter;
    const missed = ids.filter(id => !isRight(BY_ID[id], r.sel[id]));
    const list = ids.filter(id => f === "all" || (f === "missed" ? missed.includes(id) : f === "flagged" ? r.flags[id] : !missed.includes(id))).map(id => {
      const q = BY_ID[id], sel = r.sel[id] || [], ok = isRight(q, sel), ord = r.opt[id], L = i => LETTERS[ord.indexOf(i)];
      return '<details class="ex-rev"><summary><span class="dot ' + (ok ? "ok" : "bad") + '"></span><span class="p">' + esc(q.prompt) + '</span><span class="ex-code">' + q.subtopic + (r.flags[id] ? " ⚑" : "") + '</span></summary><div class="ex-rev-b">' +
        '<p><span class="lbl">Your answer</span> <span class="' + (ok ? "ok" : "bad") + '">' + (sel.length ? sel.map(i => L(i) + ". " + esc(q.options[i])).join("; ") : "No answer") + '</span></p>' +
        (ok ? "" : '<p><span class="lbl">Correct</span> <span class="ok">' + correctSet(q).map(i => L(i) + ". " + esc(q.options[i])).join("; ") + '</span></p>') +
        explainHtml(q, ok) + '</div></details>';
    }).join("") || '<p class="ex-note">Nothing in this filter.</p>';
    const fl = Object.keys(r.flags).length;
    return '<div class="ex-score"><div class="big">' + r.pct + '<small>%</small></div><div><span class="ex-pill ' + (pass ? "ok" : "bad") + '">' + (pass ? "At or above " : "Below ") + PASS + '% target</span>' +
      '<p>' + r.ok + ' / ' + ids.length + ' correct · ' + esc(r.title) + (r.mode === "exam" ? ' · time ' + fmtTime(r.ms) : "") + '</p></div></div>' +
      '<div class="ex-bars">' + domBars + '</div>' + weakHtml +
      '<div class="ex-revhead"><h2 class="ex-h">Review every answer</h2><div class="ex-filters">' +
      [["all", "All " + ids.length], ["missed", "Missed " + missed.length], ["right", "Correct " + (ids.length - missed.length)]].concat(fl ? [["flagged", "Flagged " + fl]] : []).map(([k, l]) => '<button class="ex-btn sm ' + (f === k ? "" : "ghost") + '" data-a="filter" data-v="' + k + '">' + l + '</button>').join("") + '</div></div>' + list +
      '<div class="ex-row">' + (missed.length ? '<button class="ex-btn" data-a="retry">Retry the ' + missed.length + ' missed</button>' : "") + '<button class="ex-btn ghost" data-a="home">Back to Mock Exam home</button></div>';
  }

  /* ---------- events ---------- */
  root.addEventListener("click", e => {
    const b = e.target.closest("[data-a]"); if (!b || b.disabled) return;
    const a = b.dataset.a, v = b.dataset.v;
    if (a === "exam") startExam(v);
    else if (a === "practice") startPractice(b.dataset.k, b.dataset.k === "section" ? +v : v, "unseen");
    else if (a === "pick") pick(+v);
    else if (a === "lock") lock();
    else if (a === "skip") { if (run.i < run.ids.length - 1) go(run.i + 1); else finish(); }
    else if (a === "next") next();
    else if (a === "prev") go(run.i - 1);
    else if (a === "goto") { view = "run"; go(+v); }
    else if (a === "flag") { const id = cur().id; if (run.flags[id]) delete run.flags[id]; else run.flags[id] = 1; saveRun(); render(); }
    else if (a === "submit") { view = "submit"; render(); }
    else if (a === "back") { view = "run"; render(); }
    else if (a === "finish" || a === "end") finish();
    else if (a === "quit") { view = "home"; render(); scrollTo(0, 0); }
    else if (a === "resume") { view = "run"; if (run.limit && run.t0 + run.limit <= Date.now()) finish(); else render(); }
    else if (a === "abandon") { run = null; store(RKEY, null); view = "home"; render(); }
    else if (a === "filter") { result.filter = v; render(); }
    else if (a === "retry") { const ids = result.graded.filter(id => !isRight(BY_ID[id], result.sel[id])); start("practice", result.title.replace(/ · retry.*$/, "") + " · retry missed", ids.map(id => BY_ID[id])); }
    else if (a === "home") { view = run ? "resume" : "home"; render(); scrollTo(0, 0); }
    else if (a === "wipe") { if (b.dataset.sure) { hist = { q: {}, runs: [] }; store(HKEY, hist); render(); } else { b.dataset.sure = 1; b.textContent = "Click again to erase all answers and runs"; } }
  });
  addEventListener("keydown", e => {
    if (view !== "run" || e.metaKey || e.ctrlKey || e.altKey || /input|textarea|select/i.test(e.target.tagName)) return;
    const k = e.key.toLowerCase(), q = cur(), pos = "abcde".indexOf(k) >= 0 ? "abcde".indexOf(k) : "12345".indexOf(k);
    if (pos >= 0 && pos < q.options.length) { e.preventDefault(); pick(run.opt[q.id][pos]); }
    else if (k === "enter") { e.preventDefault(); if (run.mode === "practice" && !run.locked[q.id]) lock(); else next(); }
    else if (run.mode === "exam" && k === "arrowright") go(run.i + 1);
    else if (run.mode === "exam" && k === "arrowleft") go(run.i - 1);
    else if (run.mode === "exam" && k === "f") root.querySelector('[data-a="flag"]')?.click();
  });

  // deep links: exam.html#exam-standard, #section-3, #sub-3.2, #mistakes (only when nothing is in progress)
  const h = decodeURIComponent(location.hash.slice(1));
  if (!run) {
    let m;
    if ((m = /^exam-(\w+)$/.exec(h)) && EXAMS.some(x => x.id === m[1])) startExam(m[1]);
    else if ((m = /^section-(\d)$/.exec(h)) && sec(+m[1])) startPractice("section", +m[1], "unseen");
    else if ((m = /^sub-(\d\.\d)$/.exec(h)) && sub(m[1])) startPractice("sub", m[1], "unseen");
    else if ((m = /^sub-(\d)\.\d$/.exec(h)) && sec(+m[1])) startPractice("section", +m[1], "unseen");
    else if (h === "mistakes" && stats().wrong) startPractice("mistakes", null, "unseen");
    else render();
  } else render();
})();
