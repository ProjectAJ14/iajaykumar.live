# iajaykumar.live — design handoff

This repository is a **no-code baseline** for Ajay Kumar's creator-led personal website. It contains the visual assets, verified content links, information architecture, and motion specifications. No application source, Firebase configuration, or deployment setup has been added yet.

## Start here

1. [Project brief](docs/PROJECT_BRIEF.md) — audience, story, scope, and design direction.
2. [Design system](docs/DESIGN_SYSTEM.md) — palette, typography, studio graphics, and components.
3. [Motion system](docs/MOTION_SYSTEM.md) — opening sequence, props, interactions, and reduced-motion behavior.
4. [Page blueprints](docs/PAGE_BLUEPRINTS.md) — page-by-page layout and responsive behavior.
5. [Content and sources](docs/CONTENT_AND_SOURCES.md) — verified identity, articles, projects, and source policy.
6. [Build handoff](docs/BUILD_HANDOFF.md) — intended implementation structure and acceptance checklist.

## Repository map

```text
content/
  articles.csv                 Verified Medium article index
  projects.csv                 Featured project candidates
  talks.csv                    Talk titles and source status
  videos.csv                   Reserved verified video index
  courses.csv                  Reserved course index
  audio.csv                    Reserved future audio index
src/
  README.md                    Framework-neutral source directory map
  components/                 Reserved for shared UI pieces
  pages/                      Reserved for page composition
  styles/                     Reserved for tokens and layout styles
  content/                    Reserved for content adapters
docs/
  PROJECT_BRIEF.md
  DESIGN_SYSTEM.md
  MOTION_SYSTEM.md
  PAGE_BLUEPRINTS.md
  CONTENT_AND_SOURCES.md
  BUILD_HANDOFF.md
public/assets/
  README.md                    Asset manifest and provenance
  portraits/ajay-avatar.png    Transparent illustrated avatar
  illustrations/creator-studio.png   Full-quality studio source
  illustrations/creator-studio.jpg   Web-ready hero image
  props/                            Microphone, camera, lesson graphics
```

The future builder should add application source inside `src/`, plus app configuration, tests, and Firebase Hosting files after choosing the framework. Keep content data and public assets in their existing locations unless the framework requires a documented move.
