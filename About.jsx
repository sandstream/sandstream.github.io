function About({ lang }) {
  const { useState } = React;
  const t = T[lang];
  const [pre, em, post] = t.aboutHeadline;
  const [mode, setMode] = useState("business");
  const toggle = () => setMode(m => m === "business" ? "casual" : "business");
  return (
    <section id="about" className="section">
      <div className="section-label">
        <span><span className="num">/ 01</span> &nbsp; {t.s01}</span>
        <span className="bar"></span>
      </div>
      <div className="about-grid">
        <div className="about-portrait" onClick={toggle} style={{cursor: "pointer"}}>
          <img
            src="/assets/peter-portrait.jpg"
            alt="Peter Sandström"
            loading="lazy"
            className={mode === "business" ? "p-active" : ""}
          />
          <img
            src="/assets/peter-casual.jpg"
            alt="Peter Sandström"
            loading="lazy"
            className={mode === "casual" ? "p-active" : ""}
          />
          <div className="corner">PORTRAIT · 2025</div>
          <div className="portrait-toggle">
            <span className={mode === "business" ? "pt-active" : ""}>Business</span>
            <span>·</span>
            <span className={mode === "casual" ? "pt-active" : ""}>Casual</span>
          </div>
        </div>
        <div className="about-body">
          <h2 className="about-h">{pre}<em>{em}</em>{post}</h2>
          <p className="about-p">{t.aboutP1}</p>
          <p className="about-p muted">{t.aboutP2}</p>
          <div className="about-stats">
            <div className="stat"><div className="n">20+</div><div className="l">{t.stat1l}</div></div>
            <div className="stat"><div className="n">35</div><div className="l">{t.stat2l}</div></div>
            <div className="stat"><div className="n">{CASES.length}</div><div className="l">{t.stat3l}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
