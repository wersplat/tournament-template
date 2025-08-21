import { MainNav } from '@/components/nav/MainNav'
import { Footer } from '@/components/nav/Footer'
import { QueryProvider } from '@/components/providers/QueryProvider'
import { ThemeLoader } from '@/components/theme/ThemeLoader'
import { Breadcrumbs } from '@/components/nav/Breadcrumbs'
import { AnnouncementRail } from '@/components/a11y/AnnouncementRail'
import type { Metadata } from 'next'
import { getTournament } from '@/lib/api/queries'

export default function TournamentLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { tournamentSlug: string }
}) {
  const slug = params.tournamentSlug
  return (
    <>
      {/* Inline CSS vars for theming */}
      <ThemeLoader tournamentSlug={slug} />
      <MainNav tournamentSlug={slug} />
      {/* Announcements (client) - provide a placeholder fetcher for now */}
      <AnnouncementRail fetcher={async () => []} />
      <QueryProvider>
        <main className="max-w-7xl mx-auto px-4 py-6">
          <Breadcrumbs tournamentSlug={slug} />
          {children}
        </main>
      </QueryProvider>
      <Footer />
    </>
  )
}

export async function generateMetadata({ params }: { params: { tournamentSlug: string } }): Promise<Metadata> {
  try {
    const t = await getTournament(params.tournamentSlug)
    const title = `${t.name} • Unified Pro-Am`
    const description = t.description ?? `Schedules, standings, teams, players and news for ${t.name}.`
    return {
      title,
      description,
      themeColor: '#111',
      openGraph: {
        title,
        description,
        images: [{ url: `/api/og?tournament=${encodeURIComponent(t.slug)}` }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [`/api/og?tournament=${encodeURIComponent(t.slug)}`],
      },
    }
  } catch {
    return { title: 'Unified Pro-Am', description: 'Tournament hub' }
  }
}
