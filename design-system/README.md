# Sandstream Design System

A 2026 visual + verbal system for **Peter Sandström / Sandstream AB** —
Stockholm-based interim tech leader (CTO / CIO / CPO / CDO). The system
defines a tight, editorial, computationally-literate brand for the
portfolio site at `sandstre.am` and any adjacent decks or one-pagers.

> _Interim ledning inom Tech._
> _Strategic technology leadership for the spaces in between._

---

## What this public copy leaves out

This repository is public and served at `sandstre.am`. Two things are
therefore deliberately absent, and the full versions live only in the
local Claude Code skill at `~/.claude/skills/sandstream-design/`:

- **`assets/peter-cv-2026.txt`** — the full CV. The site's own position is
  "Fullständigt CV och case-beskrivningar på begäran", so publishing it here
  would contradict that. A `.gitignore` rule keeps it from being added by
  accident.
- **The phone number in `ui_kits/portfolio/Contact.jsx`** — replaced with a
  `[PHONE]` placeholder. `sandstre.am` publishes email and a booking link,
  not a mobile number.

Everything else is here. The portrait and favicon are already served from
the live site, so they add no new exposure.

---

## Sources

This system was derived from materials the user supplied:

- **GitHub**: `sandstream/portfolio` — _empty at the time of authoring._
- **GitHub**: `sandstream/sandstream.github.io` (`master`) — at the time of
  authoring (May 2026) this was a Jekyll/Bootstrap portfolio site. It has
  since been rebuilt as the plain-static site now live at `sandstre.am`,
  which is the result of this design system. Used for:
  - Brand identity, name, contact details (`_config.yml`)
  - Swedish copy and service positioning
    (`_includes/section*.html`, `header.html`, `contact.html`)
  - Portrait photography (`img/peter-about.jpg`, copied to
    `assets/peter-portrait.jpg`)
- **Brief**: "2026 insanely aesthetic and tech-savvy page."

That earlier site was content-correct but visually dated (Bootstrap
Grayscale theme, opaque black panel overlays, mixed color accents). The
content was preserved and re-framed; the visuals were rebuilt from zero
with a clear aesthetic position. **That rebuild has shipped** — `sandstre.am`
now runs plain static HTML with these tokens inlined, no build step.

---

## Brand essence

**Name.** "Sandstream" — _sand_ + _stream_. Time falling in fine grain,
attention flowing, signal collecting. The brand mark holds this tension
without being literal: warm grain neutrals (sand), single sharp accent
(stream / signal), monospace timestamps (time falling).

**Voice.** Bilingual Swedish/English. Calm authority. No hype, no
emoji, no "🚀 transforming the future of." Specific over general,
concrete over abstract. _Interim_ implies temporary and crucial — the
voice mirrors that: precise, useful, leaves.

**Positioning.** Twenty-plus years across leadership and innovation
in tech. Interim leader for transitions, scale phases, turnarounds.
Stockholm-based, internationally fluent.

---

## Index — files in this system

| Path | What |
|---|---|
| `README.md` | This file. The narrative — read first. |
| `SKILL.md` | Agent-compatible skill manifest. |
| `colors_and_type.css` | Single source of truth for color + type tokens. |
| `assets/` | Logos (SVG), portrait photography, favicon mark, Peter's full CV. |
| `preview/` | Small HTML specimens used as cards in the Design System tab. One concept per card. |
| `ui_kits/portfolio/` | The full 2026 portfolio site as a working hi-fi React prototype. |

There are no slide templates yet — none were provided. Ask if you want
deck templates derived from this system.

---

## Content fundamentals

### Tone

**Calm, specific, useful.** The voice is that of an experienced
operator who has been in the room when difficult decisions were made,
and who is comfortable not embellishing. Reads like a senior
consultant's briefing note, not a sales page.

**Bilingual by default.** Primary surfaces (sandstre.am, decks for
Swedish prospects) lead with **Swedish**. English is the secondary
locale for international engagements. The two are visually
distinguished — Swedish in display serif, English in mono — when shown
together on a page.

### Casing

- **Section labels** — `lowercase mono with wide tracking`, often
  prefixed with a slash or section number, e.g.
  `/01 — interim ledning` or `01 / services`.
- **Display headlines** — sentence case in Instrument Serif, often
  with one word italicised for emphasis, e.g.
  _Tjugo år av ledarskap i_ tech.
- **Body** — sentence case, no underlines, no bold inside paragraphs.
- **ALL CAPS** is reserved for the wordmark and a single hero call
  per page. Don't sprinkle.

### Person & pronouns

