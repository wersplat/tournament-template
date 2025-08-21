import Link from 'next/link'
import Image from 'next/image'
import { getPlayers } from '@/lib/api/queries'
import { routes } from '@/lib/config'

export const revalidate = 120

export default async function PlayersPage({ params }: { params: { tournamentSlug: string } }) {
  const data = await getPlayers(params.tournamentSlug)
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Players</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((p) => (
          <Link key={p.slug} href={routes.player(params.tournamentSlug, p.slug)} className="rounded-[var(--radius)] border border-white/10 p-4 hover:bg-white/5">
            <div className="flex items-center gap-3">
              <Image src={p.avatar || '/themes/default/logo.svg'} alt={p.name} width={36} height={36} className="rounded" />
              <div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-xs text-muted">{p.role ?? 'Player'}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
