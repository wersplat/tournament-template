import { Standing } from '@/lib/api/schemas'
import { Card } from '@/components/ui/Card'

export function StandingsTable({ data }: { data: Standing[] }) {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="sticky top-0 bg-[color:var(--card)]">
            <tr className="text-left">
              <th className="px-4 py-2">Team</th>
              <th className="px-4 py-2">W</th>
              <th className="px-4 py-2">L</th>
              <th className="px-4 py-2">Win%</th>
              <th className="px-4 py-2">Diff</th>
              <th className="px-4 py-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {data.map((s) => (
              <tr key={s.teamSlug} className="hover:bg-white/5">
                <td className="px-4 py-2">{s.teamSlug}</td>
                <td className="px-4 py-2">{s.wins}</td>
                <td className="px-4 py-2">{s.losses}</td>
                <td className="px-4 py-2">{s.winPct?.toFixed(3) ?? ((s.wins / Math.max(1, s.wins + s.losses))).toFixed(3)}</td>
                <td className="px-4 py-2">{s.pointDiff ?? '-'}
                </td>
                <td className="px-4 py-2">{s.rating ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
