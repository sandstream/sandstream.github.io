// FloatingPill.jsx — the single floating CTA pill, bottom-right.

function FloatingPill({ onClick }) {
  return (
    <button className="float-pill" onClick={onClick} aria-label="Schedule a 30 minute call">
      <span className="dot" aria-hidden="true"></span>
      <span>Boka 30 min</span>
      <span style={{ fontFamily: "var(--font-mono)", marginLeft: 4 }}>→</span>
    </button>
  );
}

window.FloatingPill = FloatingPill;
