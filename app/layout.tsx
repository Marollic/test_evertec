import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Evertec',
  description: 'Test',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt" suppressHydrationWarning>
        <body className={font.className}>
          {children}
        </body>
      </html>
  )
}
