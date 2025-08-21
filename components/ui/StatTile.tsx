type Props = {
  label: string
  value: string | number
  sublabel?: string
}

export function StatTile({ label, value, sublabel }: Props) {
  return (
    <div className="rounded-lg border border-[color:var(--muted)]/20 bg-[var(--card)] p-4">
      <div className="text-xs uppercase tracking-wide text-[color:var(--muted)]">{label}</div>
      <div className="text-2xl font-semibold text-[color:var(--fg)]">{value}</div>
      {sublabel && <div className="text-xs text-[color:var(--muted)]">{sublabel}</div>}
    </div>
  )
}
