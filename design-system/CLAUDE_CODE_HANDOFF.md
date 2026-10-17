# Claude Code — Handoff Brief

> **Goal:** Rebuild `sandstre.am` (currently a Jekyll/Bootstrap "Grayscale"
> template) as a modern static site implementing this design system,
> with the case studies and bio captured in the prototype.

This brief is meant to be opened by Claude Code in a fresh terminal,
pointed at this folder. Everything Claude Code needs to ship the site
is in this project. Read this brief first, then start.

---

## 0 · Setup commands

```bash
# Clone the existing site — it already has the right CNAME (www.sandstre.am)
# and a few historical demos under sub-paths. Don't start fresh; preserve git
# history and keep the live DNS.
git clone https://github.com/sandstream/sandstream.github.io.git
cd sandstream.github.io

# Strip the Jekyll machinery. We're staying on GitHub Pages but going
# plain-static (no build step, no Jekyll). Move the old stuff to archive/
# so URLs like sandstre.am/djr/ keep working.
mkdir archive
git mv djr ngcs ica lullabys.html archive/ 2>/dev/null || true
git mv _includes _layouts _site _config.yml "_config copy.yml" archive/_jekyll/ 2>/dev/null || mkdir -p archive/_jekyll
git mv css js dist node_modules package.json package-lock.json archive/_jekyll/ 2>/dev/null || true

# Add an empty .nojekyll to opt out of GitHub's Jekyll build step entirely.
# Without this, GH Pages tries to interpret our static files as Jekyll input.
touch .nojekyll

# Keep CNAME at root — it's already correct (www.sandstre.am).
```

**Stack choice — plain static HTML, no build step.**

The prototype in `ui_kits/portfolio/` uses React via Babel-standalone
in the browser. For a 1-page portfolio with a few hundred visits/month,
**that setup is production-shippable as-is.** No build pipeline, no
GitHub Actions, no Vercel — push to `master`, GitHub Pages serves it.
Lighthouse will still hit ≥ 90 with the simple optimisations below.

**Production file layout:**

```
sandstream.github.io/
├── .nojekyll              # opt out of Jekyll build
├── CNAME                  # www.sandstre.am — keep as-is
├── index.html             # ported from ui_kits/portfolio/index.html
├── portfolio.css
├── colors_and_type.css    # copy in from this design system
├── App.jsx
├── Header.jsx
├── Hero.jsx
├── About.jsx
├── Cases.jsx
├── Roles.jsx
├── Contact.jsx
├── FloatingPill.jsx
├── MetaStrip.jsx
├── sandstre/              # the phonetic-morph easter egg
│   └── index.html
├── assets/
│   ├── peter-portrait.jpg
│   ├── logo-wordmark.svg
│   ├── logo-wordmark-light.svg
│   └── mark-favicon.svg
└── archive/               # old Jekyll site preserved under sub-paths
    ├── djr/
    ├── ngcs/
    ├── ica/
    ├── lullabys.html
    └── _jekyll/           # raw source kept for history
```

**When to consider a real build step** (later, not now):

- You add a blog with 5+ posts and want markdown + MDX — switch to
  Astro on Vercel.
- You add i18n routing and want `/en/` / `/sv/` as real paths instead
  of a query-param toggle — switch to Astro on Vercel.
- React-via-CDN starts noticeably slowing things (e.g. you add 10+
  components and bundle hits ~200KB) — pre-bundle with Vite, push
  the built `dist/` to GH Pages via Action.

For the launch version: don't bother.

---

## 1 · Design system source of truth

| You want | Read this |
|---|---|
| Brand narrative + tone | `README.md` (root) |
| Color + type tokens | `colors_and_type.css` |
| Brand voice rules | `README.md` § "Content fundamentals" |
| Visual foundations | `README.md` § "Visual foundations" |
| Iconography rules | `README.md` § "Iconography" |
| Working hi-fi reference | `ui_kits/portfolio/index.html` |

**Copy `colors_and_type.css` into the new project verbatim.** Every
hex value, every spacing token, every font reference is intentional.
Do not introduce new design tokens; if something feels missing, ask
before adding.

---

## 2 · Component → file mapping

Port these React components straight into the deploy target — they
already use React-via-CDN, which ships fine to GitHub Pages (see §0).
No framework migration needed; just clean filenames, then optionally
pre-compile JSX → JS for perf (see §8).

