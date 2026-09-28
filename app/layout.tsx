import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RamenBet — официальный сайт и рабочее зеркало',
  description: 'Информационный гид по RamenBet: официальный сайт, рабочее зеркало, безопасность и ответственный подход к игре.',
  generator: 'v0.app',
  icons: {
    icon: '/ramenbet-favicon.png',
    apple: '/ramenbet-favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#101315',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="613a9810a0112465" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>RamenBet — официальный сайт и рабочее зеркало</title>
        <meta
          name="description"
          content="Информационный гид по RamenBet: официальный сайт, рабочее зеркало, безопасность и ответственный подход к игре."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/ramenbet-favicon.png" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
