# StatPulse Analytics

StatPulse is a responsive analytics services website built with Next.js App Router, TypeScript, Tailwind CSS, and Recharts. Portfolio examples and dashboard charts use synthetic data and are presented as illustrations.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. The site renders without service credentials, but lead submission and the admin area need the setup below.

## Configure services

1. Create a Supabase project, then run `supabase/migrations/202611070001_create_leads.sql` in its SQL editor.
2. Add an admin user in Supabase Auth, then add that user's UUID to `public.admins` using the migration's admin table.
3. Set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` or the hosting provider. Keep the service role key private.
4. Configure Upstash Redis REST URL/token and a random `IP_HASH_SALT` of at least 16 characters for lead rate limiting.
5. Optionally set Cloudflare Turnstile, Resend email, analytics, contact details, booking URL, and public site URL values shown in `.env.example`.

Use `/contact` to submit enquiries and `/admin/login` to access the lead dashboard. Admin access is granted only to signed-in users listed in `public.admins`.

## Commands

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

Playwright needs its Chromium browser installed (`npx playwright install chromium`).

## Deployment

Deploy as a Next.js application (for example, on Vercel), configure the environment variables, and set `NEXT_PUBLIC_SITE_URL` to the production origin. Apply the Supabase migration before enabling lead submissions. No live client data, client logos, testimonials, or performance results are included.
