function Music(_a) {
    var lang = _a.lang;
    var t = T[lang];
    var _b = t.musicHeadline, mpre = _b[0], mem = _b[1];
    return (React.createElement("section", { id: "music", className: "section" },
        React.createElement("div", { className: "section-label" },
            React.createElement("span", null,
                React.createElement("span", { className: "num" }, "/ 03"),
                " \u00A0 ",
                t.s03),
            React.createElement("span", { className: "bar" })),
        React.createElement("div", { style: { maxWidth: "56ch", marginBottom: 48 } },
            React.createElement("h2", { style: { fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", lineHeight: 1, letterSpacing: "-.02em", color: "var(--fg)", marginBottom: 16 } },
                mpre,
                React.createElement("em", null, mem)),
            React.createElement("p", { style: { fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.6, color: "var(--fg-2)" } }, t.musicSub)),
        React.createElement("div", { className: "music-grid" },
            React.createElement("div", { className: "music-card" },
                React.createElement("div", { className: "music-tag" }, "Country / Americana"),
                React.createElement("div", { className: "music-name" },
                    "Diesel ",
                    React.createElement("em", null, "Johnny"),
                    " Raines"),
                React.createElement("div", { className: "music-desc" }, lang === "sv"
                    ? "Eget countryprojekt. Låtar om vägar, förlust och att börja om igen, producerat självständigt och distribuerat globalt. Tillgängligt på alla stora streamingtjänster."
                    : "Country and Americana songwriting project. Songs about roads, loss and starting over, produced independently and distributed worldwide. Available on all major streaming platforms."),
                React.createElement("div", { className: "music-links" },
                    React.createElement("a", { className: "card-link", href: "https://www.dieseljohnnyraines.com/", target: "_blank", rel: "noreferrer" },
                        "dieseljohnnyraines.com ",
                        React.createElement("span", { style: { fontFamily: "var(--font-mono)" } }, "\u2197")),
                    React.createElement("a", { className: "card-link", href: "https://open.spotify.com/artist/1PP98gl7W2oNFOiz96vhX2", target: "_blank", rel: "noreferrer" },
                        "Spotify ",
                        React.createElement("span", { style: { fontFamily: "var(--font-mono)" } }, "\u2197")))),
            React.createElement("div", { className: "music-card" },
                React.createElement("div", { className: "music-tag" }, "Pop / Singer-songwriter"),
                React.createElement("div", { className: "music-name" },
                    "Maja ",
                    React.createElement("em", null, "Linden")),
                React.createElement("div", { className: "music-desc" }, lang === "sv"
                    ? "Popmusik med singer-songwriter-känsla. Melodier som stannar kvar. Tillgänglig på Spotify och alla stora streamingtjänster."
                    : "Pop project with a singer-songwriter sensibility. Melodies that stay with you. Available on Spotify and all major streaming platforms."),
                React.createElement("div", { className: "music-links" },
                    React.createElement("a", { className: "card-link", href: "https://open.spotify.com/artist/1PP98gl7W2oNFOiz96vhX2", target: "_blank", rel: "noreferrer" },
                        "Spotify ",
                        React.createElement("span", { style: { fontFamily: "var(--font-mono)" } }, "\u2197")))))));
}
