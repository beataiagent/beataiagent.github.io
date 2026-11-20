/* LINE API Expert Learning Roadmap data */
window.ROADMAP_LINE = {
  stages: [
    {
      k: "lae1", n: "Domain 1", t: "Messaging API Core", w: "Core", c: "#06C755",
      doc: "https://developers.line.biz/en/docs/messaging-api/overview/",
      l: [
        ["lae1-webhooks", "1.1", "Providers, Channels & Webhooks"],
        ["lae1-messages", "1.2", "Message Types & Flex Message"],
        ["lae1-richmenu", "1.3", "Rich Menu, Audience & Delivery"]
      ],
      r: [
        ["lae1-patterns", "1.4", "Webhook Architecture Patterns", "r"],
        ["lae1-lab", "", "Flex Simulator & Bot Lab", "q"]
      ]
    },
    {
      k: "lae2", n: "Domain 2", t: "LINE Login & Identity", w: "Auth", c: "#06C755",
      doc: "https://developers.line.biz/en/docs/line-login/overview/",
      l: [
        ["lae2-oauth", "2.1", "OAuth 2.0 Flow & PKCE"],
        ["lae2-oidc", "2.2", "OpenID Connect & ID Tokens"],
        ["lae2-linking", "2.3", "Account Linking & Bot-Link"]
      ],
      r: [
        ["lae2-security", "2.4", "Identity Security Checklist", "r"]
      ]
    },
    {
      k: "lae3", n: "Domain 3", t: "LIFF (Front-end Framework)", w: "WebView", c: "#06C755",
      doc: "https://developers.line.biz/en/docs/liff/overview/",
      l: [
        ["lae3-lifecycle", "3.1", "LIFF Lifecycle, Init & Routing"],
        ["lae3-sdk", "3.2", "LIFF SDK & Native Bridge APIs"],
        ["lae3-debug", "3.3", "Debugging, Performance & Auth"]
      ],
      r: [
        ["lae3-lab", "", "Build & Deploy a LIFF App", "q"]
      ]
    },
    {
      k: "lae4", n: "Domain 4", t: "MINI App & Ecosystem", w: "Ecosystem", c: "#06C755",
      doc: "https://developers.line.biz/en/docs/line-mini-app/discover/overview/",
      l: [
        ["lae4-miniapp", "4.1", "LINE MINI App & Service Messages"],
        ["lae4-beacon", "4.2", "LINE Beacon & O2O Triggers"],
        ["lae4-lon-ai", "4.3", "LON & AI Agent Integration"]
      ],
      r: [
        ["lae4-matrix", "4.4", "Ecosystem Decision Matrix", "r"]
      ]
    },
    {
      k: "lae5", n: "Domain 5", t: "Production, Scale & Security", w: "Prod Ops", c: "#06C755",
      doc: "https://developers.line.biz/en/docs/messaging-api/receiving-messages/",
      l: [
        ["lae5-scale", "5.1", "Async Queues & Burst Traffic"],
        ["lae5-tokens", "5.2", "Token v2.1 & Secret Rotation"],
        ["lae5-obs", "5.3", "Observability, Testing & CI/CD"]
      ],
      r: [
        ["lae5-review", "5.4", "Production Pitfalls Review", "r"]
      ]
    },
    {
      k: "lae6", n: "Domain 6", t: "Community & LAE Program", w: "Leadership", c: "#06C755",
      doc: "https://developers.line.biz/en/community/",
      l: [
        ["lae6-content", "6.1", "Tech Writing, OSS & Portfolio"],
        ["lae6-community", "6.2", "Speaking, Meetups & Mentoring"]
      ],
      r: [
        ["lae6-prep", "", "LAE Portfolio & Interview Prep", "q"]
      ]
    }
  ],
  data: {
    domains: {
      lae1: [
        "<strong>Master webhook mechanics (1.1):</strong> Understand Provider-scoped <code>userId</code>, verify every request with <code>X-Line-Signature</code> (HMAC-SHA256), and handle webhook redelivery idempotently using <code>webhookEventId</code>.",
        "<strong>Craft rich conversational UX (1.2):</strong> Choose between Reply, Push, Multicast, Narrowcast, and Broadcast APIs, and design responsive JSON layouts with <strong>Flex Message</strong>, Quick Replies, and Postback actions.",
        "<strong>Optimize engagement and delivery (1.3):</strong> Switch <strong>Rich Menus</strong> per user via aliases, target Audience Groups, track campaigns with Aggregation Units, and prevent duplicate sends with <code>X-Line-Retry-Key</code>."
      ],
      lae2: [
        "<strong>Implement secure OAuth 2.0 (2.1):</strong> Use Authorization Code Flow with <code>state</code>, <code>nonce</code>, and <strong>PKCE</strong> for SPAs and mobile clients.",
        "<strong>Verify identity with OIDC (2.2):</strong> Validate ID Token signatures and claims on the backend via <code>/oauth2/v2.1/verify</code> or JWKS—never trust raw client-supplied user IDs.",
        "<strong>Unify user identity (2.3):</strong> Connect LINE Official Account users to your existing member database using the official <strong>Account Linking</strong> flow and <code>bot_prompt</code>."
      ],
      lae3: [
        "<strong>Control the LIFF lifecycle (3.1):</strong> Initialize with <code>liff.init()</code>, choose <code>compact</code>, <code>tall</code>, or <code>full</code> view sizes, and handle deep-link routing cleanly via <code>liff.state</code>.",
        "<strong>Bridge web and native LINE features (3.2):</strong> Use <code>sendMessages()</code>, <strong>Share Target Picker</strong>, <code>scanCodeV2()</code>, and permanent links to build seamless in-chat web apps.",
        "<strong>Ship fast, secure LIFF apps (3.3):</strong> Verify LIFF ID/Access Tokens server-side, debug in-app WebViews with <strong>LIFF Inspector</strong>, and optimize cold-start latency."
      ],
      lae4: [
        "<strong>Build native-like LINE MINI Apps (4.1):</strong> Leverage verified LIFF infrastructure, send transactional <strong>Service Messages</strong>, and pass LINE MINI App review guidelines.",
        "<strong>Connect physical spaces with LINE Beacon (4.2):</strong> Trigger proximity experiences from BLE hardware events (<code>enter</code>, <code>banner</code>, <code>stay</code>) for retail and events.",
        "<strong>Extend with LON & AI Agents (4.3):</strong> Deliver phone-number-based notifications via <strong>LINE Official Notification</strong> and integrate LLM/ADK agents using Loading Animation API and Quote Tokens."
      ],
      lae5: [
        "<strong>Decouple webhooks for scale (5.1):</strong> Return HTTP <code>200 OK</code> immediately and offload processing to Cloud Tasks, Pub/Sub, or queues to survive flash-sale spikes.",
        "<strong>Harden token & secret management (5.2):</strong> Prefer <strong>Channel Access Token v2.1</strong> (JWT assertion) or Stateless tokens, rotate Channel Secrets with zero downtime, and store credentials in Secret Manager.",
        "<strong>Operate with confidence (5.3):</strong> Correlate logs with <code>webhookEventId</code>, monitor quota/rate limits, mock LINE APIs in CI, and deploy safely."
      ],
      lae6: [
        "<strong>Build a verifiable public track record (6.1):</strong> Ship production LINE integrations, open-source starter kits/SDKs, and deep-dive technical articles.",
        "<strong>Give back to the developer community (6.2):</strong> Answer questions in LINE Developers groups, speak at Meetups/Hackathons/LINE Dev Day, and mentor fellow builders."
      ]
    },
    modules: {
      "lae1-webhooks": {
        url: "https://developers.line.biz/en/docs/messaging-api/receiving-messages/",
        goals: [
          "Explain how Providers scope <code>userId</code> across Messaging API, LINE Login, and LIFF channels.",
          "Verify <code>X-Line-Signature</code> using raw request bytes and Channel Secret before parsing JSON.",
          "Handle webhook redelivery safely with <code>deliveryContext.isRedelivery</code> and <code>webhookEventId</code>."
        ],
        concepts: [
          {
            n: "Provider vs. Channel",
            tag: "Consistent userId boundary",
            what: "A <strong>Provider</strong> represents the organization or developer; <strong>Channels</strong> (Messaging API, LINE Login, MINI App) live inside a Provider.",
            why: "A user gets the exact same <code>userId</code> across all channels under the same Provider—putting LIFF and Messaging API in different Providers breaks user matching!"
          },
          {
            n: "X-Line-Signature verification",
            tag: "HMAC-SHA256 on raw body",
            what: "A base64-encoded HMAC-SHA256 digest of the raw HTTP request body signed with your Channel Secret.",
            why: "Proves the webhook genuinely came from LINE Platform and prevents forged webhook attacks. Always compute against the raw bytes before JSON parsing."
          },
          {
            n: "Reply Token lifecycle",
            tag: "Free reply · 1-time · ~1 min TTL",
            what: "A short-lived token included in user-initiated webhook events (<code>message</code>, <code>postback</code>, <code>follow</code>).",
            why: "Reply messages are <strong>free</strong> (don't count against your monthly Push quota), but each token can only be used once and expires quickly—respond fast!"
          },
          {
            n: "Webhook Redelivery & Idempotency",
            tag: "webhookEventId + isRedelivery",
            what: "When enabled, LINE retries failed webhooks and flags them with <code>deliveryContext.isRedelivery: true</code>.",
            why: "Deduplicating on <code>webhookEventId</code> in Redis/DB guarantees a retried event never triggers duplicate orders or double messages."
          }
        ],
        resources: [
          { kind: "doc", label: "Messaging API Overview", url: "https://developers.line.biz/en/docs/messaging-api/overview/" },
          { kind: "doc", label: "Verify Webhook Signatures", url: "https://developers.line.biz/en/docs/messaging-api/receiving-messages/#verifying-signature" }
        ]
      },
      "lae1-messages": {
        url: "https://developers.line.biz/en/docs/messaging-api/using-flex-messages/",
        goals: [
          "Select the right sending API (Reply, Push, Multicast, Narrowcast, Broadcast) for cost and scale.",
          "Structure Flex Messages (Bubble, Carousel, Box, Filler, Spacer, Responsive sizing) cleanly."
        ],
        concepts: [
          {
            n: "Reply vs. Push vs. Multicast vs. Narrowcast",
            tag: "Cost & targeting spectrum",
            what: "<strong>Reply</strong> (free, 1 user, needs token), <strong>Push</strong> (1 user anytime), <strong>Multicast</strong> (up to 500 userIds), <strong>Narrowcast</strong> (targeted by Audience/demographics), <strong>Broadcast</strong> (all followers).",
            why: "Picking Reply whenever possible saves message quota; Multicast/Narrowcast avoids slow sequential Push loops."
          },
          {
            n: "Flex Message JSON layout",
            tag: "Bubble / Carousel + CSS Flexbox",
            what: "A declarative JSON UI format supporting <code>header</code>, <code>hero</code>, <code>body</code>, and <code>footer</code> blocks with vertical, horizontal, and baseline boxes.",
            why: "Delivers app-like receipts, booking cards, and product carousels natively inside LINE chat across iOS, Android, and Desktop."
          },
          {
            n: "Quick Reply & Postback Actions",
            tag: "Guided input + hidden payload",
            what: "<strong>Quick Reply</strong> shows tappable chips above the keyboard; <strong>Postback</strong> sends structured data silently to your webhook without cluttering chat.",
            why: "Reduces typing friction and lets you pass machine-readable state (e.g. <code>action=buy&item=42</code>) plus optional <code>displayText</code> or <code>inputOption</code>."
          },
          {
            n: "Loading Animation & Quote Token",
            tag: "Modern chat UX",
            what: "<code>/v2/bot/chat/loading/start</code> displays a typing indicator (5–60s); <code>quoteToken</code> lets your bot reply directly to a specific user message bubble.",
            why: "Essential when calling slow backends or LLMs so users see immediate feedback and clear threading."
          }
        ],
        resources: [
          { kind: "doc", label: "Flex Message Simulator", url: "https://developers.line.biz/flex-simulator/" },
          { kind: "doc", label: "Messaging API Reference", url: "https://developers.line.biz/en/reference/messaging-api/" }
        ]
      },
      "lae1-richmenu": {
        url: "https://developers.line.biz/en/docs/messaging-api/using-rich-menus/",
        goals: [
          "Design multi-tab Rich Menus using Rich Menu Aliases and <code>richmenuswitch</code> actions.",
          "Use <code>X-Line-Retry-Key</code> and Aggregation Units for safe, measurable campaigns."
        ],
        concepts: [
          {
            n: "Rich Menu Alias & Per-User Menus",
            tag: "Instant tab switching",
            what: "Assigns a stable alias ID to a Rich Menu so <code>richmenuswitch</code> actions flip menus client-side without a webhook round-trip.",
            why: "Gives users instant multi-tab navigation and lets you personalize menus (e.g. Guest vs. Member vs. VIP) via user-level linking."
          },
          {
            n: "Audience Groups & Narrowcast",
            tag: "Segmented messaging",
            what: "Upload user IDs or build click/impression audiences to send targeted Narrowcast campaigns with optional demographic filters.",
            why: "Boosts conversion and reduces block rates compared to blasting every follower with Broadcast."
          },
          {
            n: "X-Line-Retry-Key (Idempotent Send)",
            tag: "UUID header for Push/Multicast",
            what: "A client-generated UUID header sent on Push, Multicast, Broadcast, and Narrowcast API requests.",
            why: "If a network timeout occurs, retrying with the same <code>X-Line-Retry-Key</code> guarantees LINE will not deliver duplicate messages."
          },
          {
            n: "Aggregation Units & Insight API",
            tag: "Campaign analytics",
            what: "Attach a custom <code>customAggregationUnit</code> name to messages and query open/click/impression metrics via the Insight API.",
            why: "Measures ROI and A/B tests different Flex Message designs with real user engagement data."
          }
        ],
        resources: [
          { kind: "doc", label: "Using Rich Menus", url: "https://developers.line.biz/en/docs/messaging-api/using-rich-menus/" },
          { kind: "doc", label: "Retrying Failed API Requests", url: "https://developers.line.biz/en/docs/messaging-api/retrying-api-request/" }
        ]
      },
      "lae1-patterns": {
        url: "https://developers.line.biz/en/docs/messaging-api/overview/",
        goals: [
          "Review the canonical Messaging API patterns: fast ACK, idempotency, Reply-first, and Flex templating."
        ],
        concepts: [
          {
            n: "Reply-First, Push-Fallback",
            tag: "Quota-saving pattern",
            what: "Use <code>replyToken</code> for synchronous responses under 30s; fall back to Push only for async long-running jobs.",
            why: "Keeps monthly Messaging API bills predictable even at high chat volumes."
          },
          {
            n: "Template Engine for Flex JSON",
            tag: "Maintainable UI code",
            what: "Generate Flex Message JSON from typed builders/templates rather than hand-concatenating raw strings.",
            why: "Prevents broken JSON payloads (e.g. empty text strings, which LINE rejects with HTTP 400)."
          }
        ],
        resources: [
          { kind: "doc", label: "LINE Bot SDKs (Node, Python, Go, Java)", url: "https://developers.line.biz/en/docs/messaging-api/line-bot-sdk/" }
        ]
      },
      "lae1-lab": {
        url: "https://developers.line.biz/flex-simulator/",
        goals: [
          "Build a working Messaging API bot with signature verification, Rich Menu alias switching, and a dynamic Flex Carousel."
        ],
        concepts: [
          {
            n: "Lab 1: Flex Carousel + Postback State",
            tag: "Hands-on exercise",
            what: "Design a product/booking carousel in Flex Message Simulator, wire Postback actions with JSON payloads, and respond using Loading Animation + Reply API.",
            why: "Covers the exact day-to-day workflow every LINE API Expert masters."
          }
        ],
        resources: [
          { kind: "doc", label: "Flex Message Simulator", url: "https://developers.line.biz/flex-simulator/" },
          { kind: "doc", label: "Messaging API Quickstart", url: "https://developers.line.biz/en/docs/messaging-api/getting-started/" }
        ]
      },
      "lae2-oauth": {
        url: "https://developers.line.biz/en/docs/line-login/integrate-line-login/",
        goals: [
          "Implement LINE Login v2.1 Authorization Code Flow with CSRF <code>state</code>, OIDC <code>nonce</code>, and PKCE."
        ],
        concepts: [
          {
            n: "Authorization Code Flow",
            tag: "Redirect → code → token exchange",
            what: "Redirects user to <code>access.line.me/oauth2/v2.1/authorize</code>, returns a short-lived authorization <code>code</code>, and exchanges it server-side for tokens.",
            why: "Keeps Channel Secret safely on the backend and never exposes long-lived credentials in browser URLs."
          },
          {
            n: "state & nonce Protection",
            tag: "Anti-CSRF & anti-replay",
            what: "<code>state</code> binds the callback to the user's browser session; <code>nonce</code> is echoed inside the signed ID Token.",
            why: "Blocks Cross-Site Request Forgery (CSRF) and token replay attacks during login."
          },
          {
            n: "PKCE (Proof Key for Code Exchange)",
            tag: "code_verifier + code_challenge (S256)",
            what: "Binds the authorization request to the token exchange using a cryptographic SHA-256 challenge.",
            why: "Required best practice for native mobile apps and SPAs where a client secret cannot be kept confidential."
          }
        ],
        resources: [
          { kind: "doc", label: "Integrate LINE Login with Web App", url: "https://developers.line.biz/en/docs/line-login/integrate-line-login/" },
          { kind: "doc", label: "Integrate PKCE with LINE Login", url: "https://developers.line.biz/en/docs/line-login/integrate-pkce/" }
        ]
      },
      "lae2-oidc": {
        url: "https://developers.line.biz/en/docs/line-login/verify-id-token/",
        goals: [
          "Verify ID Tokens securely on the backend and request the <code>openid</code>, <code>profile</code>, and <code>email</code> scopes properly."
        ],
        concepts: [
          {
            n: "ID Token Verification",
            tag: "POST /oauth2/v2.1/verify",
            what: "A JWT containing <code>iss</code>, <code>sub</code> (userId), <code>aud</code> (channelId), <code>exp</code>, <code>nonce</code>, and optional <code>email</code>.",
            why: "You must always verify the signature, audience, issuer, and expiry on your server—decoding a JWT on the client proves nothing."
          },
          {
            n: "Scopes & Email Permission",
            tag: "openid · profile · email",
            what: "LINE Login requires explicit Console approval to request the <code>email</code> scope in addition to <code>openid</code> and <code>profile</code>.",
            why: "Users can still decline sharing their email on the consent screen, so your backend must handle missing email claims gracefully."
          }
        ],
        resources: [
          { kind: "doc", label: "Verify ID Token", url: "https://developers.line.biz/en/docs/line-login/verify-id-token/" }
        ]
      },
      "lae2-linking": {
        url: "https://developers.line.biz/en/docs/messaging-api/linking-accounts/",
        goals: [
          "Connect a LINE user to an existing enterprise account securely using Account Linking and <code>bot_prompt</code>."
        ],
        concepts: [
          {
            n: "Account Linking Flow",
            tag: "linkToken → login → nonce → accountLink event",
            what: "Bot requests a <code>linkToken</code>, user logs into your website, website redirects back to LINE with a secure <code>nonce</code>, and LINE sends an <code>accountLink</code> webhook event.",
            why: "Proves both the LINE identity and your own system's session belong to the same person without trusting spoofable URL parameters."
          },
          {
            n: "Add Friend Option (bot_prompt)",
            tag: "normal vs. aggressive",
            what: "Prompts users logging in via LINE Login to also add your linked LINE Official Account as a friend.",
            why: "Grows your Official Account audience organically during web/LIFF onboarding and lets you verify friendship status via API."
          }
        ],
        resources: [
          { kind: "doc", label: "Linking User Accounts", url: "https://developers.line.biz/en/docs/messaging-api/linking-accounts/" },
          { kind: "doc", label: "Link a LINE Official Account with LINE Login", url: "https://developers.line.biz/en/docs/line-login/link-a-bot/" }
        ]
      },
      "lae2-security": {
        url: "https://developers.line.biz/en/docs/line-login/overview/",
        goals: [
          "Audit your auth implementation against the top LINE Login & LIFF security mistakes."
        ],
        concepts: [
          {
            n: "Never Trust Client-Sent userId",
            tag: "Golden Rule of LINE Auth",
            what: "Never accept a raw <code>userId</code> in your API request body from a LIFF or web frontend.",
            why: "Anyone can inspect network traffic and send another user's ID. Always send the <code>idToken</code> or <code>accessToken</code> in <code>Authorization: Bearer</code> and verify it server-side."
          }
        ],
        resources: [
          { kind: "doc", label: "LINE Login Security Best Practices", url: "https://developers.line.biz/en/docs/line-login/using-line-login-in-your-app/" }
        ]
      },
      "lae3-lifecycle": {
        url: "https://developers.line.biz/en/docs/liff/developing-liff-apps/",
        goals: [
          "Configure LIFF apps, initialize the SDK cleanly, and handle primary/secondary redirects and view sizes."
        ],
        concepts: [
          {
            n: "liff.init() & liff.ready",
            tag: "SDK bootstrap",
            what: "<code>liff.init({ liffId })</code> authenticates the WebView context; <code>liff.ready</code> resolves once initialization completes.",
            why: "All other LIFF SDK methods depend on <code>liff.init()</code>. Guard against calling <code>liff.login()</code> in infinite loops when running in an external browser."
          },
          {
            n: "View Sizes: Compact, Tall, Full",
            tag: "50% · 80% · 100% viewport",
            what: "Controls how much of the LINE chat screen the LIFF sheet covers.",
            why: "Use <code>compact</code> for quick pickers, <code>tall</code> for forms/checkouts that keep chat context visible, and <code>full</code> for rich app experiences."
          },
          {
            n: "Permanent Links & liff.state",
            tag: "https://liff.line.me/{liffId}/path",
            what: "Deep links into specific routes of your LIFF app; LINE encodes sub-paths into the <code>liff.state</code> query parameter during the primary redirect.",
            why: "Essential for sharing direct product/order pages from Flex Messages without breaking SPA client-side routing."
          }
        ],
        resources: [
          { kind: "doc", label: "Developing a LIFF App", url: "https://developers.line.biz/en/docs/liff/developing-liff-apps/" },
          { kind: "doc", label: "LIFF API Reference", url: "https://developers.line.biz/en/reference/liff/" }
        ]
      },
      "lae3-sdk": {
        url: "https://developers.line.biz/en/reference/liff/",
        goals: [
          "Use native LIFF bridge capabilities to integrate web UI directly back into LINE chats."
        ],
        concepts: [
          {
            n: "liff.sendMessages()",
            tag: "Post back to chat as user",
            what: "Sends text, image, or Flex Messages directly into the active 1-on-1 or group chat on behalf of the user.",
            why: "Bridges complex web forms (like appointment booking) back into the chat thread so both user and bot have a record. Requires <code>chat_message.write</code> scope and in-client context."
          },
          {
            n: "liff.shareTargetPicker()",
            tag: "Viral friend/group sharing",
            what: "Opens LINE's native friend/group selector so users can share Flex Messages or invites to any chat.",
            why: "Drives organic referrals and member-get-member campaigns without needing the recipient to be a follower first."
          },
          {
            n: "liff.scanCodeV2() & liff.getContext()",
            tag: "Camera QR & chat context",
            what: "<code>scanCodeV2()</code> opens the native QR scanner; <code>getContext()</code> reveals whether LIFF opened from <code>utou</code>, <code>group</code>, <code>room</code>, or <code>external</code>.",
            why: "Enables O2O check-in/loyalty scanning and context-aware UI adaptations."
          }
        ],
        resources: [
          { kind: "doc", label: "LIFF Share Target Picker", url: "https://developers.line.biz/en/docs/liff/developing-liff-apps/#sending-messages-to-friends" }
        ]
      },
      "lae3-debug": {
        url: "https://developers.line.biz/en/docs/liff/liff-plugin/",
        goals: [
          "Debug mobile WebView issues efficiently and secure backend API calls from LIFF."
        ],
        concepts: [
          {
            n: "LIFF Inspector & Mock Plugin",
            tag: "@line/liff-inspector & @line/liff-mock",
            what: "Official plugins for remote Chrome DevTools debugging of mobile LIFF WebViews and unit-testing LIFF calls locally.",
            why: "Eliminates blind debugging on iOS/Android LINE WebViews and enables automated frontend testing in CI."
          },
          {
            n: "Backend Token Verification",
            tag: "liff.getIDToken() → server verify",
            what: "Pass <code>liff.getIDToken()</code> (or <code>liff.getAccessToken()</code>) in the HTTP Authorization header to your backend API.",
            why: "Your backend verifies the token with LINE's verify endpoint and extracts the trusted <code>sub</code> (userId)."
          }
        ],
        resources: [
          { kind: "doc", label: "LIFF Plugins (Inspector & Mock)", url: "https://developers.line.biz/en/docs/liff/liff-plugin/" }
        ]
      },
      "lae3-lab": {
        url: "https://developers.line.biz/en/docs/liff/try-liff-app/",
        goals: [
          "Build and deploy a complete LIFF app with backend ID Token verification and Share Target Picker."
        ],
        concepts: [
          {
            n: "Lab 2: End-to-End LIFF Booking Flow",
            tag: "LIFF + Backend Verify + Flex Receipt",
            what: "Create a LIFF form that authenticates the user via <code>getIDToken()</code>, submits to a backend that verifies the token, and sends a Flex confirmation back via Messaging API.",
            why: "Demonstrates the complete, production-safe LIFF + Messaging API integration pattern."
          }
        ],
        resources: [
          { kind: "doc", label: "Trying the LIFF Starter App", url: "https://developers.line.biz/en/docs/liff/try-liff-app/" }
        ]
      },
      "lae4-miniapp": {
        url: "https://developers.line.biz/en/docs/line-mini-app/discover/overview/",
        goals: [
          "Understand how LINE MINI Apps extend LIFF with Service Messages, Channel Consent, and review requirements."
        ],
        concepts: [
          {
            n: "LINE MINI App vs. LIFF",
            tag: "Verified app experience",
            what: "LINE MINI Apps run on LIFF technology but add verified branding, Home tab discoverability, simplified consent, and Service Messages.",
            why: "Delivers near-native UX for retail, food ordering, and queueing without asking users to install a separate mobile app."
          },
          {
            n: "Service Messages",
            tag: "serviceNotificationToken",
            what: "Transactional notifications (e.g. order ready, reservation confirmed) sent via the dedicated LINE MINI App Service Message channel using pre-approved templates.",
            why: "Reaches users reliably even if they haven't added your Official Account as a friend."
          }
        ],
        resources: [
          { kind: "doc", label: "LINE MINI App Overview", url: "https://developers.line.biz/en/docs/line-mini-app/discover/overview/" }
        ]
      },
      "lae4-beacon": {
        url: "https://developers.line.biz/en/docs/messaging-api/using-beacons/",
        goals: [
          "Architect O2O proximity experiences using LINE Beacon hardware IDs and webhook events."
        ],
        concepts: [
          {
            n: "LINE Beacon Webhook Events",
            tag: "enter · banner · stay + hwid",
            what: "When a user with Bluetooth enabled approaches a registered LINE Beacon, LINE delivers a <code>beacon</code> webhook event containing the Hardware ID (<code>hwid</code>) and optional device message (<code>dm</code>).",
            why: "Powers contactless event check-ins, in-store coupons, and museum/exhibition guides."
          }
        ],
        resources: [
          { kind: "doc", label: "Using LINE Beacon", url: "https://developers.line.biz/en/docs/messaging-api/using-beacons/" }
        ]
      },
      "lae4-lon-ai": {
        url: "https://developers.line.biz/en/docs/messaging-api/overview/",
        goals: [
          "Integrate LINE Official Notifications (LON) and modern AI Agents (Gemini / ADK) into LINE Official Accounts."
        ],
        concepts: [
          {
            n: "LINE Official Notification (LON)",
            tag: "Phone-number-matched transactional alerts",
            what: "Sends important transactional messages (delivery updates, OTPs, payment alerts) to users matched by hashed phone number even without prior friendship.",
            why: "Replaces expensive SMS with rich, verified LINE messages at higher open rates."
          },
          {
            n: "AI Agents on LINE Messaging API",
            tag: "Webhook → ADK / Gemini → Flex",
            what: "Combines LINE's Loading Animation API, Quote Tokens, and structured Flex output with an AI Agent backend (e.g. Cloud Run + ADK + Gemini).",
            why: "Turns LINE OA into an intelligent assistant that handles multimodal inputs (images, audio, location) and executes real backend tools."
          }
        ],
        resources: [
          { kind: "doc", label: "LINE Developers Documentation", url: "https://developers.line.biz/en/docs/" }
        ]
      },
      "lae4-matrix": {
        url: "https://developers.line.biz/en/docs/",
        goals: [
          "Pick the right LINE product combination for any enterprise or startup use case."
        ],
        concepts: [
          {
            n: "OA Bot vs. LIFF vs. MINI App vs. LON",
            tag: "Solution architecture matrix",
            what: "<strong>OA Bot</strong> for conversational/notification flows; <strong>LIFF</strong> for rich custom web UI inside LINE; <strong>MINI App</strong> for verified B2C services with Service Messages; <strong>LON</strong> for phone-number transactional alerts.",
            why: "LINE API Experts are expected to recommend the cleanest combination rather than forcing every UX into chat text."
          }
        ],
        resources: [
          { kind: "doc", label: "LINE Developers Product List", url: "https://developers.line.biz/en/services/" }
        ]
      },
      "lae5-scale": {
        url: "https://developers.line.biz/en/docs/messaging-api/receiving-messages/",
        goals: [
          "Design webhook backends that handle sudden traffic bursts without dropping events or hitting timeouts."
        ],
        concepts: [
          {
            n: "Fast 200 OK + Async Queueing",
            tag: "Verify → Enqueue → Return 200",
            what: "Validate <code>X-Line-Signature</code>, push the event payload to Pub/Sub, Cloud Tasks, or SQS, and immediately return HTTP <code>200 OK</code>.",
            why: "Prevents webhook timeouts and cascading retries when downstream databases or LLM APIs slow down."
          },
          {
            n: "Rate Limits & Backoff",
            tag: "HTTP 429 + Retry-After",
            what: "Messaging API enforces per-endpoint rate limits (e.g. 2,000 req/s for Push/Reply, lower for Rich Menu & Multicast).",
            why: "Batching with Multicast (500 users/call) and using exponential backoff with <code>X-Line-Retry-Key</code> keeps large broadcasts reliable."
          }
        ],
        resources: [
          { kind: "doc", label: "Messaging API Rate Limits", url: "https://developers.line.biz/en/reference/messaging-api/#rate-limits" }
        ]
      },
      "lae5-tokens": {
        url: "https://developers.line.biz/en/docs/basics/channel-access-token/",
        goals: [
          "Choose the right Channel Access Token type and rotate secrets without downtime."
        ],
        concepts: [
          {
            n: "Channel Access Token Types",
            tag: "v2.1 JWT · Stateless · Short-lived · Long-lived",
            what: "<strong>v2.1</strong> issues short-lived tokens using a signed RSA/ECDSA JWT assertion (up to 30 active tokens); <strong>Stateless</strong> lasts 15 min with no storage needed; avoid long-lived tokens in high-security production.",
            why: "Minimizes blast radius if a token leaks and enables seamless automated rotation."
          },
          {
            n: "Zero-Downtime Secret Rotation",
            tag: "Dual-secret verification window",
            what: "Store Channel Secrets in Secret Manager and support verifying signatures against both current and previous secret versions during rotation.",
            why: "Prevents dropped webhooks while rolling out new secrets across distributed instances."
          }
        ],
        resources: [
          { kind: "doc", label: "Channel Access Tokens Guide", url: "https://developers.line.biz/en/docs/basics/channel-access-token/" }
        ]
      },
      "lae5-obs": {
        url: "https://developers.line.biz/en/docs/messaging-api/overview/",
        goals: [
          "Instrument LINE bots with structured logs, quota monitoring, and automated CI tests."
        ],
        concepts: [
          {
            n: "Structured Logging & Tracing",
            tag: "webhookEventId + x-line-request-id",
            what: "Log every incoming <code>webhookEventId</code> and every outgoing LINE API response header <code>x-line-request-id</code>.",
            why: "Crucial for correlating end-to-end latency and filing actionable support tickets with LINE if platform anomalies occur."
          },
          {
            n: "Quota & Consumption Monitoring",
            tag: "/v2/bot/message/quota/consumption",
            what: "Poll message quota and consumption endpoints on a schedule and alert before hitting monthly caps.",
            why: "Prevents silent notification failures during critical business campaigns."
          }
        ],
        resources: [
          { kind: "doc", label: "Get Target Limit & Consumption", url: "https://developers.line.biz/en/reference/messaging-api/#get-quota" }
        ]
      },
      "lae5-review": {
        url: "https://developers.line.biz/en/docs/messaging-api/overview/",
        goals: [
          "Avoid the most common production outages in LINE integrations."
        ],
        concepts: [
          {
            n: "Top 4 Production Pitfalls",
            tag: "Signature · Reply TTL · Empty Flex · Client userId",
            what: "1) Skipping <code>X-Line-Signature</code> check, 2) Letting <code>replyToken</code> expire during slow LLM/DB calls, 3) Sending empty strings in Flex Text components, 4) Trusting unverified <code>userId</code> from LIFF.",
            why: "Catching these four bugs in code review separates hobby bots from production-grade LINE systems."
          }
        ],
        resources: [
          { kind: "doc", label: "Messaging API Error Responses", url: "https://developers.line.biz/en/reference/messaging-api/#error-responses" }
        ]
      },
      "lae6-content": {
        url: "https://developers.line.biz/en/community/",
        goals: [
          "Build a public engineering portfolio that demonstrates deep, practical mastery of LINE APIs."
        ],
        concepts: [
          {
            n: "Technical Articles & Tutorials",
            tag: "Medium · Dev.to · LINE Developers TH",
            what: "Publish clear, reproducible guides covering real architectural problems (e.g. LIFF auth, Flex templates, AI Agents on LINE, scalable webhooks).",
            why: "Demonstrates both technical depth and the ability to explain complex concepts clearly to other developers."
          },
          {
            n: "Open Source & Production Case Studies",
            tag: "GitHub repos · Libraries · Templates",
            what: "Maintain helpful OSS tools, starter kits, or showcase anonymized architecture diagrams of real production systems.",
            why: "The LINE API Expert program values proven hands-on engineering impact over theory alone."
          }
        ],
        resources: [
          { kind: "doc", label: "LINE Developers Community", url: "https://developers.line.biz/en/community/" }
        ]
      },
      "lae6-community": {
        url: "https://developers.line.biz/en/community/",
        goals: [
          "Actively contribute to developer communities through Q&A, talks, and mentorship."
        ],
        concepts: [
          {
            n: "Community Q&A & Mentorship",
            tag: "LINE Developers Thailand Group & Forums",
            what: "Regularly help developers troubleshoot webhook, LIFF, Login, and Flex Message issues with accurate, empathetic answers.",
            why: "Consistent community support is one of the strongest signals of an API Expert."
          },
          {
            n: "Public Speaking & Workshops",
            tag: "Meetups · Hackathons · LINE Dev Day",
            what: "Give talks, run hands-on codelabs, or mentor teams at hackathons and local developer meetups.",
            why: "Amplifies ecosystem adoption and sharpens your own command of edge cases."
          }
        ],
        resources: [
          { kind: "doc", label: "LINE API Expert Program", url: "https://www.line-community.me/" }
        ]
      },
      "lae6-prep": {
        url: "https://www.line-community.me/",
        goals: [
          "Assemble your LAE portfolio, technical architecture presentation, and community impact record."
        ],
        concepts: [
          {
            n: "LAE Evaluation Readiness Checklist",
            tag: "Tech depth + Production proof + Community",
            what: "Prepare 1) 2–3 production/OSS projects spanning Messaging API + LIFF + LINE Login, 2) links to published blogs/talks/Q&A contributions, and 3) readiness for a deep technical architecture Q&A.",
            why: "Unlike a multiple-choice exam, LAE selection evaluates real-world engineering mastery and sustained community leadership."
          }
        ],
        resources: [
          { kind: "doc", label: "LINE Community Portal", url: "https://www.line-community.me/" }
        ]
      }
    }
  }
};
