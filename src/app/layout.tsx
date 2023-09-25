import '../styles/globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home/page.module.scss'
import NavBar from '@/pages/components/NavBar'

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
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
