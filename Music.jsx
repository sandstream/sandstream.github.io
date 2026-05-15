function Music({ lang }) {
  const t = T[lang];
  const [mpre, mem] = t.musicHeadline;
  return (
    <section id="music" className="section">
      <div className="section-label">
        <span><span className="num">/ 03</span> &nbsp; {t.s03}</span>
        <span className="bar"></span>
      </div>
      <div style={{maxWidth: "56ch", marginBottom: 48}}>
        <h2 style={{fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", lineHeight: 1, letterSpacing: "-.02em", color: "var(--fg)", marginBottom: 16}}>
          {mpre}<em>{mem}</em>
        </h2>
        <p style={{fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.6, color: "var(--fg-2)"}}>{t.musicSub}</p>
      </div>
      <div className="music-grid">
        <div className="music-card">
          <div className="music-tag">Country / Americana</div>
          <div className="music-name">Diesel <em>Johnny</em> Raines</div>
          <div className="music-desc">
            {lang === "sv"
              ? "Eget countryprojekt. Låtar om vägar, förlust och att börja om igen, producerat självständigt och distribuerat globalt. Tillgängligt på alla stora streamingtjänster."
              : "Country and Americana songwriting project. Songs about roads, loss and starting over, produced independently and distributed worldwide. Available on all major streaming platforms."}
          </div>
          <div className="music-links">
            <a className="card-link" href="https://www.dieseljohnnyraines.com/" target="_blank" rel="noreferrer">
              dieseljohnnyraines.com <span style={{fontFamily: "var(--font-mono)"}}>↗</span>
            </a>
            <a className="card-link" href="https://open.spotify.com/artist/1PP98gl7W2oNFOiz96vhX2" target="_blank" rel="noreferrer">
              Spotify <span style={{fontFamily: "var(--font-mono)"}}>↗</span>
            </a>
          </div>
        </div>
        <div className="music-card">
          <div className="music-tag">Pop / Singer-songwriter</div>
          <div className="music-name">Maja <em>Linden</em></div>
          <div className="music-desc">
            {lang === "sv"
              ? "Popmusik med singer-songwriter-känsla. Melodier som stannar kvar. Tillgänglig på Spotify och alla stora streamingtjänster."
              : "Pop project with a singer-songwriter sensibility. Melodies that stay with you. Available on Spotify and all major streaming platforms."}
          </div>
          <div className="music-links">
            <a className="card-link" href="https://open.spotify.com/artist/1PP98gl7W2oNFOiz96vhX2" target="_blank" rel="noreferrer">
              Spotify <span style={{fontFamily: "var(--font-mono)"}}>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
