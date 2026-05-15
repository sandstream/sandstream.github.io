function Hero({ lang, onSchedule }) {
  const t = T[lang];
  const [hl, italic] = t.heroHeadline;
  return (
    <section id="top" className="hero">
      <MetaStrip left={t.heroMetaLeft} right={[
        { value: <span><span style={{display:"inline-block",width:6,height:6,borderRadius:"50%",background:"#2C7A4B",marginRight:6,verticalAlign:"middle"}}></span><b>{t.heroMetaRight[0].label} </b>{t.heroMetaRight[0].value}</span> },
        { value: t.heroMetaRight[1].value },
      ]} />
      <div>
        <h1 className="hero-headline fade-up">
          {hl}<em>{italic}</em>
        </h1>
        <p className="hero-sub fade-up fade-up-1">{t.heroSub}</p>
        <div className="hero-cta-row fade-up fade-up-2">
          <button className="btn btn-primary" onClick={onSchedule}>
            {t.heroCta} <span className="btn-arrow">→</span>
          </button>
          <a className="btn btn-ghost" href="mailto:hello@sandstre.am">{t.heroEmail}</a>
        </div>
      </div>
      <MetaStrip left={t.heroMetaBottomLeft} right={t.heroMetaBottomRight} />
    </section>
  );
}
