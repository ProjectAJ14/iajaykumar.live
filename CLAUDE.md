# Working on iajaykumar.live

iajaykumar.live is Ajay Kumar's personal site: an Astro static build deployed to
Firebase Hosting project `iajaykumarlive`. This is the contributor contract for
agents working in this repository. Read the nearest nested `CLAUDE.md` before
editing `src/`, `content/` or `design-system/`.

## Repository map

| Path | Responsibility |
|---|---|
| `src/pages/` | Routes: `/`, `/watch`, `/speaking`, `/learn`, `/writing`, `/projects`, `/about`, `/contact`, `/404` |
| `src/layouts/Base.astro` | Document shell: title, description, canonical, share card, theme script, header and footer; imports `tokens.css`, then `design-system/components/bundle.css`, then `global.css` |
| `src/components/` | Astro markup for the Coral Studio components; their styles are the live `bundle.css` |
| `src/styles/global.css` | Site-layout utilities only; component styles live in `design-system/components/bundle.css` |
| `src/styles/tokens.css` | Generated from `design-system/tokens.json` by `scripts/tokens.mjs`; gitignored, never edited |
| `src/content/` | CSV adapters (`index.ts`), learning paths and speaking topics (`paths.ts`), CSV parser (`csv.mjs`) |
| `content/` | Editorial CSVs: only verified URLs; `videos`, `courses`, `audio` are header-only on purpose |
| `design-system/` | Coral Studio: source of truth for tokens, components, motion and page composition; `components/bundle.css` is imported by the site as-is |
| `public/assets/` | Asset masters, `web/` WebP derivatives and `og-card.jpg`; manifest in its README |
| `scripts/` | `tokens.mjs`, `images.mjs`, `check-dist.mjs` (post-build audit), `csv.test.mjs` |
| `docs/` | Original design and content handoff; `design-system/` wins where they differ |
| `firebase.json`, `.firebaserc` | Hosting config (clean URLs, cache headers) and the default project |
| `.claude/` | Shared settings, hooks and project skills (`coral-studio`, `commit`, `pr`, `deploy`, `add-content`, `verify-site`) |

## Documentation is part of every feature

A change is complete only when its documentation ships in the same PR. Check the
README, the nearest nested `CLAUDE.md` and the affected skill against the diff;
edit each surface whose claims changed. If a surface needs no edit, state why in
the PR. Do not add duplicate reference material just to touch a file.

Read the source before documenting names, scripts, paths, ports or output.
`package.json` owns the commands; `design-system/tokens.json` owns token values;
`content/*.csv` owns what the site claims about Ajay. Existing prose and recalled
memory are not evidence.

| Change | Documentation to review |
|---|---|
| New or renamed page | `src/CLAUDE.md` page list, root repository map, `design-system/Pages.md` if composition changed |
| New or changed component | `src/CLAUDE.md`; the matching `design-system/components/<Name>/README.md` if behavior diverges |
| Tokens, color, type, motion or `bundle.css` | `design-system/README.md`, `Motion.md`, `.claude/skills/coral-studio/SKILL.md` |
| CSV columns or adapter rules | `content/CLAUDE.md`, `.claude/skills/add-content/SKILL.md`, `docs/CONTENT_AND_SOURCES.md` |
| Assets or derivatives | `public/assets/README.md`, `design-system/assets/<Group>/README.md`; Ajay avatar references in `public/assets/portraits/CLAUDE.md` |
| Scripts, build or checks | `README.md` quick start, this file's required checks, `.claude/skills/verify-site/SKILL.md` |
| Hosting or deploy | `firebase.json`, `.claude/skills/deploy/SKILL.md`, `README.md` |
| Claude settings or hooks | `.claude/settings.json`, `.claude/hooks/`, this file |

Keep the README a short introduction and quick start. Put procedures in skills
and implementation detail in the nested `CLAUDE.md` files. Document shipped,
verified behavior only; an open editorial item stays out of the site until it
has a verified source.

## Required checks

1. `npm test` for the CSV parser and any script change.
2. `npm run build` for every site change. It regenerates tokens, builds, and runs
   `scripts/check-dist.mjs`: every page needs a title, a description and exactly
   one `<h1>`; no internal link may be broken; no `href`/`src` may be `""` or `#`.
3. Inspect changed pages at 1280, 900 and 560px in both themes, with reduced
   motion and keyboard focus (`verify-site` skill). No horizontal page scroll.
4. Verify every command, path and URL you write against its source. Search for
   renamed terms across the repository.
5. Report any check not run or claim not verified. Never describe a planned
   check as completed.

## Runtime and design invariants

- **Real or absent.** No play button, thumbnail, course, episode, date, role,
  event or badge without a verified source. Omit the element instead of adding a
  placeholder. `src/content/index.ts` drops rows without real URLs; keep it so.
- `design-system/` is the source of truth. Read `.claude/skills/coral-studio/SKILL.md`
  before touching UI. Use tokens through CSS variables only, never raw hex.
  `src/styles/tokens.css` is generated; change `tokens.json` and regenerate.
  `design-system/components/bundle.css` is imported live (it also loads the
  fonts): editing it changes the site, and there is no copy to keep in sync.
- `coral-fill` always carries `on-coral` text, never white.
- Under `prefers-reduced-motion: reduce`, show the final state. Animate only
  `opacity` and `transform`.
- One `<h1>` per page; every page passes `title` and `description` to `Base`.
- Never use Josh W. Comeau's artwork, copy or code, or the Wotfard font.
- Medium content comes only from `@ajay.kumar_14`; `ajkmr7.medium.com` is a
  different person.
- No personal data beyond the verified public links in `src/content/index.ts`
  (`LINKS`) and the contact email `ajaymail2114@gmail.com`. The original HEIC
  photo is never a public asset.
- The home hero copy was approved as-is by the owner on 2026-09-29; do not
  rewrite it without a new approval.
- Conventional commits (`feat`, `fix`, `docs`, `chore`, `refactor`, `style`,
  `test`, `build`). Never commit on `main`.
- Never deploy to live, or change DNS or the custom domain, without the owner's
  go-ahead in the current session. A preview channel is the default.

## Communicating with the maintainer

These preferences apply to chat, not to documents or code comments.

- Lead with the answer in plain English. Group topics under headings, use short
  bullets, keep each topic within ten lines, and omit investigation narration.
- Close with `What I need from you:` followed by actions or `Nothing`. Name
  unfinished work and skipped checks explicitly.
- Explain what something does before its implementation. Use a concrete example
  for abstract ideas; keep gotchas visible. Corrections are one line, first.
- When presenting options, recommend one and give its reason and cost. If a
  short-term patch differs from the proper fix, explain both, recommend today's
  action, and say whether the remaining work needs an issue.
- Make each decision understandable in place. Do not use issue numbers or
  references to earlier options as substitutes for explaining the fact.
- For bug explanations before implementation: issue, solution, user impact,
  concrete example, changes needed, recommendation. Once agreed, implement.

Verify before concluding: inspect the specific population, use a measurement
window long enough for the behavior, read callers before claiming a guard is
missing, and inspect the whole diff. A sample cannot prove absence. Check whether
a defect is your own uncommitted change. Falsify your explanation where possible;
if evidence is incomplete, say what would settle it.
