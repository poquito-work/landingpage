'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const EASE = [0.22, 0.61, 0.36, 1] as const

/* Tiles around the phone mockup */
const phoneTiles = [
  { src: '/images/tiles/Mpt1z.png',  x: -72,  y:  90, rot: -18, scale: 0.88, delay: 0,   z: 10 },
  { src: '/images/tiles/Mpt2m.png',  x:  74,  y: -44, rot:  14, scale: 0.72, delay: 0.8, z: 20 },
  { src: '/images/tiles/Mpt3z.png',  x: -90,  y: -64, rot:  -8, scale: 0.66, delay: 1.4, z: 8  },
  { src: '/images/tiles/Mpt3m.png',  x: 108,  y: 126, rot:  22, scale: 0.76, delay: 0.4, z: 20 },
  { src: '/images/tiles/Mpt4m.png',  x: -36,  y: 212, rot: -24, scale: 0.62, delay: 1.8, z: 6  },
  { src: '/images/tiles/Mpu1z.png',  x: 148,  y:  66, rot:  10, scale: 0.56, delay: 2.2, z: 6  },
  { src: '/images/tiles/Mpt7z.png',  x: -116, y:  14, rot:  -6, scale: 0.50, delay: 1.0, z: 5  },
]

/* Ambient background tiles — spread across full section, z-1, very low opacity */
const bgTiles = [
  { src: '/images/tiles/Mpt1z.png',  left: '4%',  top: '14%', w: 54, rot: -12, op: 0.17, dur: 7.5, delay: 0   },
  { src: '/images/tiles/Mpt2m.png',  left: '10%', top: '72%', w: 44, rot: 20,  op: 0.13, dur: 8.5, delay: 1.2 },
  { src: '/images/tiles/Mpt3z.png',  left: '89%', top: '9%',  w: 50, rot: -7,  op: 0.15, dur: 9.0, delay: 0.5 },
  { src: '/images/tiles/Mpt4m.png',  left: '84%', top: '78%', w: 56, rot: 24,  op: 0.16, dur: 6.5, delay: 2.0 },
  { src: '/images/tiles/Mpu1z.png',  left: '53%', top: '4%',  w: 42, rot: -16, op: 0.12, dur: 10,  delay: 0.8 },
  { src: '/images/tiles/Mpt7z.png',  left: '74%', top: '87%', w: 48, rot: 10,  op: 0.14, dur: 7.0, delay: 1.5 },
  { src: '/images/tiles/Mpt3m.png',  left: '32%', top: '91%', w: 38, rot: -22, op: 0.11, dur: 8.0, delay: 2.4 },
  { src: '/images/tiles/Mpu3z.png',  left: '1%',  top: '42%', w: 46, rot: 15,  op: 0.15, dur: 9.5, delay: 0.3 },
  { src: '/images/tiles/Mpt2z.png',  left: '96%', top: '46%', w: 40, rot: -9,  op: 0.13, dur: 7.5, delay: 1.8 },
  { src: '/images/tiles/Mpt1m.png',  left: '62%', top: '92%', w: 36, rot: 28,  op: 0.10, dur: 11,  delay: 3.0 },
]

