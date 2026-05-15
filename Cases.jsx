function Cases({ lang }) {
  const t = T[lang];
  const [ht, hi] = t.casesHeadline;
  return (
    <section id="work" className="section dark">
      <div className="section-label">
        <span><span className="num">/ 02</span> &nbsp; {t.s02}</span>
        <span className="bar"></span>
      </div>
      <div className="cases-head">
        <h2 className="cases-title">{ht}<em>{hi}</em></h2>
        <p className="cases-intro">{t.casesIntro}</p>
      </div>
      <div className="cases-grid">
        {CASES.map(c => {
          const name = c.name.map((w, i) => (
            <span key={i}>{i > 0 && " "}{i === c.italic ? <em>{w}</em> : w}</span>
          ));
          return (
            <article className="case" key={c.num}>
              <div className="case-num">{c.num}</div>
              <div className="case-title-block">
                <div className="case-name">{name}</div>
                <div className="case-tagline">{c.tagline[lang]}</div>
              </div>
              <div className="case-body">
                <div className="case-desc">{c.desc[lang]}</div>
                <div className="case-meta">
                  {c.meta.map((m, i) => <span key={i}><b>{m.l}</b> {m.v}</span>)}
                </div>
                {c.href && (
                  <a className="case-link" href={c.href} target="_blank" rel="noreferrer">
                    {c.hrefLabel} <span style={{fontFamily: "var(--font-mono)"}}>↗</span>
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
