import type { APIRoute } from 'astro';

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://threelightstudio.github.io');
  const sitemap = new URL(`${basePath}/sitemap.xml`, origin).toString();

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
