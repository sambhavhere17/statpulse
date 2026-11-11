# StatPulse Analytics

StatPulse Analytics is a modern, high-performance business intelligence and data consulting web platform built with Next.js App Router, TypeScript, Tailwind CSS, and Recharts.

---

## Key Features

- **Modern Brand & Visual Identity:** Polished frosted-glass navigation, responsive layout, accessible typography, and high-impact analytics visual components.
- **Interactive Reporting ROI Calculator:** Real-time calculator estimating annual hours and operational budget saved by automating spreadsheets.
- **Dedicated Consultation Booking System (`/book`):** Direct intake and scheduling interface with structured agendas and flexible calendar fallbacks.
- **Live Synthetic Demo Dashboard (`/dashboard-demo`):** Interactive dashboard featuring Sales, Marketing, Operations, and Customer Retention & LTV analytics views with 1-click CSV data export.
- **Expanded Portfolio & Case Studies (`/portfolio`):** Deep-dive case studies covering e-commerce sales, operations KPI hierarchy, marketing attribution, cohort churn analysis, and supply chain inventory health.
- **Secure Backend & Admin Portal (`/admin/leads`):** Built-in Supabase authentication, role-based access control, Redis rate limiting, Turnstile anti-bot verification, and lead management.

---

## Run Locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The public site, interactive calculator, and synthetic dashboard render seamlessly without requiring backend credentials. Lead submission and the admin portal utilize the Supabase setup detailed below.

---

## Configure Services

1. Create a [Supabase](https://supabase.com) project and execute `supabase/migrations/202611070001_create_leads.sql` in the SQL Editor.
2. Add an admin user in Supabase Auth, then register that user's UUID in `public.admins`.
3. Configure `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`.
4. Configure Upstash Redis REST URL/token and a secure `IP_HASH_SALT` for IP rate limiting.
5. Optionally configure Cloudflare Turnstile, Resend email notifications, Google Analytics, and custom booking calendar URLs.

---

## Verification & Commands

```bash
npm run lint         # Run ESLint rules
npm run typecheck    # Validate TypeScript types
npm run test         # Run Vitest unit tests
npm run test:e2e     # Run Playwright end-to-end tests
npm run build        # Production Next.js build
```

---

## Deployment

Deploy directly as a standard Next.js application (e.g. on Vercel or AWS Amplify), configure environment variables, and point `NEXT_PUBLIC_SITE_URL` to your production domain.
