# iajaykumar.live

Ajay Kumar's personal site: engineer, builder and teacher. A static Astro site
styled by the Coral Studio design system and deployed to Firebase Hosting.

## Quick start

```bash
npm ci
npm run dev       # localhost:4321
npm test          # CSV parser tests
npm run build     # tokens + astro build + dist audit (scripts/check-dist.mjs)
npm run deploy    # build + firebase deploy --only hosting (owner only)
```

`npm run preview` serves the built `dist/`. The design system viewer runs with
`python3 -m http.server 8791` at `http://localhost:8791/design-system/`.

## Repository map

```text
src/            Astro pages, layout, components, styles and content adapters
content/        Editorial CSVs (verified URLs only)
design-system/  Coral Studio: tokens.json, components, motion and page rules
public/assets/  Illustrations, web/ WebP derivatives, og-card.jpg
scripts/        tokens.mjs, images.mjs, check-dist.mjs, csv.test.mjs
docs/           Original design and content handoff
.claude/        Claude Code settings, hooks and project skills
```

## Further reading

- [`CLAUDE.md`](CLAUDE.md) — contributor contract, checks and invariants.
- [`design-system/README.md`](design-system/README.md) — the brand book.
- [`docs/`](docs/) — [brief](docs/PROJECT_BRIEF.md), [content and sources](docs/CONTENT_AND_SOURCES.md), [build handoff](docs/BUILD_HANDOFF.md).
