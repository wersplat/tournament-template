import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unified Pro-Am Template',
  description: 'Reskinnable tournament website template',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
