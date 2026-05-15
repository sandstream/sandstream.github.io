const { useState, useEffect } = React;

function MorphInner() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const STEP = 750;
    const timers = [1,2,3,4].map((i) => setTimeout(() => setStep(i), i * STEP));
    return () => timers.forEach(clearTimeout);
  }, []);
  const cls = (i) => "wm-v" + (step === i ? " wm-in" : step > i ? " wm-out" : "");
  return (
    <>
      <span className="wm-ghost">sandstre<span className="tld-dot">·</span><span className="it">am</span></span>
      <span className={cls(0)}>sandström</span>
      <span className={cls(1)}>sandstroem</span>
      <span className={cls(2)}>sandstream</span>
      <span className={cls(3)}>săndstrēm</span>
      <span className={cls(4)}>sandstre<span className="tld-dot">·</span><span className="it">am</span></span>
    </>
  );
}

function WordmarkMorph({ onClick, style }) {
  const [seed, setSeed] = useState(0);
  const handleClick = () => { setSeed(s => s + 1); onClick?.(); };
  return (
    <div className="wordmark wm-morph" onClick={handleClick} style={style}>
      <MorphInner key={seed} />
    </div>
  );
}

function Header({ lang, setLang, active, onNav }) {
  const t = T[lang];
  const navIds = ["about", "work", "music", "roles", "contact"];
  const nums = ["01", "02", "03", "04", "05"];
  return (
    <aside className="rail" aria-label="Primary navigation">
      <div>
        <WordmarkMorph onClick={() => onNav("top")} />
        <nav className="nav">
          {navIds.map((id, i) => (
            <a key={id} href={"#" + id} data-num={nums[i]}
              className={active === id ? "active" : ""}
              onClick={e => { e.preventDefault(); onNav(id); }}>
              {t.navLabels[i]}
            </a>
          ))}
        </nav>
        <button className="lang-btn" onClick={() => setLang(lang === "sv" ? "en" : "sv")}>
          <span className="active-lang">{lang.toUpperCase()}</span>
          <span>→</span>
          <span>{lang === "sv" ? "EN" : "SV"}</span>
        </button>
      </div>
      <div className="rail-bottom">
        <div className="row"><span>v</span><b>2026.05</b></div>
        <div className="row"><span>tz</span><b>UTC+1</b></div>
        <div className="row"><span>set</span><b>SV / EN</b></div>
      </div>
    </aside>
  );
}

function MobileBar({ lang, setLang, menuOpen, onToggle, onWordmark }) {
  return (
    <div className="mobile-bar" role="banner">
      <WordmarkMorph onClick={onWordmark} style={{fontSize: 22}} />
      <div style={{display: "flex", alignItems: "center", gap: 10}}>
        <button className="lang-btn" style={{margin: 0, padding: "4px 8px"}} onClick={() => setLang(lang === "sv" ? "en" : "sv")}>
          <span className="active-lang">{lang.toUpperCase()}</span>
          <span>→</span>
          <span>{lang === "sv" ? "EN" : "SV"}</span>
        </button>
        <button className={"hamburger" + (menuOpen ? " open" : "")} onClick={onToggle}
          aria-label={menuOpen ? "Stäng meny" : "Öppna meny"} aria-expanded={menuOpen}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  );
}

function MobileNavOverlay({ lang, active, onNav, menuOpen }) {
  const t = T[lang];
  const navIds = ["about", "work", "music", "roles", "contact"];
  const nums = ["01", "02", "03", "04", "05"];
  return (
    <div className={"mobile-nav-overlay" + (menuOpen ? " open" : "")} aria-hidden={!menuOpen}>
      <nav className="mobile-nav-links">
        {navIds.map((id, i) => (
          <a key={id} href={"#" + id}
            className={active === id ? "active" : ""}
            onClick={e => { e.preventDefault(); onNav(id); }}>
            <span className="mn">{nums[i]}</span>
            {t.navLabels[i]}
          </a>
        ))}
      </nav>
    </div>
  );
}
