import { serializeThemeToCss } from '@/lib/theme/applyTheme'
import { getTheme, getTournament } from '@/lib/api/queries'

export async function ThemeLoader({ tournamentSlug }: { tournamentSlug: string }) {
  // Get theme name from tournament, fallback to "default"
  let themeName = 'default'
  try {
    const t = await getTournament(tournamentSlug)
    if (t.theme) themeName = t.theme
  } catch {}

  // Fetch theme (backend first, fallback handled inside getTheme)
  let theme
  try {
    theme = await getTheme(themeName)
  } catch {
    // final fallback to default bundled JSON
    const res = await fetch(`/themes/default.json`, { cache: 'force-cache' })
    theme = await res.json()
  }

  const css = serializeThemeToCss(theme)
  return <style id="theme-vars" dangerouslySetInnerHTML={{ __html: css }} />
}
