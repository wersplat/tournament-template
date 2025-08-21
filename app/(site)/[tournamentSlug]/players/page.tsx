import { getPlayers, getTournament } from '@/lib/api/queries'
import { PlayerCard } from '@/components/ui/PlayerCard'
import { StatTile } from '@/components/ui/StatTile'
import type { Metadata } from 'next'

export const revalidate = 120

export default async function PlayersPage({ params }: { params: { tournamentSlug: string } }) {
  const data = await getPlayers(params.tournamentSlug)
  const totalPlayers = data.length
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Players</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatTile label="Total Players" value={totalPlayers} />
        <StatTile label="With Avatars" value={data.filter((p) => !!p.avatar).length} />
        <StatTile label="With Roles" value={data.filter((p) => !!p.role).length} />
        <StatTile label="Linked to Teams" value={data.filter((p) => !!p.teamSlug).length} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((p) => (
          <PlayerCard key={p.slug} player={{ slug: p.slug, name: p.name, number: undefined, avatar: p.avatar, teamName: p.teamSlug, position: p.role }} />
        ))}
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: { params: { tournamentSlug: string } }): Promise<Metadata> {
  try {
    const t = await getTournament(params.tournamentSlug)
    return {
      title: `${t.name} • Players`,
      description: `Browse players at ${t.name}. Profiles, roles, and teams.`,
    }
  } catch {
    return { title: 'Players' }
  }
}
