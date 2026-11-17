function Hero(_a) {
    var lang = _a.lang, onSchedule = _a.onSchedule;
    var t = T[lang];
    var _b = t.heroHeadline, hl = _b[0], italic = _b[1];
    return (React.createElement("section", { id: "top", className: "hero" },
        React.createElement(MetaStrip, { left: t.heroMetaLeft, right: [
                { value: React.createElement("span", null,
                        React.createElement("span", { style: { display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#2C7A4B", marginRight: 6, verticalAlign: "middle" } }),
                        React.createElement("b", null,
                            t.heroMetaRight[0].label,
                            " "),
                        t.heroMetaRight[0].value) },
                { value: t.heroMetaRight[1].value },
            ] }),
        React.createElement("div", null,
            React.createElement("h1", { className: "hero-headline fade-up" },
                hl,
                React.createElement("em", null, italic)),
            React.createElement("p", { className: "hero-sub fade-up fade-up-1" }, t.heroSub),
            React.createElement("div", { className: "hero-cta-row fade-up fade-up-2" },
                React.createElement("button", { className: "btn btn-primary", onClick: onSchedule },
                    t.heroCta,
                    " ",
                    React.createElement("span", { className: "btn-arrow" }, "\u2192")),
                React.createElement("a", { className: "btn btn-ghost", href: "mailto:hello@sandstre.am" }, t.heroEmail))),
        React.createElement(MetaStrip, { left: t.heroMetaBottomLeft, right: t.heroMetaBottomRight })));
}
