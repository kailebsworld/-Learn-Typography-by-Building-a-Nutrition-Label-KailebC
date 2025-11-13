import type { Metadata } from 'next'
import { Inter, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: '621 ARCHIVAL',
  description: '621 ARCHIVAL — design that cuts clean and lasts.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: '621 ARCHIVAL',
    description: 'Pieces from the archive. Pieces for the street.',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-foreground`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
