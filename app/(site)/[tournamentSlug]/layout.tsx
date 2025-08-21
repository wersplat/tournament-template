import { MainNav } from '@/components/nav/MainNav'
import { Footer } from '@/components/nav/Footer'
import { QueryProvider } from '@/components/providers/QueryProvider'
import { ThemeLoader } from '@/components/theme/ThemeLoader'

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
      {/* @ts-expect-error Async Server Component */}
      <ThemeLoader tournamentSlug={slug} />
      <MainNav tournamentSlug={slug} />
      <QueryProvider>
        <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
      </QueryProvider>
      <Footer />
    </>
  )
}
