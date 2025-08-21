export function normalizeSlug(slug: string): string {
  return decodeURIComponent(slug).toLowerCase().replace(/\s+/g, '-')
}

/**
 * Resolve a tournament_id from a route slug.
 * - Uses explicit mappings first
 * - Falls back to NEXT_PUBLIC_TOURNAMENT_ID when present and slug is empty or 'default'
 */
export function resolveTournamentId(slug: string): string | null {
  const normalized = normalizeSlug(slug)

  // Explicit mappings
  const map: Record<string, string> = {
    'king-of-the-reed': '0880ac2b-6d8d-4849-a22e-c1c32132e6c3',
  }
  if (map[normalized]) return map[normalized]

  // Optional fallback via env
  const fallback = process.env.NEXT_PUBLIC_TOURNAMENT_ID
  if (fallback && (!normalized || normalized === 'default')) return fallback

  return null
}