| Source (in this design system) | Production target |
|---|---|
| `ui_kits/portfolio/index.html` | `index.html` (repo root) |
| `ui_kits/portfolio/portfolio.css` | `portfolio.css` (repo root) |
| `colors_and_type.css` | `colors_and_type.css` (repo root) |
| `ui_kits/portfolio/Header.jsx` | `Header.jsx` |
| `ui_kits/portfolio/Hero.jsx` | `Hero.jsx` |
| `ui_kits/portfolio/About.jsx` | `About.jsx` |
| `ui_kits/portfolio/Cases.jsx` | `Cases.jsx` + extract `CASES` to JSON |
| `ui_kits/portfolio/Roles.jsx` | `Roles.jsx` + extract `ROLES` to JSON |
| `ui_kits/portfolio/Contact.jsx` | `Contact.jsx` + `Footer` extract |
| `ui_kits/portfolio/FloatingPill.jsx` | `FloatingPill.jsx` |
| `ui_kits/portfolio/MetaStrip.jsx` | `MetaStrip.jsx` (currently unused — drop or wire up) |
| `ui_kits/portfolio/App.jsx` | `App.jsx` |
| `explorations/sandstre-intro.html` | `sandstre/index.html` (easter egg) |

Extract `CASES` and `ROLES` arrays into JSON or YAML so future Peter
can edit content without touching JSX. The factual data inside them
came from `assets/peter-cv-2026.txt` (kept out of this public copy - see README).

---

## 3 · Assets to use

| File | What | Where to put it |
|---|---|---|
| `assets/peter-portrait.jpg` | Hero/About portrait | `public/peter.jpg` |
| `assets/logo-wordmark.svg` | Inline wordmark, ink | `src/components/Wordmark.astro` (inline) |
| `assets/logo-wordmark-light.svg` | Inline wordmark, bone | (same component, prop-driven) |
| `assets/mark-favicon.svg` | Favicon + app icon | `public/favicon.svg` |
| `assets/peter-cv-2026.txt` | Source of truth for bio facts | **Not in this public copy.** Local skill only. |

---

## 4 · Fonts

Use Google Fonts — same three families:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

If you self-host fonts later for performance, use `font-display: swap`
and preload `Instrument+Serif:ital,wght@1,400` (the italic is on the
critical path for the hero headline).

---

## 5 · Things to NOT redesign

These are intentional and locked. Do not "improve" them without
explicit approval:

1. **One italic word per headline.** Every display headline has
   exactly one word in `<em>`. Never two.
2. **The bone background.** `#F4F2EC`, not `#FFFFFF`.
3. **The accent.** `#1E8A8A` only. No second accent colour.
4. **Sharp cards.** `border-radius: 0` on cards. 8px is only for buttons.
5. **Hairline borders, not shadows.** Default elevation is a 1px
   `--border` inset hairline. The pop shadow exists for ONE element on
   the page (the floating pill).
6. **No emoji.** Mono symbols only: `→ · ↗ ↺`.
7. **The mono metadata strips.** Uppercase, narrow tracking, mono.
   They appear top of hero, bottom of hero, bottom of contact. They're
   the brand's "tech-savvy" signal — keep them.

---

## 6 · Specific requirements / open questions

Ship these as proper engineering, not design:

- [ ] **i18n.** Swedish primary, English secondary. Use a query param
      (`?lang=en`) or subpath (`/en/`). Headline italicisation pattern
      works in both languages — find the right noun per locale.
- [ ] **SEO.** Real `<title>`, `<meta name="description">`, OG image
      (use a 1200×630 export of the hero). Schema.org `Person` for
      Peter on the homepage.
- [ ] **Analytics.** Use Plausible or Fathom (privacy-friendly, no
      cookie banner). Avoid GA.
- [ ] **Calendly embed.** Currently a link to
      `cal.eu/sandstream/30min` — confirm with Peter whether to
      embed inline on the contact page or keep external.
- [ ] **Real Bolagsverket org-nr.** Hero + Contact + Footer use
      placeholder `559123-0000`. Get the real number.
- [ ] **Email form.** `hello@sandstre.am` is mailto-only today. If
      Peter wants a real form, add Resend or Plunk.
