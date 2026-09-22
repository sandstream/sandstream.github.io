// Contact.jsx — full-width dark contact panel + Footer.

function Contact({ onSchedule }) {
  return (
    <React.Fragment>
      <section id="contact" className="contact" data-screen-label="04 Contact">
        <div className="section-label" style={{ color: "var(--ink-300)" }}>
          <span><span className="num" style={{ color: "var(--signal)" }}>/ 04</span> &nbsp; let's talk</span>
          <span className="bar" style={{ background: "var(--ink-600)" }}></span>
        </div>

        <h2 className="contact-title">
          Behöver ni en <em>interim</em> i tech?
        </h2>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          <button className="btn btn-primary" onClick={onSchedule}>
            Boka 30 minuter <span className="btn-arrow">→</span>
          </button>
          <a className="btn btn-ghost" style={{ borderColor: "var(--ink-600)", color: "var(--bone-50)" }} href="mailto:hello@sandstre.am">
            hello@sandstre.am
          </a>
        </div>

        <div className="contact-grid">
          <div className="contact-col">
            <span className="lbl">Email</span>
            <a href="mailto:hello@sandstre.am">hello@sandstre.am</a>
            <span className="v sm">Svar inom 24 timmar, vardagar.</span>
          </div>
          <div className="contact-col">
            <span className="lbl">Telefon</span>
            <a href="tel:[PHONE_E164]">[PHONE]</a>
            <span className="v sm">SMS preferred. Stockholm timezone.</span>
          </div>
          <div className="contact-col">
            <span className="lbl">Calendar</span>
            <a href="https://cal.eu/sandstream/quick-chat" target="_blank" rel="noreferrer">cal.eu/sandstream <span style={{ fontFamily: "var(--font-mono)" }}>↗</span></a>
            <span className="v sm">30 min · ingen kostnad · no slides.</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="wm-sm">sandstre<span style={{ color: "var(--signal)" }}>.</span><em style={{ fontStyle: "italic", color: "var(--signal)" }}>am</em></span>
        <span>STOCKHOLM · ORG.NR 559123-0000 · © 2026</span>
        <span><a href="https://www.linkedin.com/in/sandstream/" target="_blank" rel="noreferrer" style={{ color: "var(--bone-50)" }}>LINKEDIN ↗</a></span>
      </footer>
    </React.Fragment>
  );
}

window.Contact = Contact;
