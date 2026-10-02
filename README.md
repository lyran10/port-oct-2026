# Liran Ramekar — Portfolio

A personal portfolio site for a React/TypeScript software engineer, built with Vite,
React 19, TypeScript, Tailwind CSS v4, shadcn/ui-style components, and Framer Motion.

## Stack

- **Vite** — build tooling & dev server
- **React 19 + TypeScript** — strict, typed components
- **Tailwind CSS v4** — theme via CSS variables (`src/index.css`), light/dark mode
- **shadcn/ui-style primitives** — `Button`, `Card`, `Badge`, `Separator` in `src/components/ui`
- **Framer Motion** — scroll reveals, animated skill bars, page transitions
- **lucide-react** + **react-icons** — icon set
- **oxlint** — linting

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
npm run lint       # lint with oxlint
```

## Project structure

```
src/
  components/
    ui/            # low-level shadcn-style primitives (Button, Card, Badge...)
    sections/       # page sections (Hero, About, Experience, Skills, Projects...)
    ...              # navbar, footer, theme toggle, shared animation helpers
  data/
    resume.ts       # all content — name, experience, skills, projects, education
  hooks/            # theme + active-section hooks
  lib/utils.ts      # `cn` class-merging helper
```

## Editing content

All resume/portfolio content lives in [`src/data/resume.ts`](src/data/resume.ts) —
update your profile, experience, skills, projects, and education there without
touching component markup. Replace `public/liranCV.pdf` and
`src/assets/portrait.png` with your own files to personalize further.
