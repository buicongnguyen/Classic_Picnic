# Pip's Fruit Picnic (classic)

The classic version of the picnic: merge fruit on a gingham blanket in 3D, chase the watermelon in the **challenge** (`?mode=challenge`, the default) or relax in **free play** with bubble wishes (`?mode=free`). Built with Three.js; everything is modelled in code.

**Play:** https://buicongnguyen.github.io/Classic_Picnic/

It grew into [The Lantern Picnic](https://github.com/buicongnguyen/picnic_game). Design notes, research and validation are in [docs/](docs/) (start with [PICNIC-DESIGN.md](docs/PICNIC-DESIGN.md)).

## Run

```sh
npm install
npm run dev            # http://localhost:4173
npm test               # rules, wishes, challenge and saves
npm run test:browser   # browser play-throughs (needs npm run dev; PICNIC_URL=<url> tests another site)
```

`?debug` exposes `window.__picnic` for tests. Progress is saved in the browser.

## Deploy

Every push to `main` runs [.github/workflows/pages.yml](.github/workflows/pages.yml): `npm ci`, `npm test`, `npm run build`, then publishes `dist/` to GitHub Pages.
