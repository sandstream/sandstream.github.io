// Hero.jsx — the editorial hero. Mono meta strip top, big serif headline,
// supporting sub, two CTAs, mono meta strip bottom.

function Hero({ onSchedule }) {
  return (
    <section id="top" className="hero" data-screen-label="Hero">
      <div className="hero-meta">
        <div className="grp">
          <span><b>STOCKHOLM</b> · 59.33°N · 18.07°E</span>
          <span><b>SANDSTREAM AB</b> · ORG.NR 559123-0000</span>
        </div>
        <div className="grp right">
          <span>
            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#2C7A4B", marginRight: 6, verticalAlign: "middle" }}></span>
            <b>AVAILABLE Q3 '26</b>
          </span>
          <span>RESPONSE &lt; 24h</span>
        </div>
      </div>

      <div>
        <h1 className="hero-headline">
          Tjugo år av ledarskap inom <em>tech.</em>
        </h1>
        <p className="hero-sub">
          Peter Sandström — interim CTO, CIO, CPO och MD för bolag i transitions- och skalfas. Strategisk översikt och praktisk teknisk insikt för digital transformation, AI-implementation och skalresa.
        </p>
        <div className="hero-cta-row">
          <button className="btn btn-primary" onClick={onSchedule}>
            Boka 30 minuter <span className="btn-arrow">→</span>
          </button>
          <a className="btn btn-ghost" href="mailto:hello@sandstre.am">
            hello@sandstre.am
          </a>
        </div>
      </div>

      <div className="hero-meta">
        <div className="grp">
          <span><b>NOW</b> AI &amp; Innovation Lead · Frontwalker</span>
          <span><b>FOUNDED</b> Sandstream AB · 2023</span>
        </div>
        <div className="grp right">
          <span><b>LANG</b> Svenska · English</span>
          <span><b>BASED</b> Stockholm · remote-first</span>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
