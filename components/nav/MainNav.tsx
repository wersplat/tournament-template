import Link from 'next/link'
import Image from 'next/image'
import { routes } from '@/lib/config'

export function MainNav({ tournamentSlug }: { tournamentSlug: string }) {
  const nav = [
    { href: routes.schedule(tournamentSlug), label: 'Schedule' },
    { href: routes.standings(tournamentSlug), label: 'Standings' },
    { href: routes.bracket(tournamentSlug), label: 'Bracket' },
    { href: routes.teams(tournamentSlug), label: 'Teams' },
    { href: routes.players(tournamentSlug), label: 'Players' },
    { href: routes.news(tournamentSlug), label: 'News' },
    { href: routes.rules(tournamentSlug), label: 'Rules' },
  ]
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[color:var(--bg)]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link href={routes.home(tournamentSlug) as any} className="flex items-center gap-2">
          <Image alt="Logo" src="/themes/default/logo.svg" width={28} height={28} className="rounded" />
          <span className="font-semibold">Unified Pro-Am</span>
        </Link>
        <nav className="ml-auto flex gap-4 text-sm">
          {nav.map((n) => (
            <Link key={n.label} href={n.href as any} className="hover:text-[color:var(--primary)]">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
