# Page blueprints

Primary nav: **Watch, Speaking, Learn, Writing, Projects, About**, with **Contact** as the persistent action. One compact menu on narrow screens.

## Home `/`

1. **Hero** — name and teacher-builder message left; avatar right over the studio backdrop. Primary paths: “Watch on YouTube” (`Button` primary) and “Invite me to speak” (`Button` secondary). One small prop in a layered corner, never covering face or copy.
2. **Featured teaching** — one verified video, talk, or article as the current lesson (`MediaFeature` or `ArticleCard`). No curated video yet → feature a real article and link the channel separately.
3. **Speaking** — three topic areas: full-stack product building, Flutter/mobile architecture, developer tools/AI. Verified past talks below (`TalkCard`), then a clear invitation.
4. **Learn** — workshop and article pathways (`LearningPathCard`). Course area only when a course has a title and a real destination. Lesson-card prop lives here.
5. **Selected work** — Eklavya, Morph, then a concise row of open-source/community work (`ProjectCard`).
6. **Latest writing** — short list from the linked Medium account, by topic (`ArticleCard`).
7. **Footer** — YouTube, GitHub, Medium, LinkedIn, Stack Overflow, contact, theme control (`SiteFooter`).

## Inner pages

| Route | Composition |
| --- | --- |
| `/watch` | Large feature slot, then list/grid of verified videos (title, topic, source, direct YouTube link). Channel link until videos are confirmed; no blank thumbnail cards. |
| `/speaking` | Invitation + topic list, then talk/workshop inventory; event, date, recording, slides only when verified. Microphone prop as small section art. Simple email/link invitation. |
| `/learn` | Paths: **Build full-stack products**, **Flutter and mobile**, **Developer tools**. Each links real articles/workshops/videos. Future course card style reserved, never an empty catalog. |
| `/writing` | Intro, featured article, topic filters (`TopicChip`), chronological list, modest right rail. Cards open canonical Medium/publication URLs. No looping motion. |
| `/projects` | Problem and outcome before stack. Products/tools separate from open-source/community. Previews only from real screenshots. |
| `/about` | Connects the engineering story to the teaching ambitions. Avatar may reappear. |
| `/contact` | Verified public channels and a speaking invitation. No form until a destination and spam/privacy plan exist. |

Podcast/audio stays unpublished until real episodes exist.

## Responsive placement

| Width | Layout |
| --- | --- |
| Desktop ≥1100 | Hero copy left / avatar right; props at edges; two-column content sections. |
| Tablet 768–1099 | Hero split only while legible; props shrink or move below; right rails become inline sections. |
| Mobile <768 | Copy first, avatar next, one card per row; ambient motion and decorative props reduced. |
