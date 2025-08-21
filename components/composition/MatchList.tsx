import { Match } from '@/lib/api/schemas'
import { Card } from '@/components/ui/Card'

export function MatchList({ data }: { data: Match[] }) {
  return (
    <div className="grid gap-3">
      {data.map((m) => (
        <Card key={m.id} className="p-4">
          <div className="text-sm text-muted">{m.stage ?? 'Match'}</div>
          <div className="font-semibold">{m.teams[0].teamSlug} vs {m.teams[1].teamSlug}</div>
          <div className="text-xs text-muted">{m.scheduledAt ? new Date(m.scheduledAt).toLocaleString() : 'TBD'}</div>
        </Card>
      ))}
    </div>
  )
}
