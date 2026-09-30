# Site source

Astro source for iajaykumar.live.

- `pages/` — one `.astro` file per route.
- `layouts/Base.astro` — the shared document shell and page metadata.
- `components/` — Astro markup for the Coral Studio components; their styles are `design-system/components/bundle.css`, imported live by `Base.astro`.
- `styles/` — `global.css` (site-layout utilities only) and the generated `tokens.css`.
- `content/` — adapters that read and filter the editorial CSVs in the top-level `content/` folder.

Contributor rules and the add-a-page checklist are in [`CLAUDE.md`](CLAUDE.md).
