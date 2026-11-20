/* Unified registry of all Learning Roadmaps */
(function () {
  const ROOT = new URL("../", document.currentScript.src).href;
  window.RM_ROOT = ROOT;
  const D = (decks, id) => ["deck:" + id, "", decks[id][0], "d"];

  const AGENTIC_DECKS = {
    "agents-cli-slides": ["From Prompt to Production · Agents CLI", "Build, evaluate and deploy AI agents with Agents CLI."],
    "harness2-slides": ["Harness²: Agents that Improve", "Recursive agent harnessing without retraining, from Google Research."],
    "embeddinggemma2-rag-slides": ["Multimodal RAG with EmbeddingGemma 2", "Search text, images, audio and video in one vector space."],
    "agent-evaluation-slides": ["Agent Evaluation", "Simulate users, grade every trace, fix what fails."],
    "hermes-cloudrun-slides": ["Hermes Agent on Cloud Run", "A persistent, always-on AI agent on Cloud Run Instances."],
    "secure-adk-agents-slides": ["Build Secure AI Agents with ADK", "Zero-trust agents that judge intent, not just syntax."],
    "adk-hitl-slides": ["Human-in-the-loop with ADK", "Pause the agent, ask a human, resume safely."],
    "gemini-decisions-slides": ["Gemini Decisions API", "Talk deck on the Gemini Decisions API."],
    "mediapipe-slides": ["MediaPipe On-device ML", "On-device ML with MediaPipe, from DevFest Bangkok 2026."]
  };

  const AGENTIC_STAGES = [
    { k: "sec1", n: "Domain 1", t: "Agent Solutions", w: "14%", c: "#4285f4",
      l: [["sec1-architecture", "1.1", "Automation vs. Single vs. Multi-Agent"], ["sec1-platform-selection", "1.2", "Agent Designer vs. Code-First ADK"], ["sec1-ces-omnichannel", "1.3", "CES: Flows, Playbooks & Omnichannel"]],
      r: [["sec1-takeaway", "1.4", "Master Takeaway", "r"], ["sec1-qa", "1.5", "Q&A", "r"], ["mcq-sec1", "", "Practice Questions", "q"]] },
    { k: "sec2", n: "Domain 2", t: "AI-Assisted Dev", w: "17%", c: "#34a853",
      l: [["sec2-context-skills", "2.1", "Context, Custom Skills & Secrets"], ["sec2-mcp-subagents", "2.2", "MCP Tooling & Subagents"], ["sec2-cicd-sandboxing", "2.3", "CI/CD Automation & Sandboxing"]],
      r: [D(AGENTIC_DECKS, "agents-cli-slides"), D(AGENTIC_DECKS, "harness2-slides"), ["sec2-takeaway", "2.4", "Master Takeaway", "r"], ["sec2-qa", "2.5", "Q&A", "r"], ["mcq-sec2", "", "Practice Questions", "q"]] },
    { k: "sec3", n: "Domain 3", t: "Custom Agents", w: "33%", c: "#fbbc04",
      l: [["sec3-single-agent", "3.1", "Single-Agent Design & ADK Params"], ["sec3-workflows", "3.2", "Multi-Agent Workflow Patterns"], ["sec3-mcp-tools", "3.3", "MCP Toolbox & Custom Tools"], ["sec3-rag-grounding", "3.4", "RAG Engine, Agent Search & Caching"], ["sec3-state-memory", "3.5", "State, Sessions & Memory Bank"], ["sec3-a2a-protocol", "3.6", "A2A Protocol & Agent Cards"]],
      r: [D(AGENTIC_DECKS, "embeddinggemma2-rag-slides"), ["sec3-takeaway", "3.7", "Master Takeaway", "r"], ["sec3-qa", "3.8", "Q&A", "r"], ["mcq-sec3", "", "Practice Questions", "q"]] },
    { k: "sec4", n: "Domain 4", t: "Eval & Deploy", w: "22%", c: "#ea4335",
      l: [["sec4-evaluation", "4.1", "Trajectory Eval & Rubric Syntax"], ["sec4-runtimes", "4.2", "Agent Runtime, Cloud Run & GKE"], ["sec4-cicd", "4.3", "Agent Starter Pack & CI/CD Gates"], ["sec4-observability", "4.4", "Tracing, Monitoring & Optimization"]],
      r: [D(AGENTIC_DECKS, "agent-evaluation-slides"), D(AGENTIC_DECKS, "hermes-cloudrun-slides"), ["sec4-takeaway", "4.5", "Master Takeaway", "r"], ["sec4-qa", "4.6", "Q&A", "r"], ["mcq-sec4", "", "Practice Questions", "q"]] },
    { k: "sec5", n: "Domain 5", t: "Security & Governance", w: "15%", c: "#a142f4",
      l: [["sec5-perimeter", "5.1", "Follow the Prompt: Perimeter"], ["sec5-identity", "5.2", "Agent Identity & OAuth 2.0"], ["sec5-callbacks", "5.3", "ADK Callbacks & HITL"], ["sec5-registry", "5.4", "Agent Registry & Governance"]],
      r: [D(AGENTIC_DECKS, "secure-adk-agents-slides"), D(AGENTIC_DECKS, "adk-hitl-slides"), ["sec5-takeaway", "5.5", "Master Takeaway", "r"], ["sec5-qa", "5.6", "Q&A", "r"], ["mcq-sec5", "", "Practice Questions", "q"]] },
    { k: "beyond", n: "Optional", t: "Beyond the Exam", c: "#9aa0a6", opt: true,
      l: [D(AGENTIC_DECKS, "gemini-decisions-slides")], r: [D(AGENTIC_DECKS, "mediapipe-slides")] }
  ];

  const AGENTIC_RELATED = {
    "sec2-mcp-subagents": ["agents-cli-slides"], "sec2-cicd-sandboxing": ["agents-cli-slides"], "sec2-context-skills": ["harness2-slides"],
    "sec3-rag-grounding": ["embeddinggemma2-rag-slides"], "sec3-single-agent": ["agents-cli-slides"],
    "sec4-evaluation": ["agent-evaluation-slides", "agents-cli-slides"], "sec4-runtimes": ["hermes-cloudrun-slides"], "sec4-cicd": ["agents-cli-slides"],
    "sec5-perimeter": ["secure-adk-agents-slides"], "sec5-callbacks": ["adk-hitl-slides", "secure-adk-agents-slides"], "sec5-identity": ["secure-adk-agents-slides"]
  };

  const LINE_RAW = window.ROADMAP_LINE || { stages: [], data: { domains: {}, modules: {} } };
  const DE_RAW = window.ROADMAP_DATA_ENGINEER || { stages: [], data: { domains: {}, modules: {} } };

  const ROADMAPS = [
    {
      id: "agentic-architect",
      title: "Agentic Architect Learning Roadmap",
      shortTitle: "Agentic Architect",
      brandTitle: "GCP Agentic Architecture Cert Prep",
      kicker: "Google Cloud · Professional Agentic Architect",
      category: "Google Cloud Cert",
      description: "Five exam domains, 35 study modules, talk decks and 118 practice questions — from choosing between automation and agents to deploying and securing them on Google Cloud.",
      intro: "Follow the spine from top to bottom. Each coloured box is one exam domain, and the boxes beside it are its study modules, talk decks and practice questions. <b>Click any box</b> to unfold its key concepts and study resources. Tick the circles as you go — your progress is saved in this browser.",
      accent: "#4285f4",
      logo: "googlecloud.svg",
      logos: ["googlecloud.svg", "adk.png", "gemini.svg", "gcp-vertex-ai.png"],
      storageKey: "doc-roadmap",
      weightLabel: "Exam weight",
      practiceLabel: "Practice",
      hasLocalDocs: true,
      startCap: { label: "▶ Start: Certification Blueprint", href: "overview.html" },
      finishCap: { label: "🎓 Exam day: take the Mock Exam", href: "exam.html" },
      tip: "Before the exam, take a timed mock exam, clear your mistake bank, and reread the five Master Takeaways.",
      extraLinks: [
        { label: "Study Guide", href: "hub.html" },
        { label: "Mock Exam", href: "exam.html" }
      ],
      decks: AGENTIC_DECKS,
      related: AGENTIC_RELATED,
      stages: AGENTIC_STAGES,
      data: window.ROADMAP_DATA || { domains: {}, modules: {} }
    },
    {
      id: "line-api-expert",
      title: "LINE API Expert Learning Roadmap",
      shortTitle: "LINE API Expert",
      brandTitle: "LINE API Expert Roadmap",
      kicker: "LINE Developers · Community & Technical Mastery",
      category: "LINE Developers",
      description: "End-to-end engineering path covering Messaging API, Flex Messages, LINE Login (OAuth 2.0/OIDC), LIFF, LINE MINI App, Beacon, production scale, and community leadership.",
      intro: "Follow the path from Messaging API fundamentals to production-scale architecture and community leadership. <b>Click any box</b> to explore its core technical concepts, pitfalls, and official LINE Developers documentation. Tick the circles as you master each topic.",
      accent: "#06C755",
      logo: "line.svg",
      logos: ["line.svg"],
      storageKey: "doc-roadmap-line-api-expert",
      weightLabel: "Focus",
      practiceLabel: "Hands-on / Prep",
      hasLocalDocs: false,
      startCap: { label: "▶ Start: LINE Developers Console", href: "https://developers.line.biz/console/", external: true },
      finishCap: { label: "🏆 Ready: LINE API Expert Community", href: "https://developers.line.biz/en/community/", external: true },
      tip: "LINE API Expert recognizes proven hands-on engineering and community impact: ship real production/OSS projects across Messaging API, LIFF, and LINE Login, and share what you learn.",
      examHref: "exam.html",
      extraLinks: [
        { label: "Practice Tests", href: "exam.html" },
        { label: "LINE Docs ↗", href: "https://developers.line.biz/en/docs/", external: true },
        { label: "Flex Simulator ↗", href: "https://developers.line.biz/flex-simulator/", external: true }
      ],
      decks: LINE_RAW.decks || {},
      related: LINE_RAW.related || {},
      stages: LINE_RAW.stages || [],
      data: LINE_RAW.data || { domains: {}, modules: {} }
    },
    {
      id: "data-engineer",
      title: "Data Engineer Certification Roadmap",
      shortTitle: "Data Engineer Cert",
      brandTitle: "GCP Data Engineer Cert Roadmap",
      kicker: "Google Cloud · Professional Data Engineer",
      category: "Google Cloud Cert",
      description: "Five official exam domains covering data system design, Pub/Sub, Dataflow, Dataproc, BigQuery, BigLake, Bigtable, Spanner, Dataplex, BQML, Cloud Composer, and FinOps.",
      intro: "Follow the five official Google Cloud Professional Data Engineer exam domains from top to bottom. <b>Click any box</b> to inspect high-yield concepts, exam traps, and official Google Cloud documentation. Tick the circles to track your exam prep progress.",
      accent: "#fbbc04",
      logo: "gcp-bigquery.png",
      logos: ["gcp-bigquery.png", "gcp-dataflow.png", "gcp-pubsub.png", "gcp-composer.png"],
      storageKey: "doc-roadmap-data-engineer",
      weightLabel: "Exam weight",
      practiceLabel: "Practice / Drills",
      hasLocalDocs: false,
      startCap: { label: "▶ Start: Official PDE Exam Guide ↗", href: "https://cloud.google.com/learn/certification/guides/data-engineer", external: true },
      finishCap: { label: "🎓 Exam day: Official PDE Certification ↗", href: "https://cloud.google.com/learn/certification/data-engineer", external: true },
      tip: "On the PDE exam, spot the decisive constraint in every scenario (latency, global consistency, minimum ops, cost, or PII compliance) and eliminate non-matching services first.",
      extraLinks: [
        { label: "Exam Guide ↗", href: "https://cloud.google.com/learn/certification/guides/data-engineer", external: true },
        { label: "Skills Boost ↗", href: "https://www.cloudskillsboost.google/paths/16", external: true }
      ],
      decks: DE_RAW.decks || {},
      related: DE_RAW.related || {},
      stages: DE_RAW.stages || [],
      data: DE_RAW.data || { domains: {}, modules: {} }
    }
  ];

  /* every roadmap lives in roadmap/<id>/; local links in the registry are relative to that folder */
  const abs = (rm, l) => (l && !l.external && !/^[a-z]+:/i.test(l.href)) ? Object.assign({}, l, { href: ROOT + rm.id + "/" + l.href }) : l;
  ROADMAPS.forEach(rm => {
    rm.url = ROOT + rm.id + "/index.html";
    rm.startCap = abs(rm, rm.startCap);
    rm.finishCap = abs(rm, rm.finishCap);
    rm.extraLinks = (rm.extraLinks || []).map(l => abs(rm, l));
  });

  const ROADMAPS_BY_ID = {};
  ROADMAPS.forEach(r => { ROADMAPS_BY_ID[r.id] = r; });

  function getRoadmapStats(rm) {
    let doneMap = {};
    try { doneMap = JSON.parse(localStorage.getItem(rm.storageKey) || "{}") || {}; } catch (e) {}
    const ids = [];
    let conceptTotal = 0;
    let conceptDone = 0;
    (rm.stages || []).forEach(s => {
      ids.push(s.k);
      [...(s.l || []), ...(s.r || [])].forEach(item => {
        const id = item[0];
        ids.push(id);
        const cs = ((rm.data && rm.data.modules && rm.data.modules[id]) || {}).concepts || [];
        conceptTotal += cs.length;
        cs.forEach((_, i) => { if (doneMap[id + "~" + i]) conceptDone++; });
      });
    });
    const doneCount = ids.filter(id => !!doneMap[id]).length;
    const total = ids.length;
    const pct = total ? Math.round((doneCount / total) * 100) : 0;
    const domains = (rm.stages || []).filter(s => !s.opt).length;
    return { total, done: doneCount, pct, domains, conceptTotal, conceptDone };
  }

  window.ROADMAPS = ROADMAPS;
  window.ROADMAPS_BY_ID = ROADMAPS_BY_ID;
  window.getRoadmapStats = getRoadmapStats;
})();
