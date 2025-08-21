import Link from 'next/link'
import { getNewsList } from '@/lib/api/queries'
import { routes } from '@/lib/config'

export const revalidate = 300

export default async function NewsListPage({ params }: { params: { tournamentSlug: string }}) {
  const list = await getNewsList(params.tournamentSlug)
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">News</h1>
      <div className="grid gap-3">
        {list.map((n) => (
          <Link key={n.slug} href={routes.newsItem(params.tournamentSlug, n.slug)} className="rounded-[var(--radius)] border border-white/10 p-4 hover:bg-white/5">
            <div className="text-sm text-muted">{new Date(n.publishedAt ?? Date.now()).toLocaleDateString()}</div>
            <div className="font-semibold">{n.title}</div>
            <div className="text-sm text-muted">{n.excerpt}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
