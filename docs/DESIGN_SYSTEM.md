# Design system — Coral Studio

## Design intent

Ajay's site should feel like entering a warm, modern creator studio: clear enough to read for an hour, lively enough to remember in a minute. The visual anchors are his original illustrated avatar, coral-orange shirt, soft studio key light, and a small family of microphone, camera, and lesson props. The design supports a future speaker, YouTuber, and course creator without implying unpublished content exists.

## Color roles

The coral accent comes from the supplied T-shirt; deep ink and warm cream give it contrast. The palette is original to this site.

| Role | Dark theme | Light theme | Use |
| --- | --- | --- | --- |
| Page | `#101827` | `#FFF9F4` | Main background |
| Studio panel | `#192337` | `#FFFFFF` | Cards and menus |
| Raised panel | `#223149` | `#F7EEE8` | Hover and selected blocks |
| Primary text | `#F7F8FB` | `#20242C` | Headings and body |
| Secondary text | `#ADB8C9` | `#58606D` | Metadata and descriptions |
| Border | `#344257` | `#D8DDE4` | Dividers and outlines |
| Coral accent | `#F47753` | `#A94024` | Links, focus accents, selected states |
| Coral fill | `#F47753` | `#F47753` | Buttons, cue dots, prop highlights |
| On coral | `#101827` | `#101827` | Text/icons on coral fills |
| Cool complement | `#81C7D4` | `#206A78` | Technical secondary accent |

Dark coral on dark page is about **6.44:1**; light-theme link coral on cream is about **5.84:1**. Coral-filled buttons use dark text. Check final contrast wherever the studio illustration sits behind text.

## Typography

- **Primary: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)** for headings, body, navigation, and controls. Weights 400, 600, 700, 800. It gives the warmth of a teaching site without copying the reference site's Wotfard font.
- **Editorial accent: [Fraunces](https://fonts.google.com/specimen/Fraunces)** for one short hero word, occasional pull quotes, and special learning-series titles. Use sparingly.
- **Technical: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)** for code, technical tags, timestamps, and chapter numbers.
- Use system fallbacks; load only needed weights. Do not bake headings into images.

| Text role | Desktop | Mobile | Weight / line height |
| --- | --- | --- | --- |
| Hero title | 64–72 px | 42–48 px | 800 / 1.05 |
| Page title | 48–56 px | 36–40 px | 800 / 1.12 |
| Section heading | 30–36 px | 26–30 px | 800 / 1.2 |
| Card title | 22–26 px | 20–23 px | 700 / 1.3 |
| Reading body | 18–20 px | 17–18 px | 400 / 1.65 |
| UI body | 16 px | 16 px | 600 / 1.5 |
| Caption / metadata | 13–14 px | 13–14 px | 600 / 1.45 |

Article columns should be roughly 65–72 characters wide.

## Layout and spacing

- Base spacing unit: **8 px**. Main gaps: 8, 16, 24, 32, 48, 64, 96 px.
- Desktop max width: **1180 px**. Reading column: **720 px**. Optional right rail: **280 px**, separated by about **64 px**.
- Header height: about **72 px** desktop and **64 px** mobile. Gutters: **32 px** desktop, **24 px** tablet, **20 px** mobile.
- Design breakpoints: mobile under **768 px**, tablet **768–1099 px**, desktop **1100 px and above**. Refine after visual testing.
- Cards: 16–20 px corners, restrained border. Buttons: 12 px corners and at least 44 px touch target. Topic chips: pill shape.

## Studio graphic language

- **Backdrop:** original dark acoustic panels and a warm coral light pool. Keep the left side quiet for live HTML copy.
- **Props:** illustrated microphone for Speaking/future audio, camera for Watch, lesson cards for Learn. Each is an independent transparent layer and can move slightly on hover/entry. Use at most one primary prop per section.
- **Motion graphics:** short audio bars, a camera focus ring, cue-line underlines, and chapter markers. Build these as simple accessible vector/CSS graphics during implementation; no bitmap loops are needed.
- **Imagery:** use real video thumbnails and real project screenshots only after sources are verified. The illustrated props are accents, not substitutes for published media.
- **Avatar:** right-side hero portrait, with the pointing gesture leading visually toward the main Watch or Speaking action. Keep the gesture decorative for assistive tech.

## Components

**Header:** text wordmark, Watch/Speaking/Learn/Writing/Projects/About links, theme control, and Contact action.

**Hero:** clear introduction left, avatar right, studio backdrop underneath. A small microphone or camera prop can sit near the lower edge. Hero content is visible immediately; motion is a welcome cue, not a loading gate.

**Media feature:** real thumbnail, topic, title, duration only if known, and explicit YouTube destination. A decorative play shape must never promise playable media when no video is linked.

**Talk card:** title, event/date when verified, topic, and recording/slides actions only when available.

**Learning path card:** topic, what visitors will learn, and links to real videos/articles/workshops. The lesson-card illustration can fan lightly on interaction.

**Project card:** problem, outcome, role when confirmed, tech tags, Demo/Docs/Source links.

## Motion and accessibility

The detailed [motion system](MOTION_SYSTEM.md) is part of the design contract. Motion emphasizes speaking and teaching moments without making reading restless. Support reduced-motion preferences, keyboard-triggered equivalents, visible focus rings, semantic regions, alt text, and mobile tap targets. Do not autoplay sound or actual video.

## Assets

See the [asset manifest](../public/assets/README.md). The original photo stays outside public repository assets. All site copy remains in HTML.
