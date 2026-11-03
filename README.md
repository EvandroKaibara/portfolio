# Portfolio

My personal portfolio. It lists the projects I have built, my work experience and the awards I won at FIAP, and it comes in Portuguese, English and Spanish.

## What's on the page

- An about section and a timeline with my jobs as an English teacher and as a software engineer.
- A project carousel with screenshots, short descriptions and a deploy link on each card. Current projects include the Snow&Cia booking system and lodging calculator, the EK Classes landing page, the Magellan UC landing page and a communication system for Sabará Hospital.
- Awards: 1st place at FIAP's Global Solution 2026, Top Talents at the Talent Summit and 2nd place at NEXT 2026.
- A link to my resume, plus GitHub, LinkedIn and email.
- A light and dark theme, and scroll animations.

## Stack

React 19 with Vite, React Router for the three language routes, `next-themes` for the theme switch, AOS for scroll animations, `sonner` for toasts and `react-icons` for icons. Styles are CSS modules.

## Running it

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # production build in dist/
npm run preview  # serve the build locally
npm run lint     # ESLint
```

## Structure

```
src/
  components/   shared pieces: cards, carousel, header, footer, timeline
  hooks/        useReveal
  pages/        pt, eng and es, one page per language
public/img/     photos, project screenshots and award pictures
```

Each language page is its own file, so a text change has to be made in all three.
