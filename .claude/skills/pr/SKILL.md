---
name: pr
description: How to open a pull request for iajaykumar.live. Use when asked to open a PR, create a pull request, "raise a PR", "send this for review", or push a branch for review.
---

# Pull request

1. Confirm the branch is not `main` and every intended change is committed
   (`commit` skill). Pushing is allowed only because the owner asked for a PR.
2. Run `npm test` and `npm run build` now and keep their real output for the
   body. Do not paste output from an earlier run.
3. Review the whole range: `git log --oneline main..HEAD` and
   `git diff main...HEAD --stat`. Check the documentation table in the root
   `CLAUDE.md` against the diff.
4. `git push -u origin HEAD`, then open the PR against `main`:

~~~bash
gh pr create --base main --title "<conventional subject>" --body-file - <<'EOF'
## What changed
- …

## Why
…

## Checks run
```text
$ npm test
<actual output>
$ npm run build
<actual tail, including the check-dist line>
```

## Screenshots or pages checked
- `/watch` at 1280/900/560, dark and light, reduced motion
- …

## Not verified
- … (or "Nothing")

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
~~~

- Title follows conventional commits, 72 characters or fewer.
- "Not verified" names every check not run and every editorial claim without a
  source. Never list a planned check as done.
- Return the PR URL `gh` prints.
