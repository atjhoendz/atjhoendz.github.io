# atjhoendz.github.io

Personal site and portfolio of Moh. Achun Armando, built with [Astro](https://astro.build) and Tailwind CSS v4.

## Editing content

All content lives in `src/data/`:

- `profile.ts`: name, role, summary, email, social links
- `projects.ts`: work and projects (newest first)
- `skills.ts`: skill groups

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Deployment

Every push to `master` builds and deploys through `.github/workflows/deploy.yml`.
GitHub Pages must be set to **Settings → Pages → Source: GitHub Actions**.
