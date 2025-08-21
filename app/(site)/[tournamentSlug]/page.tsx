import { routes } from '@/lib/config'
import { getNewsList, getSchedule, getTournament } from '@/lib/api/queries'
import Link from 'next/link'
import Image from 'next/image'

export default async function HomePage({ params }: { params: Promise<{ tournamentSlug: string }> }) {
  const { tournamentSlug: slug } = await params
  const [tournament, schedule, news] = await Promise.all([
    getTournament(slug),
    getSchedule(slug),
    getNewsList(slug),
  ])

  return (
    <div className="grid gap-8">
      <section className="flex flex-col gap-6 items-start md:flex-row md:items-center">
        <Image src={tournament.sponsors?.[0]?.logo || '/themes/default/logo.svg'} alt="Logo" width={96} height={96} className="rounded" />
        <div>
          <h1 className="text-3xl font-bold">{tournament.name}</h1>
          <p className="text-muted mt-1 max-w-2xl">{tournament.description ?? 'Welcome to the Unified Pro-Am Tournament.'}</p>
          <div className="mt-4 flex gap-3">
            <Link href="#" className="inline-flex items-center justify-center rounded-[var(--radius)] font-medium transition-colors bg-[color:var(--primary)] text-black hover:brightness-110 px-4 py-2 text-sm">Register</Link>
            <Link href={routes.schedule(slug) as any} className="inline-flex items-center justify-center rounded-[var(--radius)] font-medium transition-colors bg-transparent border border-white/10 hover:bg-white/5 px-4 py-2 text-sm">View Schedule</Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Featured Match</h2>
        {schedule[0] ? (
          <div className="rounded-[var(--radius)] border border-white/10 p-4">
            <div className="text-sm text-muted">{schedule[0].stage ?? 'Upcoming'}</div>
            <div className="text-lg font-semibold mt-1">{schedule[0].teams[0].teamSlug} vs {schedule[0].teams[1].teamSlug}</div>
          </div>
        ) : (
          <div className="skeleton h-24 rounded-[var(--radius)]" />
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Latest News</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {news.slice(0, 3).map((n) => (
            <Link key={n.slug} href={routes.newsItem(slug, n.slug) as any} className="rounded-[var(--radius)] border border-white/10 p-4 hover:bg-white/5">
              <div className="text-sm text-muted">{new Date(n.publishedAt ?? Date.now()).toLocaleDateString()}</div>
              <div className="font-semibold">{n.title}</div>
              <div className="text-sm text-muted">{n.excerpt}</div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Sponsors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 items-center">
          {(tournament.sponsors ?? []).map((s, i) => (
            <a key={i} href={s.url ?? '#'} className="grayscale hover:grayscale-0 transition">
              <Image src={s.logo || '/themes/default/logo.svg'} alt={s.name} width={140} height={60} className="object-contain w-full h-12" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
