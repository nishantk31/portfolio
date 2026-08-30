# Nishant Kohale — Personal Portfolio

A modern, responsive personal portfolio website built from the contents of `Nishant_Kohale_Resume.pdf`. Content is factual to the resume; missing links are marked with clear placeholders.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React 19](https://react.dev/) + TypeScript
- Custom CSS (no UI framework)

## Prerequisites

- Node.js 18+ (recommended: 20 or 22)
- npm 9+

## Run locally

```bash
# install dependencies
npm install

# start the development server
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

- `npm run build` outputs static files to `dist/`
- `npm run preview` serves the production build locally

## Project structure

```
├── public/
│   ├── favicon.svg
│   └── Nishant_Kohale_Resume.pdf   # downloadable resume
├── src/
│   ├── data/profile.ts             # all resume-derived content
│   ├── App.tsx                     # page sections & layout
│   ├── index.css                   # design system & responsive styles
│   └── main.tsx
├── Nishant_Kohale_Resume.pdf       # source resume copy
├── index.html
├── package.json
└── README.md
```

## Updating content

Edit `src/data/profile.ts` to update personal details, experience, projects, skills, education, or certifications. Keep placeholders when a URL or detail is not available on the resume.

## Notes

- Navigation collapses into a mobile menu below ~820px width.
- The site is designed for desktop, laptop, tablet, and mobile viewports.
