function About({ lang }) {
  const t = T[lang];
  const [pre, em, post] = t.aboutHeadline;
  return (
    <section id="about" className="section">
      <div className="section-label">
        <span><span className="num">/ 01</span> &nbsp; {t.s01}</span>
        <span className="bar"></span>
      </div>
      <div className="about-grid">
        <div className="about-portrait">
          <img src="/assets/peter-portrait.jpg" alt="Peter Sandström" loading="lazy" />
          <div className="corner">PORTRAIT · 2025</div>
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
