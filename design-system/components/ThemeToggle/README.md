# ThemeToggle

A 44px icon button that switches between Studio (dark) and Daylight (light).

**Consumer provides:** nothing for the default (flips `data-theme` on `<html>`), or `theme` + `onChange` to control it and persist the choice. The label announces the theme it switches *to*. Shows a moon in dark, a sun in light.

Default to the visitor's `prefers-color-scheme`, falling back to dark. Surfaces crossfade over `duration-theme` — never a flash or wipe. Appears in both SiteHeader and SiteFooter.
