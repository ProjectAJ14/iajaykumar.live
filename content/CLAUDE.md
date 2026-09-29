# Working in `content/`

Editorial data for the site. Every row is a public claim about Ajay Kumar, so a
row goes in only after its URL has been opened and confirmed. The procedure is
the `add-content` skill; sources and identity rules are in
`docs/CONTENT_AND_SOURCES.md`.

## Files and columns

| File | Columns | Shown when (`src/content/index.ts`) | Primary page |
|---|---|---|---|
| `articles.csv` | `title,published_at,topic,featured,canonical_url` | `canonical_url` is `http(s)` | `/writing`; `featured=yes` marks picks |
| `projects.csv` | `name,group,summary,source_url,secondary_url,secondary_kind,role_status,feature_order` | `source_url` is `http(s)`; `secondary_url` shows only with `secondary_kind` `demo`, `docs` or `site` | `/projects`; sorted by `feature_order` |
| `talks.csv` | `title,topic,source_url,destination_status` | always (titles only, no action) | `/speaking` |
| `videos.csv` | `title,published_at,topic,duration,canonical_url,thumbnail_url,featured` | `canonical_url` is `http(s)` | `/watch` |
| `courses.csv` | `title,status,topic,canonical_url,summary` | URL and `status=published` | `/learn` |
| `audio.csv` | `title,published_at,series,canonical_url,duration` | `canonical_url` is `http(s)` | not yet rendered |

Other pages may reuse an export; `grep -rn "<export>" src/pages` shows every
consumer.

## Rules

- **Only verified URLs.** Open the link and confirm it is this Ajay Kumar
  (linked from github.com/ProjectAJ14). Medium means `medium.com/@ajay.kumar_14`
  or its NonStop publication posts, never `ajkmr7.medium.com`.
- `videos.csv`, `courses.csv` and `audio.csv` are header-only on purpose. Do not
  add a row, thumbnail or duration you have not verified.
- `role_status` becomes the "Creator and maintainer" label only when it matches
  `builds and maintains`; `Confirm exact role` shows no role.
- `talks.csv` `source_url` is the GitHub profile, not a recording, so talks get
  no action. Recording, slides, event and date need new columns and an adapter
  change once a verified source exists.
- `published_at` is ISO `YYYY-MM-DD`. Quote fields containing commas.
- Renaming an article can break `src/content/paths.ts`, which looks lessons up
  by title prefix; the build fails loudly if it does.
- After any edit: `npm test` and `npm run build`.
