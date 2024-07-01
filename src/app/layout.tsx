import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Jannis.Karanikis.Dev',
  description:
    'Jannis Karanikis, Software Engineer, NextJS, React, TypeScript, Tech Blog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={
          'antialiased' + ' ' + fontHeading.variable + ' ' + fontBody.variable
        }
      >
        {children}
      </body>
    </html>
  )
}
