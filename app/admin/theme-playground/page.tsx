"use client"
import { useEffect, useState } from 'react'
import { applyTheme, type ThemeSpec } from '@/lib/theme/applyTheme'

export default function ThemePlayground() {
  const [themes, setThemes] = useState<string[]>([])
  const [current, setCurrent] = useState<string>('default')

  useEffect(() => {
    async function load() {
      // Discover themes by trying known names; in real app, list from backend or fs
      const candidates = ['default', 'upa-summer']
      setThemes(candidates)
    }
    load()
  }, [])

  async function handleSelect(name: string) {
    setCurrent(name)
    try {
      const res = await fetch(`/api/themes/${name}`)
      if (res.ok) {
        const theme: ThemeSpec = await res.json()
        applyTheme(theme)
      }
    } catch {}
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Theme Playground (dev)</h1>
      <div className="flex gap-2 mb-6">
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => handleSelect(t)}
            className={`px-3 py-1.5 text-sm rounded-[var(--radius)] border ${current === t ? 'bg-white/10' : 'hover:bg-white/5'}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid gap-3">
        <div className="rounded-[var(--radius)] border border-white/10 p-4">
          <div className="font-semibold">Buttons</div>
          <div className="mt-2 flex gap-2">
            <button className="bg-[color:var(--primary)] text-black px-3 py-1.5 rounded-[var(--radius)]">Primary</button>
            <button className="bg-[color:var(--secondary)] text-black px-3 py-1.5 rounded-[var(--radius)]">Secondary</button>
            <button className="border border-white/10 px-3 py-1.5 rounded-[var(--radius)]">Ghost</button>
          </div>
        </div>
        <div className="rounded-[var(--radius)] border border-white/10 p-4">
          <div className="font-semibold">Cards</div>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <div className="rounded-[var(--radius)] bg-[color:var(--card)] p-4">Card A</div>
            <div className="rounded-[var(--radius)] bg-[color:var(--card)] p-4">Card B</div>
          </div>
        </div>
      </div>
    </div>
  )
}
