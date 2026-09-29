# Hero

The home opening frame: introduction left, illustrated avatar right, studio backdrop underneath.

**Consumer provides:** `title` (draft: “I build software, then share what the journey taught me.” — awaiting Ajay's approval), optional `accentWord` (one word set in Fraunces italic, `coral-accent`), `eyebrow`, `lede`, `primary` (Watch on YouTube) and `secondary` (Invite me to speak) actions, and image URLs `avatarSrc`, `backdropSrc`, optional `propSrc` (microphone or camera).

- Content is visible at 0ms. The opening sequence (light warms 80–260ms, avatar rises 12px 180–520ms, cue line draws 300–650ms) is decoration, never a loading gate.
- Keep copy on the backdrop's quiet left; the coral light pool sits behind the avatar.
- With `backdropSrc` the hero always renders in Studio (dark) colors, even in Daylight: the backdrop is a night scene and Daylight's dark text would disappear on it. Without a backdrop it follows the page theme.
- One small prop at the lower edge, never covering face or copy; hidden on mobile.
- Mobile: copy first, avatar below.
- Reduced motion: final state immediately.
