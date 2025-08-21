"use client"

import clsx from 'clsx'
import { useState } from 'react'

export type Tab = { id: string; label: string; content?: React.ReactNode }

type Props = {
  tabs: Tab[]
  defaultId?: string
  onChange?: (id: string) => void
  className?: string
}

export function Tabs({ tabs, defaultId, onChange, className }: Props) {
  const [active, setActive] = useState<string>(defaultId ?? tabs[0]?.id)

  function activate(id: string) {
    setActive(id)
    onChange?.(id)
  }

  const activeTab = tabs.find((t) => t.id === active)

  return (
    <div className={clsx('w-full', className)}>
      <div className="flex gap-2 border-b border-[color:var(--muted)]/20">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => activate(t.id)}
            className={clsx(
              'px-3 py-2 text-sm -mb-px border-b-2',
              t.id === active
                ? 'border-[color:var(--primary)] text-[color:var(--fg)]'
                : 'border-transparent text-[color:var(--muted)] hover:text-[color:var(--fg)]'
            )}
            aria-selected={t.id === active}
            role="tab"
          >
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="py-3">
        {activeTab?.content}
      </div>
    </div>
  )
}
