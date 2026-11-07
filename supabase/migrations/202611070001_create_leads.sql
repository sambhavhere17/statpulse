create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (char_length(email) between 5 and 254),
  service text not null check (char_length(service) between 1 and 100),
  message text not null check (char_length(message) between 10 and 4000),
  source_page text,
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed')),
  ip_hash text,
  user_agent text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

alter table public.admins enable row level security;
alter table public.leads enable row level security;

drop policy if exists "admins read self" on public.admins;
create policy "admins read self"
  on public.admins for select to authenticated
  using (user_id = auth.uid());

drop policy if exists "admins read leads" on public.leads;
create policy "admins read leads"
  on public.leads for select to authenticated
  using (
    exists (
      select 1 from public.admins a
      where a.user_id = auth.uid()
    )
  );

drop policy if exists "admins update leads" on public.leads;
create policy "admins update leads"
  on public.leads for update to authenticated
  using (
    exists (
      select 1 from public.admins a
      where a.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.admins a
      where a.user_id = auth.uid()
    )
  );

revoke all on public.leads from anon, authenticated;
grant select, update on public.leads to authenticated;
revoke all on public.admins from anon, authenticated;
grant select on public.admins to authenticated;

-- Anonymous users receive no lead access. Server writes use the service role.
