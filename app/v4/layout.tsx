import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Poquito Mahjong — Feel Every Tile.',
  description: 'An immersive, live Traditional Mahjong experience — play, compete, and feel every tile.',
}

export default function V4Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
