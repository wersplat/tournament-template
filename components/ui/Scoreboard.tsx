type Side = { name: string; score?: number }

export function Scoreboard({ a, b, status }: { a: Side; b: Side; status?: string }) {
  return (
    <div className="rounded-lg border border-[color:var(--muted)]/20 bg-[var(--card)] p-4">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="truncate text-left text-[color:var(--fg)]">{a.name}</div>
        <div className="text-2xl font-bold">
          {(a.score ?? '-')}
          <span className="mx-1">-</span>
          {(b.score ?? '-')}
        </div>
        <div className="truncate text-right text-[color:var(--fg)]">{b.name}</div>
      </div>
      {status && <div className="text-xs text-center text-[color:var(--muted)] mt-1">{status}</div>}
    </div>
  )
}
