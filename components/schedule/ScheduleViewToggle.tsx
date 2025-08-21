"use client"

export function ScheduleViewToggle({ mode, setMode }: { mode: 'list' | 'calendar'; setMode: (m: 'list' | 'calendar') => void }) {
  return (
    <div className="inline-flex rounded border border-[color:var(--muted)]/30 overflow-hidden">
      <button
        className={`px-3 py-1 text-sm ${mode === 'list' ? 'bg-[var(--primary)]/10 text-[color:var(--fg)]' : 'text-[color:var(--muted)]'}`}
        onClick={() => setMode('list')}
        aria-pressed={mode === 'list'}
      >
        List
      </button>
      <button
        className={`px-3 py-1 text-sm border-l border-[color:var(--muted)]/30 ${mode === 'calendar' ? 'bg-[var(--primary)]/10 text-[color:var(--fg)]' : 'text-[color:var(--muted)]'}`}
        onClick={() => setMode('calendar')}
        aria-pressed={mode === 'calendar'}
      >
        Calendar
      </button>
    </div>
  )
}
