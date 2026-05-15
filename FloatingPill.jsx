function FloatingPill({ lang, onClick, active, menuOpen }) {
  const onDark = active === "work" || active === "contact";
  if (menuOpen) return null;
  return (
    <button
      className={"float-pill" + (onDark ? " on-dark" : "")}
      onClick={onClick}
      aria-label={lang === "sv" ? "Boka ett 30 minuters samtal" : "Schedule a 30 minute call"}
    >
      <span className="dot" aria-hidden="true"></span>
      <span>{T[lang].pillLabel}</span>
      <span style={{fontFamily: "var(--font-mono)", marginLeft: 4}}>→</span>
    </button>
  );
}
