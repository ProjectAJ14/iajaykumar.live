---
name: coral-studio
description: The Coral Studio design system for iajaykumar.live. Use before designing or building any UI, page, component, style, copy or asset for this site, when choosing colors, type, spacing or motion, when reviewing UI for brand or accessibility fit, and when changing the design system itself or syncing it with its published artifact.
---

# Coral Studio design system

The design system lives in `design-system/` at the repo root. It is the source of truth for every visual and content decision on iajaykumar.live. `docs/DESIGN_SYSTEM.md`, `docs/MOTION_SYSTEM.md` and `docs/PAGE_BLUEPRINTS.md` are the original handoff it was built from; where they differ, `design-system/` wins.

## Before building UI

Read, in this order, only what the task needs:

1. `design-system/README.md` — principles, content rules, color, type, layout, shape, imagery, icons, accessibility.
2. `design-system/tokens.json` — every token with a `usage` note. Use token names, never raw hex/px values.
3. `design-system/components/<Name>/README.md` — what the consumer provides, when to use it, do/don't. Props: `design-system/components/index.d.ts`.
4. `design-system/Motion.md` for any animation; `design-system/Pages.md` for page composition.
5. `design-system/assets/<Group>/README.md` for images. Files themselves live in `public/assets/`.

Components: Button, TopicChip, ThemeToggle, SiteHeader, SiteFooter, Hero, MediaFeature, TalkCard, LearningPathCard, ProjectCard, ArticleCard. Reference implementation: `design-system/components/bundle.js` + `bundle.css` (global `window.CoralStudio`, React 18). The site's framework is not chosen yet; port these faithfully, keeping class behavior and token use, rather than inventing new variants.

## Rules that are easy to get wrong

- **Real or absent.** No play button, thumbnail, course, episode, date, role or badge without a verified source. Omit the element instead.
- Coral fill (`coral-fill`) always carries `on-coral` text — never white.
- `coral-accent` differs per theme (links/focus). `coral-fill` does not. Don't swap them.
- `border` is decorative only (fails 3:1). Control edges use `text-secondary`.
- Focus ring: 2px solid `coral-accent`, 2px offset, on every interactive element.
- Over the studio backdrop, keep Studio (dark) colors in both themes: scope with `data-theme="dark"` and re-declare `color: var(--text-primary)` on that element (inherited color is already resolved and ignores the scope).
- Animate only `opacity`/`transform`. Under `prefers-reduced-motion: reduce`, show the final state; keep color/border state changes.
- Copy: sentence case; actions name destinations ("Read on Medium"); no emoji; no stale counters; Medium content only from @ajay.kumar_14.
- Every tappable target ≥ `touch-target` (44px); no hover-only information.
- Never use Josh W. Comeau's artwork, copy, code or the Wotfard font.

## Viewing the system

Serve the repo root and open `/design-system/`:

```bash
python3 -m http.server 8791
```

The page `design-system/index.html` renders everything from the files beside it (tokens, sections, live component previews in both themes, contrast table, assets). It holds no content of its own — never edit it to change the system.

## Changing the system

The same system is published as a Design System artifact: https://claude.ai/artifact/B4sBhDFA4gwcBKCCh7n6QA. Repo `design-system/<path>` == artifact `project/<path>`. Keep them identical.

1. Edit files in `design-system/` (tokens.json whole; one fact per place; usage note on every new token; recheck contrast in BOTH themes — text 4.5:1, large text/marks 3:1; `index.html` shows the numbers).
2. Previews (`components/*/preview.html`) reference images by artifact upload id (`/_blob/<id>`); `design-system.json` maps ids to files, and `index.html` swaps in `public/assets/` paths. A new image: add it under `public/assets/`, upload it to the artifact as an asset, and record it in `design-system.json` `assetGroups`.
3. Sync to the artifact with the Artifact tool. Stage a copy so paths publish under `project/`: copy the changed files into `<scratch>/project/<path>`, then publish with `url` = the artifact, `root` = `<scratch>`, `file_path` = `<scratch>/project/design-system.json` (with `lastChange` updated), `files` = the other changed `project/…` paths. Never publish `design-system/` as the root — the index would land outside `project/`. `.ts` files need `contentType: "text/plain"`.
4. If the artifact was edited on the web, `read` its `project/…` files and copy them back into `design-system/` before editing. Never copy the page's generated files (`project/tokens.css`, `project/api/…`, `project/manifest.json`, or the README's generated tail after the `---` rule).

## Open items (don't invent answers)

Hero copy approval; direct YouTube video URLs and thumbnails; talk events, dates, recordings, slides; ProjectCard problem lines for Eklavya and JSON Viewer; confirmed roles for organization repos; platform logos for the footer; first course or audio series.
