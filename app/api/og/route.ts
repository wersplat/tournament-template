import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const tournament = searchParams.get('tournament') || 'Unified Pro-Am'
  const primary = '#9BF00B'
  const bg = '#0b0b0c'

  return new ImageResponse(
    (
      <div style={{ display: 'flex', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: bg, color: 'white' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <div style={{ fontSize: 64, fontWeight: 800 }}> {tournament} </div>
          <div style={{ width: 240, height: 8, backgroundColor: primary }} />
          <div style={{ fontSize: 28, opacity: 0.8 }}>Unified Pro-Am Template</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
