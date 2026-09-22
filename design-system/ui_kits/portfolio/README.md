# Portfolio · `sandstre.am` (2026)

A complete single-page replacement for the existing Jekyll site at
`https://www.sandstre.am`. Built as a hi-fi interactive prototype using
the Sandstream design system tokens directly.

## What's in here

| File | Role |
|---|---|
| `index.html` | Entry — loads fonts, design-system CSS, components |
| `portfolio.css` | Page-specific styles (rail, hero, cases, contact) |
| `App.jsx` | Composes the page · IntersectionObserver for active nav |
| `Header.jsx` | Fixed left rail · wordmark + numbered nav |
| `Hero.jsx` | Editorial hero with mono meta strips |
| `About.jsx` | Portrait + bio + 3 stats |
| `Cases.jsx` | Four references — HunterMatcher, Kjorre, Game Day DJ, Ralph Inferno |
| `Roles.jsx` | 20-year leadership timeline pulled from CV |
| `Contact.jsx` | Dark contact panel + footer |
| `FloatingPill.jsx` | The single floating CTA (bottom-right) |
| `MetaStrip.jsx` | Reusable mono metadata strip primitive |

## Sections

1. **Hero** — `Tjugo år av ledarskap inom tech.` Mono meta strips top and bottom (location, org-nr, current role, languages). Two CTAs.
2. **Om Peter** — Portrait + bio + 3 stats (20+ years, 35 max team, 4 interim CXO roles).
3. **Selected work** — Four case studies (HunterMatcher / Kjorre / Game Day DJ / Ralph Inferno) on the dark grain background.
4. **Roles** — Timeline of 9 selected positions from 2005 to now, drawn straight from Peter's CV.
5. **Contact** — Email · phone · Calendly, dark with grain.

## Content authority

All numbers, dates, role titles, achievements and case-study facts come
from `assets/peter-cv-2026.txt` (Peter's own CV, not published in this repo) and the
`team-summary.pptx` deck he supplied (HunterMatcher cost numbers, stack,
scale). No content is invented. Where a fact wasn't available — e.g.
the precise org-nr for Sandstream AB — a placeholder is used and
flagged in this README for Peter to fill in.

## Known placeholders

- **`ORG.NR 559123-0000`** — placeholder. Replace with real Bolagsverket number in `Hero.jsx` and `Contact.jsx`.
- **Game Day DJ stack** — listed as iOS + Firebase + WebAudio. If the real stack differs, edit `Cases.jsx`.
- **Calendly URL** — `cal.eu/sandstream/30min` carried over from the old site; confirm still valid.

## How to iterate

This file is the design canvas — edit JSX components directly. The
component split was chosen so common edits stay small:

- Change colours / type → edit `colors_and_type.css` (root)
- Change case copy → edit `Cases.jsx` `CASES` array
- Change roles → edit `Roles.jsx` `ROLES` array
- Change hero copy → edit `Hero.jsx` strings
