Coral Studio is the design system for **iajaykumar.live** — Ajay Kumar's home base as an engineer, builder, and teacher. Visiting should feel like entering a warm, modern creator studio: clear enough to read for an hour, lively enough to remember in a minute. Everything here derives from four anchors: the illustrated avatar, its coral-orange shirt, a soft studio key light, and a small family of microphone, camera, and lesson-card props.

## Principles

1. **Studio, not stage.** Warm light and friendly props frame real work; they never stand in for it. Props are accents, not proof.
2. **Real or absent.** Never show a play button, thumbnail, course, episode, date, or badge that has no verified destination. Omit the action instead of placing a live-looking placeholder.
3. **Memorable entrance, quiet reading.** One signature hero moment; responsive reactions on controls; calm writing pages. The site is complete with all motion off.
4. **Problem before stack.** Every project and lesson leads with the problem and outcome, then the technology.
5. **Original.** Inspired by the warmth of interactive teaching sites, but no borrowed artwork, copy, code, or fonts (never Wotfard).

## Content fundamentals

- **Voice:** first person, plain, practical, generous. Ajay talks like a teammate explaining what he learned. “I build software, then share what the journey taught me.”
- **Lead with teaching**, speaking, and learning pathways; full-stack and deep Flutter experience is the supporting proof.
- **Specific roles only:** “creator,” “maintainer,” “contributor,” or “speaker” — and only when a source backs it. Vyuh and organization repos never imply solo authorship.
- **Casing:** sentence case for headings, buttons, and nav (“Invite me to speak”, “Watch on YouTube”). Nav labels are single words: Watch, Speaking, Learn, Writing, Projects, About, plus Contact.
- **Actions name their destination:** “Read on Medium”, “Source on GitHub”, “Watch on YouTube” — never a bare “Click here”.
- **No stale counters:** no follower, star, hour, or years-of-experience numbers that need manual upkeep. (“10+ years” needs review before publication.)
- **No emoji** in UI copy. No “On Air”, “Live”, or recording badges unless a real show is active.
- All copy lives in HTML — never baked into images.

## Color

Two themes of one studio. **Studio (dark)** is the primary theme: ink-navy panels under warm key light. **Daylight (light)** is the same studio at noon: cream walls, deepened coral.

- Page background `surface-page`; cards and menus `surface-panel`; hover/selected and code `surface-raised`.
- Headings and body `text-primary`; metadata `text-secondary`. Both pass AA on every surface in both themes.
- `coral-accent` for links, selected states, cue lines, and **the focus ring** (2px solid, 2px offset; ≥4.75:1 on every surface in both themes).
- `coral-fill` for primary buttons and cue dots. Text on it is **always `on-coral`** (dark ink, 6.44:1) — never white. In Daylight the coral button's edge is 2.6:1 against cream; its dark label identifies it, so no outline is required.
- `cool-complement` (teal) for technical labels: mono tags, chapter numbers, stack lists. It supports; it never becomes a primary action color.
- `border` is decorative only (dividers, card outlines). Any edge that identifies a control — outlined buttons, inactive chips, the theme control — uses `text-secondary`.
- Check contrast wherever copy overlaps the studio illustration; keep copy on the quiet left side of the backdrop or on a `surface-panel`. Anything set over the (night-time) studio backdrop stays in Studio (dark) colors in both themes.
- Theme switches crossfade surface colors over `duration-theme`. No flashes, no wipes.

## Typography

- **Nunito Sans** (400, 600, 700, 800) for headings, body, nav, and controls. Load only those weights.
- **Fraunces** as an editorial accent: one short word in the hero (`hero-accent`), occasional `pull-quote`, special learning-series titles. Never a full heading.
- **JetBrains Mono** for code, tech tags, timestamps, durations, and chapter numbers (`mono-tag`, `code`).
- Desktop styles apply at ≥768px; `*-mobile` styles below. Fluid `clamp()` between the pair is welcome — the source gives ranges (noted on each style).
- Headings are 800 with tight leading; card titles 700; UI text 600; reading body 400 at 1.65.
- Reading columns stay at `reading-column` (~65–72 characters).
- Fonts load from Google Fonts with system fallbacks (see the `sans`, `editorial`, `mono` stacks).

## Layout and spacing

- 8px base: `space-1` 8 · `space-2` 16 · `space-3` 24 · `space-4` 32 · `space-6` 48 · `space-8` 64 · `space-12` 96.
- Content max `container-max` (1180px); reading column `reading-column` (720px); optional right rail `rail-width` (280px) separated by `space-8`.
- Header `header-height` 72px desktop, `header-height-mobile` 64px.
- Gutters: `gutter-desktop` 32 · `gutter-tablet` 24 · `gutter-mobile` 20.
- Breakpoints: mobile < `bp-tablet` (768px) ≤ tablet < `bp-desktop` (1100px) ≤ desktop.
- Section rhythm: `space-12` desktop, `space-8` mobile.
- Every tappable control is at least `touch-target` (44px). No hover-only information; no horizontal overflow on mobile.

## Shape and depth

- Cards: `radius-card` (16px), feature cards `radius-card-lg` (20px), with a restrained `border` outline on `surface-panel`.
- Buttons: `radius-button` (12px). Chips and tags: `radius-pill`.
- No drop shadows as decoration. Depth comes from surface steps (page → panel → raised) and the hover lift described in Motion.
- No gradients except the warm light pool that already lives in the studio illustration. No left-border accent cards.

## Imagery and studio graphics

- **Backdrop** (`creator-studio.jpg`): dark acoustic panels, warm coral light pool on the right. Keep the left side quiet for live HTML copy. Decorative (`alt=""`) when copy describes the scene. The PNG is the quality master only.
- **Avatar** (`ajay-avatar.png`): right side of the hero, pointing gesture leading toward the Watch/Speaking actions. Alt: “Illustration of Ajay Kumar smiling in a coral-orange shirt and pointing left.” The gesture itself is decorative for assistive tech.
- **Props**, one primary prop per section: camera → Watch, microphone → Speaking (and future audio), lesson cards → Learn. Independent transparent layers; move them with transforms only.
- The lesson-card prop contains a play triangle — it is illustration, not a control. Never place it where it could read as a playable video.
- **Motion graphics** are built live as vector/CSS, not bitmaps: short three-bar audio waveform, camera focus ring, coral cue-line underlines, mono chapter markers.
- Use real video thumbnails and project screenshots only once verified. Illustrations never substitute for published media.

## Iconography

The handoff specifies no icon library. Use simple inline SVG glyphs drawn on a 24px grid with 2px round strokes in `currentColor` (arrow, external-link, sun/moon, menu, close), matching the rounded, friendly line of the props. No emoji as icons. Brand marks for YouTube, GitHub, Medium, LinkedIn, and Stack Overflow in the footer should come from each platform's official asset kit — none is included here yet; until added, use text labels.

There is no logo: the wordmark is the text **Ajay Kumar** set in Nunito Sans 800.

## Accessibility contract

- Visible focus ring on every interactive element (`coral-accent`, 2px, 2px offset).
- Semantic landmarks (header, nav, main, footer); one H1 per page.
- Every hover interaction has a focus and a touch equivalent.
- Reduced-motion users get the final static state (see Motion).
- No autoplaying sound or video. Media stays muted until explicitly played.
- External links identify their destination in the label.
