import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Poquito Mahjong — Traditional Mahjong, Reimagined',
  description:
    'Practice, play, and compete your way to the top. Enjoy real-time Traditional Mahjong action at your fingertips.',
  keywords: ['mahjong', 'traditional mahjong', 'mobile game', 'competitive mahjong', 'poquito'],
  openGraph: {
    title: 'Poquito Mahjong',
    description: 'Traditional Mahjong reimagined as a modern premium experience.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poquito Mahjong',
    description: 'Traditional Mahjong reimagined as a modern premium experience.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-hero antialiased">{children}</body>
    </html>
  )
}
