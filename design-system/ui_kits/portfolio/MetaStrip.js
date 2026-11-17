// MetaStrip.jsx — recurring mono-metadata strip used in hero and contact
function MetaStrip(_a) {
    var items = _a.items, dark = _a.dark;
    return (React.createElement("div", { className: "hero-meta", style: dark ? { color: "var(--ink-300)" } : null }, items.map(function (group, i) { return (React.createElement("div", { key: i, className: "grp" + (group.align === "right" ? " right" : "") }, group.lines.map(function (line, j) { return (React.createElement("span", { key: j },
        line.label && React.createElement("b", null, line.label),
        line.label && " ",
        line.value)); }))); })));
}
window.MetaStrip = MetaStrip;
