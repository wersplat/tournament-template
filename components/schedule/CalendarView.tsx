type Event = { id: string; title: string; start: string; end?: string }

export function CalendarView({ events }: { events: Event[] }) {
  // Minimal placeholder month grid based on start date day
  return (
    <div className="grid grid-cols-7 gap-2">
      {events.map((e) => (
        <div key={e.id} className="rounded border border-[color:var(--muted)]/20 bg-[var(--card)] p-2 text-xs">
          <div className="font-medium text-[color:var(--fg)] truncate">{e.title}</div>
          <div className="text-[color:var(--muted)]">{new Date(e.start).toLocaleString()}</div>
        </div>
      ))}
    </div>
  )
}
