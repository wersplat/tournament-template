"use client"

import { useEffect, useState } from 'react'

export type Announcement = {
  id: string
  message: string
  href?: string
  severity?: 'info' | 'success' | 'warning' | 'error'
}

export function AnnouncementRail({ fetcher }: { fetcher?: () => Promise<Announcement[]> }) {
  const [items, setItems] = useState<Announcement[]>([])

  useEffect(() => {
    let active = true
    async function load() {
      try {
        const data = (await fetcher?.()) ?? []
        if (active) setItems(data)
      } catch {
        // no-op
      }
    }
    load()
    return () => {
      active = false
    }
  }, [fetcher])

  if (!items.length) return null

  return (
    <aside aria-live="polite" aria-atomic="true" className="w-full bg-[var(--card)] border-b border-[color:var(--muted)]/20">
      <div className="max-w-7xl mx-auto px-4 py-2 flex gap-4 overflow-x-auto">
        {items.map((a) => (
          <div
            key={a.id}
            className={`shrink-0 px-3 py-1 rounded-full text-sm border ${badgeColor(a.severity)}`}
            role="note"
          >
            {a.href ? (
              <a href={a.href} className="hover:underline">
                {a.message}
              </a>
            ) : (
              <span>{a.message}</span>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
}

function badgeColor(sev: Announcement['severity']) {
  switch (sev) {
    case 'success':
      return 'border-emerald-500/30 text-emerald-300'
    case 'warning':
      return 'border-amber-500/30 text-amber-300'
    case 'error':
      return 'border-rose-500/30 text-rose-300'
    default:
      return 'border-[color:var(--muted)]/30 text-[color:var(--muted)]'
  }
}
