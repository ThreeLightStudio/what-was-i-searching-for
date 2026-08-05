import { defineConfig } from 'astro/config';

const siteOrigin = process.env.SITE_ORIGIN ?? 'https://threelightstudio.github.io';
const base = process.env.BASE_PATH ?? '/what-was-i-searching-for';

export default defineConfig({
  site: siteOrigin,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
