# Working in `design-system/`

Coral Studio, the source of truth for every visual decision on the site. Load
the `coral-studio` skill (`.claude/skills/coral-studio/SKILL.md`) before reading
or changing anything here; it lists what to read and in which order.

## Sync with the artifact

The same files are published as a Design System artifact
(https://claude.ai/artifact/B4sBhDFA4gwcBKCCh7n6QA): repo `design-system/<path>`
equals artifact `project/<path>`. This `CLAUDE.md` is repo-only; do not publish it.
Keep the rest identical, following step 3 of the
skill's "Changing the system". If the artifact was edited on the web, read it
back and copy its `project/…` files here before editing. `index.html` is a
viewer with no content of its own; never edit it to change the system.

## Changing tokens

1. Edit `tokens.json` (every token keeps its `usage` note; dark and light values).
2. Run `node scripts/tokens.mjs` to regenerate `src/styles/tokens.css`. The
   PostToolUse hook in `.claude/settings.json` does this after Claude edits
   `tokens.json`; `npm run dev` and `npm run build` also do it.
3. Recheck contrast in both themes (text 4.5:1, large text and marks 3:1) in
   the contrast table of `index.html` (`python3 -m http.server 8791`, open
   `/design-system/`).
4. Update `README.md` or `Motion.md` if a rule changed, then sync the artifact.

## Changing components

`components/bundle.css` is imported live by `src/layouts/Base.astro` (after
`tokens.css`, before `global.css`) and its `@import` loads the site fonts.
Editing it changes the live site immediately; there is no copy to keep in sync.
Run `npm run build` and the `verify-site` skill after any change to it.

`components/bundle.js` is the React reference; the site's markup is
`src/components/*.astro`, which must emit the same class names. Change the
reference and its component `README.md` first, then the `.astro` markup, in the
same PR.
