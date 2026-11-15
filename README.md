# nikhilmeena.com

A one-page record of Nikhil Meena's work, built with [Astro](https://astro.build). It ships static HTML and one small script, which handles the email copy button.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static site in dist/
```

## Changing what it says

All the content is in `src/data/profile.ts`: jobs, apps, side projects, contests, talks and education. The page and the timeline are generated from it.

- **Jobs:** dates are `"YYYY-MM"`, and `end: null` marks the current role. Durations are counted the way LinkedIn counts them.
- **App figures:** these come from Google Play. When you update them, also change `playCheckedOn`. The page prints that date next to the table and in the footer.
- **GitHub heatmap:** this is read from `github.com/users/<githubUser>/contributions` each time the site builds. It needs no token, and it includes private-repo contributions because the profile is set to show them. To refresh it, redeploy. If GitHub can't be reached during a build, the section is left out.
- **Images:** the photo is `src/assets/nikhil-icpc-amritapuri-2023.jpg` and the app icons are in `src/assets/apps/`. Astro resizes both at build time.

## Design notes

- **Type:** one family, [Anek Latin](https://fonts.google.com/specimen/Anek+Latin) by Ek Type. The name uses its narrow width (`font-stretch: 75%`) and everything else uses normal width. The font is self-hosted through Fontsource.
- **Colour:** the page is neutral, and the photo and app icons supply the colour. The one accent is the lanyard blue from the photo. The site is light only and ignores the system dark setting.
- **The timeline:** this is the only graphic on the page. It puts every role on one axis so the overlaps are visible. The list under it says the same things in words, so the figure is hidden from screen readers.
