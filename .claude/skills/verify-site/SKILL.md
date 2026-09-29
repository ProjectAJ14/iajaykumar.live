---
name: verify-site
description: How to verify iajaykumar.live before calling a change done. Use when asked to verify, test, check or QA the site, check a page in the browser, check responsive layout, themes, reduced motion or keyboard focus, or before opening a PR.
---

# Verify the site

## 1. Automated

```bash
npm test
npm run build      # tokens + astro build + check-dist
```

`check-dist` fails on a missing title or description, anything but one `<h1>`,
a broken internal link or a `""`/`#` link. Keep the output for the report.

## 2. Serve the build

`npm run preview` (Astro preview, `http://localhost:4321`). Run it in the
background and stop it when done. Use `npm run dev` instead only when checking
live edits.

## 3. In a browser

Use whichever browser tool is available (Chrome DevTools, Claude in Chrome or
Playwright MCP). For each changed page, and `/` for shared changes:

| Check | How |
|---|---|
| Widths | 1280, 900 and 560px; no horizontal page scroll (`document.documentElement.scrollWidth <= innerWidth`) |
| Themes | Dark (default) and light via the theme toggle; text readable on its own fill; coral buttons carry dark text |
| Reduced motion | Emulate `prefers-reduced-motion: reduce`; the page shows its final state with no movement |
| Keyboard | Tab from the top: skip link first, visible 2px coral focus ring on every control, mobile menu opens and closes |
| Console | No errors; no failed image or font requests |
| Content | No placeholder, invented date, play button without a real video, or role without a source |

## 4. Report

List what was checked (pages, widths, themes, tool used) and what was **not**:
no browser tool, a page skipped, a width not tried. Never describe a check you
did not run as done.
