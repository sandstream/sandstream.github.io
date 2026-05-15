function Contact({ lang, onSchedule }) {
  const t = T[lang];
  const [cp, ci, cs] = t.contactHeadline;
  return (
    <React.Fragment>
      <section id="contact" className="contact">
        <div className="section-label" style={{color: "var(--ink-300)"}}>
          <span><span className="num" style={{color: "var(--signal)"}}>/ 05</span> &nbsp; {t.s05}</span>
          <span className="bar" style={{background: "var(--ink-600)"}}></span>
        </div>
        <h2 className="contact-title">{cp}<em>{ci}</em>{cs}</h2>
        <div style={{display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center"}}>
          <button className="btn btn-primary" onClick={onSchedule}>
            {t.contactCta} <span className="btn-arrow">→</span>
          </button>
          <a className="btn btn-ghost" style={{borderColor: "var(--ink-600)", color: "var(--bone-50)"}} href="mailto:hello@sandstre.am">
            hello@sandstre.am
          </a>
        </div>
        <div className="contact-grid">
          <div className="contact-col">
            <span className="lbl">{t.col1label}</span>
            <a href="mailto:hello@sandstre.am">hello@sandstre.am</a>
            <span className="v sm">{t.col1sub}</span>
          </div>
          <div className="contact-col">
            <span className="lbl">{t.col2label}</span>
            <a href="https://www.linkedin.com/in/sandstream/" target="_blank" rel="noreferrer">
              /in/sandstream <span style={{fontFamily: "var(--font-mono)"}}>↗</span>
            </a>
            <span className="v sm">{t.col2sub}</span>
          </div>
          <div className="contact-col">
            <span className="lbl">{t.col3label}</span>
            <a href="https://cal.eu/sandstream/quick-chat" target="_blank" rel="noreferrer">
              cal.eu/sandstream/quick-chat <span style={{fontFamily: "var(--font-mono)"}}>↗</span>
            </a>
            <span className="v sm">{t.col3sub}</span>
          </div>
        </div>
      </section>
      <footer className="footer">
        <span className="wm-sm">sandstre<span style={{color: "var(--signal)"}}>·</span><em style={{fontStyle: "italic"}}>am</em> ab</span>
        <span>STOCKHOLM · ORG.NR 559399-3099 · HANKGRÄND 6, 163 55 SPÅNGA · © 2026</span>
        <span><a href="https://www.linkedin.com/in/sandstream/" target="_blank" rel="noreferrer" style={{color: "var(--bone-50)"}}>LINKEDIN ↗</a></span>
      </footer>
    </React.Fragment>
  );
}
