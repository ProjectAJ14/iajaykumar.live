# TopicChip

A pill-shaped toggle for topic filters on Writing and Learn.

**Consumer provides:** `children` (topic from the content CSVs' `topic` column), `selected`, `onClick`. Group chips in a `role="group"` with a visible label, and announce the result count in an `aria-live="polite"` region when the filter changes.

Selected = `surface-raised` fill, `coral-accent` border and text, `aria-pressed="true"`. Unselected edge uses `text-secondary` (the `border` token is too faint for a control). Filtered results crossfade or slide ≤8px; focus stays on the chip.
