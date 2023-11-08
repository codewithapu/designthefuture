import '../styles/Globals.css'
import type { Metadata } from 'next'
import NavBar from '@/pages/components/NavBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <body>

        <NavBar />

        {children}

      </body>
    </html>
  )
}
