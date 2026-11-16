# SPARQ Brand Site

A single-page personal brand site for **Miller T. Perez “AJ”** — Quality Engineering Leader, Multipreneur, and Creator — and the SPARQ venture ecosystem. Built with React and Vite.

The page covers the brand story, four brand pillars, the nine-venture SPARQ ecosystem, the professional/QA edge with an experience timeline, the creative side (film, music, fitness), the 2026 trajectory, and contact links.

## Tech

- React 18 + Vite 5
- Plain JavaScript (no TypeScript)
- A single production stylesheet (`src/index.css`)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # build for production (outputs to dist/)
npm run preview  # preview the production build locally
```

## Notes

- The résumé link uses the existing bundled `public/AJ-Miller-T-Perez-Resume.pdf`, served at `/AJ-Miller-T-Perez-Resume.pdf` by Vite/Vercel. Quality CI verifies the binary is included in the build.
- External links (LinkedIn, Suno, the QA portfolio) open in a new tab.