const phoneHandTiles = [
  '/images/tiles/Mpt1m.png',
  '/images/tiles/Mpt2m.png',
  '/images/tiles/Mpt3m.png',
  '/images/tiles/Mpt1z.png',
  '/images/tiles/Mpt2z.png',
  '/images/tiles/Mpt3z.png',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: 'linear-gradient(145deg, #F9F2E4 0%, #EDE5D0 45%, #E5DABB 100%)' }}
    >
      {/* Radial warmth behind phone */}
      <div
        aria-hidden className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 70% at 72% 48%, rgba(182,90,47,0.07) 0%, transparent 65%), radial-gradient(ellipse 40% 50% at 20% 80%, rgba(20,51,34,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Ambient background tiles — lazily float behind everything (z-1) */}
      {bgTiles.map((t, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute pointer-events-none"
          style={{ left: t.left, top: t.top, zIndex: 1, opacity: t.op, rotate: t.rot }}
          animate={{ y: [0, -10, 0], rotate: [t.rot, t.rot + 2.5, t.rot] }}
          transition={{ duration: t.dur, repeat: Infinity, ease: 'easeInOut', delay: t.delay }}
        >
          <Image src={t.src} alt="" width={t.w} height={Math.round(t.w * 1.32)} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 lg:gap-8 pt-32 pb-20 lg:pt-24 lg:pb-16 items-center">

          {/* ── LEFT ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 lg:gap-10 max-w-xl relative z-10"
          >
            {/* Overline */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="h-[1px] w-10 bg-pq-rust/60" />
              <span className="text-pq-rust text-xs tracking-[0.22em] uppercase">
                Traditional Mahjong · Reimagined
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-hero font-bold text-pq-green leading-[1.02] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.8rem, 6.2vw, 5.8rem)' }}
            >
              MAHJONG ON YOUR TIME,{' '}
              <span className="text-pq-rust">ANYWHERE</span>{' '}
              YOU ARE.
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={itemVariants}
              className="text-pq-green/70 leading-relaxed font-normal"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
            >
              Practice, play, and compete your way to the top.
              Enjoy real-time Traditional Mahjong action at your fingertips.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <motion.a
                href="#pricing"
                className="group inline-flex items-center gap-3 text-pq-cream px-8 py-4 rounded-full text-sm tracking-[0.1em] uppercase shadow-lg shadow-pq-rust/20"
                style={{ background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)' }}
                whileHover={{ scale: 1.03, boxShadow: '0 16px 48px rgba(182,90,47,0.35)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Download App</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              <div className="flex items-center gap-3">
                <StoreButton icon="/images/appstore.png"   label="App Store"   />
                <StoreButton icon="/images/googleplay.png" label="Google Play" />
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-1">
              <div className="flex -space-x-2">
                {avatarGradients.map((g, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-pq-cream/80 flex items-center justify-center text-[10px] font-bold text-white" style={{ background: g }}>
                    {['A', 'M', 'R'][i]}
                  </div>
                ))}
              </div>
              <span className="text-pq-green/65 text-sm font-normal">
                Join <span className="text-pq-green font-normal">10,000+</span> players worldwide
              </span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Phone Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.5, ease: EASE }}
            style={{ y: phoneY }}
            className="relative flex items-center justify-center h-[520px] lg:h-[640px] w-full z-10"
          >
            <div
              aria-hidden className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(182,90,47,0.10) 0%, transparent 70%)' }}
            />

            {phoneTiles.filter((_, i) => i % 2 === 0).map((t, i) => (
              <FloatingTile key={i} tile={t} behind />
            ))}

            <motion.div
              style={{ zIndex: 15 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PhoneMockup tiles={phoneHandTiles} />
            </motion.div>

            {phoneTiles.filter((_, i) => i % 2 !== 0).map((t, i) => (
              <FloatingTile key={i} tile={t} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-pq-green/35 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-pq-green/35 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}

function StoreButton({ icon, label }: { icon: string; label: string }) {
  return (
    <motion.a
      href="#"
      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/12 whitespace-nowrap"
      style={{ background: 'rgba(12, 18, 15, 0.92)' }}
      whileHover={{ scale: 1.04, background: 'rgba(20, 28, 23, 0.96)' }}
      whileTap={{ scale: 0.97 }}
    >
      <Image src={icon} alt={label} width={20} height={20} className="rounded-sm flex-shrink-0" />
      <span className="text-sm text-pq-cream font-normal leading-none whitespace-nowrap">{label}</span>
    </motion.a>
  )
}

function FloatingTile({ tile, behind = false }: { tile: typeof phoneTiles[0]; behind?: boolean }) {
  return (
    <motion.div
      className="absolute"
      style={{
        left:   `calc(50% + ${tile.x}px)`,
        top:    `calc(50% + ${tile.y}px)`,
        zIndex: behind ? tile.z - 5 : tile.z,
        rotate: tile.rot,
        scale:  tile.scale,
      }}
      animate={{ y: [0, -14, 0], rotate: [tile.rot, tile.rot + 3, tile.rot] }}
      transition={{ duration: 4 + tile.delay, repeat: Infinity, ease: 'easeInOut', delay: tile.delay }}
    >
      <div
        className="rounded-md overflow-hidden"
        style={{
          boxShadow: behind
            ? '0 8px 24px rgba(20,51,34,0.15), 0 2px 6px rgba(20,51,34,0.08)'
            : '0 16px 40px rgba(20,51,34,0.20), 0 4px 10px rgba(20,51,34,0.10)',
          opacity: behind ? 0.55 : 0.95,
        }}
      >
        <Image src={tile.src} alt="Mahjong tile" width={64} height={84} className="rounded-md" />
      </div>
    </motion.div>
  )
}

function PhoneMockup({ tiles }: { tiles: string[] }) {
  return (
    <div
      className="relative rounded-[44px] overflow-hidden"
      style={{
        width: 262,
        height: 544,
        border: '7px solid #1c1c1c',
        background: '#0e0e0e',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 40px 80px rgba(20,51,34,0.22), 0 8px 20px rgba(20,51,34,0.12)',
      }}
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full z-20" style={{ width: 100, height: 28 }} />

      <div className="absolute inset-0 flex flex-col" style={{ background: 'linear-gradient(160deg, #143322 0%, #0c2318 100%)' }}>
        <div className="flex justify-between items-center px-6 pt-12 pb-2">
          <span className="text-pq-cream/50 text-[10px]">9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5 items-end h-3">
              {[2, 3, 4, 3].map((h, i) => (
                <div key={i} className="w-1 bg-pq-cream/50 rounded-sm" style={{ height: h * 3 }} />
              ))}
            </div>
            <div className="w-4 h-2 rounded-sm border border-pq-cream/50 ml-1 relative">
              <div className="absolute inset-[2px] bg-pq-cream/50 rounded-sm" style={{ width: '70%' }} />
            </div>
          </div>
        </div>

        <div className="px-5 pt-1 pb-3 flex items-center justify-between border-b border-white/5">
          <Image src="/images/logo.png" alt="Poquito" width={80} height={28} className="brightness-0 invert opacity-70" />
          <div className="flex items-center gap-1 bg-pq-rust/20 px-2.5 py-1 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-pq-rust animate-pulse" />
            <span className="text-pq-cream/80 text-[9px] tracking-[0.1em]">LIVE</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-4 gap-4">
          <p className="text-pq-cream/30 text-[9px] tracking-[0.18em] uppercase">Your Hand</p>

          <div className="flex gap-1 items-end">
            {tiles.map((src, i) => (
              <motion.div
                key={i}
                className="rounded-[4px] overflow-hidden"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
                animate={{ y: [0, i % 2 === 0 ? -3 : 0, 0] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
              >
                <Image src={src} alt="tile" width={34} height={45} />
              </motion.div>
            ))}
          </div>

          <div className="w-full mt-2 rounded-xl p-3 flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div>
              <p className="text-pq-cream/40 text-[8px] tracking-[0.15em] uppercase">Score</p>
              <p className="text-pq-cream text-base font-bold mt-0.5">2,450</p>
            </div>
            <div className="text-center">
              <p className="text-pq-cream/40 text-[8px] tracking-[0.15em] uppercase">Round</p>
              <p className="text-pq-cream text-base font-bold mt-0.5">East 3</p>
            </div>
            <div className="text-right">
              <p className="text-pq-cream/40 text-[8px] tracking-[0.15em] uppercase">Rank</p>
              <p className="text-pq-rust text-base font-bold mt-0.5">Gold I</p>
            </div>
          </div>

          <motion.button
            className="w-full text-pq-cream text-xs tracking-[0.14em] uppercase py-3 rounded-full"
            style={{ background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)' }}
            animate={{ boxShadow: ['0 0 0 0 rgba(182,90,47,0)', '0 0 0 8px rgba(182,90,47,0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Draw Tile
          </motion.button>
        </div>

        <div className="border-t border-white/5 px-6 py-3 flex justify-around">
          {['⊞', '⊗', '♔', '⊕'].map((icon, i) => (
            <div key={i} className={`text-sm ${i === 0 ? 'text-pq-rust' : 'text-pq-cream/30'}`}>{icon}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

const avatarGradients = [
  'linear-gradient(135deg, #143322, #2a6042)',
  'linear-gradient(135deg, #B65A2F, #d4793e)',
  'linear-gradient(135deg, #2a4a1a, #4a7a2a)',
]
