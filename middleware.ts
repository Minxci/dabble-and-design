import { NextResponse, type NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

const ADMIN_HOSTS = ['admin.herdomain.com', 'admin.localhost:3000']

export async function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const { pathname } = request.nextUrl
  const isAdminHost = ADMIN_HOSTS.includes(host)

  // Storefront domain: hide the admin entirely
  if (!isAdminHost) {
    if (pathname.startsWith('/admin')) {
      return new NextResponse('Not found', { status: 404 })
    }
    return NextResponse.next()
  }

  // Admin subdomain: admin.site.com/orders -> /admin/orders internally
  const url = request.nextUrl.clone()
  url.pathname = `/admin${pathname === '/' ? '' : pathname}`
  const response = NextResponse.rewrite(url)

  // Keep the Supabase session fresh on the admin side
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )
  await supabase.auth.getUser()

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}