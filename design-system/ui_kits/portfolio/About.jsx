// About.jsx — portrait + bio + stats. The "om Peter" section.

function About() {
  return (
    <section id="about" className="section" data-screen-label="01 Bio">
      <div className="section-label">
        <span><span className="num">/ 01</span> &nbsp; om peter</span>
        <span className="bar"></span>
      </div>

      <div className="about-grid">
        <div className="about-portrait">
          <img src="../../assets/peter-portrait.jpg" alt="Peter Sandström" />
          <div className="corner">PORTRAIT · 2025</div>
        </div>

        <div className="about-body">
          <h2 className="about-h">
            Strategi för det <em>mellanrum</em> där tech möter affär.
          </h2>
          <p className="about-p">
            Peter är en erfaren teknologiledare med över 20 års erfarenhet av IT-ledning och digital transformation. Han har byggt och lett tekniska team genom komplexa förändringar — från dynamiska startups till etablerade nordiska koncerner.
          </p>
          <p className="about-p muted">
            Senaste åren har fokus skiftat mot affärsnära AI-implementation: generativ AI, agentiska arbetsflöden, vector embeddings, och praktiska automationer som faktiskt går i produktion. Just nu AI &amp; Innovation Lead på Frontwalker, samtidigt som Sandstream AB tar interimsuppdrag och advisory.
          </p>

          <div className="about-stats">
            <div className="stat">
              <div className="n">20+</div>
              <div className="l">Years in tech leadership</div>
            </div>
            <div className="stat">
              <div className="n">35</div>
              <div className="l">Largest team led · Devoteam</div>
            </div>
            <div className="stat">
              <div className="n">4</div>
              <div className="l">CXO + MD interim roles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
