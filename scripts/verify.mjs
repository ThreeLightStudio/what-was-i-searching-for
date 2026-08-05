import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const requiredFiles = ['index.html', 'sitemap.xml', 'robots.txt', 'og.png'];
const missing = requiredFiles.filter((file) => !existsSync(join(dist, file)));

if (missing.length > 0) {
  throw new Error(`Missing build output: ${missing.join(', ')}`);
}

const html = readFileSync(join(dist, 'index.html'), 'utf8');
const notFoundHtml = readFileSync(join(dist, '404.html'), 'utf8');
const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
const origin = (process.env.SITE_ORIGIN ?? 'https://threelightstudio.github.io').replace(/\/$/, '');
const base = (process.env.BASE_PATH ?? '/what-was-i-searching-for').replace(/\/$/, '');
const canonical = `${origin}${base}/`;

const requiredHtml = [
  '<title>뭐 찾으려고 했더라? | 인터넷 미아 안내소</title>',
  '<meta name="description"',
  `<link rel="canonical" href="${canonical}"`,
  '<meta property="og:title"',
  '<meta property="og:description"',
  `<meta property="og:url" content="${canonical}"`,
  '<meta property="og:image"',
  'https://namu.wiki/w/',
  '그그 그그 뭐더라',
  '그 뭐냐 그거 있잖아',
];

for (const marker of requiredHtml) {
  if (!html.includes(marker)) {
    throw new Error(`Missing HTML marker: ${marker}`);
  }
}

const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (locs.length !== 1 || locs[0] !== canonical) {
  throw new Error(`Sitemap must contain exactly the canonical homepage: ${locs.join(', ')}`);
}

if (!robots.includes(`Sitemap: ${origin}${base}/sitemap.xml`)) {
  throw new Error('robots.txt does not reference sitemap.xml');
}

if (!html.includes('rel="noopener noreferrer"')) {
  throw new Error('External Namu link is missing noopener noreferrer');
}

if (!notFoundHtml.includes('name="robots" content="noindex, nofollow"')) {
  throw new Error('404 page must be excluded from indexing');
}

console.log(`Verified single-page SEO output: ${canonical}`);
