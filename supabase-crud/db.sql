create table public.produtos (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  valor numeric(9,2) not null,
  qtd numeric(5,2) not null default 0,
  image_url text,
  user_id uuid not null references auth.users (id) on delete cascade,
  created_at timestamp with time zone default now()
);
