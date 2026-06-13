'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const floatingTiles = [
  { src: '/images/v4/tiles/Mpt2m.png', bottom: '20%', left: '2%', size: 44, delay: 0, rotation: 18 },
  { src: '/images/v4/tiles/Mpt3z.png', top: '15%', right: '3%', size: 40, delay: 1.2, rotation: -12 },
  { src: '/images/v4/tiles/Mpu3z.png', bottom: '10%', right: '8%', size: 36, delay: 0.6, rotation: 8 },
]

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Download', href: '#cta' },
    { label: 'FAQ', href: '#faq' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms-of-use' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ],
  Connect: [
    { label: 'Instagram', href: '#' },
    { label: 'Twitter / X', href: '#' },
    { label: 'Discord', href: '#' },
    { label: 'Support', href: 'mailto:support@poquito.app' },
  ],
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#0C2318' }}
    >
      {/* Floating tile decorations */}
      {floatingTiles.map((tile, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -8, 0], rotate: [tile.rotation, tile.rotation + 2, tile.rotation] }}
          transition={{
            duration: 5 + i * 0.7,
            delay: tile.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute pointer-events-none"
          style={{
            top: (tile as { top?: string }).top,
            bottom: (tile as { bottom?: string }).bottom,
            left: (tile as { left?: string }).left,
            right: (tile as { right?: string }).right,
            opacity: 0.07,
          }}
        >
          <Image
            src={tile.src}
            alt=""
            width={tile.size}
            height={Math.round(tile.size * 1.4)}
            className="object-contain"
          />
        </motion.div>
      ))}

      {/* Top border */}
      <div
        className="h-px w-full"
        style={{ background: 'rgba(249, 242, 228, 0.07)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/v4" className="flex items-center gap-3 mb-5 w-fit">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                <Image
                  src="/images/v4/logo.png"
                  alt="Poquito"
                  fill
                  className="object-contain"
                />
              </div>
              <span
                className="text-2xl font-bold tracking-wider"
                style={{ fontFamily: 'Hero, Georgia, serif', color: '#F9F2E4' }}
              >
                Poquito
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{
                fontFamily: 'Hero, Georgia, serif',
                color: 'rgba(249, 242, 228, 0.4)',
              }}
            >
              Traditional Mahjong, reimagined for the modern world.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p
                className="text-xs tracking-[0.25em] font-bold mb-5"
                style={{ color: 'rgba(249, 242, 228, 0.35)', fontFamily: 'Hero, Georgia, serif' }}
              >
                {category.toUpperCase()}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'rgba(249, 242, 228, 0.5)', fontFamily: 'Hero, Georgia, serif' }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#F9F2E4' }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(249, 242, 228, 0.5)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(249, 242, 228, 0.07)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'rgba(249, 242, 228, 0.25)', fontFamily: 'Hero, Georgia, serif' }}
          >
            © 2026 Pocket Dragon/Poquito. All Rights Reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: 'rgba(249, 242, 228, 0.15)', fontFamily: 'Hero, Georgia, serif' }}
          >
            Made with care for every tile.
          </p>
        </div>
      </div>
    </footer>
  )
}
