import '../styles/Globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DTF Home',
  description: 'Design The Future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <body>{children}</body>
    </html>
  )
}
