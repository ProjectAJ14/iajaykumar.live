// One-off: derive web-sized WebP copies of the asset masters into public/assets/web/.
// Rerun after replacing a master: node scripts/images.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const out = new URL('../public/assets/web/', import.meta.url);
mkdirSync(out, { recursive: true });
const jobs = [
  ['portraits/ajay-avatar.png', 'ajay-avatar.webp', { height: 840 }],
  ['illustrations/creator-studio.png', 'creator-studio.webp', { width: 1672 }],
  ['props/studio-microphone.png', 'studio-microphone.webp', { width: 320 }],
  ['props/video-camera.png', 'video-camera.webp', { width: 320 }],
  ['props/lesson-cards.png', 'lesson-cards.webp', { width: 400 }],
];
for (const [src, dst, size] of jobs) {
  await sharp(new URL(`../public/assets/${src}`, import.meta.url).pathname).resize(size).webp({ quality: 82 }).toFile(new URL(dst, out).pathname);
}
// Social card: 1200x630 crop of the studio with the avatar on the right.
const avatar = await sharp(new URL('../public/assets/portraits/ajay-avatar.png', import.meta.url).pathname).resize({ height: 600 }).toBuffer();
await sharp(new URL('../public/assets/illustrations/creator-studio.png', import.meta.url).pathname)
  .resize(1200, 630, { fit: 'cover' })
  .composite([
    { input: avatar, left: 1200 - 450 - 60, top: 30 },
    { input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
      <text x="80" y="270" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="76" fill="#F7F8FB">Ajay Kumar</text>
      <rect x="80" y="300" width="96" height="5" rx="2.5" fill="#F47753"/>
      <text x="80" y="370" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="34" fill="#ADB8C9">Engineer, builder, and teacher</text>
      <text x="80" y="420" font-family="Menlo, monospace" font-size="24" fill="#81C7D4">iajaykumar.live</text></svg>`), left: 0, top: 0 },
  ])
  .jpeg({ quality: 84 }).toFile(new URL('../public/assets/og-card.jpg', import.meta.url).pathname);
