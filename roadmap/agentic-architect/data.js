/* generated from the doc pages' def-cards and exam guides */
window.ROADMAP_DATA = {
"domains": {
"sec1": [
"<strong>Right-size the architecture (1.1):</strong> Use deterministic automation (<abbr title=\"Google Cloud serverless state-machine orchestrator for APIs\">Cloud Workflows</abbr> / <abbr title=\"No-code business process automation inside Gemini Enterprise\">Workflow Builder</abbr>) for fixed rules, a single agent for 1 domain with under 10 tools, and multi-agent only when complexity demands it.",
"<strong>Pick the right platform and ingest multimodal data (1.2):</strong> Use <strong>Agent Designer</strong> for internal workforce bots with <abbr title=\"Access Control List — document-level read permissions\">ACL</abbr>-aware search, parse PDFs/tables/audio/video via <strong>multimodal data ingestion</strong>, and scale prototypes to code-first <abbr title=\"Agent Development Kit — Google Cloud code-first framework for building agents\">ADK</abbr>.",
"<strong>Master <abbr title=\"Customer Engagement Suite — Google Cloud omnichannel contact center AI platform\">CES</abbr> and CX Agent Studio mechanics (1.3):</strong> Align <strong>Playbooks, Flows, Pages, Intents, Transition Routes, and Event Handlers</strong>, steer voice with the <strong>3-part composite voice model</strong> (Listener, Thinking, Speaker), and execute warm human handoffs."
],
"sec2": [
"<strong>Rules, skills, plugins, and hooks (2.1):</strong> Configure <strong>Google Antigravity</strong> (<code>.agents/rules/*.md</code> with <code>always_on</code>, <code>glob</code>, <code>model_decision</code>, and <code>manual</code> triggers), upgrade legacy workflows to <code>.agents/skills/&lt;name&gt;/SKILL.md</code> via <code>/migrate-workflows</code>, bundle extensions in <strong><code>plugin.json</code></strong>, and enforce deterministic <strong>lifecycle hooks (<code>hooks.json</code>)</strong>.",
"<strong>Augmenting with <code>agents-cli</code>, <abbr title=\"Model Context Protocol — open standard connecting AI assistants to data and tools\">MCP</abbr>, and subagents (2.2):</strong> Use <strong><code>agents-cli</code></strong> (7 built-in skills) and <strong>Antigravity <abbr title=\"Command-Line Interface\">CLI</abbr> (<code>agy</code>)</strong> to build, evaluate, deploy, and govern <abbr title=\"Agent Development Kit\">ADK</abbr> agents; prevent multi-file context rot with custom subagents (<code>define_subagent</code> / <code>.agents/</code>).",
"<strong>Headless <abbr title=\"Continuous Integration / Continuous Delivery\">CI/CD</abbr>, <abbr title=\"Google Kubernetes Engine\">GKE</abbr> Agent Sandbox, and runtime optimization (2.3):</strong> Run <code>agy</code> / <code>gemini</code> in headless <abbr title=\"Continuous Integration / Continuous Delivery\">CI/CD</abbr> mode, isolate untrusted code in <strong>Agent Sandbox on <abbr title=\"Google Kubernetes Engine\">GKE</abbr></strong> (gVisor/microVMs), and execute systematic workflows to optimize agent runtimes."
],
"sec3": [
"<strong>Single-agent parameters and multi-agent workflows (3.1 &amp; 3.2):</strong> Configure <abbr title=\"Agent Development Kit\">ADK</abbr> <code>LlmAgent</code> routing (<code>description</code> vs. <code>instruction</code>), 2-step <code>tools</code> + <code>output_schema</code> splits, <code>include_contents=‘none’</code>, and orchestrate <code>SequentialAgent</code>, <code>ParallelAgent</code> (unique <code>output_key</code>s), <code>LoopAgent</code> (<code>escalate=True</code>), <code>AgentTool</code>, and <code>CustomAgent</code> (<code>BaseAgent</code>).",
"<strong>Tools, grounding, and state/memory (3.3, 3.4 &amp; 3.5):</strong> Connect databases via <strong><abbr title=\"Model Context Protocol\">MCP</abbr> Toolbox (<code>tools.yaml</code>)</strong>, choose between <strong>Agent Search</strong> (<abbr title=\"Access Control Lists\">ACLs</abbr>), <strong><abbr title=\"Retrieval-Augmented Generation\">RAG</abbr> Engine</strong>, and <strong>Context Caching</strong>, and scope state across <code>temp:</code>, <code>session</code>, <code>user:</code>, <code>app:</code>, <strong>Memory Bank</strong>, and <code>GcsArtifactService</code>.",
"<strong>Cross-service interoperability (3.6):</strong> Connect distributed multi-team and cross-cloud agents via the <strong>Agent2Agent (<abbr title=\"Agent2Agent Protocol\">A2A</abbr>) protocol</strong> (<code>/.well-known/agent.json</code>, <abbr title=\"Server-Sent Events\">SSE</abbr> streaming, push webhooks, and <code>input-required</code> resumption)."
],
"sec4": [
"<strong>Trajectory and rubric evaluation (4.1):</strong> Grade tool sequences with <code>tool_trajectory_avg_score</code> (<code>EXACT</code>, <code>IN_ORDER</code>, <code>ANY_ORDER</code>), grade open-ended quality with <code>RubricBasedCriterion</code>, and compare models via <code>PointwiseMetric</code> and <code>PairwiseMetric</code> in <code>EvalTask</code>.",
"<strong>Production runtimes and <abbr title=\"Continuous Integration / Continuous Delivery\">CI/CD</abbr> rollouts (4.2 &amp; 4.3):</strong> Choose between turnkey <strong>Managed Agent Runtime</strong> (<code>AdkApp</code>), serverless <strong>Cloud Run</strong> (with external <code>SessionService</code>), and <strong><abbr title=\"Google Kubernetes Engine\">GKE</abbr> with Agent Sandbox</strong> (gVisor/microVMs); scaffold repos with <strong>Agent Starter Pack</strong> and enforce session-pinned canary and mocked shadow rollouts.",
"<strong>Observability and FinOps optimization (4.4):</strong> Pinpoint latency in <strong>Cloud Trace</strong> (OpenTelemetry spans + W3C <code>traceparent</code>), stream logs to <strong>BigQuery</strong> for offline autorater sampling, and reserve capacity via <strong>Provisioned Throughput</strong>."
],
"sec5": [
"<strong>Agent Gateway, observability, and Model Armor (5.1):</strong> Configure Client-to-Agent (ingress) and Agent-to-Anywhere (egress with <abbr title=\"Private Service Connect\">PSC</abbr>) gateways, enforce <abbr title=\"Identity-Aware Proxy\">IAP</abbr> Unified Access Policies (<code>roles/iap.egressor</code>), semantic governance, and token management, monitor traffic via <code>agentGatewayInfo.mcpInfo</code> and <code>telemetryPolicies</code>, and apply Model Armor redaction vs. blocking rules.",
"<strong>Agent Identity, <abbr title=\"Principal Access Boundary\">PAB</abbr>, and OAuth 2.0 (5.2):</strong> Assign <abbr title=\"Secure Production Identity Framework for Everyone\">SPIFFE</abbr> Managed Agent Identities (24h X.509 rotation + <abbr title=\"Mutual TLS and Demonstrating Proof-of-Possession\">mTLS/DPoP</abbr> binding), evaluate access in order (<code>1. PAB → 2. IAM Deny → 3. IAM Allow</code>), and configure 2-legged vs. 3-legged OAuth in Auth Manager.",
"<strong>Deterministic <abbr title=\"Agent Development Kit\">ADK</abbr> callbacks and fleet governance (5.3 &amp; 5.4):</strong> Short-circuit model and tool calls via <code>before_agent_callback</code>, <code>before_model_callback</code> (<code>LlmResponse</code>), and <code>before_tool_callback</code> (<code>dict</code>), and govern multi-project catalogs in <strong>Agent Registry</strong> (with or without a Management Boundary)."
]
},
"modules": {
"sec1-architecture": {
"concepts": [
{
"n": "Deterministic cloud automation",
"tag": "Cloud Workflows & Dataflow",
"what": "Code or YAML pipelines that run fixed API steps or high-volume data streams without an AI model.",
"why": "Delivers 100% predictable branching, sub-second speed, and $0 LLM token cost whenever inputs are structured and rules are fixed."
},
{
"n": "Gemini Enterprise Workflow Builder",
"tag": "No-code business automation",
"what": "A visual, no-code automation builder inside Gemini Enterprise for business users.",
"why": "Lets non-developers chain event triggers, Gemini summarization steps, SaaS connectors (Jira, ServiceNow, Gmail), and human approval gates in minutes."
},
{
"n": "Single-agent system",
"tag": "1 domain + under 10 tools",
"what": "One <abbr title=\"Large Language Model\">LLM</abbr> agent handling open-ended natural-language requests inside one cohesive topic area.",
"why": "When you have under 10 clear tools and one security identity, a single agent gives the fastest response time and lowest token cost."
},
{
"n": "Chain-of-Thought and few-shot templates",
"tag": "CoT + 3 to 5 examples",
"what": "Prompt instructions that tell a single agent to reason step-by-step (<abbr title=\"Chain-of-Thought\">CoT</abbr>) paired with 3–5 ideal input/output examples (few-shot).",
"why": "Fixes reasoning mistakes and tool-ordering errors inside a single agent without adding multi-agent complexity."
},
{
"n": "Multi-agent system",
"tag": "Coordinator + specialist sub-agents",
"what": "A team of specialized agents that divide and conquer complex work.",
"why": "Essential when you hit <strong>tool overload (15+ tools)</strong>, <strong>conflicting personas</strong> (Drafter vs. Critic), <strong>parallel fan-out speedups</strong>, or <strong>separate <abbr title=\"Identity and Access Management / Principal Access Boundary\">IAM/PAB</abbr> security boundaries</strong>."
}
],
"goals": [
"Evaluate when to use deterministic cloud automation (<abbr title=\"Google Cloud serverless state-machine orchestrator\">Cloud Workflows</abbr> / Dataflow), no-code <strong>Gemini Enterprise Workflow Builder</strong>, a single <abbr title=\"Large Language Model\">LLM</abbr> agent, or a multi-agent system.",
"Structure agent reasoning using <strong>Chain-of-Thought (<abbr title=\"Chain-of-Thought — prompting the model to reason step-by-step before answering\">CoT</abbr>)</strong> and <strong>few-shot prompt templates</strong> to reduce hallucinations before escalating to multi-agent complexity."
]
},
"sec1-ces-omnichannel": {
"concepts": [
{
"n": "Generative Playbook and Exemplars",
"tag": "Goal-driven LLM + few-shot examples",
"what": "An <abbr title=\"Large Language Model\">LLM</abbr>-driven conversational unit defined by natural-language goals, instructions, and OpenAPI/data store tools.",
"why": "Handles flexible, multi-intent customer questions. Adding <strong>Exemplars</strong> (sample conversations) teaches the Playbook the exact order to call tools without writing Python code."
},
{
"n": "Deterministic Flow and Pages",
"tag": "Flow → Pages → Form slots",
"what": "A <strong>Flow</strong> is a strict state machine made of <strong>Pages</strong>. Each <strong>Page</strong> represents one step (e.g., <code>Verify_KYC_Page</code>) and holds required <strong>Form Parameters (Slots)</strong>.",
"why": "Guarantees that mandatory fields (like card number, birth date, and PIN) are collected in an exact, unskippable sequence."
},
{
"n": "Intents and Transition Routes",
"tag": "Intent match + boolean condition",
"what": "An <strong>Intent</strong> recognizes what the user wants. A <strong>Transition Route</strong> checks if an Intent matched or a condition is true (e.g., <code>$page.params.status = ‘FINAL’</code>) to move to the next Page.",
"why": "Controls normal step-by-step movement across Pages, Flows, and Playbooks."
},
{
"n": "Event Handlers (fallbacks)",
"tag": "no-match / no-input / webhook error",
"what": "Error catchers attached to a Page or Flow for unrecognized speech (<code>sys.no-match-default</code>), caller silence (<code>sys.no-input-default</code>), or API failures.",
"why": "Lets you re-prompt the user up to a fixed limit (e.g., 2 retries) and then escalate cleanly to a human representative."
},
{
"n": "3-part composite voice model",
"tag": "Listener + Thinking + Speaker",
"what": "CX Agent Studio’s voice engine combining a <strong>Listener model</strong> (barge-in/turn-taking), <strong>Thinking model</strong>, and <strong>Speaker model</strong>.",
"why": "Lets you steer voice tone, pacing, and digit reading using short <strong>Speaking style descriptions</strong> and inline tags like <code>&lt;pause&gt;</code> instead of complex XML code."
},
{
"n": "Redacted DTMF and warm handoff",
"tag": "Keypad digits + AI summary transfer",
"what": "<strong><abbr title=\"Dual-Tone Multi-Frequency\">DTMF</abbr></strong> captures phone keypad digits with log redaction; <strong>warm handoff</strong> transfers callers to human reps with session params and an AI summary.",
"why": "Protects <abbr title=\"Payment Card Industry\">PCI</abbr> card numbers in logs and ensures frustrated callers never have to repeat their story to a human agent."
}
],
"goals": [
"Master how <strong>Generative Playbooks</strong>, <strong>Deterministic Flows</strong>, <strong>Pages</strong>, <strong>Form Parameters (Slots)</strong>, <strong>Intents</strong>, <strong>Transition Routes</strong>, and <strong>Event Handlers</strong> are technically arranged.",
"Configure omnichannel voice using CX Agent Studio’s <strong>3-part composite voice model</strong> (<strong>Listener</strong>, <strong>Thinking</strong>, and <strong>Speaker</strong> models with Speaking style descriptions and inline <code>&lt;pause&gt;</code> tags), barge-in, and redacted <abbr title=\"Dual-Tone Multi-Frequency — touch-tone phone keypad digit signals\">DTMF</abbr>.",
"Trigger <strong>warm live-agent handoffs</strong> on negative sentiment or fallback caps, passing verified session parameters and an AI transcript summary to human reps."
]
},
"sec1-platform-selection": {
"concepts": [
{
"n": "Agent Designer",
"tag": "Gemini Enterprise no-code studio",
"what": "A visual, no-code studio for building internal employee assistants.",
"why": "Lets business analysts launch internal bots grounded on company files and SaaS apps in days without writing Python or managing containers."
},
{
"n": "Identity-aware Agent Search ACLs",
"tag": "Query-time permission filtering",
"what": "Enterprise search that indexes SharePoint, Drive, and Confluence files alongside their read permissions (<abbr title=\"Access Control Lists\">ACLs</abbr>).",
"why": "Automatically checks the logged-in employee’s identity at query time so restricted executive files are never retrieved or leaked."
},
{
"n": "Multimodal data ingestion",
"tag": "Layout parser + multimodal embeddings",
"what": "An ingestion pipeline that parses PDF tables, visual charts, images, and audio/video transcripts into one shared search index.",
"why": "Keeps multi-column PDF tables intact (instead of slicing rows in half) and lets users search across text, diagrams, and videos with exact page/timestamp citations."
},
{
"n": "Pre-built action connectors",
"tag": "Jira / ServiceNow / Workspace + OAuth",
"what": "Turnkey integrations with enterprise SaaS applications inside Agent Designer.",
"why": "Uses per-user <strong>OAuth 2.0 consent</strong> so every ticket creation or calendar update runs strictly under that employee’s personal permissions."
},
{
"n": "The Agent Designer → ADK bridge",
"tag": "Reuse data_store_id or link via A2A",
"what": "The upgrade path from a no-code Agent Designer prototype to code-first Python <abbr title=\"Agent Development Kit\">ADK</abbr>.",
"why": "Lets engineers add Python callbacks and Git CI/CD while plugging into the <strong>exact same Agent Search database</strong> (zero re-indexing!) or delegating behind the scenes via <abbr title=\"Agent2Agent Protocol\">A2A</abbr>."
}
],
"goals": [
"Select between low-code <strong>Agent Designer</strong> (for internal workforce search and SaaS actions), <strong>CX Agent Studio</strong>, and code-first <strong><abbr title=\"Agent Development Kit\">ADK</abbr></strong>.",
"Design <strong>multimodal data ingestion</strong> pipelines (layout-aware PDF/table parsing, image/chart interpretation, and audio/video grounding) while enforcing source document <abbr title=\"Access Control Lists — user/group permission filters\">ACLs</abbr>.",
"Bridge validated no-code prototypes into code-first <abbr title=\"Agent Development Kit\">ADK</abbr> (reusing existing Agent Search data stores or delegating over <abbr title=\"Agent2Agent Protocol — open standard for peer-to-peer agent collaboration\">A2A</abbr>)."
]
},
"sec2-cicd-sandboxing": {
"concepts": [
{
"n": "Agent Sandbox on GKE",
"tag": "gVisor / Kata microVMs + warm pools",
"what": "A high-security execution environment on Google Kubernetes Engine (<abbr title=\"Google Kubernetes Engine\">GKE</abbr>) for running untrusted Python, C++, or bash code generated by AI or users.",
"why": "Gives every single code execution its own isolated kernel boundary (so malicious code can never escape) and uses <strong>pre-warmed sandbox pools</strong> so sandboxes boot in under a second instead of 15 seconds."
},
{
"n": "Runtime optimization workflow",
"tag": "Cloud Trace + agents-cli + eval gate",
"what": "A 4-step process to make slow, expensive deployed agents faster and cheaper.",
"why": ""
},
{
"n": "Non-interactive headless mode",
"tag": "agy / gemini -p –output-format json",
"what": "A flag that tells Antigravity CLI (<code>agy</code>) or Gemini CLI (<code>gemini</code>) to run from start to finish without pausing for keyboard input.",
"why": "Essential for automated Pull Request reviews in Cloud Build or GitHub Actions. Emits structured JSON so your pipeline script can automatically block bad merges."
},
{
"n": "Spec-anchored test synthesis",
"tag": "Written spec → *.evalset.json",
"what": "Using your coding assistant to generate unit tests and golden <code>*.evalset.json</code> test files based on your <strong>written requirements doc</strong>.",
"why": "If the AI writes tests by only looking at buggy code, it will treat the bug as “correct”! Generating tests from the written spec—and having a human review them—catches real bugs."
},
{
"n": "Tiered command approval policy",
"tag": "Allowlist / Ask (HITL) / Deny",
"what": "Governs local terminal execution across three tiers: <strong>Allowlist</strong> (auto-run safe read/test commands), <strong>Ask / <abbr title=\"Human-in-the-Loop\">HITL</abbr></strong> (human confirmation for file writes or package installs), and <strong>Deny</strong> (block destructive commands).",
"why": "Keeps daily test runs frictionless while stopping unapproved package installs or accidental deletions."
}
],
"goals": [
"Execute non-interactive headless <abbr title=\"Continuous Integration / Continuous Delivery\">CI/CD</abbr> runs (via <code>agy</code> and <code>gemini</code>) with read-only tool allowlists and structured JSON output, and synthesize spec-anchored <code>*.evalset.json</code> trajectories with human review.",
"Isolate untrusted code and autonomous execution using <strong>Agent Sandbox on <abbr title=\"Google Kubernetes Engine\">GKE</abbr></strong> (gVisor / Kata microVMs and pre-warmed sandbox pools) and execute workflows to optimize execution runtimes (latency, token pruning, model tiering, and caching)."
]
},
"sec2-context-skills": {
"concepts": [
{
"n": "Antigravity modular rules",
"tag": ".agents/rules/*.md",
"what": "Small markdown files containing coding standards for specific parts of your project.",
"why": "Lets you set a <code>trigger</code> in the file header (<code>always_on</code>, <code>glob</code>, <code>model_decision</code>, or <code>manual</code>) so Python rules don’t waste tokens when you are editing React files!"
},
{
"n": "On-demand custom skills",
"tag": ".agents/skills/<name>/SKILL.md",
"what": "A folder holding a step-by-step task guide (<code>SKILL.md</code>) plus helper scripts and templates.",
"why": "Uses <strong>progressive disclosure</strong>—the AI reads only a 1-sentence summary at startup and loads the full guide only when your task needs it."
},
{
"n": "Deterministic lifecycle hooks",
"tag": ".agents/hooks.json & .gemini/hooks/",
"what": "Automatic shell scripts triggered at exact moments in the agent loop (<code>PreToolUse</code>, <code>PostToolUse</code>, <code>BeforeAgent</code>, <code>AfterModel</code>, <code>Stop</code>).",
"why": "Gives you a 100% guaranteed security and quality gate—blocking banned shell commands before they execute or auto-running code formatters after every edit."
},
{
"n": "Shareable plugins",
"tag": "plugin.json",
"what": "A single manifest file that bundles your team’s skills, rules, subagents, hooks, and <abbr title=\"Model Context Protocol\">MCP</abbr> configs into one installable package.",
"why": "Lets a platform team share one versioned toolkit across 50 repositories without copy-pasting folders by hand."
},
{
"n": "Context hierarchy and secret ignore files",
"tag": "GEMINI.md & .geminiignore",
"what": "3-tier instruction files (<strong>Global home → Repo root → Subdirectory</strong>) paired with file-blocking lists (<code>.geminiignore</code> / <code>.aiexclude</code>).",
"why": "Subdirectory rules override general root rules, while ignore files stop the AI from ever reading <code>.env</code> passwords or heavy <code>node_modules</code> folders."
}
],
"goals": [
"Configure <strong>Antigravity rules</strong> (<code>.agents/rules/*.md</code>) using YAML frontmatter triggers (<code>always_on</code>, <code>glob</code>, <code>model_decision</code>, <code>manual</code>) alongside hierarchical <code>GEMINI.md</code> and <code>CLAUDE.md</code> context files.",
"Migrate deprecated <code>.agents/workflows/</code> to progressive-disclosure <strong>skills</strong> (<code>.agents/skills/&lt;name&gt;/SKILL.md</code>) using <code>/migrate-workflows</code>, and package shareable capabilities via <strong><code>plugin.json</code></strong> manifests.",
"Enforce synchronous <strong>lifecycle hooks</strong> (<code>.agents/hooks.json</code>, <code>~/.gemini/config/hooks.json</code>, <code>.gemini/hooks/</code>) across <code>PreToolUse</code> / <code>BeforeTool</code>, <code>PostToolUse</code>, <code>BeforeAgent</code>, <code>AfterModel</code>, <code>AfterAgent</code>, and <code>Stop</code> with regex tool matchers."
]
},
"sec2-mcp-subagents": {
"concepts": [
{
"n": "Google Cloud Agents CLI",
"tag": "agents-cli (7 built-in skills)",
"what": "An official command-line tool and skill pack from Google Cloud (<code>google.github.io/agents-cli</code>).",
"why": "Equips your coding assistant with 7 verified skills to scaffold, evaluate, deploy, secure, and optimize <abbr title=\"Agent Development Kit\">ADK</abbr> agents without hallucinating outdated code."
},
{
"n": "Antigravity CLI",
"tag": "agy command-line binary",
"what": "The terminal command (<code>agy</code>) that controls the Google Antigravity <abbr title=\"Integrated Development Environment\">IDE</abbr> from your shell.",
"why": "Lets you launch workspaces, install skill plugins, and run automated coding tasks from terminal scripts or <abbr title=\"Continuous Integration / Continuous Delivery\">CI/CD</abbr> pipelines."
},
{
"n": "Context rot and custom subagents",
"tag": "define_subagent & .agents/",
"what": "<strong>What context rot is:</strong> The drop in accuracy when a single chat thread accumulates tens of thousands of tokens of raw search hits, file reads, and stack traces.",
"why": ""
},
{
"n": "Live MCP developer servers",
"tag": "mcp_config.json & settings.json",
"what": "A live bridge (<abbr title=\"Model Context Protocol\">MCP</abbr>) connecting your code editor to your cloud databases (BigQuery/AlloyDB), Cloud Logging traces, and Jira tickets.",
"why": "The AI checks real table schemas before writing SQL. Always use <strong>read-only or dev credentials</strong> so the coding assistant can never alter production data!"
},
{
"n": "Spec → Plan → Act → Verify loop",
"tag": "4-phase engineering discipline",
"what": "A structured workflow: write a <strong>Specification</strong>, review and approve the AI’s <strong>Plan</strong> before coding, apply small incremental edits (<strong>Act</strong>), and run automated tests (<strong>Verify</strong>).",
"why": "Replaces risky one-shot prompting and catches architectural misunderstandings before 20 files are modified."
}
],
"goals": [
"Augment <strong>Google Antigravity (<code>agy</code>)</strong>, <strong>Gemini <abbr title=\"Command-Line Interface\">CLI</abbr></strong>, and <strong>Claude Code</strong> with <strong><code>agents-cli</code></strong> (and its 7 built-in skills) to scaffold, evaluate, deploy, scale, and govern <abbr title=\"Agent Development Kit\">ADK</abbr> agents on the Gemini Enterprise Agent Platform.",
"Author custom subagent definitions (<code>define_subagent</code> / <code>.agents/</code>) with isolated context windows to prevent multi-file context rot inside a <strong>Spec → Plan → Act → Verify</strong> loop, backed by live read-only <abbr title=\"Model Context Protocol\">MCP</abbr> servers."
]
},
"sec3-a2a-protocol": {
"concepts": [
{
"n": "MCP (tools) vs. A2A (peers)",
"tag": "Function call vs. peer delegation",
"what": "<strong><abbr title=\"Model Context Protocol\">MCP</abbr>:</strong> Connects an agent to a deterministic, stateless function or database query.",
"why": ""
},
{
"n": "A2A Agent Card",
"tag": "/.well-known/agent.json",
"what": "The machine-readable JSON contract published by every <abbr title=\"Agent2Agent Protocol\">A2A</abbr> server (and indexed in <strong>Agent Registry</strong>).",
"why": "Declares the agent’s <code>skills</code>, <code>capabilities</code> (<code>streaming</code>, <code>pushNotifications</code>), input/output modalities, and auth schemes without exposing private prompts or code."
},
{
"n": "Task lifecycle and SSE streaming",
"tag": "taskId + contextId & SSE",
"what": "Tracks stateful work units across <code>submitted → working → completed</code>.",
"why": "When <code>capabilities.streaming=true</code>, streams live <code>TaskStatusUpdateEvent</code> and <code>TaskArtifactUpdateEvent</code> messages over <abbr title=\"Server-Sent Events\">SSE</abbr>."
},
{
"n": "Push webhooks and input-required",
"tag": "PushNotificationConfig & pause",
"what": "<strong>Push webhooks:</strong> For multi-hour disconnected tasks, the server POSTs updates to a callback webhook URL.",
"why": ""
},
{
"n": "ADK RemoteA2aAgent & to_a2a()",
"tag": "Client wrapper & server publisher",
"what": "<strong><code>RemoteA2aAgent</code>:</strong> Wraps an external <abbr title=\"Agent2Agent Protocol\">A2A</abbr> endpoint so an <abbr title=\"Agent Development Kit\">ADK</abbr> coordinator can delegate to it like a local sub-agent.",
"why": ""
}
],
"goals": [
"Publish and consume <abbr title=\"Agent2Agent Protocol\">A2A</abbr> Agent Cards (<code>/.well-known/agent.json</code> via <code>to_a2a</code> and <code>RemoteA2aAgent</code>), stream live updates via <abbr title=\"Server-Sent Events\">SSE</abbr>, handle multi-hour jobs via push notification webhooks, and resume <code>input-required</code> tasks using <code>contextId</code> and <code>taskId</code>."
]
},
"sec3-mcp-tools": {
"concepts": [
{
"n": "MCP Toolbox for Databases",
"tag": "tools.yaml (sources, tools, toolsets)",
"what": "Google’s open-source <abbr title=\"Model Context Protocol\">MCP</abbr> server connecting <abbr title=\"Agent Development Kit\">ADK</abbr> agents to <strong>AlloyDB, Cloud SQL, Spanner, and BigQuery</strong>.",
"why": "Manages connection pooling, <abbr title=\"Identity and Access Management\">IAM</abbr>/OAuth auth, OpenTelemetry tracing, and hot-reloadable parameterized <abbr title=\"Structured Query Language\">SQL</abbr> in <code>tools.yaml</code> without redeploying agent containers."
},
{
"n": "Custom FunctionTool and schemas",
"tag": "Type hints + docstring → dict",
"what": "Wraps a standard Python function as a callable <abbr title=\"Agent Development Kit\">ADK</abbr> tool.",
"why": "Gemini reads the function’s <strong>name, parameter type hints, and docstring</strong> to decide when and how to invoke it, expecting a structured Python <code>dict</code> return."
},
{
"n": "ToolContext (runtime injection)",
"tag": "tool_context: ToolContext",
"what": "A runtime context object injected automatically by <abbr title=\"Agent Development Kit\">ADK</abbr> into your Python tool function.",
"why": "Lets your code read/write <code>tool_context.state</code>, load/save artifacts, or set <code>actions.escalate = True</code>—and is completely hidden from the <abbr title=\"Large Language Model\">LLM</abbr>’s JSON schema!"
},
{
"n": "LongRunningFunctionTool & OpenAPI",
"tag": "Async ticket ID & OpenAPIToolset",
"what": "<strong><code>LongRunningFunctionTool</code>:</strong> Returns an immediate pending ticket/job ID for slow async tasks without blocking the agent turn.",
"why": ""
},
{
"n": "Built-in tool isolation",
"tag": "Wrap in AgentTool(agent=…)",
"what": "Gemini built-in tools (<code>google_search</code>, <code>BuiltInCodeExecutor</code>) cannot mix directly with custom tools on one <code>LlmAgent</code>.",
"why": "Isolating the built-in tool inside a specialist sub-agent wrapped in <strong><code>AgentTool</code></strong> allows the root agent to use both!"
}
],
"goals": [
"Configure declarative <code>tools.yaml</code> (<code>sources</code>, <code>tools</code>, <code>toolsets</code>) for pooled, parameterized database access, write typed Python <code>FunctionTool</code>s with <code>ToolContext</code>, and integrate <code>OpenAPIToolset</code> and <code>LongRunningFunctionTool</code>."
]
},
"sec3-rag-grounding": {
"concepts": [
{
"n": "Agent Search (turnkey + ACLs)",
"tag": "SaaS connectors + query-time ACLs",
"what": "The managed enterprise search engine with turnkey connectors (SharePoint, Jira, Drive, Confluence, <abbr title=\"Google Cloud Storage\">GCS</abbr>).",
"why": "Provides automatic layout parsing and built-in <strong>Document-Level Access Control Lists (<abbr title=\"Access Control Lists\">ACLs</abbr>)</strong> enforced against the user’s identity at query time."
},
{
"n": "RAG Engine (custom pipeline)",
"tag": "chunk_size, overlap & reranker",
"what": "The developer-controlled retrieval pipeline on Vertex AI.",
"why": "Gives granular programmatic control over <strong><code>chunk_size</code></strong>, <strong><code>chunk_overlap</code></strong>, custom embedding models, <code>vector_distance_threshold</code>, and <strong>semantic reranking</strong>."
},
{
"n": "Gemini Context Caching",
"tag": "CachedContent & ContextCacheConfig",
"what": "Caches a large, static prompt prefix (32k+ tokens of PDFs, videos, or codebases) in Gemini memory with a configurable <code>ttl</code>.",
"why": "Skips re-uploading and re-tokenizing static manuals on every turn—slashing input token costs and <abbr title=\"Time-To-First-Token\">TTFT</abbr> latency!"
},
{
"n": "Web grounding and citations",
"tag": "groundingMetadata & source URIs",
"what": "Connects agents to live public facts via Google Search grounding (or Enterprise Web Grounding).",
"why": "Returns <code>groundingMetadata</code> with verifiable source URIs and inline citation mappings for compliance auditing."
}
],
"goals": [
"Choose between turnkey <strong>Agent Search</strong> (with native connectors and query-time document <abbr title=\"Access Control Lists\">ACLs</abbr>), custom <strong>Vertex AI <abbr title=\"Retrieval-Augmented Generation\">RAG</abbr> Engine</strong> (custom chunking, embeddings, and semantic reranking), and <strong>Gemini Context Caching</strong> for large static prompt prefixes."
]
},
"sec3-single-agent": {
"concepts": [
{
"n": "description vs. instruction",
"tag": "External route vs. internal brain",
"what": "<strong><code>description</code>:</strong> External routing metadata read by <em>parent/coordinator agents</em> to decide task delegation.",
"why": ""
},
{
"n": "Dynamic state templates",
"tag": "{var_name} & {var_name?}",
"what": "Placing <code>{var_name}</code> inside <code>instruction</code> automatically interpolates <code>session.state[‘var_name’]</code> at runtime.",
"why": "Adding a trailing question mark (<code>{var_name?}</code>) safely ignores missing optional keys without throwing an error, or pass a callable <code>InstructionProvider</code> function to skip brace parsing."
},
{
"n": "output_schema vs. output_key",
"tag": "Pydantic JSON vs. state save",
"what": "<strong><code>output_schema</code>:</strong> Takes a Pydantic <code>BaseModel</code> to force strict JSON output (which disables tool calls on that same agent turn).",
"why": ""
},
{
"n": "include_contents=‘none’",
"tag": "Stateless history pruning",
"what": "Strips prior conversation history from the model call.",
"why": "Ensures a stateless worker or JSON formatting sub-agent processes <strong>only</strong> its <code>instruction</code> (including injected <code>{state_key}</code> variables), slashing token bills!"
},
{
"n": "Built-in and ReAct planners",
"tag": "BuiltInPlanner & PlanReActPlanner",
"what": "Reasoning controllers attached via the <code>planner</code> parameter on <code>LlmAgent</code>.",
"why": "<code>BuiltInPlanner</code> (with Gemini <code>ThinkingConfig</code>) or <code>PlanReActPlanner</code> instructs the agent to generate an explicit multi-step plan before calling tools or answering."
},
{
"n": "Model tiering and transfer bounds",
"tag": "Flash/Pro + disallow_transfer",
"what": "<strong>Model tiering:</strong> Pair <strong>Gemini Flash</strong> (low-latency routers/formatters) with <strong>Gemini Pro</strong> (deep reasoning).",
"why": ""
}
],
"goals": [
"Master <code>description</code> (parent routing) vs. <code>instruction</code> (internal behavior and <code>{state_key}</code> interpolation), <code>output_schema</code> vs. <code>output_key</code> state handoffs, <code>include_contents=‘none’</code> history pruning, planners (<code>BuiltInPlanner</code>, <code>PlanReActPlanner</code>), and Gemini Flash vs. Pro tiering."
]
},
"sec3-state-memory": {
"concepts": [
{
"n": "Turn and session state",
"tag": "temp:key vs. unprefixed key",
"what": "<strong><code>temp:key</code>:</strong> Ephemeral scratchpad shared between sub-agents during the current single turn and wiped automatically when the turn finishes.",
"why": ""
},
{
"n": "Cross-session state",
"tag": "user:key & app:key",
"what": "<strong><code>user:key</code>:</strong> Persists across all sessions belonging to a specific <code>user_id</code> (e.g., <code>user:preferred_language</code>).",
"why": ""
},
{
"n": "Tracked state mutation",
"tag": "EventActions(state_delta=…)",
"what": "How <abbr title=\"Agent Development Kit\">ADK</abbr> commits state changes to the persistent session log.",
"why": "Always mutate state via <code>output_key</code>, <code>tool_context.state</code>, or <code>callback_context.state</code> so <abbr title=\"Agent Development Kit\">ADK</abbr> records a <code>state_delta</code> event—never mutate detached session objects!"
},
{
"n": "Memory Bank (MemoryService)",
"tag": "add_session_to_memory & load_memory",
"what": "Managed long-term semantic memory service on the Gemini Enterprise Agent Platform.",
"why": "Uses an <abbr title=\"Large Language Model\">LLM</abbr> to extract, deduplicate, and update unstructured user facts across sessions, recalled via <code>PreloadMemoryTool</code> or <code>LoadMemoryTool</code>."
},
{
"n": "ArtifactService (GcsArtifactService)",
"tag": "save_artifact & load_artifact (v0, v1…)",
"what": "Versioned blob storage for binary <code>types.Part</code> payloads (PDFs, images, audio, CSVs).",
"why": "Keeps megabytes of binary data out of <code>session.state</code>, storing them in Cloud Storage with automatic revision numbering (<code>v0, v1…</code>) and optional <code>user:</code> scoping."
}
],
"goals": [
"Scope state variables with <code>temp:</code>, unprefixed session, <code>user:</code>, and <code>app:</code> prefixes, extract long-term cross-session facts in <strong>Memory Bank</strong>, and version large binary files in <code>GcsArtifactService</code>."
]
},
"sec3-workflows": {
"concepts": [
{
"n": "SequentialAgent",
"tag": "Strict chronological pipeline",
"what": "Executes its <code>sub_agents</code> list in strict order (<code>Step 1 → Step 2 → Step 3</code>).",
"why": "Passes the exact same <code>InvocationContext</code> and <code>session.state</code> along the chain so Step 2 can read Step 1’s <code>output_key</code> deterministically."
},
{
"n": "ParallelAgent",
"tag": "Concurrent fan-out + unique keys",
"what": "Executes independent <code>sub_agents</code> concurrently to slash latency.",
"why": "Because all branches share the same <code>session.state</code>, each branch <strong>must use a unique <code>output_key</code></strong> to avoid race-condition overwrites!"
},
{
"n": "LoopAgent and escalate=True",
"tag": "Iterative cycle + exit signal",
"what": "Repeatedly runs its <code>sub_agents</code> in sequence for iterative refinement (Drafter + Critic).",
"why": "Loops until either <code>max_iterations</code> is reached OR a sub-agent/tool emits an <code>Event</code> with <strong><code>EventActions(escalate=True)</code></strong>."
},
{
"n": "Dynamic sub_agents transfer",
"tag": "transfer_to_agent(agent_name=…)",
"what": "Attaching children to an <code>LlmAgent(sub_agents=[…])</code> for dynamic <abbr title=\"Large Language Model\">LLM</abbr>-driven routing.",
"why": "The parent <abbr title=\"Large Language Model\">LLM</abbr> reads each child’s <code>description</code> and calls <code>transfer_to_agent</code>—handing conversation control over to the target specialist."
},
{
"n": "AgentTool (Agent-as-a-Tool)",
"tag": "tools=[AgentTool(agent=…)]",
"what": "Wraps a specialist agent inside <code>AgentTool(agent=…)</code> and passes it in the parent’s <code>tools=[…]</code> list.",
"why": "The specialist runs in an isolated sub-invocation and returns its answer <strong>back to the parent agent</strong>, which keeps control of the user chat!"
},
{
"n": "CustomAgent (BaseAgent)",
"tag": "Subclass BaseAgent + _run_async_impl",
"what": "Subclasses <code>BaseAgent</code> and overrides <code>_run_async_impl(ctx)</code> in Python.",
"why": "Lets you write arbitrary imperative Python control flow (such as <code>if/else</code> branching on <code>ctx.session.state</code>) between child agents."
}
],
"goals": [
"Design deterministic pipelines with <code>SequentialAgent</code>, <code>ParallelAgent</code> (unique <code>output_key</code> isolation), <code>LoopAgent</code> (terminated via <code>EventActions(escalate=True)</code> or <code>max_iterations</code>), imperative <code>CustomAgent</code> (<code>BaseAgent</code>), and dynamic <code>LlmAgent(sub_agents=[…])</code> vs. <code>AgentTool</code> routing."
]
},
"sec4-cicd": {
"concepts": [
{
"n": "Agent Starter Pack",
"tag": "Terraform + CI/CD + RAG + Telemetry",
"what": "Google Cloud’s official production accelerator (<code>agent-starter-pack</code>) for <abbr title=\"Agent Development Kit\">ADK</abbr> agents.",
"why": "Scaffolds a complete repository with multi-environment <strong>Terraform <abbr title=\"Infrastructure as Code\">IaC</abbr></strong>, <strong><abbr title=\"Continuous Integration / Continuous Delivery\">CI/CD</abbr> pipelines</strong>, <strong><abbr title=\"Retrieval-Augmented Generation\">RAG</abbr> data ingestion</strong>, evaluation harnesses, and <strong>OpenTelemetry + BigQuery</strong> sinks."
},
{
"n": "CI/CD evaluation gate",
"tag": "AgentEvaluator.evaluate() in CI",
"what": "An automated test stage in Cloud Build or GitHub Actions triggered on code or prompt changes.",
"why": "Halts deployment (non-zero exit code) whenever trajectory or rubric scores drop below <code>test_config.json</code> thresholds."
},
{
"n": "Session-pinned canary",
"tag": "Pinned by session_id",
"what": "Gradual traffic shifting (5% → 25% → 100%) using consistent hashing or header routing on <code>session_id</code>.",
"why": "Routes a small slice of <strong>brand-new sessions</strong> to Agent <code>v2</code> while keeping existing in-flight <code>session_id</code> conversations on Agent <code>v1</code> so state schemas never break mid-chat."
},
{
"n": "Blue/Green deployment",
"tag": "Instant cutover + warm standby",
"what": "Brings the new revision (Green) up alongside the stable revision (Blue) and switches router traffic cleanly once verified.",
"why": "Keeps Blue warm so active sessions drain gracefully and rollback takes a single click if telemetry alerts fire."
},
{
"n": "Shadow (dark launch) mode",
"tag": "Async mirror + mocked write tools",
"what": "Mirrors live production requests asynchronously to Agent <code>v2</code> in the background while only <code>v1</code>’s reply is shown to the user.",
"why": "Evaluates real-world performance with zero user impact—provided all <strong>mutating/write tools are mocked</strong> so <code>v2</code> never executes duplicate transactions!"
}
],
"goals": [
"Bootstrap multi-environment Terraform <abbr title=\"Infrastructure as Code\">IaC</abbr>, <abbr title=\"Retrieval-Augmented Generation\">RAG</abbr> ingestion pipelines, automated <abbr title=\"Continuous Integration / Continuous Delivery\">CI/CD</abbr> evaluation gates, and telemetry sinks using the <strong>Google Cloud Agent Starter Pack</strong>.",
"Execute safe stateful rollouts using <strong>session-pinned canary routing</strong> (pinned by <code>session_id</code>), <strong>Blue/Green cutovers</strong>, and <strong>shadow (dark launch) testing</strong> with mocked mutating tools."
]
},
"sec4-evaluation": {
"concepts": [
{
"n": "EvalSet and EvalCase",
"tag": "*.evalset.json",
"what": "<abbr title=\"Agent Development Kit\">ADK</abbr>’s golden test dataset format storing multi-turn <strong>Invocation</strong> objects.",
"why": "Records <code>user_content</code>, expected <code>intermediate_data.tool_uses</code> (tool names + arguments), and reference <code>final_response</code> for repeatable regression testing."
},
{
"n": "ToolTrajectoryCriterion",
"tag": "EXACT | IN_ORDER | ANY_ORDER",
"what": "Configures <code>tool_trajectory_avg_score</code> inside <code>test_config.json</code> to verify tool call sequences.",
"why": "Lets you choose <strong><code>EXACT</code></strong> (strict 1-to-1), <strong><code>IN_ORDER</code></strong> (allows extra helper tools), or <strong><code>ANY_ORDER</code></strong> (for concurrent parallel tool calls)."
},
{
"n": "ADK RubricBasedCriterion",
"tag": "RubricContent(text_property=…)",
"what": "Powers <code>rubric_based_final_response_quality_v1</code> and <code>rubric_based_tool_use_quality_v1</code> using an <abbr title=\"Large Language Model\">LLM</abbr> autorater.",
"why": "Grades custom pass/fail domain rules (like required <abbr title=\"Annual Percentage Rate\">APR</abbr> disclosures or search query scoping) without needing a fixed reference string."
},
{
"n": "PointwiseMetric & RubricBasedMetric",
"tag": "EvalTask single-agent scoring",
"what": "Platform Evaluation <abbr title=\"Software Development Kit\">SDK</abbr> classes passed into <code>EvalTask.evaluate()</code>.",
"why": "Scores a single agent’s output against static criteria (<code>PointwiseMetricPromptTemplate</code>) or dynamically generated per-prompt rubrics (<code>RubricBasedMetric</code>)."
},
{
"n": "PairwiseMetric (A/B autorater)",
"tag": "Baseline v1 vs. Candidate v2",
"what": "Side-by-side <abbr title=\"Large Language Model\">LLM</abbr> judge using <code>PairwiseMetricPromptTemplate</code>.",
"why": "Compares a <strong>Candidate Agent (v2)</strong> directly against a <strong>Baseline Agent (v1)</strong> to compute Win/Loss/Tie percentages before promoting <code>v2</code>."
}
],
"goals": [
"Build golden <code>*.evalset.json</code> datasets to test tool-call sequences (<code>EXACT</code>, <code>IN_ORDER</code>, and <code>ANY_ORDER</code> trajectory match modes) via <code>AgentEvaluator.evaluate()</code>.",
"Configure <abbr title=\"Agent Development Kit\">ADK</abbr> <code>RubricBasedCriterion</code> (<code>rubric_based_final_response_quality_v1</code>, <code>rubric_based_tool_use_quality_v1</code>) and Platform <abbr title=\"Software Development Kit\">SDK</abbr> autoraters (<code>PointwiseMetric</code>, <code>RubricBasedMetric</code>, <code>PairwiseMetric</code>)."
]
},
"sec4-observability": {
"concepts": [
{
"n": "Cloud Trace and OpenTelemetry",
"tag": "invocation → call_llm → execute_tool",
"what": "Visualizes a multi-agent turn as a hierarchical waterfall of nested OpenTelemetry spans.",
"why": "Isolates exact latency bottlenecks (<abbr title=\"Time-To-First-Token\">TTFT</abbr> vs. tool wait time) and input/output token counts per hop across sub-agents."
},
{
"n": "W3C traceparent propagation",
"tag": "traceparent: 00-trace_id-span_id-01",
"what": "Standard HTTP context header injected into outbound remote <strong><abbr title=\"Agent2Agent Protocol\">A2A</abbr></strong> and <strong><abbr title=\"Model Context Protocol\">MCP</abbr></strong> calls.",
"why": "Stitches child spans from remote microservices directly under the parent orchestrator’s trace ID in Cloud Trace."
},
{
"n": "BigQuery telemetry flywheel",
"tag": "Cloud Logging sink → BigQuery",
"what": "Streams structured JSON agent logs (with <code>trace_id</code>, trajectories, and user feedback) into BigQuery tables.",
"why": "Powers offline autorater sampling (5% live traffic) and automatic harvesting of failed turns into golden <code>*.evalset.json</code> test cases."
},
{
"n": "Provisioned Throughput & jitter",
"tag": "Guaranteed capacity + backoff",
"what": "<strong>Provisioned Throughput:</strong> Reserves dedicated model capacity on the Gemini Enterprise Agent Platform to prevent HTTP 429 quota errors during predictable peaks.",
"why": ""
}
],
"goals": [
"Inspect multi-agent execution spans in <strong>Cloud Trace</strong> (propagating W3C <code>traceparent</code> headers across <abbr title=\"Agent2Agent Protocol / Model Context Protocol\">A2A/MCP</abbr>), export logs to <strong>BigQuery</strong> for asynchronous autorater sampling and golden dataset harvesting, and tune production resilience with <strong>Provisioned Throughput</strong> and exponential backoff with jitter."
]
},
"sec4-runtimes": {
"concepts": [
{
"n": "Managed Agent Runtime",
"tag": "AdkApp (zero Dockerfile)",
"what": "The turnkey managed runtime on the Gemini Enterprise Agent Platform.",
"why": "Wrap your <abbr title=\"Agent Development Kit\">ADK</abbr> agent in <code>AdkApp</code> for zero-Dockerfile hosting with auto-wired managed <strong>Sessions</strong>, <strong>Memory Bank</strong>, <strong>Agent Identity</strong>, and <strong>Cloud Trace</strong>."
},
{
"n": "Serverless Cloud Run",
"tag": "Custom container + scale-to-zero",
"what": "Google Cloud’s managed serverless platform for custom Docker containers (any language or OS binary).",
"why": "Delivers fast <strong>scale-to-zero</strong> cost efficiency, high async <abbr title=\"Input/Output\">I/O</abbr> concurrency per instance (50–80 concurrent requests), and built-in revision traffic splitting for canary rollouts."
},
{
"n": "GKE with Agent Sandbox",
"tag": "gVisor / microVMs + GPU/TPU pools",
"what": "Kubernetes cluster hosting paired with per-execution kernel sandboxing on <abbr title=\"Google Kubernetes Engine\">GKE</abbr>.",
"why": "Provides custom <strong><abbr title=\"Graphics Processing Unit / Tensor Processing Unit\">GPU/TPU</abbr> node pools</strong> (for self-hosted open models) and strict kernel isolation (<strong>gVisor / Kata microVMs</strong> + pre-warmed pools) for running untrusted code safely."
}
],
"goals": [
"Select the optimal hosting platform based on managed session/memory integration (<strong>Agent Runtime</strong>), custom containers with serverless scale-to-zero (<strong>Cloud Run</strong> + external <code>SessionService</code>), or kernel-isolated code execution and custom <abbr title=\"Graphics Processing Unit / Tensor Processing Unit\">GPU/TPU</abbr> pools (<strong><abbr title=\"Google Kubernetes Engine\">GKE</abbr> with Agent Sandbox</strong>)."
]
},
"sec5-callbacks": {
"concepts": [
{
"n": "before_agent_callback & after_agent_callback",
"tag": "Override return: types.Content",
"what": "Runs at the very start (or end) of an agent’s invocation before any model or sub-agent work begins.",
"why": "If <code>before_agent_callback(callback_context)</code> returns a <code>types.Content</code> object instead of <code>None</code>, <abbr title=\"Agent Development Kit\">ADK</abbr> skips the entire agent execution immediately!"
},
{
"n": "before_model_callback & after_model_callback",
"tag": "Override return: LlmResponse",
"what": "Runs right before (or after) <abbr title=\"Agent Development Kit\">ADK</abbr> sends <code>llm_request</code> to the Gemini API.",
"why": "Returning an <strong><code>LlmResponse</code></strong> from <code>before_model_callback</code> skips the Gemini API call completely—delivering verbatim legal disclaimers at <strong>$0 token cost</strong>!"
},
{
"n": "before_tool_callback & after_tool_callback",
"tag": "Override return: Python dict",
"what": "Runs right before (or after) a Python tool function executes, inspecting <code>tool</code>, <code>args: dict</code>, and <code>tool_context</code>.",
"why": "Returning a Python <strong><code>dict</code></strong> from <code>before_tool_callback</code> skips executing the actual tool and passes your <code>dict</code> back to the agent as the tool observation!"
},
{
"n": "Tool-level vs. conversation-level HITL",
"tag": "1 API approval vs. full call transfer",
"what": "<strong>Tool-level <abbr title=\"Human-in-the-Loop\">HITL</abbr>:</strong> Intercepts a specific high-consequence tool call (via <code>before_tool_callback</code> or <abbr title=\"Agent Development Kit\">ADK</abbr> tool confirmation) to pause execution until a human reviewer approves the exact tool parameters.",
"why": ""
}
],
"goals": [
"Intercept agent runs (<code>before_agent_callback</code> returning <code>types.Content</code>), model requests (<code>before_model_callback</code> returning <code>LlmResponse</code>), and tool parameters (<code>before_tool_callback</code> returning <code>dict</code>), and distinguish tool-level <abbr title=\"Human-in-the-Loop\">HITL</abbr> from <abbr title=\"Customer Engagement Suite\">CES</abbr> live-agent handoff."
]
},
"sec5-identity": {
"concepts": [
{
"n": "Managed Agent Identity",
"tag": "",
"what": "",
"why": ""
},
{
"n": "Agent Identity Auth Manager",
"tag": "",
"what": "",
"why": ""
},
{
"n": "Principal Access Boundary (PAB)",
"tag": "",
"what": "",
"why": ""
},
{
"n": "IAM Deny Policy",
"tag": "",
"what": "<strong>1 Agent = 1 Dedicated Managed Agent Identity</strong> (for service-to-service calls &amp; audit attribution).",
"why": ""
}
],
"goals": [
"Isolate agents with verifiable <abbr title=\"Secure Production Identity Framework for Everyone\">SPIFFE</abbr> Agent Identities (24-hour X.509 rotation and default <abbr title=\"Mutual TLS\">mTLS</abbr> + <abbr title=\"Demonstrating Proof-of-Possession\">DPoP</abbr> token binding).",
"Bound eligibility with Principal Access Boundaries (<abbr title=\"Principal Access Boundary\">PAB</abbr>, up to 500 resources per rule), apply <abbr title=\"Identity and Access Management\">IAM</abbr> Deny/Allow in sequence, and stop Confused Deputy attacks via OAuth 2.0 Auth Manager (3-legged vs. 2-legged/<abbr title=\"OpenID Connect\">OIDC</abbr> modes)."
]
},
"sec5-perimeter": {
"concepts": [
{
"n": "Agent Gateway (ingress and egress)",
"tag": "Client-to-Agent & Agent-to-Anywhere",
"what": "The managed network front door and egress proxy for AI agents, <abbr title=\"Agent2Agent Protocol\">A2A</abbr> endpoints, and <abbr title=\"Model Context Protocol\">MCP</abbr> servers.",
"why": ""
},
{
"n": "Gateway native governance engines",
"tag": "IAP UAP + semantic + token caps",
"what": "<strong><abbr title=\"Identity-Aware Proxy\">IAP</abbr> Unified Access Policies (<abbr title=\"Unified Access Policies\">UAP</abbr>):</strong> Links an agent’s <abbr title=\"Secure Production Identity Framework for Everyone\">SPIFFE</abbr> identity to target endpoints in Agent Registry on a default-deny basis (turn off boolean org policy <code>constraints/iam.managed.disableAccessPolicyBindings</code>, enable <abbr title=\"Identity-Aware Proxy\">IAP</abbr> in Audit or Enforce mode, and grant <code>roles/iap.egressor</code>).",
"why": ""
},
{
"n": "Gateway logging and tracing",
"tag": "agentGatewayInfo.mcpInfo & telemetryPolicies",
"what": "<strong>Cloud Logging:</strong> Uses <code>resource.type=“networkservices.googleapis.com/Gateway”</code> and populates <code>agentGatewayInfo</code> (with <code>mcpInfo</code> recording the exact <abbr title=\"Model Context Protocol\">MCP</abbr> method and tool name, plus <code>agentRegistryResource</code>) and <code>serviceExtensionsInfo</code> (<abbr title=\"Identity-Aware Proxy\">IAP</abbr>/Model Armor verdict).",
"why": ""
},
{
"n": "Model Armor",
"tag": "Stateless single-turn screening",
"what": "Google Cloud’s model-agnostic AI security service that screens prompts (ingress) and model/tool outputs (egress) for <strong>Prompt Injection and Jailbreaks</strong>, <strong>Malicious URLs</strong>, <strong>Responsible AI safety</strong>, and <strong>Sensitive Data (<abbr title=\"Sensitive Data Protection\">SDP</abbr>)</strong>.",
"why": ""
},
{
"n": "Sensitive Data Protection (SDP)",
"tag": "Advanced SDP + de-identify template",
"what": "Integrated inside Model Armor templates (requiring Advanced <abbr title=\"Sensitive Data Protection\">SDP</abbr> with a de-identify template and <code>INSPECT_AND_BLOCK</code> enforcement mode).",
"why": "Masks sensitive infoTypes (credit card numbers, SSNs, API keys) inline or replaces them with cryptographic surrogate tokens."
},
{
"n": "Model Armor Floor Settings",
"tag": "Organization or Folder baseline",
"what": "A mandatory minimum safety threshold configured at the Google Cloud <strong>Organization or Folder</strong> level.",
"why": "Child project owners can make local Model Armor templates stricter than the Floor Setting, but can never weaken or disable the baseline!"
}
],
"goals": [
"Distinguish <strong>Client-to-Agent (ingress)</strong> vs. <strong>Agent-to-Anywhere (egress)</strong> gateway topologies, service agent <abbr title=\"Identity and Access Management\">IAM</abbr> bindings, and Private Service Connect (<abbr title=\"Private Service Connect\">PSC</abbr>) egress for <abbr title=\"Virtual Private Cloud Service Controls\">VPC-SC</abbr>.",
"Configure Agent Gateway’s 5 native governance engines (<abbr title=\"Identity-Aware Proxy\">IAP</abbr> Unified Access Policies, semantic governance, token management, custom authz extensions, and Model Armor) and monitor traffic via Cloud Logging (<code>agentGatewayInfo.mcpInfo</code>) and OpenTelemetry <code>telemetryPolicies</code>.",
"Screen prompts and responses for prompt injection and <abbr title=\"Personally Identifiable Information\">PII</abbr> (single <abbr title=\"Sensitive Data Protection\">SDP</abbr> match = redact; multi-detector violation = block), enforce Org Floor Settings, and know <abbr title=\"Agent2Agent Protocol\">A2A</abbr>/<abbr title=\"Model Context Protocol\">MCP</abbr> scanning and modality rules."
]
},
"sec5-registry": {
"concepts": [
{
"n": "Agent Registry (with Management Boundary)",
"tag": "Folder/Org auto-discovery (up to 5,000 res)",
"what": "The centralized enterprise directory for registering, discovering, and governing deployed <strong><abbr title=\"Agent2Agent Protocol\">A2A</abbr> Agent Cards</strong> and <strong><abbr title=\"Model Context Protocol\">MCP</abbr> tool servers</strong> (scaling up to <strong>5,000 resources per Agent Gateway</strong>).",
"why": ""
},
{
"n": "Agent Registry (without Management Boundary)",
"tag": "Manual Service & Binding resources",
"what": "A designated governance project setup for workloads outside a folder boundary (other GCP projects, on-premises, or multi-cloud).",
"why": "Treats external endpoints as remote components and registers them manually using <strong><code>Service</code></strong> and <strong><code>Binding</code></strong> resources so Agent Gateway (<abbr title=\"Identity-Aware Proxy\">IAP</abbr> <abbr title=\"Unified Access Policies\">UAP</abbr>) can govern them."
},
{
"n": "Semantic metadata governance",
"tag": "Mutually exclusive skills & schemas",
"what": "Enforcing mutually exclusive, specific skill descriptions and strict JSON schemas in <strong>Agent Registry</strong>.",
"why": "Ensures orchestrator LLMs route tasks accurately without hallucinating, and vets <abbr title=\"Model Context Protocol\">MCP</abbr> tool metadata centrally."
},
{
"n": "Application Design Center (ADC) & App Hub",
"tag": "ADC (Day 0) & App Hub (Day 2)",
"what": "<strong><abbr title=\"Application Design Center\">ADC</abbr>:</strong> Allows platform architects to author, version, and publish <strong>pre-hardened infrastructure templates</strong> (embedding Agent Gateway, Model Armor, and least-privilege <abbr title=\"Identity and Access Management\">IAM</abbr>) that developers deploy from.",
"why": ""
}
],
"goals": [
"Catalog <abbr title=\"Agent2Agent Protocol\">A2A</abbr> Agent Cards and <abbr title=\"Model Context Protocol\">MCP</abbr> servers in <strong>Agent Registry</strong> (<strong>with a Management Boundary</strong> for folder/org auto-discovery vs. <strong>without a Management Boundary</strong> using <code>Service</code> and <code>Binding</code> resources, scaling up to 5,000 resources per gateway), alongside Application Design Center (<abbr title=\"Application Design Center\">ADC</abbr>) and App Hub."
]
}
}
};
