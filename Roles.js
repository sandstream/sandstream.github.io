function Roles(_a) {
    var lang = _a.lang;
    var t = T[lang];
    var _b = t.rolesHeadline, rh = _b[0], ri = _b[1];
    return (React.createElement("section", { id: "roles", className: "section" },
        React.createElement("div", { className: "section-label" },
            React.createElement("span", null,
                React.createElement("span", { className: "num" }, "/ 04"),
                " \u00A0 ",
                t.s04),
            React.createElement("span", { className: "bar" })),
        React.createElement("div", { className: "roles" },
            React.createElement("div", { className: "roles-intro" },
                React.createElement("h2", null,
                    rh,
                    React.createElement("em", null, ri)),
                React.createElement("p", null, t.rolesP)),
            React.createElement("div", { className: "roles-list" }, ROLES.map(function (r, i) { return (React.createElement("div", { className: "role", key: i },
                React.createElement("div", { className: "role-when" }, r.when),
                React.createElement("div", { className: "role-title" },
                    r.title[lang],
                    React.createElement("span", { className: "org" },
                        "\u00B7 ",
                        r.org)),
                React.createElement("div", { className: "role-tag" }, r.tag[lang]),
                r.desc && React.createElement("p", { className: "role-desc" }, r.desc[lang]))); })))));
}
