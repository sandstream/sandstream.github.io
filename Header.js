var useState = React.useState, useEffect = React.useEffect;
function MorphInner() {
    var _a = useState(0), step = _a[0], setStep = _a[1];
    useEffect(function () {
        var STEP = 750;
        var timers = [1, 2, 3, 4].map(function (i) { return setTimeout(function () { return setStep(i); }, i * STEP); });
        return function () { return timers.forEach(clearTimeout); };
    }, []);
    var cls = function (i) { return "wm-v" + (step === i ? " wm-in" : step > i ? " wm-out" : ""); };
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { className: "wm-ghost" },
            "sandstre",
            React.createElement("span", { className: "tld-dot" }, "\u00B7"),
            React.createElement("span", { className: "it" }, "am")),
        React.createElement("span", { className: cls(0) }, "sandstr\u00F6m"),
        React.createElement("span", { className: cls(1) }, "sandstroem"),
        React.createElement("span", { className: cls(2) }, "sandstream"),
        React.createElement("span", { className: cls(3) }, "s\u0103ndstr\u0113m"),
        React.createElement("span", { className: cls(4) },
            "sandstre",
            React.createElement("span", { className: "tld-dot" }, "\u00B7"),
            React.createElement("span", { className: "it" }, "am"))));
}
function WordmarkMorph(_a) {
    var onClick = _a.onClick, style = _a.style;
    var _b = useState(0), seed = _b[0], setSeed = _b[1];
    var handleClick = function () { setSeed(function (s) { return s + 1; }); onClick === null || onClick === void 0 ? void 0 : onClick(); };
    return (React.createElement("div", { className: "wordmark wm-morph", onClick: handleClick, style: style },
        React.createElement(MorphInner, { key: seed })));
}
function Header(_a) {
    var lang = _a.lang, setLang = _a.setLang, active = _a.active, onNav = _a.onNav;
    var t = T[lang];
    var navIds = ["about", "work", "music", "roles", "contact"];
    var nums = ["01", "02", "03", "04", "05"];
    return (React.createElement("aside", { className: "rail", "aria-label": "Primary navigation" },
        React.createElement("div", null,
            React.createElement(WordmarkMorph, { onClick: function () { return onNav("top"); } }),
            React.createElement("nav", { className: "nav" }, navIds.map(function (id, i) { return (React.createElement("a", { key: id, href: "#" + id, "data-num": nums[i], className: active === id ? "active" : "", onClick: function (e) { e.preventDefault(); onNav(id); } }, t.navLabels[i])); })),
            React.createElement("button", { className: "lang-btn", onClick: function () { return setLang(lang === "sv" ? "en" : "sv"); } },
                React.createElement("span", { className: "active-lang" }, lang.toUpperCase()),
                React.createElement("span", null, "\u2192"),
                React.createElement("span", null, lang === "sv" ? "EN" : "SV"))),
        React.createElement("div", { className: "rail-bottom" },
            React.createElement("div", { className: "row" },
                React.createElement("span", null, "v"),
                React.createElement("b", null, "2026.05")),
            React.createElement("div", { className: "row" },
                React.createElement("span", null, "tz"),
                React.createElement("b", null, "UTC+1")),
            React.createElement("div", { className: "row" },
                React.createElement("span", null, "set"),
                React.createElement("b", null, "SV / EN")))));
}
function MobileBar(_a) {
    var lang = _a.lang, setLang = _a.setLang, menuOpen = _a.menuOpen, onToggle = _a.onToggle, onWordmark = _a.onWordmark;
    return (React.createElement("div", { className: "mobile-bar", role: "banner" },
        React.createElement(WordmarkMorph, { onClick: onWordmark, style: { fontSize: 22 } }),
        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
            React.createElement("button", { className: "lang-btn", style: { margin: 0, padding: "4px 8px" }, onClick: function () { return setLang(lang === "sv" ? "en" : "sv"); } },
                React.createElement("span", { className: "active-lang" }, lang.toUpperCase()),
                React.createElement("span", null, "\u2192"),
                React.createElement("span", null, lang === "sv" ? "EN" : "SV")),
            React.createElement("button", { className: "hamburger" + (menuOpen ? " open" : ""), onClick: onToggle, "aria-label": menuOpen ? "Stäng meny" : "Öppna meny", "aria-expanded": menuOpen },
                React.createElement("span", null),
                React.createElement("span", null),
                React.createElement("span", null)))));
}
function MobileNavOverlay(_a) {
    var lang = _a.lang, active = _a.active, onNav = _a.onNav, menuOpen = _a.menuOpen;
    var t = T[lang];
    var navIds = ["about", "work", "music", "roles", "contact"];
    var nums = ["01", "02", "03", "04", "05"];
    return (React.createElement("div", { className: "mobile-nav-overlay" + (menuOpen ? " open" : ""), "aria-hidden": !menuOpen },
        React.createElement("nav", { className: "mobile-nav-links" }, navIds.map(function (id, i) { return (React.createElement("a", { key: id, href: "#" + id, className: active === id ? "active" : "", onClick: function (e) { e.preventDefault(); onNav(id); } },
            React.createElement("span", { className: "mn" }, nums[i]),
            t.navLabels[i])); }))));
}
