"use client"

import { useMemo } from 'react'

export type Match = {
  id: string
  stage?: string
  day?: string
  platform?: string
}

type Props = {
  data: Match[]
  filters: { stage?: string; day?: string; platform?: string }
  setFilters: (f: Props['filters']) => void
}

export function FilterBar({ data, filters, setFilters }: Props) {
  const stages = useMemo(() => unique(data.map((m) => m.stage).filter(Boolean) as string[]), [data])
  const days = useMemo(() => unique(data.map((m) => m.day).filter(Boolean) as string[]), [data])
  const platforms = useMemo(() => unique(data.map((m) => m.platform).filter(Boolean) as string[]), [data])

  return (
    <div className="flex flex-wrap gap-3">
      <Select label="Stage" value={filters.stage} onChange={(v) => setFilters({ ...filters, stage: v })} options={stages} />
      <Select label="Day" value={filters.day} onChange={(v) => setFilters({ ...filters, day: v })} options={days} />
      <Select label="Platform" value={filters.platform} onChange={(v) => setFilters({ ...filters, platform: v })} options={platforms} />
      <button
        className="ml-auto text-sm underline text-[color:var(--muted)] hover:text-[color:var(--fg)]"
        onClick={() => setFilters({})}
      >
        Reset
      </button>
    </div>
  )
}

function Select({ label, value, onChange, options }: { label: string; value?: string; onChange: (v?: string) => void; options: string[] }) {
  return (
    <label className="text-sm text-[color:var(--muted)]">
      <span className="mr-2">{label}</span>
      <select
        className="bg-[var(--card)] border border-[color:var(--muted)]/30 rounded px-2 py-1 text-[color:var(--fg)]"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value || undefined)}
      >
        <option value="">All</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}

function unique<T>(arr: T[]) {
  return Array.from(new Set(arr))
}
