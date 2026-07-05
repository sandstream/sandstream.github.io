# sandstre.am — Peter Sandström

Portfolio site for Peter Sandström, hands-on tech lead and consultant.

Live at **[sandstre.am](https://www.sandstre.am)**

## Stack

Plain static HTML served by GitHub Pages — no build step, no framework.

- **React 18** via CDN + **Babel standalone** for JSX in the browser
- **Google Fonts**: Instrument Serif · Geist · JetBrains Mono
- **CSS**: `colors_and_type.css` (design tokens) + `portfolio.css` (layout/components)
- **Content**: `data.js` (T translations, CASES, ROLES arrays)
- **i18n**: Swedish (default) / English toggle via query-free state

## File layout

```
sandstream.github.io/
├── .nojekyll              # GitHub Pages: skip Jekyll build
├── CNAME                  # www.sandstre.am
├── index.html             # HTML shell — loads CSS + JSX components
├── colors_and_type.css    # Design tokens (colors, type, spacing)
├── portfolio.css          # Layout + component styles
├── data.js                # T (translations), CASES, ROLES data
├── App.jsx                # Root React app, scroll spy, state
├── Header.jsx             # Rail nav + MobileBar + MobileNavOverlay
├── Hero.jsx
├── About.jsx
├── Cases.jsx
├── Music.jsx
├── Roles.jsx
├── Contact.jsx            # Contact section + Footer
├── FloatingPill.jsx
├── MetaStrip.jsx
├── assets/
│   ├── peter-portrait.jpg
│   └── mark-favicon.svg
├── sandstre/
│   └── index.html         # Easter egg: phonetic name morph animation
├── design-system/         # Design system source (reference, not deployed)
└── archive/               # Old Jekyll site + historical sub-paths (djr, ngcs, ica)
```

## Local dev

```bash
python3 -m http.server 8900
# open http://localhost:8900
```

## Deploy

Push to `master` — GitHub Pages serves files as-is (`.nojekyll` disables Jekyll).

## Design system

See `design-system/CLAUDE_CODE_HANDOFF.md` for the full design brief and component mapping.
Colors and type tokens: `design-system/colors_and_type.css`.
