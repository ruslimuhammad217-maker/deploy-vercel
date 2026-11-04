import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muhammad Rusli — Graphic Designer',
  description:
    'Portfolio of Muhammad Rusli, a Graphic Designer based in Indonesia specializing in visual identity, UI/UX, social media design, and digital content creation.',
  keywords: [
    'Graphic Designer',
    'Portfolio',
    'Visual Identity',
    'UI/UX Design',
    'Social Media Design',
    'Pekanbaru',
    'Indonesia',
    'Brand Design',
    'Digital Content',
  ],
  authors: [{ name: 'Muhammad Rusli' }],
  creator: 'Muhammad Rusli',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rusli.design',
    title: 'Muhammad Rusli — Graphic Designer',
    description:
      'Portfolio of Muhammad Rusli, a Graphic Designer based in Indonesia specializing in visual identity, UI/UX, social media design, and digital content creation.',
    siteName: 'Muhammad Rusli Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Rusli — Graphic Designer',
    description:
      'Portfolio of Muhammad Rusli, a Graphic Designer based in Indonesia.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F5F0EB" />
      </head>
      <body>{children}</body>
    </html>
  )
}
