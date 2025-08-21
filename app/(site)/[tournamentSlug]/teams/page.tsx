import { getTeams, getTournament } from '@/lib/api/queries'
import { getTournamentTeamRosters } from '@/lib/db/queries'
import { TeamCard } from '@/components/ui/TeamCard'
import { StatTile } from '@/components/ui/StatTile'
import type { Metadata } from 'next'

export const revalidate = 120

export default async function TeamsPage({ params }: { params: Promise<{ tournamentSlug: string }> }) {
  const { tournamentSlug } = await params

  // When slug matches "King of the Reed", source teams from Supabase view
  const normalized = decodeURIComponent(tournamentSlug).toLowerCase().replace(/\s+/g, '-')
  let data = await (async () => {
    if (normalized === 'king-of-the-reed') {
      const tournamentId = '0880ac2b-6d8d-4849-a22e-c1c32132e6c3'
      const rows = await getTournamentTeamRosters(tournamentId)
      // Distinct teams by team_id
      const map = new Map<string, { slug: string; name: string; logo?: string; record?: { wins: number; losses: number } }>()
      for (const r of rows) {
        const id = String(r.team_id ?? '')
        if (!id) continue
        if (!map.has(id)) {
          map.set(id, {
            slug: id, // use team_id as slug for now
            name: r.team_name ?? id,
            logo: r.team_logo ?? undefined,
          })
        }
      }
      return Array.from(map.values())
    }
    // Fallback to existing API for other slugs
    return getTeams(tournamentSlug)
  })()
  const totalTeams = data.length
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Teams</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatTile label="Total Teams" value={totalTeams} />
        {/* Placeholder stats; wire real values when backend provides */}
        <StatTile label="Avg. Seed" value={Math.ceil((data.reduce((a, t) => a + (t.seed ?? 0), 0) || 0) / (totalTeams || 1))} />
        <StatTile label="With Logo" value={data.filter((t) => !!t.logo).length} />
        <StatTile label="With Record" value={data.filter((t) => !!t.record).length} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((t) => (
          <TeamCard
            key={t.slug}
            tournamentSlug={tournamentSlug}
            team={{
              slug: t.slug,
              name: t.name,
              logo: t.logo || '/themes/default/logo.svg',
              record: t.record ? `${t.record.wins}-${t.record.losses}` : '0-0',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ tournamentSlug: string }> }): Promise<Metadata> {
  try {
    const { tournamentSlug } = await params
    const t = await getTournament(tournamentSlug)
    return {
      title: `${t.name} • Teams`,
      description: `Browse teams at ${t.name}. Rosters, seeds, and records.`,
    }
  } catch {
    return { title: 'Teams' }
  }
}
