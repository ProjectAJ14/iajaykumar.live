# Page blueprints — creator-led hierarchy

## Shared shell

Primary navigation: **Watch, Speaking, Learn, Writing, Projects, About**. Keep Contact as the persistent action. On narrow screens use one compact menu. The visual language is a studio: warm key light, cue markers, soft panels, friendly 2D equipment props, and precise motion. [Motion system](MOTION_SYSTEM.md) defines each interaction.

## Home `/`

1. **Hero / opening frame:** Ajay's name and teacher-builder message left; illustrated avatar right over the studio backdrop. “Watch on YouTube” and “Invite me to speak” are the main paths. A microphone or camera prop can occupy a small layered corner; do not cover his face or copy. The hero settles in like a studio cue, not a long intro animation.
2. **Featured teaching:** one verified video, talk, or article presented as the current lesson. If no direct video is curated, feature a real article and link the YouTube channel separately. Never show a fake play button.
3. **Speaking:** three topic areas drawn from Ajay's public work: full-stack product building, Flutter/mobile architecture, and developer tools/AI. Show verified past talks below and a clear invitation link.
4. **Learn:** workshop and article pathways, followed by a course area only when a course has a title and real destination. The lesson-card prop belongs here.
5. **Selected work:** Eklavya, Morph, and a concise row of open-source/community work as evidence behind the teaching.
6. **Latest writing:** a short list from the linked Medium account, organized by topic.
7. **Footer:** YouTube, GitHub, Medium, LinkedIn, Stack Overflow, contact, and theme control.

## Watch `/watch`

Use a large feature slot, then a clear list/grid of verified videos. Each item needs title, topic, source, and direct YouTube destination. Channel link is available now; `content/videos.csv` is deliberately empty until individual video URLs are confirmed. Do not show blank thumbnail cards or pretend videos are hosted locally.

## Speaking `/speaking`

Lead with a concise invitation and topic list. Follow with the talk/workshop inventory, adding event name, date, recording, and slides only when verified. Use the microphone prop as a small section illustration, not the proof of speaking experience. A simple email/link action should make an invitation easy.

## Learn `/learn`

Organize by learning path: **Build full-stack products**, **Flutter and mobile**, **Developer tools**. Each path points to real articles, workshops, or videos. Reserve a card style for future courses, but do not publish an empty catalog. `content/courses.csv` has no entries until a real course is defined.

## Writing `/writing`

Intro, featured technical article, topic filters, chronological list, and a modest sidebar. Article cards open the canonical Medium/publication URL. Reading stays calm: no looping animation behind body text.

## Projects `/projects`

Explain the problem and outcome of each project before the tech stack. Separate products/tools from open-source/community work. Use project previews only when real screenshots or demos exist. Motion can reveal a small metadata panel, but all links and details remain available by keyboard and touch.

## About `/about` and Contact `/contact`

About connects the full-stack engineering story to Ajay's teaching ambitions. Contact offers verified public channels and a speaking invitation. Do not add a form until a destination and spam/privacy plan exist.

## Podcast/audio later

The microphone and waveform motif can support a future audio series. Keep its navigation entry and content page unpublished until there are real episodes. No “On Air,” “Live,” or recording-state badge should imply a show is active when it is not.

## Responsive placement

| Width | Layout |
| --- | --- |
| Desktop | Hero copy left/avatar right; props occupy edges; creator content in two-column sections. |
| Tablet | Hero remains split only while legible; props shrink or move below; right rails become inline sections. |
| Mobile | Copy first, avatar next, one content card per row; ambient motion and decorative props are reduced. |

External links should identify their destination. If content or media is unverified, omit its action rather than displaying a placeholder that looks live.
