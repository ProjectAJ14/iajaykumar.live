// Editorial groupings shared by Home and inner pages. Every lesson links a real article.
import { articles } from './index';

const byTitle = (prefix: string) => {
  const a = articles.find((x) => x.title.startsWith(prefix));
  if (!a) throw new Error(`paths.ts: no article titled "${prefix}…" in content/articles.csv`);
  return { title: a.title, href: a.href }; // add kind ('Video', 'Workshop') once a path mixes media
};

export const learningPaths = [
  {
    title: 'Build full-stack products',
    summary: 'Ship a working product end to end: authentication, hosting and the testing habits that keep it working.',
    lessons: [byTitle('Passwordless Email Sign in'), byTitle('Host Flutter Web on Github Pages'), byTitle('Are Developers Not Good Testers')],
  },
  {
    title: 'Flutter and mobile',
    summary: 'How Flutter is put together and how to set up an app that stays easy to change.',
    lessons: [byTitle('Deep Dive into Flutter Create'), byTitle('Discover How Flutter is Built'), byTitle('How to use environment variables'), byTitle('Exploring Flutter 3.3')],
  },
  {
    title: 'Developer tools',
    summary: 'Tooling and team conventions that make everyday development faster and more consistent.',
    lessons: [byTitle('Flutter’s Device Preview'), byTitle('Flutter: Setting up coding standards'), byTitle('Are you learning something new')],
  },
];

export const speakingTopics = [
  { title: 'Full-stack product building', summary: 'Taking an idea from first commit to a shipped product across web, backend, cloud and mobile.' },
  { title: 'Flutter and mobile architecture', summary: 'Structuring Flutter apps, routing, state management and the tooling that keeps teams fast.' },
  { title: 'Developer tools and AI', summary: 'Building tools that help developers learn and work, including AI-assisted workflows.' },
];
