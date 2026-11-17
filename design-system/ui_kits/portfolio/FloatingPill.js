// FloatingPill.jsx — the single floating CTA pill, bottom-right.
function FloatingPill(_a) {
    var onClick = _a.onClick;
    return (React.createElement("button", { className: "float-pill", onClick: onClick, "aria-label": "Schedule a 30 minute call" },
        React.createElement("span", { className: "dot", "aria-hidden": "true" }),
        React.createElement("span", null, "Boka 30 min"),
        React.createElement("span", { style: { fontFamily: "var(--font-mono)", marginLeft: 4 } }, "\u2192")));
}
window.FloatingPill = FloatingPill;
