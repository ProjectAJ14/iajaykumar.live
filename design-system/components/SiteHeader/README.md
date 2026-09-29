# SiteHeader

The persistent top bar: text wordmark, six primary links, theme control, Contact action.

**Consumer provides:** `current` (the active section, gets `aria-current="page"` and a coral underline), optional `links` (defaults to Watch, Speaking, Learn, Writing, Projects, About), `contactHref`, and theme wiring if controlled.

72px tall on desktop (`header-height`), 64px under 768px, where nav and Contact collapse into one compact disclosure menu (native `<details>`, keyboard and touch friendly). The wordmark is the text “Ajay Kumar” — there is no logo image.

**Don't** add a podcast/audio link until real episodes exist.
