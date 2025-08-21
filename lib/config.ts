import type { NextRequest } from 'next/server'

export function getTournamentFromHost(req: NextRequest): string | null {
  const host = req.headers.get('host') || ''
  const base = process.env.SUBDOMAIN_BASE
  if (!base) return null
  const suffix = `.${base}`
  if (host.endsWith(suffix)) {
    const sub = host.slice(0, -suffix.length)
    if (sub && sub !== 'www') return sub
  }
  return null
}

export const routes = {
  home: (slug: string) => `/${slug}`,
  schedule: (slug: string) => `/${slug}/schedule`,
  bracket: (slug: string) => `/${slug}/bracket`,
  standings: (slug: string) => `/${slug}/standings`,
  teams: (slug: string) => `/${slug}/teams`,
  team: (slug: string, teamSlug: string) => `/${slug}/teams/${teamSlug}`,
  players: (slug: string) => `/${slug}/players`,
  player: (slug: string, playerSlug: string) => `/${slug}/players/${playerSlug}`,
  match: (slug: string, matchId: string) => `/${slug}/matches/${matchId}`,
  rules: (slug: string) => `/${slug}/rules`,
  news: (slug: string) => `/${slug}/news`,
  newsItem: (slug: string, articleSlug: string) => `/${slug}/news/${articleSlug}`,
}
