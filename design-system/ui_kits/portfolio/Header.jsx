// Header.jsx — fixed left rail with wordmark + nav + theme toggle.
// Clicking the wordmark plays a phonetic morph through Peter's name
// variants before scrolling back to top.

const { useState, useEffect, useRef, useCallback } = React;

// The phonetic variants the wordmark cycles through. Last one IS the
// canonical wordmark; the morph "settles" there. The .am is rendered
// with italic teal styling baked into the HTML strings so the final
// state matches the static wordmark exactly.
const PHONETIC_VARIANTS = [
  "sandström",
  "sandstroem",
  "sandstream",
  "săndstrēm",
  '<span>sandstre</span><span class="tld-dot">.</span><span class="tld">am</span>',
];

// Plays a sequence of in-place morphs on a single element.
// Returns a Promise that resolves when the morph settles.
function playMorph(el, variants, holdMs = 280) {
  return new Promise((resolve) => {
    let i = 0;
    function tick() {
      el.classList.add("morph-out");
      setTimeout(() => {
        el.innerHTML = variants[i];
        el.classList.remove("morph-out");
        el.classList.add("morph-in");
        // Force reflow so the .morph-in transition triggers
        void el.offsetWidth;
        el.classList.remove("morph-in");
        i++;
        if (i >= variants.length) {
          // Mark settled so the wordmark stays styled correctly
          el.classList.add("morph-settled");
          resolve();
          return;
        }
        setTimeout(tick, holdMs);
      }, 180);
    }
    tick();
  });
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("sandstream-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("sandstream-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={"Switch to " + (theme === "light" ? "dark" : "light") + " mode"}
      title={"Switch to " + (theme === "light" ? "dark" : "light") + " mode"}
    >
      <span className={"track " + theme}>
        <span className="knob" aria-hidden="true">
          <span className="glyph sun">○</span>
          <span className="glyph moon">●</span>
        </span>
      </span>
      <span className="theme-label">
        <span className={theme === "light" ? "on" : ""}>LIGHT</span>
        <span className="sep"> / </span>
        <span className={theme === "dark" ? "on" : ""}>DARK</span>
      </span>
    </button>
  );
}

function Header({ active, onNav }) {
  const navItems = [
    { id: "about", num: "01", label: "Bio" },
    { id: "work", num: "02", label: "Selected work" },
    { id: "roles", num: "03", label: "Roles" },
    { id: "contact", num: "04", label: "Contact" },
  ];

  const wordmarkRef = useRef(null);
  const morphingRef = useRef(false);

  const handleWordmarkClick = useCallback(async (e) => {
    e.preventDefault();
    if (morphingRef.current) return;
    morphingRef.current = true;

    const el = wordmarkRef.current;
    if (!el) { morphingRef.current = false; return; }

    // Always: morph in place, then scroll to top if not already there
    const canonical = PHONETIC_VARIANTS[PHONETIC_VARIANTS.length - 1];
    const atTop = window.scrollY < 8;
    if (!atTop) {
      // Start scrolling to top in parallel with the morph so they finish
      // around the same time. The morph is the visible feedback.
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    await playMorph(el, PHONETIC_VARIANTS, 240);
    el.innerHTML = canonical;
    morphingRef.current = false;
  }, []);

  return (
    <aside className="rail" aria-label="Primary">
      <div>
        <a
          href="#top"
          className="wordmark"
          ref={wordmarkRef}
          onClick={handleWordmarkClick}
          aria-label="sandstre.am — click to replay intro"
          dangerouslySetInnerHTML={{ __html: PHONETIC_VARIANTS[PHONETIC_VARIANTS.length - 1] }}
        ></a>
        <nav className="nav">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={"#" + n.id}
              data-num={n.num}
              className={active === n.id ? "active" : ""}
              onClick={(e) => { e.preventDefault(); onNav(n.id); }}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="rail-bottom">
        <ThemeToggle />
        <div className="row"><span>v</span><b>2026.05</b></div>
        <div className="row"><span>tz</span><b>UTC+1</b></div>
        <div className="row"><span>set</span><b>SV / EN</b></div>
      </div>
    </aside>
  );
}

window.Header = Header;
