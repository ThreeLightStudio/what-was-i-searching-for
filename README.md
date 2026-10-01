[한국어 README](./README.ko.md)

> **Status:** Maintenance has ended. This repository is retained as a reference; the published page and source are historical project artifacts.


# What Was I Looking For?

A tiny internet lost-and-found for the moment you open a search tab and immediately forget why you came.

## Live page

<https://threelightstudio.github.io/what-was-i-searching-for/>

## Built with

- Astro
- Node.js 22+
- pnpm 11

## Run locally

```bash
pnpm install
pnpm dev
```

The development server runs at <http://localhost:4321/what-was-i-searching-for/> by default.

## Validate the project

```bash
pnpm validate
```

This runs the Astro type check, static build, metadata checks, canonical URL checks, Open Graph checks, sitemap and robots validation, and link checks.

## Deploy to GitHub Pages

The project lives in [ThreeLightStudio/what-was-i-searching-for](https://github.com/ThreeLightStudio/what-was-i-searching-for).

- Pushing to `main` triggers `.github/workflows/deploy.yml`.
- Set the repository Pages source to `GitHub Actions`.
- The deployed site is available at <https://threelightstudio.github.io/what-was-i-searching-for/>.

To use a different site origin or project path, copy `.env.example` and set `SITE_ORIGIN` and `BASE_PATH` as needed.

## Implementation and verification

- [Astro base-path configuration](astro.config.mjs)
- [Metadata, canonical URL, sitemap, robots and link checks](scripts/verify.mjs)
- [GitHub Pages deployment workflow](.github/workflows/deploy.yml)
