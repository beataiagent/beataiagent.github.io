/* GCP Agentic Architecture Cert Prep — shared sidebar, theme toggle, on-this-page and product logos */
(function () {
  const LOGO = new URL("../../images/shared/logos/", document.currentScript.src).href;
  const ROOT = new URL("../", document.currentScript.src).href; /* roadmap/ */

  const NAV = [
    {
      title: "Learning Roadmaps", icon: "googlecloud.svg", items: [
        ["index", "All Roadmaps (Index)"],
        ["rm:agentic-architect", "GCP Agentic Architect"],
        ["rm:line-api-expert", "LINE API Expert"],
        ["rm:data-engineer", "GCP Data Engineer Cert"]]
    },
    {
      title: "Agentic Architect Prep", icon: "adk.png", items: [
        ["hub", "Study Guide Hub"],
        ["overview", "Certification Blueprint"],
        ["exam", "Mock Exam · 118 questions"]]
    },
    {
      title: "Sec 1: Agent Solutions", icon: "workflows.svg", items: [
        ["sec1-exam-guide", "1.0 Domain 1 Roadmap"], ["sec1-architecture", "1.1 Automation vs. Single vs. Multi-Agent"],
        ["sec1-platform-selection", "1.2 Agent Designer vs. Code-First ADK"], ["sec1-ces-omnichannel", "1.3 CES: Flows, Playbooks & Omnichannel"],
        ["sec1-takeaway", "1.4 Section 1 Master Takeaway"], ["sec1-qa", "1.5 Section 1 Q&A"], ["mcq-sec1", "Section 1 Practice Questions"]]
    },
    {
      title: "Sec 2: AI-Assisted Dev", icon: "gemini-cli.png", items: [
        ["sec2-exam-guide", "2.0 Domain 2 Roadmap"], ["sec2-context-skills", "2.1 Context, Custom Skills & Secrets"],
        ["sec2-mcp-subagents", "2.2 MCP Tooling & Subagent Refactoring"], ["sec2-cicd-sandboxing", "2.3 CI/CD Automation & Sandboxing"],
        ["sec2-takeaway", "2.4 Section 2 Master Takeaway"], ["sec2-qa", "2.5 Section 2 Q&A"], ["mcq-sec2", "Section 2 Practice Questions"]]
    },
    {
      title: "Sec 3: Custom Agents", icon: "adk.png", items: [
        ["sec3-exam-guide", "3.0 Domain 3 Roadmap"], ["sec3-single-agent", "3.1 Single-Agent Design & ADK Params"],
        ["sec3-workflows", "3.2 Multi-Agent Workflow Patterns"], ["sec3-mcp-tools", "3.3 MCP Toolbox & Custom Tools"],
        ["sec3-rag-grounding", "3.4 RAG Engine, Agent Search & Caching"], ["sec3-state-memory", "3.5 State, Sessions & Memory Bank"],
        ["sec3-a2a-protocol", "3.6 A2A Protocol & Agent Cards"], ["sec3-takeaway", "3.7 Section 3 Master Takeaway"],
        ["sec3-qa", "3.8 Section 3 Q&A"], ["mcq-sec3", "Section 3 Practice Questions"]]
    },
    {
      title: "Sec 4: Eval & Deploy", icon: "gcp-run.png", items: [
        ["sec4-exam-guide", "4.0 Domain 4 Roadmap"], ["sec4-evaluation", "4.1 Trajectory Eval & Rubric Syntax"],
        ["sec4-runtimes", "4.2 Runtimes: Agent Runtime, Cloud Run & GKE"], ["sec4-cicd", "4.3 Agent Starter Pack & CI/CD Gates"],
        ["sec4-observability", "4.4 Tracing, Monitoring & Optimization"], ["sec4-takeaway", "4.5 Section 4 Master Takeaway"],
        ["sec4-qa", "4.6 Section 4 Q&A"], ["mcq-sec4", "Section 4 Practice Questions"]]
    },
    {
      title: "Sec 5: Security & Governance", icon: "gcp-iam.png", items: [
        ["sec5-exam-guide", "5.0 Domain 5 Roadmap"], ["sec5-perimeter", "5.1 Follow the Prompt: Perimeter"],
        ["sec5-identity", "5.2 Agent Identity & OAuth 2.0"], ["sec5-callbacks", "5.3 ADK Callbacks & HITL"],
        ["sec5-registry", "5.4 Agent Registry & Governance"], ["sec5-takeaway", "5.5 Section 5 Master Takeaway"],
        ["sec5-qa", "5.6 Section 5 Q&A"], ["mcq-sec5", "Section 5 Practice Questions"]]
    }
  ];

  /* Services: name pattern → logo + official documentation.
     More specific names come first (e.g. "MCP Toolbox" before "MCP"). Logo null → letter badge. */
  const GCP = "https://cloud.google.com/", AP = "https://docs.cloud.google.com/gemini-enterprise-agent-platform/";
  const P = (re, logo, name, url, mono) => ({ re, logo, name, url, mono: !!mono });
  const PRODUCTS = [
    P(/\bGemini CLI\b/, "gemini-cli.png", "Gemini CLI", "https://google-gemini.github.io/gemini-cli/"),
    P(/\bGemini Enterprise Agent Platform\b|\bAgent Platform\b/, "gcp-vertex-ai.png", "Gemini Enterprise Agent Platform", AP),
    P(/\bWorkflow Builder\b/, "gemini.svg", "Workflow Builder", "https://docs.cloud.google.com/gemini/enterprise/docs/"),
    P(/\bAgent Designer\b/, "gemini.svg", "Agent Designer", "https://docs.cloud.google.com/gemini/enterprise/docs/"),
    P(/\bGemini Enterprise\b/, "gemini.svg", "Gemini Enterprise", "https://docs.cloud.google.com/gemini/enterprise/docs/"),
    P(/\bAgent Starter Pack\b/, "googlecloud.svg", "Agent Starter Pack", "https://github.com/GoogleCloudPlatform/agent-starter-pack"),
    P(/\bagents-cli\b|\bAgents CLI\b/, "agents-cli.png", "Agents CLI", "https://google.github.io/agents-cli/"),
    P(/\bADK\b|Agent Development Kit|\bLlmAgent\b/, "adk.png", "ADK", "https://adk.dev/"),
    P(/\bMCP Toolbox\b/, "mcp.svg", "MCP Toolbox", "https://mcp-toolbox.dev/", true),
    P(/\bMCP\b|Model Context Protocol/, "mcp.svg", "MCP", "https://modelcontextprotocol.io/", true),
    P(/\bA2A\b|Agent2Agent/, "a2a.svg", "A2A", "https://a2a-protocol.org/latest/", true),
    P(/\bAgent Runtime\b|\bAgent Engine\b/, "gcp-vertex-ai.png", "Agent Runtime", AP + "build/runtime"),
    P(/\bMemory Bank\b/, "gcp-vertex-ai.png", "Memory Bank", AP + "scale/memory-bank"),
    P(/\bRAG Engine\b/, "gcp-vertex-ai.png", "RAG Engine", AP + "build/rag-engine/rag-overview"),
    P(/\bAgent Registry\b/, "gcp-vertex-ai.png", "Agent Registry", AP + "govern/agent-registry"),
    P(/\bAgent Gateway\b/, "gcp-vertex-ai.png", "Agent Gateway", AP + "agents/governance/agent-gateway-cross-cloud/overview"),
    P(/\bAgent Identit(y|ies)\b/, "gcp-iam.png", "Agent Identity", AP + "govern/agent-identity-overview"),
    P(/\bAgent Search\b|\bVertex AI Search\b/, "gcp-vertex-ai.png", "Agent Search", "https://docs.cloud.google.com/generative-ai-app-builder/docs"),
    P(/\bContext Caching\b|\bCachedContent\b/, "gemini.svg", "Context Caching", AP + "models/context-cache/context-cache-overview"),
    P(/\bEvaluation Service\b|\bEvalTask\b/, "gcp-vertex-ai.png", "Gen AI Evaluation Service", AP + "models/evaluation-overview"),
    P(/\bProvisioned Throughput\b/, "gcp-vertex-ai.png", "Provisioned Throughput", GCP + "vertex-ai/generative-ai/docs/provisioned-throughput/overview"),
    P(/\bVertex AI\b/, "gcp-vertex-ai.png", "Vertex AI", GCP + "vertex-ai/docs"),
    P(/\bCX Agent Studio\b|\bCES\b|Customer Engagement Suite|\bDialogflow\b|\bPlaybooks?\b/, "gcp-dialog-flow-enterprise-edition.png", "CES / CX Agent Studio", "https://docs.cloud.google.com/gemini-enterprise-cx/cx-agent-studio"),
    P(/\bCloud Run\b/, "gcp-run.png", "Cloud Run", GCP + "run/docs"),
    P(/\bGKE Sandbox\b|\bgVisor\b/, "gcp-kubernetes-engine.png", "GKE Sandbox", GCP + "kubernetes-engine/docs/how-to/sandbox-pods"),
    P(/\bGKE\b|Google Kubernetes Engine/, "gcp-kubernetes-engine.png", "GKE", GCP + "kubernetes-engine/docs"),
    P(/\bKubernetes\b/, "kubernetes.svg", "Kubernetes", "https://kubernetes.io/docs/home/"),
    P(/\bModel Armor\b/, "gcp-armor.png", "Model Armor", "https://docs.cloud.google.com/model-armor/overview"),
    P(/\bSensitive Data Protection\b|\bSDP\b|\bCloud DLP\b/, null, "Sensitive Data Protection", GCP + "sensitive-data-protection/docs"),
    P(/\bIAP\b|Identity-Aware Proxy/, "gcp-iap.png", "IAP", GCP + "iap/docs"),
    P(/\bVPC[- ]SC\b|VPC Service Controls/, "gcp-virtual-private-cloud.png", "VPC Service Controls", GCP + "vpc-service-controls/docs/overview"),
    P(/\bPrivate Service Connect\b|\bPSC\b/, "gcp-private-service-connect.png", "Private Service Connect", GCP + "vpc/docs/private-service-connect"),
    P(/\bPAB\b|Principal Access Boundary/, "gcp-iam.png", "Principal Access Boundary", "https://docs.cloud.google.com/iam/docs/principal-access-boundary-policies"),
    P(/\bDeny Polic(y|ies)\b|\bIAM Deny\b/, "gcp-iam.png", "IAM Deny Policies", GCP + "iam/docs/deny-overview"),
    P(/\bWorkload Identity Federation\b|\bWIF\b/, "gcp-workload-identity-pool.png", "Workload Identity Federation", GCP + "iam/docs/workload-identity-federation"),
    P(/\bIAM\b/, "gcp-iam.png", "IAM", GCP + "iam/docs/overview"),
    P(/\bSecret Manager\b/, "gcp-secret-manager.png", "Secret Manager", GCP + "secret-manager/docs"),
    P(/\bCloud KMS\b|\bKMS\b|\bCMEK\b/, "gcp-key-management-service.png", "Cloud KMS", GCP + "kms/docs"),
    P(/\bApplication Design Center\b|\bADC\b/, null, "Application Design Center", GCP + "application-design-center/docs/overview"),
    P(/\bApp Hub\b/, null, "App Hub", GCP + "app-hub/docs/overview"),
    P(/\bSAIF\b|Secure AI Framework/, null, "Secure AI Framework (SAIF)", GCP + "security/ai"),
    P(/\bArchitecture Framework\b/, null, "Architecture Framework", GCP + "architecture/framework"),
    P(/\bBigQuery\b/, "gcp-bigquery.png", "BigQuery", GCP + "bigquery/docs"),
    P(/\bCloud Workflows\b/, "workflows.svg", "Cloud Workflows", GCP + "workflows/docs/overview"),
    P(/\bDataflow\b/, "gcp-dataflow.png", "Dataflow", GCP + "dataflow/docs"),
    P(/\bEventarc\b/, null, "Eventarc", GCP + "eventarc/docs"),
    P(/\bPub\/Sub\b/, "gcp-pubsub.png", "Pub/Sub", GCP + "pubsub/docs"),
    P(/\bCloud Build\b/, "gcp-build.png", "Cloud Build", GCP + "build/docs/overview"),
    P(/\bCloud Deploy\b/, null, "Cloud Deploy", GCP + "deploy/docs"),
    P(/\bArtifact Registry\b/, "gcp-container-registry.png", "Artifact Registry", GCP + "artifact-registry/docs"),
    P(/\bCloud Trace\b/, null, "Cloud Trace", GCP + "trace/docs"),
    P(/\bCloud Logging\b/, "gcp-logging.png", "Cloud Logging", GCP + "logging/docs"),
    P(/\bCloud Monitoring\b/, "gcp-monitoring.png", "Cloud Monitoring", GCP + "monitoring/docs"),
    P(/\bCloud Storage\b|\bGCS\b/, "gcp-storage.png", "Cloud Storage", GCP + "storage/docs"),
    P(/\bAlloyDB\b/, "gcp-sql.png", "AlloyDB", GCP + "alloydb/docs"),
    P(/\bCloud SQL\b/, "gcp-sql.png", "Cloud SQL", GCP + "sql/docs"),
    P(/\bSpanner\b/, "gcp-spanner.png", "Spanner", GCP + "spanner/docs"),
    P(/\bFirestore\b/, "gcp-firestore.png", "Firestore", GCP + "firestore/docs"),
    P(/\bMemorystore\b/, "gcp-memorystore.png", "Memorystore", GCP + "memorystore/docs"),
    P(/\bApigee\b/, "gcp-apigee.png", "Apigee", GCP + "apigee/docs"),
    P(/\bCloud Scheduler\b/, "gcp-scheduler.png", "Cloud Scheduler", GCP + "scheduler/docs"),
    P(/\bCloud Functions\b|\bCloud Run functions\b/, "gcp-functions.png", "Cloud Run functions", GCP + "functions/docs"),
    P(/\bLooker\b/, "gcp-looker.png", "Looker", GCP + "looker/docs"),
    P(/\bGemini (\d[\d.]* )?(Flash|Pro)\b|\bGemini models?\b/, "gemini.svg", "Gemini models", AP + "models"),
    P(/\bGemini\b/, "gemini.svg", "Gemini", AP + "models"),
    P(/\bOpenTelemetry\b|\bOTel\b/, "opentelemetry.svg", "OpenTelemetry", "https://opentelemetry.io/docs/"),
    P(/\bAntigravity\b|\bagy\b/, "antigravity.png", "Antigravity", "https://antigravity.google/docs"),
    P(/\bClaude\b/, "claude.png", "Claude on Google Cloud", GCP + "vertex-ai/generative-ai/docs/partner-models/claude"),
    P(/\bTerraform\b/, "terraform.svg", "Terraform", "https://developer.hashicorp.com/terraform/docs"),
    P(/\bGitHub\b/, "github.svg", "GitHub", "https://docs.github.com/", true),
    P(/\bGitLab\b/, "gitlab.svg", "GitLab", "https://docs.gitlab.com/"),
    P(/\bDocker\b/, "docker.svg", "Docker", "https://docs.docker.com/"),
    P(/\bPython\b/, "python.svg", "Python", "https://docs.python.org/3/"),
    P(/\bJira\b/, "jira.svg", "Jira", "https://support.atlassian.com/jira-software-cloud/"),
    P(/\bConfluence\b/, "confluence.svg", "Confluence", "https://support.atlassian.com/confluence-cloud/"),
    P(/\bSalesforce\b/, "salesforce.svg", "Salesforce", "https://help.salesforce.com/"),
    P(/\bSlack\b/, "slack.svg", "Slack", "https://api.slack.com/"),
    P(/\bGmail\b/, "gmail.svg", "Gmail", "https://developers.google.com/workspace/gmail"),
    P(/\bGoogle Drive\b/, "googledrive.svg", "Google Drive", "https://developers.google.com/workspace/drive"),
    P(/\bGoogle Sheets\b/, "googlesheets.svg", "Google Sheets", "https://developers.google.com/workspace/sheets"),
    P(/\bGoogle Docs\b/, "googledocs.svg", "Google Docs", "https://developers.google.com/workspace/docs"),
    P(/\bPostgre(SQL|s)\b/, "postgresql.svg", "PostgreSQL", "https://www.postgresql.org/docs/"),
    P(/\bServiceNow\b/, "now", "ServiceNow", "https://www.servicenow.com/docs/")
  ];

  const ext = ' target="_blank" rel="noopener noreferrer"';
  const icon = p => {
    if (p.logo === "now") return '<span class="now-badge">now</span>';
    if (!p.logo) return '<span class="glyph" style="background:#1a73e8">' + p.name[0] + "</span>";
    return '<img class="lg' + (p.mono ? " mono" : "") + '" src="' + LOGO + p.logo + '" alt="">';
  };
  const linkedIcon = p => '<a class="svc-ico" href="' + p.url + '"' + ext + ' title="' + p.name + ' — official docs">' + icon(p) + "</a>";
  const chip = p => '<a class="chip svc-chip" href="' + p.url + '"' + ext + ' title="Open ' + p.name + ' official docs">' + icon(p) + p.name + '<span class="ext">↗</span></a>';
  const logoKey = p => p.logo || p.name;
  const matches = (text, max) => {
    const out = [], seen = new Set();
    for (const p of PRODUCTS) {
      if (out.length >= max) break;
      if (!seen.has(logoKey(p)) && p.re.test(text)) { seen.add(logoKey(p)); out.push(p); }
    }
    return out;
  };

  /* theme */
  try { const t = localStorage.getItem("doc-theme"); if (t) document.documentElement.dataset.theme = t; } catch (e) { }
  document.getElementById("theme-btn")?.addEventListener("click", () => {
    const r = document.documentElement, next = r.dataset.theme === "light" ? "dark" : "light";
    r.dataset.theme = next;
    try { localStorage.setItem("doc-theme", next); } catch (e) { }
  });

  /* sidebar — each domain's modules live as sections of one page: secN.html#<old-slug> */
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const cleanText = el => {
    const clone = el.cloneNode(true);
    clone.querySelectorAll(".auto-logos").forEach(n => n.remove());
    return clone.textContent.trim();
  };
  const slug = document.body.dataset.slug;
  const ownRm = document.body.dataset.roadmap || "";
  const activeRmId = ownRm || (slug === "roadmap" ? "agentic-architect" : "");
  const activeKey = activeRmId ? "rm:" + activeRmId : slug;
  const pageOf = k => {
    const base = k.split("?")[0];
    const m = /^(?:mcq-)?sec(\d)/.exec(base);
    return m ? "sec" + m[1] : base;
  };
  const hrefOf = k => {
    if (k === "index") return ROOT + "index.html";
    if (k.startsWith("rm:")) return ROOT + k.slice(3) + "/index.html";
    const A = ROOT + "agentic-architect/";
    return pageOf(k) === k ? A + k + ".html" : A + pageOf(k) + ".html#" + k;
  };
  const navLabels = {};
  NAV.forEach(g => g.items.forEach(([k, label]) => { navLabels[k] = label; }));

  const side = document.getElementById("sidebar");
  const sideLinks = {};
  if (side) {
    side.innerHTML = NAV.map(g => {
      const open = (!ownRm && g.items.some(i => pageOf(i[0]) === slug)) || g.title === "Learning Roadmaps";
      return '<details' + (open ? " open" : "") + '><summary><img src="' + LOGO + g.icon + '" alt="">' + g.title + '</summary>' +
        g.items.map(i => '<a href="' + hrefOf(i[0]) + '" data-key="' + i[0] + '"' + (i[0] === activeKey ? ' class="cur" aria-current="page"' : "") + '>' + esc(i[1]) + '</a>').join("") +
        '</details>';
    }).join("");
    side.querySelectorAll("a[data-key]").forEach(a => {
      if (pageOf(a.dataset.key) === slug) sideLinks[a.dataset.key] = a;
    });
    const cur = side.querySelector(".cur");
    if (cur) side.scrollTop = cur.offsetTop - side.clientHeight / 2;
  }
  document.getElementById("menu-btn")?.addEventListener("click", () => document.body.classList.toggle("nav-open"));
  side?.addEventListener("click", e => { if (e.target.closest("a")) document.body.classList.remove("nav-open"); });

  /* on this page */
  const main = document.querySelector("main");
  const toc = document.getElementById("toc");
  const parts = main ? [...main.querySelectorAll("section.part")] : [];
  if (!parts.length) {
    const h2s = main ? [...main.querySelectorAll("h2[id]")] : [];
    if (toc && h2s.length) {
      toc.innerHTML = "<h4>On this page</h4>" + '<a href="#_top">Overview</a>' +
        h2s.map(h => '<a href="#' + h.id + '">' + esc(h.textContent.trim()) + "</a>").join("");
    } else if (toc) toc.remove();
  }

  if (!main || slug === "index" || slug === "hub" || slug === "roadmap" || slug === "exam") return;
  const hand = document.body.classList.contains("hand");

  /* 1. logos next to headings, card names and table headers (hand-built pages place their own) */
  if (!hand) {
    const decorate = (el, max) => {
      if (el.querySelector(".auto-logos")) return;
      const m = matches(el.textContent, max);
      if (!m.length) return;
      const span = document.createElement("span");
      span.className = "auto-logos";
      span.innerHTML = m.map(linkedIcon).join("");
      el.prepend(span);
    };
    main.querySelectorAll("h2, h3, .def-name, .def-title, thead th").forEach(el => { if (!el.closest(".hand")) decorate(el, 3); });
  }

  /* 2. "Services in this module" strip under the title — each chip opens the official docs */
  const h1 = main.querySelector("h1");
  const productChipsFor = container => {
    const md = [...container.querySelectorAll(".sl-markdown-content")];
    const text = (md.length ? md.map(n => n.textContent).join(" ") : container.textContent) || "";
    const counts = PRODUCTS.map(p => [p, (text.match(new RegExp(p.re.source, "g")) || []).length]);
    let list = counts.filter(x => x[1] >= 2).sort((a, b) => b[1] - a[1]).map(x => x[0]);
    if (!list.length) list = counts.filter(x => x[1] >= 1).sort((a, b) => b[1] - a[1]).map(x => x[0]);
    return list.slice(0, 14);
  };
  let productsBox = null;
  const renderProducts = container => {
    if (!h1) return;
    const list = productChipsFor(container);
    if (!productsBox) {
      productsBox = document.createElement("div");
      productsBox.className = "products";
      const anchor = main.querySelector(".part-tabs") || h1.closest(".content-panel") || h1;
      anchor.after(productsBox);
    }
    if (!list.length) { productsBox.hidden = true; return; }
    productsBox.hidden = false;
    productsBox.innerHTML = '<div class="products-label">Services in this module · click for official docs</div><div class="lg-row">' +
      list.map(chip).join("") + "</div>";
  };
  if (!parts.length) renderProducts(main);

  /* 3. link the first mention of each service in the body text to its official docs */
  const SKIP = "a, code, pre, button, h1, h2, h3, h4, script, style, svg, label, th, .products, .auto-logos, .chip, .def-path, .ar-node, .ar-flow, .starlight-aside__title, [role=button]";
  const linkFirstMentions = scope => {
    const linked = new Set();
    const roots = scope.querySelectorAll(".sl-markdown-content").length ? scope.querySelectorAll(".sl-markdown-content") : [scope];
    roots.forEach(root => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: n => (!n.nodeValue.trim() || n.parentElement.closest(SKIP)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
      });
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node => {
        let cur = node;
        while (cur) {
          let best = null;
          for (const p of PRODUCTS) {
            if (linked.has(p.name)) continue;
            const m = p.re.exec(cur.nodeValue);
            if (m && (!best || m.index < best.m.index || (m.index === best.m.index && m[0].length > best.m[0].length))) best = { p, m };
          }
          if (!best) break;
          linked.add(best.p.name);
          const start = cur.splitText(best.m.index);
          const rest = start.splitText(best.m[0].length);
          const a = document.createElement("a");
          a.className = "svc-link";
          a.href = best.p.url; a.target = "_blank"; a.rel = "noopener noreferrer";
          a.title = best.p.name + " — official docs";
          start.replaceWith(a);
          a.appendChild(start);
          cur = rest;
        }
      });
    });
  };
  if (parts.length) parts.forEach(linkFirstMentions);
  else linkFirstMentions(main);

  /* 3b. paged domain sections: show one <section class="part"> at a time */
  if (parts.length) {
    document.body.classList.add("paged-parts");
    const partKey = p => p.id.replace(/-part$/, "");
    const partLabel = p => {
      const k = partKey(p);
      if (navLabels[k]) return navLabels[k];
      const h2 = p.querySelector("h2");
      return h2 ? cleanText(h2) : k;
    };
    const partByKey = new Map();
    parts.forEach(p => {
      const k = partKey(p);
      partByKey.set(k, p);
      partByKey.set(p.id, p);
    });

    /* subtopic switcher bar under h1 */
    const tabLinks = {};
    if (h1) {
      const tabs = document.createElement("nav");
      tabs.className = "part-tabs";
      tabs.setAttribute("aria-label", "Subtopics in this section");
      tabs.innerHTML = parts.map(p => {
        const k = partKey(p);
        return '<a href="#' + k + '" data-part="' + k + '">' + esc(partLabel(p)) + "</a>";
      }).join("");
      (h1.closest(".content-panel") || h1).after(tabs);
      tabs.querySelectorAll("a[data-part]").forEach(a => { tabLinks[a.dataset.part] = a; });
    }

    /* capture original domain-level prev/next links before updating per subtopic */
    const pager = main.querySelector(".pagination-links");
    const snapLink = a => a ? { href: a.getAttribute("href"), title: a.querySelector(".link-title")?.textContent.trim() || a.textContent.trim() } : null;
    const origPrev = snapLink(pager?.querySelector('a[rel="prev"]'));
    const origNext = snapLink(pager?.querySelector('a[rel="next"]'));
    const pagerHtml = (rel, dir, item) => item ? '<a href="' + item.href + '" rel="' + rel + '"><span>' + dir + '<br><span class="link-title">' + esc(item.title) + "</span></span></a>" : "";
    const updatePager = idx => {
      if (!pager) return;
      const prev = idx > 0 ? { href: "#" + partKey(parts[idx - 1]), title: partLabel(parts[idx - 1]) } : origPrev;
      const next = idx < parts.length - 1 ? { href: "#" + partKey(parts[idx + 1]), title: partLabel(parts[idx + 1]) } : origNext;
      pager.innerHTML = pagerHtml("prev", "Previous", prev) + pagerHtml("next", "Next", next);
    };

    /* active part's right-side TOC (h3 headings) + lightweight scroll-spy */
    let activeHeadings = [];
    let tocLinks = {};
    const markToc = () => {
      if (!activeHeadings.length) return;
      let curId = "_top";
      for (const h of activeHeadings) if (h.getBoundingClientRect().top < 140) curId = h.id;
      Object.entries(tocLinks).forEach(([id, a]) => a.classList.toggle("cur", id === curId));
    };
    const updateToc = part => {
      if (!toc) return;
      activeHeadings = [...part.querySelectorAll("h3[id]")];
      tocLinks = {};
      if (activeHeadings.length) {
        toc.style.visibility = "";
        toc.innerHTML = "<h4>On this page</h4>" + '<a href="#_top" data-toc="_top">Top</a>' +
          activeHeadings.map(h => '<a href="#' + h.id + '" data-toc="' + h.id + '">' + esc(cleanText(h)) + "</a>").join("");
        toc.querySelectorAll("a[data-toc]").forEach(a => { tocLinks[a.dataset.toc] = a; });
        markToc();
      } else {
        toc.innerHTML = "";
        toc.style.visibility = "hidden";
      }
    };
    let tocRaf = 0;
    addEventListener("scroll", () => { if (!tocRaf) tocRaf = requestAnimationFrame(() => { tocRaf = 0; markToc(); }); }, { passive: true });

    const setHash = h => {
      if (location.hash === h) return;
      try { history.pushState(null, "", h); }
      catch (e) { location.hash = h; }
    };

    let activePart = null;
    const activatePart = (part, opts = {}) => {
      if (!part) return;
      const key = partKey(part);
      const changed = part !== activePart;
      activePart = part;
      parts.forEach(p => p.classList.toggle("is-active", p === part));
      Object.entries(sideLinks).forEach(([k, a]) => {
        const on = k === key;
        a.classList.toggle("cur", on);
        if (on) a.setAttribute("aria-current", "page");
        else a.removeAttribute("aria-current");
      });
      Object.entries(tabLinks).forEach(([k, a]) => {
        const on = k === key;
        a.classList.toggle("cur", on);
        if (on) a.setAttribute("aria-current", "page");
        else a.removeAttribute("aria-current");
      });
      if (changed) {
        updateToc(part);
        renderProducts(part);
        updatePager(parts.indexOf(part));
      }
      if (opts.updateHash) setHash("#" + key);
      if (opts.scrollTarget) {
        opts.scrollTarget.scrollIntoView({ behavior: opts.instant ? "instant" : "smooth", block: "start" });
      } else if (opts.scrollTop) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      markToc();
    };

    const syncFromHash = initial => {
      let raw = "";
      try { raw = decodeURIComponent((location.hash || "").replace(/^#/, "")); } catch (e) { }
      if (!raw) {
        activatePart(parts[0], { scrollTop: !initial });
        return;
      }
      if (raw === "_top") {
        if (!activePart) activatePart(parts[0]);
        window.scrollTo({ top: 0, behavior: initial ? "instant" : "smooth" });
        return;
      }
      if (partByKey.has(raw)) {
        activatePart(partByKey.get(raw), { scrollTop: true });
        if (initial) requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "instant" }));
        return;
      }
      const target = document.getElementById(raw);
      const owner = target?.closest("section.part");
      if (owner) {
        activatePart(owner, { scrollTarget: target, instant: initial });
      } else if (!activePart) {
        activatePart(parts[0]);
      }
    };

    document.addEventListener("click", e => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest("a[href]");
      if (!a || a.target === "_blank") return;
      let url;
      try { url = new URL(a.href, location.href); } catch (err) { return; }
      if (url.protocol !== location.protocol || url.host !== location.host || url.pathname !== location.pathname || url.search !== location.search) return;
      if (!url.hash) return;
      let id = "";
      try { id = decodeURIComponent(url.hash.slice(1)); } catch (err) { return; }
      if (id === "_top") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (partByKey.has(id)) {
        e.preventDefault();
        activatePart(partByKey.get(id), { scrollTop: true, updateHash: true });
        document.body.classList.remove("nav-open");
        return;
      }
      const target = document.getElementById(id);
      const owner = target?.closest("section.part");
      if (owner) {
        e.preventDefault();
        const switched = owner !== activePart;
        activatePart(owner, { scrollTarget: target, instant: switched });
        setHash("#" + id);
        document.body.classList.remove("nav-open");
      }
    });

    addEventListener("hashchange", () => syncFromHash(false));
    addEventListener("popstate", () => syncFromHash(false));
    syncFromHash(true);
    const activeSide = side?.querySelector("a.cur");
    if (activeSide) side.scrollTop = activeSide.offsetTop - side.clientHeight / 2;
  }

  /* 4. turn the text "architecture strips" ([A] --> [B] | [C] ...) into box-and-arrow diagrams */
  const ARROW = /◄──\(([^)]*)\)──►|──\(([^)]*)\)──►|--\(([^)]*)\)-->|◄──►|──►|──>|-->/y;
  const OPS = [" + ", " vs. ", " = ", " AND "];

  // split at depth 0 of [] and (), using a tester that returns [length, payload] or null
  const splitTop = (s, test) => {
    const parts = [], seps = [];
    let depth = 0, last = 0;
    for (let i = 0; i < s.length; i++) {
      if (depth === 0) {
        const hit = test(s, i);
        if (hit) { parts.push(s.slice(last, i)); seps.push(hit[1]); i += hit[0] - 1; last = i + 1; continue; }
      }
      const ch = s[i];
      if (ch === "[" || ch === "(") depth++;
      else if ((ch === "]" || ch === ")") && depth > 0) depth--;
    }
    parts.push(s.slice(last));
    return { parts, seps };
  };
  const arrowAt = (s, i) => {
    ARROW.lastIndex = i;
    const m = ARROW.exec(s);
    if (!m) return null;
    const label = m[1] || m[2] || m[3] || "";
    return [m[0].length, { label, both: m[0].startsWith("◄") }];
  };
  const opAt = (s, i) => { for (const o of OPS) if (s.startsWith(o, i)) return [o.length, o.trim()]; return null; };
  const pipeAt = (s, i) => (s.startsWith(" | ", i) ? [3, "|"] : null);

  const box = (raw, cls) => {
    let t = raw.trim().replace(/^\[+/, "").replace(/\]+$/, "").replace(/^\[|\]$/g, "").trim();
    if (!t) return "";
    t = t.replace(/ -> /g, " → ");
    const logos = matches(t, 2).map(icon).join("");
    const c = t.indexOf(": ");
    let body;
    if (c > 0 && c < 42 && !/[(\[{'"]/.test(t.slice(0, c))) {
      body = '<b class="flow-k">' + esc(t.slice(0, c)) + '</b><span class="flow-v">' + esc(t.slice(c + 2)) + "</span>";
    } else body = '<span class="flow-v">' + esc(t) + "</span>";
    return '<div class="flow-box ' + cls + '">' + (logos ? '<span class="flow-logos">' + logos + "</span>" : "") + body + "</div>";
  };
  const step = (raw, cls) => {
    const { parts, seps } = splitTop(raw.trim(), opAt);
    let h = "";
    parts.forEach((p, i) => {
      h += box(p, cls);
      if (i < seps.length) h += '<span class="flow-op">' + (seps[i] === "=" ? "⇒" : esc(seps[i])) + "</span>";
    });
    return '<div class="flow-step">' + h + "</div>";
  };
  const lane = raw => {
    const { parts, seps } = splitTop(raw.trim(), arrowAt);
    const n = parts.length;
    let h = "";
    parts.forEach((p, i) => {
      const cls = n === 1 ? "is-solo" : i === 0 ? "is-start" : i === n - 1 ? "is-end" : "is-mid";
      h += step(p, cls);
      if (i < seps.length) {
        const a = seps[i];
        h += '<div class="flow-arrow' + (a.both ? " both" : "") + '">' + (a.label ? '<span class="flow-label">' + esc(a.label) + "</span>" : "") + "<i></i></div>";
      }
    });
    return { html: '<div class="flow-lane' + (n === 1 ? " solo" : "") + '">' + h + "</div>", solo: n === 1 };
  };
  const renderFlow = raw => {
    const lanes = splitTop(raw.replace(/\s{2,}\|\s{2,}/g, " | "), pipeAt).parts.map(lane);
    const grid = lanes.length > 1 && lanes.every(l => l.solo);
    return '<div class="flow' + (grid ? " flow-grid" : "") + '">' + lanes.map(l => l.html).join("") + "</div>";
  };

  const HOSTS = ".qa-arch, .sim-arch-strip";
  const convert = el => {
    if (el.querySelector(":scope > .flow")) return;
    // pages insert the strip with innerHTML, so literal tags such as <pause> become unknown elements — turn them back into text
    const txt = n => n.nodeType === 3 ? n.nodeValue : n.nodeType !== 1 ? "" :
      (n instanceof HTMLUnknownElement ? "<" + n.localName + ">" : "") + [...n.childNodes].map(txt).join("");
    const raw = [...el.childNodes].map(txt).join("").trim();
    if (!raw) return;
    el.classList.add("flow-host");
    el.setAttribute("aria-label", raw);
    const m = raw.match(/^(Architecture flow):\s*/i);
    const body = m ? raw.slice(m[0].length) : raw;
    try {
      el.innerHTML = (m ? '<div class="flow-cap">' + esc(m[1]) + "</div>" : "") + renderFlow(body);
    } catch (e) { /* keep the original text if parsing fails */ }
  };
  let queued = false;
  const scan = () => { queued = false; main.querySelectorAll(HOSTS).forEach(convert); };
  scan();
  new MutationObserver(() => { if (!queued) { queued = true; requestAnimationFrame(scan); } })
    .observe(main, { childList: true, subtree: true, characterData: true });
})();
