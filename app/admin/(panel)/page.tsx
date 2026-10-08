import Link from 'next/link'
import { requireAdmin } from '@/lib/admin/auth'
import { formatCents, formatDate, STATUS_STYLES, statusLabel } from '@/lib/format'

type Stats = {
  revenue_cents: number
  order_count: number
  avg_order_cents: number
  units_sold: number
  to_fulfill: number
}
type Day = { day: string; revenue_cents: number; order_count: number }
type Seller = { product_id: string; product_name: string; units: number; revenue_cents: number }

const RANGES = [7, 30, 90, 365]

export default async function Dashboard({
  searchParams,
}: {
  searchParams: Promise<{ range?: string }>
}) {
  const { range } = await searchParams
  const days = RANGES.includes(Number(range)) ? Number(range) : 30
  const { supabase } = await requireAdmin()

  const [statsRes, dailyRes, sellersRes, lowStockRes, recentRes] = await Promise.all([
    supabase.rpc('admin_dashboard_stats', { p_days: days }),
    supabase.rpc('admin_daily_revenue', { p_days: Math.min(days, 90) }),
    supabase.rpc('admin_best_sellers', { p_days: days, p_limit: 5 }),
    supabase
      .from('product_variants')
      .select('id, size, color, stock, products(name)')
      .lte('stock', 3)
      .order('stock')
      .limit(8),
    supabase
      .from('orders')
      .select('id, order_number, customer_name, total_cents, status, created_at')
      .order('created_at', { ascending: false })
      .limit(6),
  ])

  const stats = (statsRes.data ?? {}) as Stats
  const daily = (dailyRes.data ?? []) as Day[]
  const sellers = (sellersRes.data ?? []) as Seller[]
  const lowStock = (lowStockRes.data ?? []) as any[]
  const recent = recentRes.data ?? []
  const maxDay = Math.max(1, ...daily.map((d) => d.revenue_cents))

  const cards = [
    { label: 'Revenue', value: formatCents(stats.revenue_cents) },
    { label: 'Orders', value: stats.order_count ?? 0 },
    { label: 'Avg order', value: formatCents(stats.avg_order_cents) },
    { label: 'Shirts sold', value: stats.units_sold ?? 0 },
    { label: 'To fulfill', value: stats.to_fulfill ?? 0, href: '/orders?status=paid' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex gap-1 rounded-lg border border-neutral-200 bg-white p-1">
          {RANGES.map((r) => (
            <Link
              key={r}
              href={`/?range=${r}`}
              className={`rounded-md px-3 py-1 text-sm ${
                r === days ? 'bg-neutral-900 text-white' : 'text-neutral-600'
              }`}
            >
              {r === 365 ? '1y' : `${r}d`}
            </Link>
          ))}
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {cards.map((c) => {
          const inner = (
            <>
              <p className="text-sm text-neutral-500">{c.label}</p>
              <p className="mt-1 text-2xl font-semibold">{c.value}</p>
            </>
          )
          return c.href ? (
            <Link key={c.label} href={c.href} className="rounded-xl border border-neutral-200 bg-white p-4 hover:border-neutral-400">
              {inner}
            </Link>
          ) : (
            <div key={c.label} className="rounded-xl border border-neutral-200 bg-white p-4">
              {inner}
            </div>
          )
        })}
      </div>

      {/* Revenue chart */}
      <section className="rounded-xl border border-neutral-200 bg-white p-4">
        <h2 className="mb-4 font-medium">Daily revenue</h2>
        <div className="flex h-40 items-end gap-[2px]">
          {daily.map((d) => (
            <div
              key={d.day}
              title={`${d.day}: ${formatCents(d.revenue_cents)} (${d.order_count} orders)`}
              className="flex-1 rounded-t bg-neutral-900/80 hover:bg-neutral-900"
              style={{ height: `${Math.max(2, (d.revenue_cents / maxDay) * 100)}%` }}
            />
          ))}
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Best sellers */}
        <section className="rounded-xl border border-neutral-200 bg-white p-4">
          <h2 className="mb-3 font-medium">Best sellers</h2>
          {sellers.length === 0 ? (
            <p className="text-sm text-neutral-500">No sales in this range yet.</p>
          ) : (
            <ul className="divide-y divide-neutral-100">
              {sellers.map((s, i) => (
                <li key={s.product_id ?? i} className="flex justify-between py-2 text-sm">
                  <span>{i + 1}. {s.product_name}</span>
                  <span className="text-neutral-500">
                    {s.units} sold · {formatCents(s.revenue_cents)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Low stock */}
        <section className="rounded-xl border border-neutral-200 bg-white p-4">
          <h2 className="mb-3 font-medium">Low stock</h2>
          {lowStock.length === 0 ? (
            <p className="text-sm text-neutral-500">Everything is stocked.</p>
          ) : (
            <ul className="divide-y divide-neutral-100">
              {lowStock.map((v) => (
                <li key={v.id} className="flex justify-between py-2 text-sm">
                  <span>
                    {v.products?.name} {[v.size, v.color].filter(Boolean).join(' / ')}
                  </span>
                  <span className={v.stock === 0 ? 'font-medium text-red-600' : 'text-amber-600'}>
                    {v.stock === 0 ? 'Out' : `${v.stock} left`}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {/* Recent orders */}
      <section className="rounded-xl border border-neutral-200 bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-medium">Recent orders</h2>
          <Link href="/admin/orders" className="text-sm text-neutral-500 hover:text-neutral-900">
            View all →
          </Link>
        </div>
        {recent.length === 0 ? (
          <p className="text-sm text-neutral-500">No orders yet.</p>
        ) : (
          <ul className="divide-y divide-neutral-100">
            {recent.map((o) => (
              <li key={o.id}>
                <Link href={`/orders/${o.id}`} className="flex items-center justify-between gap-2 py-2 text-sm hover:bg-neutral-50">
                  <span className="font-medium">#{o.order_number}</span>
                  <span className="flex-1 truncate text-neutral-600">{o.customer_name ?? 'Guest'}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs ${STATUS_STYLES[o.status]}`}>
                    {statusLabel(o.status)}
                  </span>
                  <span className="w-20 text-right">{formatCents(o.total_cents)}</span>
                  <span className="hidden w-16 text-right text-neutral-400 md:block">{formatDate(o.created_at)}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}