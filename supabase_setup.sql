-- Ejecuta este script completo en el SQL Editor de tu proyecto Supabase

create table if not exists public.family_events (
  id text primary key,
  family_id text not null default 'familia-alejandro-alba',
  title text not null,
  date text not null,
  start_time text not null,
  end_time text not null,
  members jsonb not null default '[]'::jsonb,
  is_school boolean not null default false,
  series_id text,
  recurrence jsonb,
  dropoff text default '',
  pickup text default '',
  reminders jsonb not null default '[]'::jsonb,
  notes text default '',
  updated_at timestamptz not null default now()
);

create index if not exists idx_family_events_family_date
  on public.family_events (family_id, date);

alter table public.family_events enable row level security;

drop policy if exists "Acceso familiar completo" on public.family_events;
create policy "Acceso familiar completo"
  on public.family_events
  for all
  using (true)
  with check (true);

-- Activar sincronización en tiempo real (Realtime)
do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'family_events'
  ) then
    alter publication supabase_realtime add table public.family_events;
  end if;
end $$;
