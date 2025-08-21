import { NextRequest, NextResponse } from 'next/server'
import { ThemeSchema } from '@/lib/api/schemas'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const filePath = path.join(process.cwd(), 'themes', `${slug}.json`)
    const raw = await fs.readFile(filePath, 'utf8')
    const json = JSON.parse(raw)
    const theme = ThemeSchema.parse(json)
    return NextResponse.json(theme, { headers: { 'Cache-Control': 'public, max-age=300, s-maxage=300' } })
  } catch (e) {
    return NextResponse.json({ error: 'Theme not found' }, { status: 404 })
  }
}
