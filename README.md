# SOLIDWORKS × ALTIUM Workshop Landing Page

This repository is the source of truth for the workshop website. It contains the Next.js frontend, the Express-compatible Vercel API handlers, and the Supabase registration integration.

## Local development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Production build

```bash
pnpm build
pnpm start
```

## Registration backend

The registration form posts to `/api/register`. The server validates each request and inserts accepted registrations into the existing `public.regestrations` Supabase table. Supabase URL and publishable/anon credentials are supplied through environment variables; secrets must not be committed to the repository.

The health endpoint is available at `/api/health`.

## Project structure

- `app/` — Next.js app shell, page composition, metadata, and global styles.
- `components/` — Active landing-page sections, registration form, theme controls, and UI primitives.
- `server/app.js` — Express-compatible registration and health handlers.
- `api/` — Vercel function entrypoints for the server handlers.
- `public/` — Workshop imagery and favicon assets.

The visual design, animations, responsive behavior, and existing Supabase table name are intentionally preserved.
