"use client"

import { useMemo, useState } from 'react'
import { FilterBar } from './FilterBar'
import { ScheduleViewToggle } from './ScheduleViewToggle'
import { CalendarView } from './CalendarView'
import { MatchList } from '@/components/composition/MatchList'

export type Match = {
  id: string
  stage?: string
  day?: string
  platform?: string
  startTime?: string
  teamA?: string
  teamB?: string
}

export function ScheduleClient({ data }: { data: Match[] }) {
  const [filters, setFilters] = useState<{ stage?: string; day?: string; platform?: string }>({})
  const [mode, setMode] = useState<'list' | 'calendar'>('list')

  const filtered = useMemo(() => {
    return data.filter((m) =>
      (!filters.stage || m.stage === filters.stage) &&
      (!filters.day || m.day === filters.day) &&
      (!filters.platform || m.platform === filters.platform)
    )
  }, [data, filters])

  const events = useMemo(() => filtered.map((m) => ({ id: m.id, title: `${m.teamA ?? ''} vs ${m.teamB ?? ''}`.trim(), start: m.startTime ?? '' })), [filtered])

  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-3">
        <FilterBar data={data} filters={filters} setFilters={setFilters} />
        <div className="ml-auto" />
        <ScheduleViewToggle mode={mode} setMode={setMode} />
      </div>
      {mode === 'list' ? <MatchList data={filtered as any} /> : <CalendarView events={events} />}
    </div>
  )
}
