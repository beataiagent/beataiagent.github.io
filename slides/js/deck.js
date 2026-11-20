/* Shared deck runtime for slides/*.html (DevFest 2026 template).
   Load after reveal.js + highlight + notes plugins, at the end of <body>.
   - injects the slide controls (progress bar, counter, overview, notes, PDF export)
   - draws the notched / scalloped card outlines and the GDG + Build with Gemini logos
   - initializes Reveal with the shared 1280x720 config
   Deck name for PDF titles: <body data-deck="..."> (falls back to <title>). */
const DECK = document.body.dataset.deck || document.title;

/* slide controls markup */
if (!document.getElementById("ctrl")) document.body.insertAdjacentHTML("afterbegin", `
<div id="progress"></div>
  <div id="ctrl">
    <button id="bPrev" title="Previous (←)">‹</button>
    <span class="cnt" id="cnt" title="Slide list">1 / 1</span>
    <button id="bNext" title="Next (→)">›</button>
    <button id="bOv" title="All slides (O)"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></button>
    <button id="bFs" title="Fullscreen (F)"><svg viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></svg></button>
    <button id="bNotes" title="Speaker notes (N / S)"><svg viewBox="0 0 24 24"><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg></button>
    <button id="bPdf" title="Export PDF (E = this slide, Shift+E = all)" aria-haspopup="menu" aria-expanded="false"><svg viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg></button>
  </div>
  <div id="menu"></div>
  <div id="ov"><div class="ovh"><span>All slides</span><button id="ovX" title="Close (Esc)">✕</button></div><div class="ovg"></div></div>
  <div id="exportMenu" role="menu">
    <button role="menuitem" data-export="all"><span>All slides<span class="sub">PDF of every slide</span></span><kbd>Shift+E</kbd></button>
    <button role="menuitem" data-export="slide"><span>This slide<span class="sub" id="exportCur">PDF of the current slide</span></span><kbd>E</kbd></button>
  </div>
`);

/* DevFest template shapes: notched/scalloped cards + GDG lockup on every slide */
  (function () {
    const NS = "http://www.w3.org/2000/svg", S = 3, o = S / 2;
    function cardPath(W, H, el) {
      const r = +(el.dataset.r || 34);
      const [a, b] = (el.dataset.tl || "0x0").split("x").map(Number);
      const [c, d] = (el.dataset.br || "0x0").split("x").map(Number);
      const n = +(el.dataset.scallop || 0);
      const L = o, T = o, R = W - o, B = H - o, P = [];
      if (n) P.push(`M${L},${T}`); else if (a && b) P.push(`M${L + a + r},${T}`); else P.push(`M${L + r},${T}`);
      P.push(`H${R - r}`, `A${r},${r} 0 0 1 ${R},${T + r}`);
      if (c && d) P.push(`V${B - d - r}`, `A${r},${r} 0 0 1 ${R - r},${B - d}`, `H${R - c + r}`, `A${r},${r} 0 0 0 ${R - c},${B - d + r}`, `V${B - r}`, `A${r},${r} 0 0 1 ${R - c - r},${B}`);
      else P.push(`V${B - r}`, `A${r},${r} 0 0 1 ${R - r},${B}`);
      if (n) {
        P.push(`H${L}`); const h = (B - T) / n;
        for (let i = 0; i < n; i++) P.push(`A${h / 2},${h / 2} 0 0 1 ${L},${B - h * (i + 1)}`);
      } else {
        P.push(`H${L + r}`, `A${r},${r} 0 0 1 ${L},${B - r}`);
        if (a && b) P.push(`V${T + b + r}`, `A${r},${r} 0 0 1 ${L + r},${T + b}`, `H${L + a - r}`, `A${r},${r} 0 0 0 ${L + a},${T + b - r}`, `V${T + r}`, `A${r},${r} 0 0 1 ${L + a + r},${T}`);
        else P.push(`V${T + r}`, `A${r},${r} 0 0 1 ${L + r},${T}`);
      }
      return P.join(" ") + " Z";
    }
    document.querySelectorAll(".reveal .nc").forEach((el) => {
      const cs = getComputedStyle(el), W = parseFloat(cs.width), H = parseFloat(cs.height);
      const svg = document.createElementNS(NS, "svg");
      svg.setAttribute("class", "nc-s"); svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      svg.setAttribute("width", W); svg.setAttribute("height", H);
      const p = document.createElementNS(NS, "path");
      p.setAttribute("d", cardPath(W, H, el));
      p.setAttribute("fill", el.dataset.fill || "#fff"); p.setAttribute("stroke", "#1e1e1e"); p.setAttribute("stroke-width", S);
      svg.appendChild(p); el.prepend(svg);
    });
    document.querySelectorAll(".reveal .slides section:not([data-corner=off])").forEach((s) => {
      s.insertAdjacentHTML("beforeend", '<div class="top-gdg"><img src="../images/shared/logos/gdg-mark.svg" alt=""><span>Google Developer Group<small>Bangkok</small></span></div><img class="top-bwg" src="../images/shared/logos/build-with-gemini-light.png" alt="Build with Gemini">');
    });
  })();

  Reveal.initialize({
    hash: true,
    hashOneBasedIndex: true,
    fragmentInURL: false,
    controls: false,
    overview: false,
    progress: false,
    slideNumber: "c/t",
    showSlideNumber: "print",
    transition: "fade",
    backgroundTransition: "fade",
    width: 1280,
    height: 720,
    margin: 0,
    center: false,
    plugins: [RevealHighlight, RevealNotes],
    view: /[?&]print-pdf\b/.test(location.search) ? "print" : null,
    pdfSeparateFragments: false,
    pdfMaxPagesPerSlide: 1,
  });

