---
name: commit
description: How to commit in the iajaykumar.live repo. Use when asked to commit, make a commit, "commit this", "save my changes to git", write a commit message, or stage files.
---

# Commit

## Before committing

1. **Never commit on `main`.** `git branch --show-current`; if it prints `main`,
   create a branch first (`git switch -c <type>/<short-name>`).
2. For code, content or config changes run `npm test` and `npm run build`. Both
   must pass. Docs-only changes may skip them; say so.
3. Read `git status` and `git diff` for everything you are about to stage. Check
   whether any change is someone else's in-progress work before including it.

## Stage specific files

Stage paths by name: `git add CLAUDE.md src/pages/about.astro`. Never
`git add -A` or `git add .` blindly. Never stage:

- `dist/`, `node_modules/`, `.astro/`, `.firebase/`
- `src/styles/tokens.css` (generated)
- `.claude/settings.local.json`, `.claude/worktrees/`

## Message

Conventional commits: `feat`, `fix`, `docs`, `chore`, `refactor`, `style`,
`test`, `build`, with an optional scope (`feat(watch): …`).

- Subject: imperative, lowercase after the type, 72 characters or fewer, no
  trailing period. `feat(speaking): add talk topics section`.
- Body: why the change was made and anything a reviewer must know (unverified
  items, skipped checks). Wrap at 72.
- Last line, after a blank line:

```text
Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
```

Pass the message with a heredoc so formatting survives:

```bash
git commit -F - <<'EOF'
docs: add contributor contract

Explain why here.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
EOF
```

## After

Show `git log --oneline -1` and `git status`. **Never push** unless the owner
asked in this session; opening a PR is the `pr` skill.
