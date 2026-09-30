---
name: add-content
description: How to add a verified article, video, talk, project, course or audio row to iajaykumar.live. Use when asked to add a post, blog, Medium article, YouTube video, talk, recording, slides, project, repo, course or episode to the site, or to update content/*.csv.
---

# Add content

Every row is a public claim about Ajay Kumar. Columns and adapter rules are in
`content/CLAUDE.md`; identity sources are in `docs/CONTENT_AND_SOURCES.md`.

## 1. Verify the source

1. Open the URL itself (WebFetch or a browser), not a search snippet.
2. Confirm it belongs to **this** Ajay Kumar: reachable from
   github.com/ProjectAJ14, or on `medium.com/@ajay.kumar_14`, the NonStop
   publication (`medium.com/nonstopio`, `blog.nonstopio.com`) or the YouTube
   channel in `LINKS` (`src/content/index.ts`). `ajkmr7.medium.com` is a
   different person; never use it.
3. Record the canonical URL, exact title and publish date from the page. For a
   project, confirm Ajay's role; if you cannot, `role_status` is
   `Confirm exact role`.
4. If anything cannot be confirmed, stop and ask the owner. Do not add a
   partial row, a guessed date, a placeholder URL or a thumbnail you did not see.

## 2. Add the row

Append to the right CSV with the exact header order. Quote fields with commas;
dates are `YYYY-MM-DD`.

| Content | File | Required for it to show |
|---|---|---|
| Article | `articles.csv` | `canonical_url`; `featured=yes` to mark a pick |
| Project | `projects.csv` | `source_url`; unique `feature_order`; `secondary_kind` (`demo`, `docs`, `site`) for the second link |
| Video | `videos.csv` | `canonical_url` (a direct video URL, not the channel) |
| Course | `courses.csv` | `canonical_url` and `status=published` |
| Audio | `audio.csv` | `canonical_url` (no page renders it yet) |
| Talk | `talks.csv` | title and topic only; recordings, slides, events and dates need an adapter change first |

## 3. See where it lights up

`grep -rn "<export>" src/pages` (`articles`, `projects`, `videos`, `courses`,
`talks`) shows which pages render it. The first real row in a header-only file
turns on a section that was hidden; check that page's layout, not just the build.

## 4. Build and check

```bash
npm test
npm run build
```

Then preview the affected page (`verify-site` skill). Report the source you
opened for each row.