/* Slide controls + Export PDF: All slides / This slide */
  (function () {
    const params = new URLSearchParams(location.search);
    const isPrint = params.has("print-pdf");

    if (isPrint) {
      const only = params.get("slide");
      Reveal.on("pdf-ready", async () => {
        if (only !== null) {
          const target = Reveal.getSlides()[+only]?.closest(".pdf-page");
          if (target) document.querySelectorAll(".reveal .slides .pdf-page").forEach((p) => { if (p !== target) p.remove(); });
          document.title = `${DECK} – slide ${+only + 1}`;
        } else {
          document.title = `${DECK} – all slides`;
        }
        if (!params.has("autoprint")) return;
        await document.fonts.ready;
        addEventListener("afterprint", () => window.close());
        setTimeout(() => window.print(), 300);
      });
      return;
    }

    const $ = (id) => document.getElementById(id);
    const slides = Reveal.getSlides(), N = slides.length;
    const idx = () => slides.indexOf(Reveal.getCurrentSlide());
    const cnt = $("cnt"), prog = $("progress"), list = $("menu"), xMenu = $("exportMenu"), bPdf = $("bPdf"), bNotes = $("bNotes");
    const titleOf = (s, i) => s.dataset.title || s.querySelector("h1,h2")?.textContent.trim() || `Slide ${i + 1}`;

    list.innerHTML = slides.map((s, i) => `<a href="#" data-i="${i}"><span>${i + 1}</span>${titleOf(s, i).replace(/</g, "&lt;")}</a>`).join("");
    function sync() {
      const i = idx();
      cnt.textContent = `${i + 1} / ${N}`;
      prog.style.width = (N > 1 ? (i / (N - 1)) * 100 : 100) + "%";
      list.querySelectorAll("a").forEach((a, k) => a.classList.toggle("cur", k === i));
    }
    Reveal.on("ready", sync); Reveal.on("slidechanged", sync); sync();

    const menus = [list, xMenu];
    function openOnly(m) {
      const willOpen = m && !m.classList.contains("open");
      menus.forEach((x) => x.classList.remove("open"));
      if (willOpen) { m.classList.add("open"); wake(); }
      bPdf.setAttribute("aria-expanded", xMenu.classList.contains("open"));
      if (list.classList.contains("open")) list.querySelector("a.cur")?.scrollIntoView({ block: "center" });
      if (xMenu.classList.contains("open")) $("exportCur").textContent = `PDF of slide ${idx() + 1} / ${N}`;
    }

    $("bPrev").onclick = () => Reveal.prev();
    $("bNext").onclick = () => Reveal.next();
    cnt.onclick = (e) => { e.stopPropagation(); openOnly(list); };
    list.onclick = (e) => { const a = e.target.closest("a"); if (!a) return; e.preventDefault(); Reveal.slide(+a.dataset.i); openOnly(null); };

    const ov = $("ov"), ovg = ov.querySelector(".ovg");
    function buildOv() {
      const cur = idx();
      ovg.innerHTML = "";
      slides.forEach((s, i) => {
        const t = document.createElement("div");
        t.className = "ovt" + (i === cur ? " cur" : ""); t.dataset.i = i;
        const fr = document.createElement("div"); fr.className = "fr";
        const rv = document.createElement("div"); rv.className = "reveal";
        const sl = document.createElement("div"); sl.className = "slides";
        const c = s.cloneNode(true);
        c.removeAttribute("hidden"); c.removeAttribute("aria-hidden");
        c.classList.remove("past", "future"); c.classList.add("present");
        c.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
        c.querySelectorAll("video").forEach((v) => v.remove());
        c.querySelectorAll("aside.notes").forEach((n) => n.remove());
        sl.appendChild(c); rv.appendChild(sl); fr.appendChild(rv);
        const cap = document.createElement("div"); cap.className = "cap";
        cap.innerHTML = `<span>${i + 1}</span>`; cap.append(titleOf(s, i));
        t.append(fr, cap); ovg.appendChild(t);
        c.style.top = "0px";
        c.style.top = Math.max((720 - c.offsetHeight) / 2, 0) + "px";
      });
      sizeOv();
    }
    function sizeOv() { ovg.querySelectorAll(".fr").forEach((fr) => { fr.firstChild.style.transform = `scale(${fr.clientWidth / 1280})`; }); }
    const ovOpen = () => ov.classList.contains("open");
    function toggleOv(force) {
      const open = force ?? !ovOpen();
      openOnly(null);
      ov.classList.toggle("open", open);
      $("bOv").classList.toggle("on", open);
      if (open) { buildOv(); ovg.querySelector(".cur")?.scrollIntoView({ block: "center" }); }
      else ovg.innerHTML = "";
    }
    $("bOv").onclick = () => toggleOv();
    $("ovX").onclick = () => toggleOv(false);
    ovg.onclick = (e) => { const t = e.target.closest(".ovt"); if (!t) return; Reveal.slide(+t.dataset.i); toggleOv(false); };
    addEventListener("resize", () => { if (ovOpen()) sizeOv(); });
    const toggleFs = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.();
    $("bFs").onclick = toggleFs;

    const notes = () => Reveal.getPlugin("notes");
    bNotes.onclick = () => notes()?.open();

    function exportPdf(mode) {
      const q = new URLSearchParams({ "print-pdf": "", autoprint: "" });
      if (mode === "slide") q.set("slide", idx());
      const url = location.pathname + "?" + q.toString().replace(/=(&|$)/g, "$1");
      if (!window.open(url, "_blank")) location.href = url;
      openOnly(null);
    }
    bPdf.onclick = (e) => { e.stopPropagation(); openOnly(xMenu); };
    xMenu.onclick = (e) => { const b = e.target.closest("[data-export]"); if (b) exportPdf(b.dataset.export); };

    document.addEventListener("click", (e) => {
      if (e.target.closest("#ctrl,#menu,#exportMenu,#ov")) return;
      const wasOpen = menus.some((m) => m.classList.contains("open"));
      openOnly(null);
      if (wasOpen) return;
      if (!e.target.closest(".reveal .slides") || e.target.closest("a,button,input,video,canvas,pre,.demo-wrap")) return;
      if (String(getSelection?.() || "").length) return;
      Reveal.next();
    }, true);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menus.some((m) => m.classList.contains("open"))) { openOnly(null); e.stopPropagation(); e.preventDefault(); return; }
      if (e.metaKey || e.ctrlKey || e.altKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (e.key === "o" || e.key === "O") { e.preventDefault(); e.stopPropagation(); toggleOv(); return; }
      if (ovOpen()) {
        e.stopPropagation();
        if (e.key === "Escape") { e.preventDefault(); toggleOv(false); }
        return;
      }
      if (e.key === "e" || e.key === "E") { e.preventDefault(); e.stopPropagation(); exportPdf(e.shiftKey ? "all" : "slide"); }
      else if (e.key === "n" || e.key === "N") { e.preventDefault(); e.stopPropagation(); notes()?.open(); }
    }, true);

    let idle;
    const wake = () => { document.body.classList.remove("idle"); clearTimeout(idle); idle = setTimeout(() => { if (!menus.some((m) => m.classList.contains("open"))) document.body.classList.add("idle"); }, 2500); };
    addEventListener("mousemove", wake); wake();
  })();
