# 3D Slicer for Latin America

The website for the **3D Slicer for Latin America** initiative, built with **Angular 21**
(standalone components, signals, zoneless change detection) and prerendered to static HTML
for deployment on **GitHub Pages**.

## Development

```bash
npm install
npm start          # dev server at http://localhost:4200
```

## Build

```bash
npm run build      # production build + prerender, then flatten .html routes
```

The build prerenders every page to static HTML in `dist/slicer-latin-america/browser`.
Angular writes each prerendered route as `<route>/index.html`; the `postbuild` step
(`tools/flatten-html-routes.mjs`) rewrites those to flat `<route>` files so the original
`*.html` URLs (e.g. `/events.html`) keep working unchanged.

## Linting & formatting

```bash
npm run lint       # ESLint (angular-eslint) + Stylelint
npm run format     # Prettier
```

## Project structure

```
src/
  app/
    core/            i18n service + bundled translations, <head> injection, tutorials fetch
    shared/          navbar, footers, workshop header/speakers/gallery, tutorial cards
    pages/           one folder per route (home, events, team, …, workshops/*)
    app.routes.ts    single source of truth for routes + prerender list
  root-assets/       404.html and .nojekyll copied to the deploy root
public/assets/       images, PDFs, docs, and data/tutorials.json (fetched at runtime)
events/              workshop instruction Markdown rendered by the md-viewer page
tools/               post-build helper scripts
```

## Deployment

`.github/workflows/static.yml` builds the app and publishes the prerendered output to
GitHub Pages on every push to `main`, hourly, or on manual dispatch.
`.github/workflows/fetch-tutorials.yml` refreshes `public/assets/data/tutorials.json`
hourly from the Tutorial Maker Collection repository; the tutorial listings load that file
at runtime.
