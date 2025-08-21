import { getTournament } from '@/lib/api/queries'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function RulesPage({ params }: { params: Promise<{ tournamentSlug: string }> }) {
  // In a real app, fetch rules markdown from API; fallback to simple message
  const { tournamentSlug } = await params
  await getTournament(tournamentSlug)
  const md = `# Rules\n\n- Rule 1: Be respectful.\n- Rule 2: Follow tournament staff instructions.`
  return (
    <article className="prose prose-invert max-w-none">
      <MDXRemote source={md} />
    </article>
  )
}
