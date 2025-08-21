import { getStandings } from '@/lib/api/queries'
import { StandingsTable } from '@/components/composition/StandingsTable'

export const revalidate = 120

export default async function StandingsPage({ params }: { params: Promise<{ tournamentSlug: string }> }) {
  const { tournamentSlug } = await params
  const data = await getStandings(tournamentSlug)
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Standings</h1>
      <StandingsTable data={data} />
    </div>
  )
}
