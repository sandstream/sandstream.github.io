function Roles({ lang }) {
  const t = T[lang];
  const [rh, ri] = t.rolesHeadline;
  return (
    <section id="roles" className="section">
      <div className="section-label">
        <span><span className="num">/ 04</span> &nbsp; {t.s04}</span>
        <span className="bar"></span>
      </div>
      <div className="roles">
        <div className="roles-intro">
          <h2>{rh}<em>{ri}</em></h2>
          <p>{t.rolesP}</p>
        </div>
        <div className="roles-list">
          {ROLES.map((r, i) => (
            <div className="role" key={i}>
              <div className="role-when">{r.when}</div>
              <div className="role-title">{r.title[lang]}<span className="org">· {r.org}</span></div>
              <div className="role-tag">{r.tag[lang]}</div>
              {r.desc && <p className="role-desc">{r.desc[lang]}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