- **Third person** for Peter on marketing surfaces — "Peter has led…",
  "His engagements typically…". This reads as a professional bio, not
  a self-promo.
- **Direct second person** for CTAs only — _"Boka ett möte"_,
  _"Tell us about the transition"_.
- Company is **"Sandstream"** (one word, capital S). Legal entity is
  **"Sandstream AB"**, used only in footers and contractual contexts.

### Emoji & decorative glyphs

**No emoji.** Ever. Use mono symbols when a glyph is needed:
`→ / · / ↗ / ◯ / ▮ / ↺`. The arrow `→` is the brand's punctuation —
it appears in links, CTAs, lists. The middle dot `·` separates inline
metadata. The slash `/` prefixes section numbers.

### Specimens

> **Headline (SV):**
> _Tjugo år av ledarskap inom_ tech. _Stockholm-baserat, internationellt
> uppdragsbart._
>
> **Headline (EN):**
> _Two decades of technical leadership._ Stockholm-based, available
> worldwide.

> **Subhead (SV):** Strategisk översikt och praktisk teknisk insikt
> för digital transformation, interimsuppdrag och skalresa.

> **Bio sentence:** Peter har varit Managing Director, CPO, CTO, CIO
> och CDO. Just nu mellan uppdrag.

> **CTA:** Boka 30 min → · Email · LinkedIn

> **Meta strip (mono):**
> `STOCKHOLM, 59.33°N` · `AVAILABLE Q3 2026` · `v2026.05`

### Things the voice never does

- Hype words: "revolutionary", "game-changing", "world-class", "10×"
- Filler verbs: "leverage", "unlock", "supercharge", "synergize"
- Bullet salad — prose first, lists only when items are genuinely
  parallel
- Emoji, caps lock for emphasis, exclamation marks, em-dashes between
  every clause

---

## Visual foundations

### The system in one sentence

> A warm-cool bone neutral page, an editorial serif headline with one
> italicised word, a precise sans body, mono metadata strips, and one
> stream-teal signal accent. No more colours.

### Colour

**Three layers, one accent.**

- **Bone** (`#F4F2EC → #CFC8B5`) — warm-cool neutral page and surfaces.
  Always slightly off-white with a faint green-grey cast; never pure
  `#FFFFFF`. The page _feels_ like recycled paper, not bleach.
- **Ink** (`#0E1A1A → #2C3838`) — near-black text and dark mode
  surfaces. Slight teal cast lines up with the signal accent so dark
  surfaces feel like the same family, not a different brand.
- **Stream teal** (`#1E8A8A`) — the single signal accent. Used for
  primary CTAs, marks, the wordmark dot, link hover. **One signal per
  view.** If you find yourself reaching for a second accent colour, you
  are wrong; restate the hierarchy first.
- **Warm second** (`#C77B3A`) — a warm copper reserved exclusively for
  data visualisation, charts, and one-off "heat" indicators where teal
  alone can't differentiate categories. Never decorative.

The old site's palette (`#40E0D0`, `#FF1493`, `#9400D3`) is **retired.**

### Typography

Three families, no more.

| Role | Family | Source |
|---|---|---|
| Display | **Instrument Serif** | Google Fonts |
| UI / body | **Geist** | Google Fonts |
| Mono | **JetBrains Mono** | Google Fonts |

Instrument Serif's italic is a _signature move_ — it carries one word
per headline and nothing else. The combination gives Sandstream a
voice that reads "editorial weekly" and "technical bulletin" at the
same time.

> _Font substitution note._ No proprietary fonts are licensed in the
> existing brand, so the system uses freely-available Google Fonts
> across the board. If Peter wants to commission a proprietary type
> license (e.g. ABC Diatype, Söhne, or PP Editorial Old), the system's
> token names map cleanly to that swap. **Ask Peter if a brand-type
> upgrade is desired.**

### Spacing

A 4px base scale (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 /
192). Most layouts use **only** 16, 24, 32, 64, 96. Don't fill space —
let bone breathe.

### Layout

**Asymmetric editorial grids.** 12-column at the page level, but most
content occupies an off-centre 7-col block aligned to a vertical rule.
Metadata sits in the margin as mono captions — never centred.

A **fixed vertical edge** holds the wordmark + nav on desktop. The
content scrolls past it.

### Backgrounds

- Default: **flat bone neutral.** No gradients, no patterns.
- Hero / dark sections: **flat ink** with `--grain` overlay at 50%
  opacity. The grain is the brand's "sand."
- Cards: hairline 1px border in `--border`, **no shadow** in light
  mode. Cards stand on the page by typography weight, not elevation.
