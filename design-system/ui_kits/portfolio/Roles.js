// Roles.jsx — recent leadership timeline. Pulled from Peter's CV.
var ROLES = [
    { when: "2026 → NU", title: "AI & Innovation Lead", org: "Frontwalker", tag: "Current" },
    { when: "2025 — 2026", title: "AI-konsult & medgrundare", org: "Frontwalker AIDA", tag: "Co-founded HunterMatcher" },
    { when: "2023 — 2024", title: "Grundare & konsult", org: "Sandstream AB", tag: "Interim · advisory" },
    { when: "2021 — 2023", title: "Managing Director", org: "Devoteam Creative Tech", tag: "Team 13 → 35" },
    { when: "2019 — 2021", title: "CTO Mobiento · Senior Manager", org: "Deloitte AB", tag: "M&A · Conversational AI" },
    { when: "2017 — 2018", title: "Nordic Engineering Manager", org: "SATS ELIXIA", tag: "Online ↑ 5% → 13%" },
    { when: "2012 — 2017", title: "Nordic IT Operations / Infra / Transformation", org: "SATS ELIXIA", tag: "Cloud-First · CRM" },
    { when: "2011 — 2012", title: "IT Manager", org: "Boots Apotek", tag: "0 → 9 apotek" },
    { when: "2005 — 2011", title: "IT-chef & Webbansvarig", org: "SwedSec Licensiering AB", tag: "MVC · REST · DevOps" },
];
function Roles() {
    return (React.createElement("section", { id: "roles", className: "section", "data-screen-label": "03 Roles" },
        React.createElement("div", { className: "section-label" },
            React.createElement("span", null,
                React.createElement("span", { className: "num" }, "/ 03"),
                " \u00A0 selected roles \u00B7 20 years"),
            React.createElement("span", { className: "bar" })),
        React.createElement("div", { className: "roles" },
            React.createElement("div", { className: "roles-intro" },
                React.createElement("h2", null,
                    "Tjugo \u00E5r av ",
                    React.createElement("em", null, "uppdrag.")),
                React.createElement("p", null, "En kortfattad timeline \u00F6ver formella roller. Full CV och case-beskrivningar p\u00E5 beg\u00E4ran.")),
            React.createElement("div", { className: "roles-list" }, ROLES.map(function (r, i) { return (React.createElement("div", { className: "role", key: i },
                React.createElement("div", { className: "role-when" }, r.when),
                React.createElement("div", { className: "role-title" },
                    r.title,
                    React.createElement("span", { className: "org" },
                        "\u00B7 ",
                        r.org)),
                React.createElement("div", { className: "role-tag" }, r.tag))); })))));
}
window.Roles = Roles;
