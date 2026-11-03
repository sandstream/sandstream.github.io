// Roles.jsx — recent leadership timeline. Pulled from Peter's CV.

const ROLES = [
  { when: "2026 → NU", title: "AI & Innovation Lead", org: "Frontwalker", tag: "Current" },
  { when: "2025 — 2026", title: "AI-konsult & medgrundare", org: "Frontwalker AIDA", tag: "Co-founded HunterMatcher" },
  { when: "2023 — 2024", title: "Grundare & konsult", org: "Sandstream AB", tag: "Interim · advisory" },
  { when: "2021 — 2023", title: "Managing Director", org: "Devoteam Creative Tech", tag: "Team 13 → 35" },
  { when: "2019 — 2021", title: "CTO Mobiento · Senior Manager", org: "Deloitte AB", tag: "M&A · Conversational AI" },
  { when: "2017 — 2018", title: "Nordic Engineering Manager", org: "SATS ELIXIA", tag: "Online ↑ 5% → 13%" },
  { when: "2012 — 2017", title: "Nordic IT Operations / Infra / Transformation", org: "SATS ELIXIA", tag: "Cloud-First · CRM" },
  { when: "2011 — 2012", title: "IT Manager", org: "Boots Apotek", tag: "0 → 9 apotek" },
  { when: "2005 — 2011", title: "IT-chef & Webbansvarig", org: "SwedSec Licensiering AB", tag: "MVC · REST · DevOps" },
];

function Roles() {
  return (
    <section id="roles" className="section" data-screen-label="03 Roles">
      <div className="section-label">
        <span><span className="num">/ 03</span> &nbsp; selected roles · 20 years</span>
        <span className="bar"></span>
      </div>

      <div className="roles">
        <div className="roles-intro">
          <h2>
            Tjugo år av <em>uppdrag.</em>
          </h2>
          <p>
            En kortfattad timeline över formella roller. Full CV och case-beskrivningar på begäran.
          </p>
        </div>

        <div className="roles-list">
          {ROLES.map((r, i) => (
            <div className="role" key={i}>
              <div className="role-when">{r.when}</div>
              <div className="role-title">
                {r.title}<span className="org">· {r.org}</span>
              </div>
              <div className="role-tag">{r.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Roles = Roles;
