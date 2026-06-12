'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const EASE = [0.22, 0.61, 0.36, 1] as const

const footerLinks = {
  Company: [
    { label: 'About Us',   href: '#about'   },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Press Kit',  href: '#'        },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use',   href: '/terms-of-use'   },
    { label: 'Refund Policy',  href: '/refund-policy'  },
    { label: 'Cookie Policy',  href: '/cookie-policy'  },
  ],
  Play: [
    { label: 'Download App', href: '#download' },
    { label: 'Pricing',      href: '#pricing'  },
    { label: 'FAQ',          href: '#faq'      },
  ],
}

const OUTER_PATH =
  'M6,1 L54,1 Q59,1 59,6 L59,74 Q59,79 54,79 L6,79 Q1,79 1,74 L1,6 Q1,1 6,1 Z'
const INNER_PATH =
  'M9,5.5 L51,5.5 Q54.5,5.5 54.5,9 L54.5,71 Q54.5,74.5 51,74.5 L9,74.5 Q5.5,74.5 5.5,71 L5.5,9 Q5.5,5.5 9,5.5 Z'

// Three tiles to cycle through
const TILE_SRCS = [
  '/images/tiles/Mpt1z.png',
  '/images/tiles/Mpt3z.png',
  '/images/tiles/Mpu1z.png',
]

// Cycle: 8s, stagger: 8/3 ≈ 2.67s between tiles
// Within each cycle:
//   0–0.25  : outer border draws
//   0.19–0.4: inner border draws (overlaps slightly)
//   0.4–0.52: both outlines fade, tile image fades in
//   0.52–0.78: hold image
//   0.78–1.0 : image fades out
const CYCLE = 8

function TileOutlineReveal({ delay, tileSrc }: { delay: number; tileSrc: string }) {
  const base = {
    duration: CYCLE,
    repeat: Infinity,
    repeatDelay: 0,
    delay,
    ease: 'easeInOut' as const,
  }

  return (
    <div style={{ position: 'relative', width: 44, height: 58 }}>
      {/* SVG outline layer */}
      <svg
        width="44" height="58" viewBox="0 0 60 80"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        aria-hidden
      >
        {/* Outer border — draws first */}
        <motion.path
          d={OUTER_PATH}
          fill="none"
          stroke="rgba(249,242,228,0.55)"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{
            pathLength: [0,    1,    1,    0,    0],
            opacity:    [0.85, 0.85, 0.4,  0,    0],
          }}
          transition={{ ...base, times: [0, 0.25, 0.42, 0.52, 1] }}
        />
        {/* Inner border — follows with a short lag */}
        <motion.path
          d={INNER_PATH}
          fill="none"
          stroke="rgba(249,242,228,0.32)"
          strokeWidth="1"
          strokeLinecap="round"
          animate={{
            pathLength: [0, 0,    1,    1,    0,    0],
            opacity:    [0, 0.7,  0.7,  0.35, 0,    0],
          }}
          transition={{ ...base, times: [0, 0.19, 0.40, 0.44, 0.52, 1] }}
        />
      </svg>

      {/* Real tile image — materializes as outlines fade */}
      <motion.div
        style={{ position: 'absolute', inset: 0, borderRadius: 3, overflow: 'hidden' }}
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ ...base, times: [0, 0.44, 0.55, 0.78, 1] }}
      >
        <Image
          src={tileSrc}
          alt="Mahjong tile"
          width={44}
          height={58}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </motion.div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/5 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0c2318 0%, #071610 100%)' }}
    >
      {/* Grain overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* ── Main footer row: brand · links · tiles ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid grid-cols-2 md:grid-cols-[1fr_auto_auto_auto_auto] gap-x-10 gap-y-8 py-10 border-b border-white/5 items-start"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <Image
              src="/images/logo.png"
              alt="Poquito Mahjong"
              width={100}
              height={34}
              className="brightness-0 invert opacity-70"
            />
            <p className="text-pq-cream/40 text-xs leading-relaxed max-w-[180px] font-normal">
              Traditional Mahjong, reimagined for the modern world.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-3">
              <h3 className="text-pq-cream/35 text-[9px] tracking-[0.22em] uppercase font-normal">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-pq-cream/50 text-xs hover:text-pq-cream/85 transition-colors duration-200 font-normal"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Animated tiles column */}
          <div className="col-span-2 md:col-span-1 flex items-center gap-3 md:pt-0.5">
            {TILE_SRCS.map((src, i) => (
              <TileOutlineReveal
                key={src}
                tileSrc={src}
                delay={(CYCLE / 3) * i}
              />
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center py-5"
        >
          <p className="text-pq-cream/22 text-xs font-normal tracking-wide">
            © 2026 Poquito Mahjong. All Rights Reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  )
}
