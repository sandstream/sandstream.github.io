// Header.jsx — fixed left rail with wordmark + nav + theme toggle.
// Clicking the wordmark plays a phonetic morph through Peter's name
// variants before scrolling back to top.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef, useCallback = React.useCallback;
// The phonetic variants the wordmark cycles through. Last one IS the
// canonical wordmark; the morph "settles" there. The .am is rendered
// with italic teal styling baked into the HTML strings so the final
// state matches the static wordmark exactly.
var PHONETIC_VARIANTS = [
    "sandström",
    "sandstroem",
    "sandstream",
    "săndstrēm",
    '<span>sandstre</span><span class="tld-dot">.</span><span class="tld">am</span>',
];
// Plays a sequence of in-place morphs on a single element.
// Returns a Promise that resolves when the morph settles.
function playMorph(el, variants, holdMs) {
    if (holdMs === void 0) { holdMs = 280; }
    return new Promise(function (resolve) {
        var i = 0;
        function tick() {
            el.classList.add("morph-out");
            setTimeout(function () {
                el.innerHTML = variants[i];
                el.classList.remove("morph-out");
                el.classList.add("morph-in");
                // Force reflow so the .morph-in transition triggers
                void el.offsetWidth;
                el.classList.remove("morph-in");
                i++;
                if (i >= variants.length) {
                    // Mark settled so the wordmark stays styled correctly
                    el.classList.add("morph-settled");
                    resolve();
                    return;
                }
                setTimeout(tick, holdMs);
            }, 180);
        }
        tick();
    });
}
function ThemeToggle() {
    var _a = useState(function () {
        if (typeof window === "undefined")
            return "light";
        return localStorage.getItem("sandstream-theme") || "light";
    }), theme = _a[0], setTheme = _a[1];
    useEffect(function () {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("sandstream-theme", theme);
    }, [theme]);
    var toggle = function () { return setTheme(function (t) { return (t === "light" ? "dark" : "light"); }); };
    return (React.createElement("button", { type: "button", className: "theme-toggle", onClick: toggle, "aria-label": "Switch to " + (theme === "light" ? "dark" : "light") + " mode", title: "Switch to " + (theme === "light" ? "dark" : "light") + " mode" },
        React.createElement("span", { className: "track " + theme },
            React.createElement("span", { className: "knob", "aria-hidden": "true" },
                React.createElement("span", { className: "glyph sun" }, "\u25CB"),
                React.createElement("span", { className: "glyph moon" }, "\u25CF"))),
        React.createElement("span", { className: "theme-label" },
            React.createElement("span", { className: theme === "light" ? "on" : "" }, "LIGHT"),
            React.createElement("span", { className: "sep" }, " / "),
            React.createElement("span", { className: theme === "dark" ? "on" : "" }, "DARK"))));
}
function Header(_a) {
    var _this = this;
    var active = _a.active, onNav = _a.onNav;
    var navItems = [
        { id: "about", num: "01", label: "Bio" },
        { id: "work", num: "02", label: "Selected work" },
        { id: "roles", num: "03", label: "Roles" },
        { id: "contact", num: "04", label: "Contact" },
    ];
    var wordmarkRef = useRef(null);
    var morphingRef = useRef(false);
    var handleWordmarkClick = useCallback(function (e) { return __awaiter(_this, void 0, void 0, function () {
        var el, canonical, atTop;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (morphingRef.current)
                        return [2 /*return*/];
                    morphingRef.current = true;
                    el = wordmarkRef.current;
                    if (!el) {
                        morphingRef.current = false;
                        return [2 /*return*/];
                    }
                    canonical = PHONETIC_VARIANTS[PHONETIC_VARIANTS.length - 1];
                    atTop = window.scrollY < 8;
                    if (!atTop) {
                        // Start scrolling to top in parallel with the morph so they finish
                        // around the same time. The morph is the visible feedback.
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                    return [4 /*yield*/, playMorph(el, PHONETIC_VARIANTS, 240)];
                case 1:
                    _a.sent();
                    el.innerHTML = canonical;
                    morphingRef.current = false;
                    return [2 /*return*/];
            }
        });
    }); }, []);
    return (React.createElement("aside", { className: "rail", "aria-label": "Primary" },
        React.createElement("div", null,
            React.createElement("a", { href: "#top", className: "wordmark", ref: wordmarkRef, onClick: handleWordmarkClick, "aria-label": "sandstre.am \u2014 click to replay intro", dangerouslySetInnerHTML: { __html: PHONETIC_VARIANTS[PHONETIC_VARIANTS.length - 1] } }),
            React.createElement("nav", { className: "nav" }, navItems.map(function (n) { return (React.createElement("a", { key: n.id, href: "#" + n.id, "data-num": n.num, className: active === n.id ? "active" : "", onClick: function (e) { e.preventDefault(); onNav(n.id); } }, n.label)); }))),
        React.createElement("div", { className: "rail-bottom" },
            React.createElement(ThemeToggle, null),
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
window.Header = Header;
