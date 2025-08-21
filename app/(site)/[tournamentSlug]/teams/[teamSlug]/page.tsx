import { getTeam } from '@/lib/api/queries'
import Image from 'next/image'

export default async function TeamDetailPage({ params }: { params: { tournamentSlug: string; teamSlug: string }}) {
  const team = await getTeam(params.teamSlug)
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-4">
        <Image src={team.logo || '/themes/default/logo.svg'} alt={team.name} width={64} height={64} className="rounded" />
        <div>
          <h1 className="text-2xl font-bold">{team.name}</h1>
          <div className="text-sm text-muted">Seed {team.seed ?? '-'} · {team.record ? `${team.record.wins}-${team.record.losses}` : '0-0'}</div>
        </div>
      </div>
      <div className="rounded-[var(--radius)] border border-white/10 p-4 text-muted">Roster, recent results, and stats coming soon…</div>
    </div>
  )
}
