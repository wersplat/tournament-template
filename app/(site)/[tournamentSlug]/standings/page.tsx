import { getStandings } from '@/lib/api/queries'
import { StandingsTable } from '@/components/composition/StandingsTable'
import { getTournamentResults } from '@/lib/db/queries'
import type { Standing } from '@/lib/api/schemas'

export const revalidate = 120

export default async function StandingsPage({ params }: { params: Promise<{ tournamentSlug: string }> }) {
  const { tournamentSlug } = await params

  // Map slug to our known tournament_id when it matches "King of the Reed"
  const normalized = decodeURIComponent(tournamentSlug).toLowerCase().replace(/\s+/g, '-')
  let data: Standing[]
  if (normalized === 'king-of-the-reed') {
    const tournamentId = '0880ac2b-6d8d-4849-a22e-c1c32132e6c3'
    const rows = await getTournamentResults(tournamentId)
    // Map Supabase rows to Standing shape expected by UI
    data = rows.map((r) => ({
      teamSlug: r.team_name || r.team_id || 'unknown',
      wins: r.wins ?? 0,
      losses: r.losses ?? 0,
      winPct: r.win_percentage ?? undefined,
      pointDiff: r.point_differential ?? undefined,
      rating: r.elo_rating ?? undefined,
    }))
  } else {
    // Fallback to existing API behavior for other slugs
    data = await getStandings(tournamentSlug)
  }
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Standings</h1>
      <StandingsTable data={data} />
    </div>
  )
}
