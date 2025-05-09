import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from './_components/Layout'

import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Sumedh Udar',
    default:
      'Sumedh Udar - Software developer, ui/ux enthusiast, and amateur cardist',
  },
  description:
    'I\'m Sumedh, a software developer based in Toronto, ON. I\'m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
