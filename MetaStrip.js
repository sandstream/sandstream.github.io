function MetaStrip(_a) {
    var left = _a.left, right = _a.right;
    return (React.createElement("div", { className: "hero-meta" },
        React.createElement("div", { className: "grp" }, left.map(function (item, i) { return (React.createElement("span", { key: i },
            item.label && React.createElement("b", null,
                item.label,
                " "),
            item.value)); })),
        React.createElement("div", { className: "grp right" }, right.map(function (item, i) { return (React.createElement("span", { key: i },
            item.label && React.createElement("b", null,
                item.label,
                " "),
            item.value)); }))));
}
