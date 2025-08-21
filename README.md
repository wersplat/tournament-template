# Unified Pro-Am Template

Production-ready, reskinnable tournament website built with Next.js 15 (App Router), TypeScript, Tailwind, Material Tailwind, TanStack Query, Zod, and MDX.

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + Material Tailwind + custom CSS-var theme system
- TanStack Query (client) + SSR fetch wrappers
- Zod runtime validation
- SVGR for SVG logos/icons
- MDX via `next-mdx-remote/rsc`

## Getting Started

1) Copy env example and edit as needed
```bash
cp .env.local.example .env.local
```

- Set `NEXT_PUBLIC_API_BASE_URL=https://api.my-backend.tld` when you have a backend.
- If unset, the app uses local mock API at `/api/dev`.

2) Install dependencies (pnpm recommended)
```bash
pnpm install
```

3) Run dev server
```bash
pnpm dev
```

Visit:
- `http://localhost:3000/sample-cup` (uses mock data)
- `http://localhost:3000/admin/theme-playground` (dev-only)

## Project Structure

- `app/`
  - `(site)/[tournamentSlug]/...` route group for all tournament pages
  - `api/dev` mock API, `api/themes/[slug]` theme API, `api/og` OG image
- `components/` UI kit, nav, composition pieces
- `lib/` API client, queries, zod schemas, theming utils, config helpers
- `themes/` local theme JSON packs (default + upa-summer)
- `public/themes/*/logo.svg` sample logos

## Theming

- Theme JSON schema (see `themes/default.json`):
```json
{
  "name": "UPA Summer",
  "logo": "/themes/upa-summer/logo.svg",
  "colors": {
    "--bg": "#0b0b0c",
    "--fg": "#f5f7fa",
    "--primary": "#9BF00B",
    "--secondary": "#00D4FF",
    "--accent": "#FF4D4D",
    "--card": "#151517",
    "--muted": "#8b8f98"
  },
  "typography": { "fontFamily": "Inter, ui-sans-serif, system-ui" },
  "shapes": { "radius": "14px" }
}
```

- Add a new theme: create `themes/{slug}.json` and a logo at `public/themes/{slug}/logo.svg`.
- The `ThemeLoader` server component resolves a tournament's theme via backend (`/themes/{slug}`) then falls back to local JSON, then `default`.
- CSS variables are injected inline in `:root`, Tailwind uses them via `bg-[var(--bg)]` and `text-[var(--fg)]` colors defined in `tailwind.config.ts`.

## Multi-tournament Routing

- Primary path routing: `/{tournamentSlug}` with nested pages
- Optional subdomain mapping: set `SUBDOMAIN_BASE=site.tld` and middleware will rewrite `{slug}.site.tld/*` to `/{slug}/*`.
- Helper `getTournamentFromHost(req)` in `lib/config.ts`.

## Data Layer

- Base URL: `NEXT_PUBLIC_API_BASE_URL`
- API client: `lib/api/client.ts`
  - `apiFetch<T>(path, opts?)` attaches auth token from cookies if present
  - Routes in `Endpoints`
- Zod schemas: `lib/api/schemas.ts`
- Typed queries: `lib/api/queries.ts` (SSR-friendly)
- When API base is unset, requests are routed to `/api/dev?path=...` which returns mock payloads for all endpoints.

## Pages

All under `app/(site)/[tournamentSlug]/`:
- `page.tsx` Home (hero, featured match, news, sponsors)
- `schedule/page.tsx` (list + placeholders for filters)
- `bracket/page.tsx` placeholder
- `standings/page.tsx` sticky header table
- `teams/page.tsx`, `teams/[teamSlug]/page.tsx`
- `players/page.tsx`, `players/[playerSlug]/page.tsx`
- `matches/[matchId]/page.tsx`
- `rules/page.tsx` MDX fallback demo
- `news/page.tsx`, `news/[slug]/page.tsx`

## SEO & OG Image

- Dynamic metadata can be added per page using tournament data.
- `/api/og` uses `@vercel/og` (edge) and accepts `?tournament=`.

## Deployment

- Vercel: zero-config (Edge OG route supported). Ensure env `NEXT_PUBLIC_API_BASE_URL`.
- Railway: static Node server, run `pnpm build && pnpm start`.
- CDN: Cloudflare in front is OK.

## UI & Accessibility

- CSS variables drive colors, typography, radius. Focus-visible outline uses `--primary`.
- Standings have sticky headers and hover rows. Mobile cards TBD.
- Sponsors grid uses grayscale→color on hover.
- Skeletons provided via `.skeleton` utility.

## Adding a new tournament theme
1. Create `themes/my-theme.json` using the schema above.
2. Add a logo SVG at `public/themes/my-theme/logo.svg`.
3. Set the tournament's `theme` property via your backend (or temporarily in mock data).
4. Visit `/{tournamentSlug}` to see applied theme.

## Subdomain mapping
- Set `SUBDOMAIN_BASE=site.tld` in env.
- Point DNS `*.site.tld` to your deployment.
- Visiting `coolcup.site.tld/schedule` will rewrite to `/coolcup/schedule`.

## Scripts
- `pnpm dev` – start dev server
- `pnpm build` – build
- `pnpm start` – start production server
- `pnpm lint` – run ESLint
- `pnpm typecheck` – TypeScript only
