import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Poquito Mahjong — Precision. Play. Prestige.',
  description: 'The most precise, most refined Traditional Mahjong experience on mobile.',
}

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
