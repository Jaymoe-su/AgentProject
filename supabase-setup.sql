create table posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  content text not null,
  topic text not null,
  created_at timestamp with time zone default now()
);

-- Allow public read access
alter table posts enable row level security;
create policy "Public can read posts" on posts for select using (true);
create policy "Service can insert posts" on posts for insert with check (true);
