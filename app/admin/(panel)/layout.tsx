import Link from 'next/link'
import { requireAdmin } from '@/lib/admin/auth'
import { signOut } from '@/lib/admin/actions'
import AdminNav from './AdminNav'

export const dynamic = 'force-dynamic'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { profile } = await requireAdmin()

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 md:flex">
      <aside className="border-b border-neutral-200 bg-white md:sticky md:top-0 md:flex md:h-screen md:w-60 md:flex-col md:border-b-0 md:border-r">
        <div className="flex items-center justify-between p-4 md:block">
          <Link href="/admin" className="font-semibold">
            Dabble & Design <span className="text-neutral-400">Admin</span>
          </Link>
          <p className="text-sm text-neutral-500 md:mt-1">
            {profile.display_name ?? 'Admin'}
          </p>
        </div>
        <AdminNav />
        <div className="mt-auto hidden space-y-2 p-4 md:block">
          <Link href="/" target="_blank" className="block text-sm text-neutral-500 hover:text-neutral-900">
            View storefront ↗
          </Link>
          <form action={signOut}>
            <button className="text-sm text-neutral-500 hover:text-neutral-900">Sign out</button>
          </form>
        </div>
      </aside>
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  )
}