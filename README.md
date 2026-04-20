# Vamsikrishna — Portfolio

A minimal portfolio site built with [Next.js 15](https://nextjs.org) (App Router) and [Tailwind CSS](https://tailwindcss.com), ready to deploy on [Vercel](https://vercel.com).

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Script          | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start the local dev server     |
| `npm run build` | Create a production build      |
| `npm run start` | Run the built app in prod mode |
| `npm run lint`  | Run Next.js linting            |

## Deploying to Vercel

The fastest way to deploy is with the Vercel CLI or the Vercel dashboard:

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel            # first-time: link project
vercel --prod     # deploy to production
```

### Option 2 — Git Integration

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — just click **Deploy**.

No environment variables are required for the default site.

## Contact

**Vamsikrishna** — [vamsikrishna.nagidi@gmail.com](mailto:vamsikrishna.nagidi@gmail.com)

## Project Structure

```
app/
  globals.css     # Tailwind directives + base styles
  layout.tsx      # Root layout + metadata
  page.tsx        # Home page (Welcome + contact)
tailwind.config.ts
postcss.config.js
next.config.ts
tsconfig.json
```

## License

MIT © Vamsikrishna
