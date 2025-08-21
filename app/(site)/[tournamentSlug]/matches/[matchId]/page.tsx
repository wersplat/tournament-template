import { getMatch, getTournament } from '@/lib/api/queries'
import { Scoreboard } from '@/components/ui/Scoreboard'
import { StatTile } from '@/components/ui/StatTile'
import type { Metadata } from 'next'

export default async function MatchDetailPage({ params }: { params: Promise<{ tournamentSlug: string; matchId: string }> }) {
  const { matchId } = await params
  const m = await getMatch(matchId)
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Match {m.id}</h1>
      <Scoreboard
        a={{ name: m.teams[0].teamSlug, score: m.teams[0].score }}
        b={{ name: m.teams[1].teamSlug, score: m.teams[1].score }}
        status={m.stage ?? undefined}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatTile label="Stage" value={m.stage ?? '—'} />
        <StatTile label="Scheduled" value={m.scheduledAt ? new Date(m.scheduledAt).toLocaleString() : 'TBD'} />
        <StatTile label="Tournament" value={m.tournamentSlug} />
        <StatTile label="Assets" value={(m.assets?.length ?? 0).toString()} />
      </div>
      {m.vodUrl ? (
        <div>
          <a href={m.vodUrl} className="text-[color:var(--secondary)] text-sm underline" target="_blank">Watch VOD</a>
        </div>
      ) : null}
    </div>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ tournamentSlug: string; matchId: string }> }): Promise<Metadata> {
  try {
    const { tournamentSlug, matchId } = await params
    const t = await getTournament(tournamentSlug)
    const m = await getMatch(matchId)
    const title = `${t.name} • Match ${m.id}: ${m.teams[0].teamSlug} vs ${m.teams[1].teamSlug}`
    const description = `Stage: ${m.stage ?? 'Match'} • Scheduled: ${m.scheduledAt ? new Date(m.scheduledAt).toLocaleString() : 'TBD'}`
    return {
      title,
      description,
      openGraph: { title, description, images: [{ url: `/api/og?tournament=${encodeURIComponent(t.slug)}` }] },
      twitter: { card: 'summary_large_image', title, description, images: [`/api/og?tournament=${encodeURIComponent(t.slug)}`] },
    }
  } catch {
    const p = await params
    return { title: `Match ${p.matchId}` }
  }
}
