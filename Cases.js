function Cases(_a) {
    var lang = _a.lang;
    var t = T[lang];
    var _b = t.casesHeadline, ht = _b[0], hi = _b[1];
    return (React.createElement("section", { id: "work", className: "section dark" },
        React.createElement("div", { className: "section-label" },
            React.createElement("span", null,
                React.createElement("span", { className: "num" }, "/ 02"),
                " \u00A0 ",
                t.s02),
            React.createElement("span", { className: "bar" })),
        React.createElement("div", { className: "cases-head" },
            React.createElement("h2", { className: "cases-title" },
                ht,
                React.createElement("em", null, hi)),
            React.createElement("p", { className: "cases-intro" }, t.casesIntro)),
        React.createElement("div", { className: "cases-grid" }, CASES.map(function (c) {
            var name = c.name.map(function (w, i) { return (React.createElement("span", { key: i },
                i > 0 && " ",
                i === c.italic ? React.createElement("em", null, w) : w)); });
            return (React.createElement("article", { className: "case", key: c.num },
                React.createElement("div", { className: "case-num" }, c.num),
                React.createElement("div", { className: "case-title-block" },
                    React.createElement("div", { className: "case-name" }, name),
                    React.createElement("div", { className: "case-tagline" }, c.tagline[lang])),
                React.createElement("div", { className: "case-body" },
                    React.createElement("div", { className: "case-desc" }, c.desc[lang]),
                    React.createElement("div", { className: "case-meta" }, c.meta.map(function (m, i) { return React.createElement("span", { key: i },
                        React.createElement("b", null, m.l),
                        " ",
                        m.v); })),
                    c.href && (React.createElement("a", { className: "case-link", href: c.href, target: "_blank", rel: "noreferrer" },
                        c.hrefLabel,
                        " ",
                        React.createElement("span", { style: { fontFamily: "var(--font-mono)" } }, "\u2197"))))));
        }))));
}
