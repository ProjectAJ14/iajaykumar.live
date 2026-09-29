# Build handoff for the implementing agent

## Delivery boundary

This repository contains no site source code. Build from the [project brief](PROJECT_BRIEF.md), [design system](DESIGN_SYSTEM.md), [page blueprints](PAGE_BLUEPRINTS.md), and [motion system](MOTION_SYSTEM.md). The intended Firebase project is `iajaykumarlive` and custom domain is `iajaykumar.live`; verify both before deployment or DNS changes.

## Reserved structure

```text
src/pages/                 Routes and page composition — empty
src/components/            UI and motion components — empty
src/styles/                Theme and motion tokens — empty
src/content/               Content adapters — empty
content/                   Verified article/project/talk data; video/course/audio slots
public/assets/             Original visual assets
docs/                      Design and content decisions
```

Choose a static-first framework and adapt the reserved folder mapping if necessary. Firebase Hosting should be able to serve a static export. No framework has been selected by this baseline.

## Asset wiring

- Avatar: `public/assets/portraits/ajay-avatar.png` — transparent; alt text: “Illustration of Ajay Kumar smiling in a coral-orange shirt and pointing left.”
- Studio backdrop: `public/assets/illustrations/creator-studio.jpg` — web-ready; PNG is the quality master. Decorative if page copy describes the scene.
- Props: `public/assets/props/studio-microphone.png`, `video-camera.png`, `lesson-cards.png` — independent transparent layers. Animate through positioning/transforms, not by baking text into them.
- The original HEIC photo must not be used as a public site asset.

## Suggested implementation order

1. Establish typography, color tokens, layout, header, and footer.
2. Build the hero's **static final state**, then add the one-time studio opening sequence.
3. Build Watch and Speaking paths using verified destinations only. Keep courses/audio unpublished until content exists.
4. Build Learn, Writing, and Projects from the editorial inventories.
5. Add micro-interactions and prop motion from `MOTION_SYSTEM.md`, including reduced-motion behavior.
6. Check keyboard, touch, contrast, mobile layout, asset loading, and external links.
7. Add metadata, social preview, sitemap, Firebase Hosting setup, and deployment after review.

## Acceptance checklist

- The first screen presents Ajay as a credible engineer and emerging creator/teacher, with clear Watch and Speaking paths.
- The avatar, studio backdrop, camera, microphone, and lesson graphics form one coherent palette.
- Motion has a memorable entrance, useful reactions, and quiet reading pages. Reduced-motion mode is fully static.
- No video appears playable without a real destination; no unlaunched course or podcast is presented as published.
- The Writing page uses only posts from the Medium account linked on Ajay's GitHub.
- Projects and talk actions have verified destinations and accurate role descriptions.
- Coral-filled buttons use dark text; mobile has no overflow or hover-only information.
- No Josh W. Comeau artwork, copy, code, or Wotfard font has been copied.
- Firebase project and domain are verified before launch.

## Open editorial decisions

- Approve final hero wording and speaking topics.
- Curate direct YouTube video URLs and select a featured video/talk.
- Supply talk recordings, slide links, event dates, and a preferred booking/contact channel.
- Define the first course or audio series before exposing those sections as live products.
