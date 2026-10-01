-- =========================================================
-- Dabble & Design Co. : schema + security
-- =========================================================

-- ---------- Admins ----------
-- Only users listed here can manage the shop.
create table public.admins (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admins enable row level security;

create policy "admins can see their own row"
  on public.admins for select to authenticated
  using (user_id = (select auth.uid()));

-- Helper used by every policy below
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.admins where user_id = (select auth.uid())
  );
$$;

-- Keeps updated_at current
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------- Products ----------
create table public.products (
  id          uuid primary key default gen_random_uuid(),
  slug        text not null unique,
  title       text not null,
  description text not null default '',
  price       integer not null check (price >= 0),   -- cents
  images      text[] not null default '{}',
  category    text not null default 'everyday'
              check (category in ('everyday','teams','events','business','gifts','pets')),
  sizes       text[] not null default '{}',
  colors      text[] not null default '{}',
  tags        text[] not null default '{}',
  featured    boolean not null default false,
  visible     boolean not null default true,         -- hide without deleting
  sort_order  integer not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create trigger products_updated_at
  before update on public.products
  for each row execute function public.set_updated_at();

-- ---------- Orders ----------
create table public.orders (
  id                uuid primary key default gen_random_uuid(),
  order_number      bigint generated always as identity unique,  -- friendly #1001 style number
  stripe_session_id text unique,
  stripe_payment_intent text,
  email             text not null,
  name              text,
  phone             text,
  shipping_address  jsonb,
  fulfillment       text not null default 'ship'
                    check (fulfillment in ('ship','pickup')),
  status            text not null default 'paid'
                    check (status in ('paid','in_production','ready','shipped',
                                      'picked_up','completed','canceled','refunded')),
  subtotal          integer not null default 0,   -- cents
  shipping          integer not null default 0,
  tax               integer not null default 0,
  total             integer not null,
  carrier           text,
  tracking_number   text,
  notes             text,                          -- Melissa's private notes
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

alter table public.orders alter column order_number restart with 1001;

create trigger orders_updated_at
  before update on public.orders
  for each row execute function public.set_updated_at();

create index orders_created_at_idx on public.orders (created_at desc);
create index orders_status_idx     on public.orders (status);

-- Snapshot of what was bought, so old orders stay accurate if a product changes
create table public.order_items (
  id          uuid primary key default gen_random_uuid(),
  order_id    uuid not null references public.orders(id) on delete cascade,
  product_id  uuid references public.products(id) on delete set null,
  title       text not null,
  size        text,
  color       text,
  quantity    integer not null check (quantity > 0),
  unit_price  integer not null check (unit_price >= 0),  -- cents
  created_at  timestamptz not null default now()
);

create index order_items_order_id_idx   on public.order_items (order_id);
create index order_items_product_id_idx on public.order_items (product_id);

-- ---------- Business Partners ----------
create table public.partners (
  id            uuid primary key default gen_random_uuid(),
  business_name text not null,
  contact_name  text,
  email         text,
  phone         text,
  notes         text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create trigger partners_updated_at
  before update on public.partners
  for each row execute function public.set_updated_at();

create table public.partner_assets (
  id          uuid primary key default gen_random_uuid(),
  partner_id  uuid not null references public.partners(id) on delete cascade,
  type        text not null check (type in ('logo','design')),
  name        text,
  file_path   text not null,     -- path in the private partner-files bucket
  created_at  timestamptz not null default now()
);

create table public.partner_people (
  id          uuid primary key default gen_random_uuid(),
  partner_id  uuid not null references public.partners(id) on delete cascade,
  name        text not null,
  size        text,
  notes       text,
  created_at  timestamptz not null default now()
);

create index partner_assets_partner_id_idx on public.partner_assets (partner_id);
create index partner_people_partner_id_idx on public.partner_people (partner_id);

-- =========================================================
-- Row Level Security
-- =========================================================
alter table public.products       enable row level security;
alter table public.orders         enable row level security;
alter table public.order_items    enable row level security;
alter table public.partners       enable row level security;
alter table public.partner_assets enable row level security;
alter table public.partner_people enable row level security;

-- Public can only READ visible products
create policy "public reads visible products"
  on public.products for select to anon, authenticated
  using (visible = true);

-- Admins can do everything
create policy "admins manage products"       on public.products       for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage orders"         on public.orders         for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage order items"    on public.order_items    for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage partners"       on public.partners       for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage partner assets" on public.partner_assets for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins manage partner people" on public.partner_people for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- Note: no public INSERT on orders. The Stripe webhook writes orders
-- server-side with the service role key, which bypasses RLS.

-- =========================================================
-- Storage buckets
-- =========================================================
insert into storage.buckets (id, name, public)
values
  ('product-images', 'product-images', true),   -- public URLs for the shop
  ('partner-files',  'partner-files',  false)   -- private: business logos/designs
on conflict (id) do nothing;

create policy "admins manage product images"
  on storage.objects for all to authenticated
  using (bucket_id = 'product-images' and public.is_admin())
  with check (bucket_id = 'product-images' and public.is_admin());

create policy "admins manage partner files"
  on storage.objects for all to authenticated
  using (bucket_id = 'partner-files' and public.is_admin())
  with check (bucket_id = 'partner-files' and public.is_admin());

-- =========================================================
-- Seed: the 5 current shirts
-- =========================================================
insert into public.products (slug, title, price, images, tags, category, sizes, featured, sort_order) values
  ('good-girls-go-to-heaven',       'Good Girls Go to Heaven',         2400, '{/products/Good-girls-go-to-heaven-mock-up.png}',       '{sassy,funny}',          'everyday', '{S,M,L,XL,2XL,3XL}', true, 1),
  ('hot-mess-doing-my-best',        'Hot Mess Doing My Best',          2400, '{/products/Hot-mess-doing-my-best-mock-up.png}',        '{funny,relatable}',      'everyday', '{S,M,L,XL,2XL,3XL}', true, 2),
  ('im-not-judging-you-my-face-is', 'I''m Not Judging You, My Face Is', 2400, '{/products/Im-not-judging-you-my-face-is-mock-up.png}', '{sarcastic,funny}',      'everyday', '{S,M,L,XL,2XL,3XL}', true, 3),
  ('too-glam-to-give-a-damn',       'Too Glam to Give a Damn',         2400, '{/products/Too-glam-to-give-a-damn-mock-up.png}',       '{sassy,glam}',           'everyday', '{S,M,L,XL,2XL,3XL}', true, 4),
  ('wild-heart-witchy-soul',        'Wild Heart Witchy Soul',          2400, '{/products/Wild-heart-witchy-soul-mock-up.png}',        '{witchy,halloween,fall}', 'everyday', '{S,M,L,XL,2XL,3XL}', true, 5);