import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  robots: { index: true, follow: true },
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(160deg, #F9F2E4 0%, #EDE5D0 100%)' }}>
      {/* Minimal header */}
      <header className="border-b border-pq-green/8" style={{ background: 'rgba(249,242,228,0.85)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/images/logo.png" alt="Poquito Mahjong" width={110} height={38} className="opacity-90" />
          </Link>
          <Link
            href="/"
            className="text-xs text-pq-green/50 tracking-[0.12em] uppercase hover:text-pq-green transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-pq-green/8 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-pq-green/35 text-xs">© 2026 Poquito Mahjong. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy Policy',   href: '/privacy-policy' },
              { label: 'Terms of Use',     href: '/terms-of-use' },
              { label: 'Refund Policy',    href: '/refund-policy' },
              { label: 'Cookie Policy',    href: '/cookie-policy' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="text-pq-green/40 text-xs hover:text-pq-green/70 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
