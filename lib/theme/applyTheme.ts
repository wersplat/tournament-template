export type ThemeSpec = {
  name: string
  logo?: string
  colors: Record<string, string>
  typography?: { fontFamily?: string }
  shapes?: { radius?: string }
}

export function serializeThemeToCss(theme: ThemeSpec): string {
  const lines: string[] = []
  Object.entries(theme.colors || {}).forEach(([k, v]) => lines.push(`${k}: ${v};`))
  if (theme.typography?.fontFamily) {
    lines.push(`--font-family: ${theme.typography.fontFamily};`)
  }
  if (theme.shapes?.radius) {
    lines.push(`--radius: ${theme.shapes.radius};`)
  }
  return `:root{${lines.join('')}}`;
}

export function applyTheme(theme: ThemeSpec) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  // set data-theme for dark-mode selectors if needed
  root.setAttribute('data-theme', theme.name.toLowerCase().replace(/\s+/g, '-'))
  // set CSS vars
  Object.entries(theme.colors || {}).forEach(([k, v]) => root.style.setProperty(k, v))
  if (theme.typography?.fontFamily) root.style.setProperty('--font-family', theme.typography.fontFamily)
  if (theme.shapes?.radius) root.style.setProperty('--radius', theme.shapes.radius)
}
