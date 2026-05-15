function Header({ lang, setLang, active, onNav }) {
  const t = T[lang];
  const navIds = ["about", "work", "music", "roles", "contact"];
  const nums = ["01", "02", "03", "04", "05"];
  return (
    <aside className="rail" aria-label="Primary navigation">
      <div>
        <div className="wordmark" onClick={() => onNav("top")}>
          <span>sandstre</span>
          <span className="tld-dot" aria-hidden="true">·</span>
          <span className="it">am</span>
        </div>
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
      <div className="wordmark" onClick={onWordmark} style={{fontSize: 22}}>
        <span>sandstre</span>
        <span className="tld-dot" aria-hidden="true">·</span>
        <span className="it">am</span>
      </div>
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
