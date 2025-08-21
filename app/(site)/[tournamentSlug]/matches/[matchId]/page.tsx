import { getMatch } from '@/lib/api/queries'

export default async function MatchDetailPage({ params }: { params: { tournamentSlug: string; matchId: string }}) {
  const m = await getMatch(params.matchId)
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Match {m.id}</h1>
      <div className="rounded-[var(--radius)] border border-white/10 p-4">
        <div className="text-sm text-muted">{m.stage ?? 'Match'}</div>
        <div className="font-semibold text-lg">{m.teams[0].teamSlug} {m.teams[0].score ?? ''} vs {m.teams[1].teamSlug} {m.teams[1].score ?? ''}</div>
        {m.vodUrl ? (
          <a href={m.vodUrl} className="text-[color:var(--secondary)] text-sm" target="_blank">Watch VOD</a>
        ) : null}
      </div>
    </div>
  )
}
