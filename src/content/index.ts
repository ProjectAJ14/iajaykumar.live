// Content adapters: read the editorial CSVs in /content at build time.
// Rows without a real destination are dropped here, so pages never render placeholders.
import { parseCsv } from './csv.mjs';
import articlesCsv from '../../content/articles.csv?raw';
import projectsCsv from '../../content/projects.csv?raw';
import talksCsv from '../../content/talks.csv?raw';
import videosCsv from '../../content/videos.csv?raw';
import coursesCsv from '../../content/courses.csv?raw';
import audioCsv from '../../content/audio.csv?raw';

const CSV: Record<string, string> = { articles: articlesCsv, projects: projectsCsv, talks: talksCsv, videos: videosCsv, courses: coursesCsv, audio: audioCsv };
const load = (name: string) => parseCsv(CSV[name]);
const isUrl = (s?: string) => !!s && /^https?:\/\//.test(s);

export const LINKS = {
  youtube: 'https://www.youtube.com/channel/UCyV2fy32RyPgOco83tMkR-g',
  github: 'https://github.com/ProjectAJ14',
  medium: 'https://medium.com/@ajay.kumar_14',
  linkedin: 'https://www.linkedin.com/in/ajaykumar2114/',
  stackoverflow: 'https://stackoverflow.com/users/2868455/ajay-kumar',
  email: 'ajaymail2114@gmail.com',
};
export const speakingMailto = `mailto:${LINKS.email}?subject=${encodeURIComponent('Speaking invitation')}`;

export type Article = { title: string; date: string; published_at: string; topic: string; featured: boolean; href: string };
export type ProjectLinks = { demo?: string; docs?: string; site?: string; source?: string };
export type Project = { name: string; group: string; summary: string; links: ProjectLinks; role?: string; order: number };
export type Talk = { title: string; topic: string; recordingUrl?: string; event?: string; date?: string };
export type Video = { title: string; topic: string; duration?: string; href: string; thumbnail?: string; featured: boolean; published_at: string };

const fmtDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

export const articles: Article[] = load('articles')
  .filter((r) => isUrl(r.canonical_url))
  .map((r) => ({ title: r.title, published_at: r.published_at, date: fmtDate(r.published_at), topic: r.topic, featured: r.featured === 'yes', href: r.canonical_url }))
  .sort((a, b) => b.published_at.localeCompare(a.published_at));

// A role label is shown only when the CSV confirms it (never for "Confirm exact role").
const role = (status: string) => (/builds and maintains/i.test(status) ? 'Creator and maintainer' : undefined);
export const projects: Project[] = load('projects')
  .filter((r) => isUrl(r.source_url))
  .map((r) => ({
    name: r.name, group: r.group, summary: r.summary, role: role(r.role_status), order: Number(r.feature_order),
    // secondary_kind says what the secondary URL is: demo (live tool), docs, or site (product landing page).
    links: { source: r.source_url, ...(isUrl(r.secondary_url) && ['demo', 'docs', 'site'].includes(r.secondary_kind) ? { [r.secondary_kind]: r.secondary_url } : {}) },
  }))
  .sort((a, b) => a.order - b.order);

// source_url in talks.csv is the GitHub profile, not a recording, so no talk gets an action yet.
export const talks: Talk[] = load('talks').map((r) => ({ title: r.title, topic: r.topic }));

export const videos: Video[] = load('videos')
  .filter((r) => isUrl(r.canonical_url))
  .map((r) => ({ title: r.title, topic: r.topic, duration: r.duration || undefined, href: r.canonical_url, thumbnail: r.thumbnail_url || undefined, featured: r.featured === 'yes', published_at: r.published_at }));

export const courses = load('courses').filter((r) => isUrl(r.canonical_url) && r.status === 'published');
export const audio = load('audio').filter((r) => isUrl(r.canonical_url));
