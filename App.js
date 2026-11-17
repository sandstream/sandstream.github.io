var useState = React.useState, useEffect = React.useEffect, useCallback = React.useCallback;
function App() {
    var _a = useState("sv"), lang = _a[0], setLang = _a[1];
    var _b = useState("top"), active = _b[0], setActive = _b[1];
    var _c = useState(false), menuOpen = _c[0], setMenuOpen = _c[1];
    var scrollTo = useCallback(function (id) {
        setMenuOpen(false);
        var el = document.getElementById(id);
        if (!el)
            return;
        var mobileOffset = window.innerWidth <= 720 ? 64 : 0;
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - mobileOffset, behavior: "smooth" });
    }, []);
    var openSchedule = useCallback(function () {
        setMenuOpen(false);
        window.open("https://cal.eu/sandstream/quick-chat", "_blank", "noopener,noreferrer");
    }, []);
    useEffect(function () {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return function () { document.body.style.overflow = ""; };
    }, [menuOpen]);
    useEffect(function () {
        var ids = ["top", "about", "work", "music", "roles", "contact"];
        var onScroll = function () {
            var threshold = window.scrollY + window.innerHeight * 0.15;
            var current = ids[0];
            for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                var id = ids_1[_i];
                var el = document.getElementById(id);
                if (el && el.offsetTop <= threshold)
                    current = id;
            }
            setActive(current);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return function () { return window.removeEventListener("scroll", onScroll); };
    }, []);
    return (React.createElement("div", { className: "page" },
        React.createElement(Header, { lang: lang, setLang: setLang, active: active === "top" ? "" : active, onNav: scrollTo }),
        React.createElement(MobileBar, { lang: lang, setLang: setLang, menuOpen: menuOpen, onToggle: function () { return setMenuOpen(function (o) { return !o; }); }, onWordmark: function () { return scrollTo("top"); } }),
        React.createElement(MobileNavOverlay, { lang: lang, active: active === "top" ? "" : active, onNav: scrollTo, menuOpen: menuOpen }),
        React.createElement("main", { className: "main" },
            React.createElement(Hero, { lang: lang, onSchedule: openSchedule }),
            React.createElement(About, { lang: lang }),
            React.createElement(Cases, { lang: lang }),
            React.createElement(Music, { lang: lang }),
            React.createElement(Roles, { lang: lang }),
            React.createElement(Contact, { lang: lang, onSchedule: openSchedule })),
        React.createElement(FloatingPill, { lang: lang, onClick: openSchedule, active: active, menuOpen: menuOpen })));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
