function FloatingPill(_a) {
    var lang = _a.lang, onClick = _a.onClick, active = _a.active, menuOpen = _a.menuOpen;
    var onDark = active === "work" || active === "contact";
    if (menuOpen)
        return null;
    return (React.createElement("button", { className: "float-pill" + (onDark ? " on-dark" : ""), onClick: onClick, "aria-label": lang === "sv" ? "Boka ett 30 minuters samtal" : "Schedule a 30 minute call" },
        React.createElement("span", { className: "dot", "aria-hidden": "true" }),
        React.createElement("span", null, T[lang].pillLabel),
        React.createElement("span", { style: { fontFamily: "var(--font-mono)", marginLeft: 4 } }, "\u2192")));
}
