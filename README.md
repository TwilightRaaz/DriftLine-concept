# DriftLine Website

Single-page website built to match the Figma design exactly.

## Tech Stack
- React 19 + Vite
- Tailwind CSS v3
- Framer Motion (animations)
- Deployed on Vercel + GitHub Pages

## Design Tokens (from Figma)
| Token | Value |
|-------|-------|
| `--primary-dark` | `#14191F` |
| `--off-white` | `#F7F7F5` |
| `--accent-lime` | `#C4F000` |
| `--near-white` | `#FAFAF8` |
| `--pure-white` | `#FFFFFF` |

## Fonts
- Archivo Black
- Inter
- JetBrains Mono
- Bebas Neue

## Sections
1. Loader — animated curtain reveal with DRIFTLINE title and progress bar
2. Hero — "Own The Road" headline, bike imagery, CTA button, scroll down
3. Features — expandable/collapsible feature cards carousel
4. About — "Not A Club. A Standard." typography section
5. FAQ — accordion with Q1-Q4 questions
6. Information — 4-step joining process with winding path
7. Footer — contact, navigation, legal, socials

## Scripts
```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run preview # Preview production build
```

## Deployment
- **Vercel**: Auto-deploys on push to main (see `vercel.json`)
- **GitHub Pages**: Deploys via GitHub Actions (see `.github/workflows/pages.yml`)

## Images
All images are downloaded from the Figma file and stored in `public/assets/`.
trigger redeploy
