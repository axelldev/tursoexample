import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const fontSans = Inter({
  subsets: ['latin'],
  weight: ['400', '200', '500', '700'],
  variable: '--font-sans',
})

export const Meta: Metadata = {
  title: 'Turso / Nextjs example',
  description: 'this is an example of turso with nextjs',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={cn(fontSans.variable)}>{children}</body>
    </html>
  )
}
