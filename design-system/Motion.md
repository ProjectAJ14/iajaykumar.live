# Motion — Studio Comes Alive

The site feels like a creator's studio coming online: a warm key light settles, the host appears, and small props respond as a visitor explores. Motion signals **watch**, **learn**, **speak**, and **build**. Memorable in the first seconds, then quiet for long reading.

## Tiers

| Tier | Where | Behavior | Limit |
| --- | --- | --- | --- |
| Signature | Home hero, once on entry | Light warms, avatar settles, cue line draws | `duration-entrance`; content readable immediately |
| Responsive | Buttons, cards, props | Short lift / fan / focus reaction on hover, focus, tap | `duration-quick`–`duration-spring`; reversible |
| Ambient | Hero only | One quiet prop drift or light pulse | `duration-ambient`; pause off-screen; none behind articles |

## Hero opening sequence

| Time | What visitors see |
| --- | --- |
| 0 ms | Headline, nav, actions, content already present. No preloader, no hidden text. |
| 80–260 ms | Coral studio light brightens subtly behind the avatar (opacity/transform only, no flashing). |
| 180–520 ms | Avatar rises ~12px and settles, `ease-spring`. One entry motion; no idle bobbing of the face. |
| 300–650 ms | Short coral cue line draws near Watch/Speaking actions. Decorative; focus order unchanged. |
| after 650 ms | Page at rest. |

## Section reactions

- **Watch / camera:** on hover or focus a focus ring tightens around the lens and the card lifts 3–4px. On touch, a brief press before navigation. The camera sits beside the video feature, never over a thumbnail. Video plays only on explicit action.
- **Speaking / microphone:** the prop enters ~10px from the edge on first view, then stops. Talk links extend their coral cue line 6–8px. A three-bar waveform may react briefly on focus but must never imply audio is playing.
- **Learn / lesson cards:** the three cards fan apart 4–8px on hover/focus, then return. On touch, show the selected path statically. Revealing lessons never animates height in a way that shifts surrounding text.
- **Writing:** underline grows, arrow nudges 4px, background tints to `surface-raised`. Text columns never move.
- **Projects:** card lifts 4px and reveals a small verified metadata line. Links stay visible without hover.
- **Filters:** crossfade or slide ≤8px; keep focus; announce the result count to assistive tech.
- **Theme change:** crossfade surfaces over `duration-theme`. Light theme = daylight in the same studio.

## Rules

- Animate `opacity` and `transform` only; never layout properties.
- Backdrop moves at most 8–12px.
- At most two independently looping elements per viewport.
- Pause ambient motion when the hero leaves the viewport or the tab is hidden.

## Reduced motion

Under `prefers-reduced-motion: reduce`, render the final static state immediately: no parallax, loops, fanning, lifts, or entrance movement. Keep hover/focus **color and border** changes so controls still communicate state. Motion never carries essential information alone.
