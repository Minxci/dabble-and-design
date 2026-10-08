export const formatCents = (cents: number | null | undefined) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    (cents ?? 0) / 100
  )

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    timeZone: 'America/Chicago',
  })

export const STATUS_STYLES: Record<string, string> = {
  pending: 'bg-neutral-100 text-neutral-600',
  paid: 'bg-blue-100 text-blue-700',
  in_production: 'bg-amber-100 text-amber-700',
  shipped: 'bg-violet-100 text-violet-700',
  delivered: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
  refunded: 'bg-red-100 text-red-700',
}

export const statusLabel = (s: string) =>
  s.replace('_', ' ').replace(/\b\w/g, (c) => c.toUpperCase())