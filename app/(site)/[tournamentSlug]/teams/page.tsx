import Link from 'next/link'
import Image from 'next/image'
import { getTeams } from '@/lib/api/queries'
import { routes } from '@/lib/config'

export const revalidate = 120

export default async function TeamsPage({ params }: { params: { tournamentSlug: string } }) {
  const data = await getTeams(params.tournamentSlug)
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Teams</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((t) => (
          <Link key={t.slug} href={routes.team(params.tournamentSlug, t.slug)} className="rounded-[var(--radius)] border border-white/10 p-4 hover:bg-white/5">
            <div className="flex items-center gap-3">
              <Image src={t.logo || '/themes/default/logo.svg'} alt={t.name} width={40} height={40} className="rounded" />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted">Seed {t.seed ?? '-'} · {t.record ? `${t.record.wins}-${t.record.losses}` : '0-0'}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