- Imagery: warm, slightly desaturated. The Peter portrait is on flat
  black — preserve that crop and treat the black background as part
  of the composition.
- **No bluish-purple gradients. No emoji backgrounds. No mesh
  gradients. No glassmorphism.**

### Hover, press, focus

- **Link hover:** colour shifts from `--fg` to `--accent`. Underline
  thickens from 1px to 2px. Duration 140ms, ease-out.
- **Button hover:** background darkens to `--accent-hover`,
  translate-y 0px (no lift). Sandstream is grounded, not bouncy.
- **Press:** scale `0.98` for 90ms with `--ease-spring`. Subtle.
- **Focus:** 2px outline in `--accent`, offset 3px. Never disable
  focus rings.
- **Cards:** on hover, the hairline border darkens from `--border` to
  `--ink-700`. No translate, no shadow.

### Borders, radii, shadows

- **Default radius is zero.** Cards, sections, dividers are sharp.
- **8px** for buttons and inputs.
- **Full pill** only for tags, status chips, and the floating
  schedule pill.
- **Shadows are rare.** Most surfaces use the inset hairline
  (`--shadow-hairline`). The pop shadow (`--shadow-pop`) is used
  exactly once per page — on the floating "schedule a call" pill.

### Motion

- **Default ease:** `cubic-bezier(0.22, 1, 0.36, 1)` — confident
  out-curve. No bounces in functional UI.
- **Spring ease** (`0.34, 1.32, 0.64, 1`) is reserved for press
  feedback only.
- **Page entry:** content fades in over 420ms with a 16px upward
  translate. Stagger headlines by 60ms.
- **Hero numbers and time stamps** count up on first paint. This is
  the only "animated number" pattern in the system.
- **Reduced motion:** all entry animations collapse to a 140ms
  opacity fade, no translate.

### Transparency, blur

- **No backdrop-blur** anywhere by default. Sandstream is opaque.
- Exception: the floating bottom-right schedule pill on dark hero
  uses 24px blur over `rgba(10,10,12,0.4)`. Once per page maximum.

### Cards

The card is a near-naked surface: bone fill, 1px hairline border,
generous internal padding (`--space-6` to `--space-7`), no shadow.
Typography does the work. Cards have a `data-tag` corner label in
mono that names them.

### Imagery treatment

- **Portrait:** the Peter photo lives on its native flat black
  background; the photo's edge is the composition. Never crop to a
  circle. A subtle warm gradient overlay (`rgba(30,138,138,0.04)`) is
  acceptable when integrating into bone surfaces.
- **Generic imagery:** warm, slightly desaturated, never cool. If a
  photo reads "cool/blue" it's wrong for this brand.
- **No stock photography of handshakes, glass office towers, hands
  typing on laptops, or rooftop city panoramas.** Use specific Peter
  imagery only.

---

## Iconography

Sandstream avoids iconography for decoration. Function calls for
glyphs in three places, and only three:

1. **Mono symbols inline** — `→ · ↗ ↺ ▮ ◯` set in JetBrains Mono.
   These cover ~90% of icon needs.
2. **Lucide icons via CDN** — for the handful of true UI affordances
   (menu, close, copy, external-link, calendar). Lucide's stroke
   weight (1.5px) and squared geometry match the system. Linked from:
   `https://unpkg.com/lucide@latest/dist/umd/lucide.js`
3. **The wordmark dot** — a single tangerine `·` between "sand" and
   "stream" in the wordmark when emphasis is needed.

> _Substitution note._ The existing site uses **Font Awesome 4** for a
> couple of social/calendar icons. That entire dependency is dropped
> in favour of Lucide via CDN. Lucide is stroked and modern; Font
> Awesome's filled, soft 2013-era forms don't fit the 2026 voice.

**Never:**
- Emoji in any product surface.
- Coloured icons. Icons are `currentColor` and inherit text colour.
- Icon-only buttons without an accompanying label or aria-label.
- Hand-drawn SVG illustrations. The brand has no illustration
  language. Photography and typography carry visual interest.

---

## Quick start for designers / agents

To produce a design in this system:

1. Link `colors_and_type.css` and Google Fonts in the document head.
2. Reach for **semantic tokens** (`--bg`, `--fg`, `--accent`) not raw
   palette values.
3. Pair a serif display headline with one italicised word, a sans
   subhead, and a mono metadata strip. That's the brand voice.
4. Use bone (`#F4F2EC`) or ink (`#0E1A1A`) as the page; never another
   colour as the page.
5. One signal accent per view. If the design feels flat, restate the
   typographic hierarchy — do not add a second colour.

See `ui_kits/portfolio/index.html` for a working reference.
