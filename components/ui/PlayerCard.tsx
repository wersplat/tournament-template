import Image from 'next/image'

export type Player = {
  slug: string
  name: string
  number?: string
  avatar?: string
  teamName?: string
  position?: string
}

export function PlayerCard({ player }: { player: Player }) {
  return (
    <div className="rounded-lg border border-[color:var(--muted)]/20 bg-[var(--card)] p-4">
      <div className="flex items-center gap-3">
        {player.avatar ? (
          <Image src={player.avatar} alt="" width={48} height={48} className="rounded-full" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-black/30" />
        )}
        <div>
          <div className="font-medium text-[color:var(--fg)]">{player.name}</div>
          <div className="text-xs text-[color:var(--muted)]">
            {player.position ? `${player.position} • ` : ''}
            {player.teamName ?? ''}
          </div>
        </div>
        {player.number && <div className="ml-auto text-xl font-semibold">#{player.number}</div>}
      </div>
    </div>
  )
}
