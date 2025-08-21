import { cookies } from 'next/headers'

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL

export type ApiError = {
  status: number
  message: string
}

type NextFetchInit = RequestInit & { next?: { revalidate?: number } }

export async function apiFetch<T>(path: string, opts: NextFetchInit = {}): Promise<T> {
  const base = API_BASE
  // If API base is absent, route to internal dev endpoint which returns mock payloads
  const url = base
    ? new URL(path.replace(/^\//, ''), base).toString()
    : `/api/dev?path=${encodeURIComponent(path)}`

  const cookieStore = typeof cookies === 'function' ? cookies() : undefined
  const authToken = cookieStore?.get('auth_token')?.value

  const headers = new Headers(opts.headers || {})
  headers.set('Accept', 'application/json')
  if (!(opts.body instanceof FormData)) headers.set('Content-Type', 'application/json')
  if (authToken) headers.set('Authorization', `Bearer ${authToken}`)

  const res = await fetch(url, {
    ...opts,
    headers,
    // Ensure SSR-friendly cache by default; callers can override
    cache: opts.cache ?? 'no-store',
    next: { revalidate: opts.next?.revalidate ?? 0 },
  } as any)

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw { status: res.status, message: text || res.statusText } satisfies ApiError
  }

  // handle empty responses
  if (res.status === 204) return undefined as unknown as T
  return (await res.json()) as T
}

export const Endpoints = {
  tournament: (slug: string) => `/tournaments/${slug}`,
  schedule: (slug: string) => `/tournaments/${slug}/schedule`,
  standings: (slug: string) => `/tournaments/${slug}/standings`,
  teams: (slug: string) => `/tournaments/${slug}/teams`,
  team: (teamSlug: string) => `/teams/${teamSlug}`,
  players: (slug: string) => `/tournaments/${slug}/players`,
  player: (playerSlug: string) => `/players/${playerSlug}`,
  match: (id: string) => `/matches/${id}`,
  newsList: (slug: string) => `/tournaments/${slug}/news`,
  news: (slug: string) => `/news/${slug}`,
  theme: (slug: string) => `/themes/${slug}`,
} as const
