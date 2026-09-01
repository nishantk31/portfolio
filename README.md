# Nishant Kohale — Personal Portfolio

A modern, responsive personal portfolio website built from the contents of `Nishant_Kohale_Resume.pdf`. Content is factual to the resume; missing links are marked with clear placeholders.

## Tech stack

- [Angular 19](https://angular.dev/) + TypeScript
- Standalone components
- Custom CSS (no UI framework)

## Prerequisites

- Node.js 18+ (recommended: 20 or 22)
- npm 9+

## Run locally

```bash
# install dependencies
npm install

# start the development server
npm start
```

Open the URL shown in the terminal (typically `http://localhost:4200`).

## Production build

```bash
npm run build
```

- Output goes to `dist/portfolio/browser/`
- Production build uses `baseHref: /portfolio/` for GitHub Pages

## Project structure

```
├── public/
│   ├── favicon.svg
│   └── Nishant_Kohale_Resume.pdf   # downloadable resume
├── src/
│   ├── app/
│   │   ├── components/             # section components (hero, about, etc.)
│   │   ├── data/profile.ts         # all resume-derived content
│   │   ├── directives/             # scroll-reveal directive
│   │   ├── app.component.ts        # root layout
│   │   └── app.config.ts
│   ├── styles.css                  # design system & responsive styles
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
└── README.md
```

## Updating content

Edit `src/app/data/profile.ts` to update personal details, experience, projects, skills, education, or certifications. Keep placeholders when a URL or detail is not available on the resume.

## Deployment (GitHub Pages)

The site deploys automatically on push to `main` via GitHub Actions. Live URL:

https://nishantk31.github.io/portfolio/

## Notes

- Navigation collapses into a mobile menu below ~820px width.
- The site is designed for desktop, laptop, tablet, and mobile viewports.
