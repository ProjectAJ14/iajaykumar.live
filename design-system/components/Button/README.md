# Button

The site's call to action: a link or button, at least 44px tall, 12px corners (`radius-button`).

**Consumer provides:** `children` (label, sentence case, names the destination), `href` for navigation (renders `<a>`; external links open in a new tab) or `onClick` for an action, `variant`.

- `primary` — `coral-fill` with `on-coral` text. **At most one per view region** (hero: “Watch on YouTube”; header: “Contact”). Never white text on coral.
- `secondary` — transparent with a `text-secondary` outline; the paired action (“Invite me to speak”).
- `ghost` — `coral-accent` text; low-emphasis inline actions, optional `arrow` that nudges 4px on hover.

Hover lifts 2px over `duration-quick`; press scales to .98. Reduced motion keeps only color/border change.

**Don't** label a button “Play” or use a play icon unless it opens a real video. Don't use Button for in-text links.
