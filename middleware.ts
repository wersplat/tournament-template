import { NextResponse, type NextRequest } from 'next/server'

// Optional subdomain mapping: {tournament}.site.tld -> /{tournament}
// Enable by setting SUBDOMAIN_BASE=site.tld in env. Middleware runs on all paths.
export function middleware(req: NextRequest) {
  const base = process.env.SUBDOMAIN_BASE
  if (!base) return NextResponse.next()

  const url = req.nextUrl
  const host = req.headers.get('host') || ''
  const suffix = `.${base}`

  if (host.endsWith(suffix)) {
    const sub = host.slice(0, -suffix.length)
    if (sub && sub !== 'www') {
      // If already on /{sub} keep as-is
      if (!url.pathname.startsWith(`/${sub}`)) {
        url.pathname = `/${sub}${url.pathname}`
        return NextResponse.rewrite(url)
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api/og).*)'],
}