- [ ] **OG image.** Generate a 1200×630 image: bone background, the
      `sandstream` wordmark large, "Tjugo år av ledarskap inom tech."
      headline. Use the same fonts.
- [ ] **404 page.** Same rail + a mono "404 / page not found" set in
      Instrument Serif italic. Link back home.

---

## 7 · Things the user didn't decide yet — ASK before assuming

1. ~~**Wordmark direction.**~~ **Decided: Option B (`sandstre.am`
   domain-hack).** The `.` and `am` are set in Stream Teal `#1E8A8A`,
   the `am` is italic. See `assets/logo-wordmark.svg` and
   `preview/logo-light.html`.
2. ~~**Dark mode toggle?**~~ **Decided: ship a toggle, default LIGHT,
   persist in localStorage.** Implemented in `Header.jsx` /
   `portfolio.css` (the segmented pill in the rail).
3. **Game Day DJ stack.** Listed as iOS + Firebase + WebAudio.
   Confirm before publishing.
4. **Ralph Inferno license + repo state.** Currently linking to
   `github.com/sandstream/ralph-inferno`. Confirm public + ready.

### 7a · Easter egg: `sandstre` route

Peter's existing `index 2.html` (kept from the old repo, see § 0)
animates through phonetic spellings of his name:

```
sandström → sandstroem → sandstream → săndstrēm → sandstre.am
```

Set this up as a hidden route at **`/sandstre`** (or trigger via
Cmd-K from the main page). Re-implement the `fitter-happier-text`
behaviour with modern CSS — each spelling fits the viewport width,
crossfades to the next every ~1.6s, settles on `sandstre.am` (which
is set in the canonical wordmark style: italic `.am` in Stream Teal),
and fades into a "→ enter site" link back to `/`.

Use the same Instrument Serif + bone background + grain overlay
treatment as the main site so it feels like a memory of the site,
not a separate page. Add a meta tag `<meta name="robots" content="noindex">`
so it stays an easter egg.

---

## 8 · Deploy

**Stay on GitHub Pages.** No new platform needed.

1. Push to `master`. GitHub Pages serves it.
2. The `.nojekyll` file (added in § 0) tells Pages to skip the Jekyll
   build step — files are served as-is.
3. `CNAME` is already correct (`www.sandstre.am`). Don't touch it.
4. Verify HTTPS is on in Pages settings → custom domain.
5. Add a redirect from `sandstream.github.io` to `www.sandstre.am`
   (this happens automatically once CNAME is set).

**Performance optimisations to apply before launch:**

- Preload `Instrument Serif` italic — it's on the critical path for
  the hero headline.
- Inline the critical CSS (`colors_and_type.css` first declaration
  block + portfolio hero styles) into `<head>`; load the rest async.
- Lazy-load `assets/peter-portrait.jpg` — it's below the fold.
- The `*.jsx` files load via Babel-standalone. Babel transpiles in the
  browser (~150KB). To trim this:
  - Option A: keep as-is. Total payload still under 250KB. Acceptable.
  - Option B: pre-compile JSX → JS once with `npx esbuild *.jsx
    --jsx=automatic --outdir=js/`. Ship `.js` and drop Babel from
    `<head>`. ~120KB lighter. No build pipeline; just a one-time step
    when components change. **Recommended before launch.**

Keep the existing `sandstream.github.io` repo as-is. The migration is
just a series of commits on `master`, not a new repo.

---

## 9 · Definition of done

- [ ] All five sections render exactly as the prototype on desktop
- [ ] Mobile (375px) gracefully collapses — rail becomes top nav,
      headline reflows, case cards stack
- [ ] Lighthouse: ≥ 95 Performance, ≥ 100 Accessibility, ≥ 95 SEO
- [ ] No layout shift on font load (preload italic Instrument Serif)
- [ ] Both languages (sv default, en secondary) ship with content
- [ ] OG image + meta tags + favicon all set
- [ ] Real org-nr replaces placeholder
- [ ] Domain `sandstre.am` resolves, HTTPS, with redirect from
      `www.sandstre.am` and the old `sandstream.github.io`

---

## 10 · Need clarification?

If something is ambiguous, **read `README.md` first**, then ask
Peter. Don't invent. The voice and visual rules are tight on purpose;
guessing leads to drift.

— end —
