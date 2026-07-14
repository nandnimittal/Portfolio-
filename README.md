# Nandni Mittal — Portfolio

Premium personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Dark + blue glassmorphism theme with light/dark toggle
- Smooth scroll, typing animation, particles, cursor glow, scroll progress
- Animated skill progress bars and achievement counters
- Live GitHub repositories via GitHub API
- EmailJS contact form
- SEO metadata + Open Graph
- Fully responsive (mobile, tablet, desktop)
- Vercel-ready deployment

## Getting Started

```bash
cd portfolio
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## EmailJS Setup

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service and create a template with variables:
   - `from_name`
   - `from_email`
   - `message`
3. Copy your Service ID, Template ID, and Public Key into `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

## Resume

Place your PDF at:

```
public/resume/Nandni_Mittal_Resume.pdf
```

## Profile Photo

Replace the placeholder in the About section by adding an image under `public/images/` and updating `src/components/sections/About.tsx`.

## Project Structure

```
src/
  app/                 # App Router pages & API
  components/
    effects/           # Particles, cursor glow, loader, scroll bar
    layout/            # Navbar, Footer
    sections/          # Page sections
    ui/                # Reusable UI primitives
  data/                # Portfolio content
  lib/                 # Utils & theme
  types/               # TypeScript types
public/
  resume/              # Resume PDF
  images/              # Assets & OG image
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add EmailJS env vars in Project Settings → Environment Variables
4. Deploy

Or use the CLI:

```bash
npm i -g vercel
vercel
```

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |

## Contact

- Email: nandnimittal12d22@gmail.com
- LinkedIn: [nandnimittal05](https://www.linkedin.com/in/nandnimittal05/)
- GitHub: [nandnimittal](https://github.com/nandnimittal)
