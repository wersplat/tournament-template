import { getStandings } from '@/lib/api/queries'
import { StandingsTable } from '@/components/composition/StandingsTable'

export const revalidate = 120

export default async function StandingsPage({ params }: { params: { tournamentSlug: string } }) {
  const data = await getStandings(params.tournamentSlug)
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Standings</h1>
      <StandingsTable data={data} />
    </div>
  )
}
