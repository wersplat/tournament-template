import { getPlayer } from '@/lib/api/queries'
import Image from 'next/image'

export default async function PlayerDetailPage({ params }: { params: { tournamentSlug: string; playerSlug: string }}) {
  const p = await getPlayer(params.playerSlug)
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-4">
        <Image src={p.avatar || '/themes/default/logo.svg'} alt={p.name} width={64} height={64} className="rounded" />
        <div>
          <h1 className="text-2xl font-bold">{p.name}</h1>
          <div className="text-sm text-muted">{p.role ?? 'Player'}</div>
        </div>
      </div>
      <div className="rounded-[var(--radius)] border border-white/10 p-4 text-muted">Per-game splits and recent matches coming soon…</div>
    </div>
  )
}
