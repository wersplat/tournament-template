"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Breadcrumbs({ tournamentSlug }: { tournamentSlug: string }) {
  const pathname = usePathname()
  const segments = (pathname || '').split('/').filter(Boolean)

  const indexOfSlug = segments.indexOf(tournamentSlug)
  const trail = indexOfSlug >= 0 ? segments.slice(indexOfSlug) : segments

  const items = trail.map((seg, i) => {
    const href = '/' + trail.slice(0, i + 1).join('/')
    const label = decodeURIComponent(seg.replace(/\[|\]/g, ''))
    const isLast = i === trail.length - 1
    return { href, label, isLast }
  })

  if (items.length <= 1) return null

  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-3" role="navigation">
      <ol className="flex flex-wrap items-center gap-2 text-[color:var(--muted)]">
        <li>
          <Link href={("/" + tournamentSlug) as any} className="hover:underline">
            Home
          </Link>
        </li>
        {items.slice(1).map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span aria-hidden>›</span>
            {item.isLast ? (
              <span aria-current="page" className="text-[color:var(--fg)]">
                {titleize(item.label)}
              </span>
            ) : (
              <Link href={item.href as any} className="hover:underline">
                {titleize(item.label)}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

function titleize(s: string) {
  return s
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ')
}
