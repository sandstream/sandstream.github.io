---
name: sandstream-design
description: Use this skill to generate well-branded interfaces and assets for Peter Sandström / Sandstream AB, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Sandstream Design — Skill

Read the `README.md` file within this skill first; it contains the
brand voice, content fundamentals, visual foundations and iconography
rules. Then explore the other files as needed:

- `colors_and_type.css` — single source of truth for colour + type tokens
- `assets/` — wordmark SVGs, favicon mark, the portrait of Peter, his CV
- `preview/` — small specimen cards showing each token / pattern in use
- `ui_kits/portfolio/` — the working 2026 portfolio site as a hi-fi
  React reference (Hero, About, Cases, Roles, Contact, FloatingPill)

## Use

If creating visual artifacts (slides, mocks, throwaway prototypes,
landing pages, decks), copy assets out and create static HTML files
for the user to view. Reach for the design system's semantic tokens
(`--bg`, `--fg`, `--accent`) and the three families (Instrument Serif
display, Geist sans, JetBrains Mono).

If working on production code, you can copy assets and read the rules
to become an expert in designing within Sandstream.

If the user invokes this skill without other guidance, ask them what
they want to build (a new section on the portfolio site? a one-pager
for an engagement? a deck for a prospect?), ask some clarifying
questions, and act as an expert designer who outputs HTML artifacts
or production code, depending on the need.

## Five things this brand always does

1. **One italic word per headline.** The signature move. Set a noun
   in Instrument Serif italic; never the whole phrase.
2. **One signal accent per view.** Stream teal `#1E8A8A`. If you want
   a second colour, restate the typographic hierarchy instead.
3. **Mono metadata strips.** Uppercase, narrow tracking, with a
   coloured dot prefix for status. The brand's "tech-savvy" tell.
4. **Sharp by default.** Cards, sections, panels have `radius: 0` and
   a 1px hairline border — no shadow.
5. **Bone, not white.** Pages live on `#F4F2EC`. Never pure `#FFFFFF`.

## Five things this brand never does

1. **No emoji.** Use mono symbols (`→ · ↗ ↺ ▮`).
2. **No bluish-purple or mesh gradients.** Flat colour or one-direction
   warm overlays only.
3. **No glassmorphism.** Sandstream is opaque (one exception: the
   floating schedule pill).
4. **No hype words.** "leverage", "10×", "revolutionary", "unlock" are
   banned. The voice is a senior consultant's briefing note.
5. **No hand-drawn SVG illustrations.** Photography (Peter's portrait)
   and typography do the visual work.
