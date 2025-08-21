import { getNews } from '@/lib/api/queries'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function NewsArticlePage({ params }: { params: Promise<{ tournamentSlug: string; slug: string }> }) {
  const { slug } = await params
  const article = await getNews(slug)
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{article.title}</h1>
      {article.bodyMd ? <MDXRemote source={article.bodyMd} /> : <p>Coming soon…</p>}
    </article>
  )
}
