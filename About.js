function About(_a) {
    var lang = _a.lang;
    var useState = React.useState;
    var t = T[lang];
    var _b = t.aboutHeadline, pre = _b[0], em = _b[1], post = _b[2];
    var _c = useState("business"), mode = _c[0], setMode = _c[1];
    var toggle = function () { return setMode(function (m) { return m === "business" ? "casual" : "business"; }); };
    return (React.createElement("section", { id: "about", className: "section" },
        React.createElement("div", { className: "section-label" },
            React.createElement("span", null,
                React.createElement("span", { className: "num" }, "/ 01"),
                " \u00A0 ",
                t.s01),
            React.createElement("span", { className: "bar" })),
        React.createElement("div", { className: "about-grid" },
            React.createElement("div", { className: "about-portrait", onClick: toggle, style: { cursor: "pointer" } },
                React.createElement("img", { src: "/assets/peter-portrait.jpg", alt: "Peter Sandstr\u00F6m", loading: "lazy", className: mode === "business" ? "p-active" : "" }),
                React.createElement("img", { src: "/assets/peter-casual.jpg", alt: "Peter Sandstr\u00F6m", loading: "lazy", className: mode === "casual" ? "p-active" : "" }),
                React.createElement("div", { className: "corner" }, "PORTRAIT \u00B7 2025"),
                React.createElement("div", { className: "portrait-toggle" },
                    React.createElement("span", { className: mode === "business" ? "pt-active" : "" }, "Business"),
                    React.createElement("span", null, "\u00B7"),
                    React.createElement("span", { className: mode === "casual" ? "pt-active" : "" }, "Casual"))),
            React.createElement("div", { className: "about-body" },
                React.createElement("h2", { className: "about-h" },
                    pre,
                    React.createElement("em", null, em),
                    post),
                React.createElement("p", { className: "about-p" }, t.aboutP1),
                React.createElement("p", { className: "about-p muted" }, t.aboutP2),
                React.createElement("div", { className: "about-stats" },
                    React.createElement("div", { className: "stat" },
                        React.createElement("div", { className: "n" }, "20+"),
                        React.createElement("div", { className: "l" }, t.stat1l)),
                    React.createElement("div", { className: "stat" },
                        React.createElement("div", { className: "n" }, "35"),
                        React.createElement("div", { className: "l" }, t.stat2l)),
                    React.createElement("div", { className: "stat" },
                        React.createElement("div", { className: "n" }, CASES.length),
                        React.createElement("div", { className: "l" }, t.stat3l)))))));
}
