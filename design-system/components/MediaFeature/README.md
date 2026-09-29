# MediaFeature

The featured video (or channel) slot on Home and Watch, with an explicit YouTube destination.

**Consumer provides:** `href` (required — without it the component renders nothing), `title`, `topic`, `duration` only if known, `thumbnailSrc` only if it is the real YouTube thumbnail, `cta`, optional camera `propSrc`.

- With a thumbnail it shows a coral play disc; hover/focus tightens a focus ring around it (camera focus-ring motif) and lifts the card 4px.
- Without a thumbnail it becomes a text feature linking the channel — the only honest state while `videos.csv` is empty.
- The camera prop sits beside the feature, never over a thumbnail.
- **Never** a play shape without a real video. No autoplay or hover previews.
