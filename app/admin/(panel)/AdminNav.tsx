'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Dashboard' },
  { href: '/orders', label: 'Orders' },
  { href: '/products', label: 'Products' },
  { href: '/content', label: 'Site Content' },
  { href: '/profile', label: 'Profile & Settings' },
]

export default function AdminNav() {
  const raw = usePathname()
  const path = raw.replace(/^\/admin/, '') || '/'

  return (
    <nav className="flex gap-1 overflow-x-auto px-2 pb-2 md:flex-col md:pb-0">
      {links.map((l) => {
        const active = l.href === '/' ? path === '/' : path.startsWith(l.href)
        return (
          <Link
            key={l.href}
            href={l.href}
            className={`whitespace-nowrap rounded-md px-3 py-2 text-sm ${
              active ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:bg-neutral-100'
            }`}
          >
            {l.label}
          </Link>
        )
      })}
    </nav>
  )
}