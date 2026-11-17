// App.jsx — composes the page. Tracks active section via IntersectionObserver
// for nav highlighting. Smooth-scroll on nav clicks.
var useState = React.useState, useEffect = React.useEffect, useCallback = React.useCallback, useRef = React.useRef;
function App() {
    var _a = useState("top"), active = _a[0], setActive = _a[1];
    var scrollTo = useCallback(function (id) {
        var el = document.getElementById(id);
        if (!el)
            return;
        var top = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top, behavior: "smooth" });
    }, []);
    var openSchedule = useCallback(function () {
        window.open("https://cal.eu/sandstream/quick-chat", "_blank", "noopener,noreferrer");
    }, []);
    useEffect(function () {
        var sections = ["top", "about", "work", "roles", "contact"]
            .map(function (id) { return document.getElementById(id); })
            .filter(Boolean);
        if (!sections.length)
            return;
        var obs = new IntersectionObserver(function (entries) {
            // Pick the entry closest to the top with majority visibility
            var visible = entries
                .filter(function (e) { return e.isIntersecting; })
                .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
            if (visible.length)
                setActive(visible[0].target.id);
        }, { rootMargin: "-30% 0px -55% 0px", threshold: 0 });
        sections.forEach(function (s) { return obs.observe(s); });
        return function () { return obs.disconnect(); };
    }, []);
    // Re-render Lucide icons after mount
    useEffect(function () {
        if (window.lucide)
            window.lucide.createIcons();
    }, []);
    return (React.createElement("div", { className: "page" },
        React.createElement(Header, { active: active === "top" ? "" : active, onNav: scrollTo }),
        React.createElement("main", { className: "main" },
            React.createElement(Hero, { onSchedule: openSchedule }),
            React.createElement(About, null),
            React.createElement(Cases, null),
            React.createElement(Roles, null),
            React.createElement(Contact, { onSchedule: openSchedule })),
        React.createElement(FloatingPill, { onClick: openSchedule })));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
