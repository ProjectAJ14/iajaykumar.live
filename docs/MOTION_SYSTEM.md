# Motion system — Studio Comes Alive

## Concept

The site feels as though a creator's studio is coming online: a warm key light settles, the host appears, and small props respond when a visitor explores. Motion signals **watch**, **learn**, **speak**, and **build**. It should be memorable in the first few seconds, then quiet enough for long reading sessions.

This is a no-code storyboard for the implementing agent. The assets are static, separate layers; animation is built later. [Josh W. Comeau's subtle icon motion](https://www.joshwcomeau.com/animation/squash-and-stretch/) is an interaction reference; the art and timing below are original to Ajay's site.

## Motion hierarchy

| Tier | Where | Behavior | Limit |
| --- | --- | --- | --- |
| Signature | Home hero, once on entry | Studio light warms, avatar settles, cue line draws under hero phrase | About 700 ms; content readable immediately |
| Responsive | Buttons, cards, props | Short spring/lift/fan/focus reaction on hover, focus, or tap | 160–320 ms; reversible |
| Ambient | Hero only | One quiet prop drift or light pulse | Low amplitude; pause offscreen; none behind articles |

## Opening sequence storyboard

| Time | What visitors see | Notes |
| --- | --- | --- |
| 0 ms | Headline, nav, actions, and content already present | No preloader or hidden text |
| 80–260 ms | Coral studio light brightens subtly behind avatar | Opacity/transform only; no flashing |
| 180–520 ms | Avatar rises about 12 px and settles | One entry motion; no idle bobbing of the face |
| 300–650 ms | A short cue line appears near Watch/Speaking actions | Decorative; focus order does not change |
| After 650 ms | Page is visually at rest | Any optional ambient movement stays peripheral |

## Section interactions

### Watch / camera

- Camera prop sits beside the verified video feature, never on top of a thumbnail.
- On hover or keyboard focus, a small focus ring tightens around the lens and the card lifts 3–4 px. On touch, the card gives a brief press response before navigation.
- Video plays only after explicit action. No autoplay previews in the first release.

### Speaking / microphone

- Microphone prop enters from the edge by about 10 px as the section first appears; it stops.
- Talk-card links extend a coral cue line by 6–8 px on hover/focus.
- A three-bar waveform may react briefly when a talk card gains focus, but it must never imply audio is playing. If a future podcast has real audio, waveform motion may reflect actual playback state.

### Learn / lesson cards

- The three illustrated lesson cards fan apart by roughly 4–8 px on hover/focus, then return. On touch, show the selected path with a clear static state.
- A learning path may reveal its real linked lessons in place. Do not animate height in a way that makes surrounding text jump.
- Course progress indicators appear only when there is an actual course and real progress data.

### Writing and projects

- Article cards: underline grows, arrow nudges by 4 px, background tint changes. Text columns stay stable.
- Project cards: lift by 4 px and reveal a small verified metadata line. Links remain visible without hover.
- Topic filters: crossfade or slide no more than 8 px; preserve focus and announce result counts accessibly.

### Theme change

Crossfade surface colors in about 180–240 ms. Avoid camera flashes or dramatic wipes. The light theme should feel like daylight in the same studio.

## Motion tokens for implementation

| Name | Duration | Feel | Use |
| --- | --- | --- | --- |
| Quick | 140–180 ms | crisp ease-out | buttons, focus details |
| Standard | 220–280 ms | gentle ease-out | cards, chips, props |
| Spring | 300–420 ms | low-overshoot spring | lesson fan, avatar settle |
| Entrance | 500–700 ms | calm deceleration | one-time hero sequence |
| Ambient | 7–12 s | near-imperceptible loop | one peripheral hero prop only |

Avoid moving the whole backdrop more than 8–12 px. Prefer opacity and transform effects; avoid layout-changing animation. Keep no more than two independently looping elements in a viewport.

## Reduced motion and control

If the visitor requests reduced motion, present the final static state immediately: no parallax, ambient loops, fanning cards, or entrance movement. Maintain hover/focus color and border changes so controls still communicate state. W3C's [animation-from-interactions guidance](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) and MDN's [reduced-motion reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) inform this behavior.

Motion conveys no essential information alone. Every hover interaction has a keyboard/focus equivalent; every meaningful control works on touch. Pause ambient motion when the hero leaves the viewport or the page is hidden. Keep media muted until explicitly played.

## Visual acceptance check

The hero should feel like Ajay is stepping into a studio. Watch, Speaking, and Learn each have a distinct prop and a small reaction. Writing stays calm. The site still feels complete when all motion is disabled.
