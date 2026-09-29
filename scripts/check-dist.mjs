// Post-build audit of dist/: every internal href/src resolves to a built file, every page has
// a title, description and one h1, and no link is a placeholder ("#" or empty).
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const pages = walk(dist).filter((f) => f.endsWith('.html'));
const errors = [];
const resolves = (p) => [p, `${p}.html`, join(p, 'index.html')].some((c) => existsSync(join(dist, c)) && statSync(join(dist, c)).isFile());

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const page = file.slice(dist.length);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${page}: missing <title>`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) errors.push(`${page}: missing description`);
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) errors.push(`${page}: needs exactly one <h1>`);
  for (const [, attr, url] of html.matchAll(/\s(href|src)="([^"]*)"/g)) {
    if (url === '' || url === '#') errors.push(`${page}: placeholder ${attr}="${url}"`);
    else if (url.startsWith('/') && !url.startsWith('//') && !resolves(decodeURI(url.split(/[?#]/)[0]))) errors.push(`${page}: broken ${attr} ${url}`);
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`check-dist: ${pages.length} pages OK`);
