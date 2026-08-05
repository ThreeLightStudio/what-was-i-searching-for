import type { APIRoute } from 'astro';

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://threelightstudio.github.io');
  const homepage = new URL(`${basePath}/`, origin).toString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${homepage}</loc>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
