import { apiFetch, Endpoints } from './client'
import { z } from 'zod'
import { TournamentSchema, TeamSchema, PlayerSchema, MatchSchema, StandingSchema, NewsSchema, ThemeSchema } from './schemas'

export async function getTournament(slug: string) {
  const data = await apiFetch(Endpoints.tournament(slug))
  return TournamentSchema.parse(data)
}

export async function getSchedule(slug: string) {
  const data = await apiFetch(Endpoints.schedule(slug))
  return z.array(MatchSchema).parse(data)
}

export async function getStandings(slug: string) {
  const data = await apiFetch(Endpoints.standings(slug))
  return z.array(StandingSchema).parse(data)
}

export async function getTeams(slug: string) {
  const data = await apiFetch(Endpoints.teams(slug))
  return z.array(TeamSchema).parse(data)
}

export async function getTeam(teamSlug: string) {
  const data = await apiFetch(Endpoints.team(teamSlug))
  return TeamSchema.parse(data)
}

export async function getPlayers(slug: string) {
  const data = await apiFetch(Endpoints.players(slug))
  return z.array(PlayerSchema).parse(data)
}

export async function getPlayer(playerSlug: string) {
  const data = await apiFetch(Endpoints.player(playerSlug))
  return PlayerSchema.parse(data)
}

export async function getMatch(id: string) {
  const data = await apiFetch(Endpoints.match(id))
  return MatchSchema.parse(data)
}

export async function getNewsList(slug: string) {
  const data = await apiFetch(Endpoints.newsList(slug))
  return z.array(NewsSchema).parse(data)
}

export async function getNews(slug: string) {
  const data = await apiFetch(Endpoints.news(slug))
  return NewsSchema.parse(data)
}

export async function getTheme(name: string) {
  // Attempt backend first
  try {
    const data = await apiFetch(Endpoints.theme(name), { next: { revalidate: 300 } as any })
    return ThemeSchema.parse(data)
  } catch {
    // fallback to local JSON
    const res = await fetch(`/themes/${name}.json`, { cache: 'force-cache' })
    if (!res.ok) throw new Error('Theme not found')
    const data = await res.json()
    return ThemeSchema.parse(data)
  }
}
