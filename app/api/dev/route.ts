import { NextRequest, NextResponse } from 'next/server'

// Simple mock router for local development when NEXT_PUBLIC_API_BASE_URL is unset.
// Provides minimal sample payloads for each schema based on the "path" query.
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const path = searchParams.get('path') || ''

  // helpers
  const ok = (data: unknown) => NextResponse.json(data)
  const notFound = () => new NextResponse('Not found', { status: 404 })

  const m = path.match(/\/tournaments\/([^\/]+)/)
  const slug = m?.[1] ?? 'sample-cup'

  if (path === `/tournaments/${slug}`) {
    return ok({
      slug,
      name: 'Unified Pro-Am – Sample Cup',
      description: 'A sample tournament powered by the Unified Pro-Am Template.',
      theme: 'upa-summer',
      sponsors: [
        { name: 'Acme Co', logo: '/themes/default/logo.svg', url: '#' },
        { name: 'Globex', logo: '/themes/default/logo.svg', url: '#' }
      ],
    })
  }

  if (path === `/tournaments/${slug}/schedule`) {
    return ok([
      { id: 'm1', tournamentSlug: slug, stage: 'Group A', scheduledAt: new Date().toISOString(), teams: [ { teamSlug: 'lions' }, { teamSlug: 'eagles' } ] },
      { id: 'm2', tournamentSlug: slug, stage: 'Group A', scheduledAt: new Date(Date.now()+3600e3).toISOString(), teams: [ { teamSlug: 'bears' }, { teamSlug: 'wolves' } ] },
    ])
  }

  if (path === `/tournaments/${slug}/standings`) {
    return ok([
      { teamSlug: 'lions', wins: 3, losses: 1, winPct: 0.75, pointDiff: 24, rating: 1520 },
      { teamSlug: 'eagles', wins: 2, losses: 2, winPct: 0.5, pointDiff: 3, rating: 1490 },
    ])
  }

  if (path === `/tournaments/${slug}/teams`) {
    return ok([
      { slug: 'lions', name: 'Lions', logo: '/themes/default/logo.svg', seed: 1, record: { wins: 3, losses: 1 } },
      { slug: 'eagles', name: 'Eagles', logo: '/themes/default/logo.svg', seed: 2, record: { wins: 2, losses: 2 } },
    ])
  }

  const teamMatch = path.match(/^\/teams\/([^/]+)$/)
  if (teamMatch) {
    const teamSlug = teamMatch[1]
    return ok({ slug: teamSlug, name: teamSlug.toUpperCase(), logo: '/themes/default/logo.svg', seed: 1, record: { wins: 3, losses: 1 } })
  }

  if (path === `/tournaments/${slug}/players`) {
    return ok([
      { slug: 'alice', name: 'Alice', handle: 'alice', role: 'DPS', teamSlug: 'lions' },
      { slug: 'bob', name: 'Bob', handle: 'bob', role: 'Support', teamSlug: 'eagles' },
    ])
  }

  const playerMatch = path.match(/^\/players\/([^/]+)$/)
  if (playerMatch) {
    const playerSlug = playerMatch[1]
    return ok({ slug: playerSlug, name: playerSlug.toUpperCase(), role: 'Flex', teamSlug: 'lions' })
  }

  const matchMatch = path.match(/^\/matches\/([^/]+)$/)
  if (matchMatch) {
    const id = matchMatch[1]
    return ok({ id, tournamentSlug: slug, stage: 'Final', teams: [ { teamSlug: 'lions', score: 3 }, { teamSlug: 'eagles', score: 2 } ], vodUrl: '#', assets: [] })
  }

  if (path === `/tournaments/${slug}/news`) {
    return ok([
      { slug: 'welcome', title: 'Welcome to the Sample Cup', excerpt: 'Kickoff news', publishedAt: new Date().toISOString() },
      { slug: 'day-1-recap', title: 'Day 1 Recap', excerpt: 'Highlights and results', publishedAt: new Date().toISOString() },
    ])
  }

  const newsMatch = path.match(/^\/news\/([^/]+)$/)
  if (newsMatch) {
    const nslug = newsMatch[1]
    return ok({ slug: nslug, title: 'Sample Article', bodyMd: '# Sample Article\n\nThis is a sample article body.' })
  }

  if (path.startsWith('/themes/')) {
    const name = path.split('/').pop() as string
    // Let the theme API route handle reading local file; here just proxy
    return NextResponse.redirect(new URL(`/api/themes/${name}`, req.url))
  }

  return notFound()
}
