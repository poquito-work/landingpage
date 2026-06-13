'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.22, 0.61, 0.36, 1] as const

const features = [
  {
    id: 'practice',
    title: 'Practice Mode\nwith Bots',
    desc: 'Sharpen your game against intelligent AI at three difficulty levels. Every session builds your instincts, reads, and timing — no pressure, no judgment.',
    tile: '/images/v1/tiles/Mpt1m.png',
    tiles: ['/images/v1/tiles/Mpt2m.png', '/images/v1/tiles/Mpt3m.png'],
    tag: 'Solo Play',
  },
  {
    id: 'private',
    title: 'Private Tables\nwith Friends',
    desc: 'Create a room, set your rules, share the link. Up to four players in a private, distraction-free game.',
    tile: '/images/v1/tiles/Mpt2z.png',
    tiles: ['/images/v1/tiles/Mpt3z.png'],
    tag: 'Social',
  },
  {
    id: 'public',
    title: 'Public\nLobby',
    desc: 'Jump into a live game instantly. Seat fills in seconds.',
    tile: '/images/v1/tiles/Mpt1z.png',
    tiles: [],
    tag: 'Live',
  },
  {
    id: 'ranked',
    title: 'Ranked Points\n& Tiers',
    desc: 'Climb from Beginner through Bronze, Silver, Gold, Platinum, and Grand Master. Every game is a step on your journey.',
    tile: '/images/v1/tiles/Mpt7z.png',
    tiles: ['/images/v1/tiles/Mpu1z.png', '/images/v1/tiles/Mpu3z.png'],
    tag: 'Competitive',
    tiers: ['Beginner', 'Bronze', 'Silver', 'Gold', 'Grand Master'],
  },
  {
    id: 'matchmaking',
    title: 'Smart Matchmaking',
    desc: 'Our system reads your rank, playstyle, and win-rate to place you in games that are always competitive — never a stomp, never a bore.',
    tile: '/images/v1/tiles/Mpu3z.png',
    tiles: ['/images/v1/tiles/Mpt1m.png', '/images/v1/tiles/Mpt2m.png'],
    tag: 'Intelligence',
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1a4230 0%, #143322 45%, #0c2318 100%)' }}
    >
      {/* Top-edge gradient blend from pricing */}
      <div
        aria-hidden className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(20,51,34,0.0) 0%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-pq-rust/60" />
            <span className="text-pq-rust text-xs tracking-[0.22em] uppercase">The Platform</span>
          </div>
          <h2
            className="font-hero font-bold text-pq-cream leading-tight tracking-tight max-w-2xl text-balance"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            THE COMPLETE MAHJONG PLAYGROUND
          </h2>
          <p className="text-pq-cream mt-4 max-w-lg leading-relaxed hover:font-bold hover:scale-[1.03] transition-all duration-200">
            Every way to play, in one place. Built for beginners. Respected by masters.
          </p>
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">

          {/* Row 1: Practice (large) + Private */}
          <FeatureCard feature={features[0]} className="md:col-span-2" delay={0}   large />
          <FeatureCard feature={features[1]} className="md:col-span-1" delay={0.1} />

          {/* Row 2: Public + Ranked (photo card) */}
          <FeatureCard feature={features[2]} className="md:col-span-1" delay={0.15} />

          {/* Ranked Points — Image 3 as backdrop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.2 }}
            whileHover={{ y: -3, transition: { duration: 0.3 } }}
            className="md:col-span-2 relative rounded-2xl overflow-hidden group border border-white/[0.055]"
            style={{ minHeight: 280 }}
          >
            {/* Photography background */}
            <Image
              src="/images/v1/hands-playing.png"
              alt="Ranked play"
              fill
              className="object-cover object-[center_35%] group-hover:scale-[1.03] transition-transform duration-700"
            />
            {/* Gradient overlay — heavier on left for text legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(105deg, rgba(12,35,24,0.93) 0%, rgba(20,51,34,0.80) 45%, rgba(20,51,34,0.35) 100%)',
              }}
            />
            {/* Content */}
            <div className="relative z-10 p-7 lg:p-9 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4 max-w-xs">
                <span className="text-pq-rust text-[10px] tracking-[0.22em] uppercase">Competitive</span>
                <h3
                  className="font-hero font-bold text-pq-cream leading-tight text-balance"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)' }}
                >
                  RANKED POINTS{'\n'}& TIERS
                </h3>
                <p className="text-pq-cream text-sm leading-relaxed hover:font-bold hover:scale-[1.03] transition-all duration-200">
                  Climb from Beginner through Bronze, Silver, Gold, Platinum, and Grand Master. Every game is a step on your journey.
                </p>
                {/* Tier pills */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {['Beginner','Bronze','Silver','Gold','Grand Master'].map((tier, i) => (
                    <span
                      key={tier}
                      className="px-3 py-1 rounded-full text-[10px] tracking-[0.12em] uppercase border"
                      style={{
                        borderColor: `rgba(182,90,47,${0.25 + i * 0.13})`,
                        color: `rgba(249,242,228,${0.5 + i * 0.1})`,
                        background: `rgba(182,90,47,${0.08 + i * 0.04})`,
                      }}
                    >
                      {tier}
                    </span>
                  ))}
                </div>
              </div>
              {/* Floating tiles — top-right */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2 items-center">
                {['/images/v1/tiles/Mpt7z.png','/images/v1/tiles/Mpu1z.png','/images/v1/tiles/Mpu3z.png'].map((src, i) => (
                  <motion.div
                    key={i}
                    className="rounded-[4px] overflow-hidden"
                    style={{ opacity: 1 - i * 0.18, boxShadow: '0 6px 20px rgba(0,0,0,0.5)' }}
                    animate={{ y: [0, -6 - i * 2, 0], rotate: [-3 + i * 3, -1 + i * 3, -3 + i * 3] }}
                    transition={{ duration: 3.5 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                  >
                    <Image src={src} alt="tile" width={46} height={60} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Atmospheric photo strip — Image 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
            className="md:col-span-3 relative rounded-2xl overflow-hidden group"
            style={{ minHeight: 280 }}
          >
            <Image
              src="/images/v1/table-scene.png"
              alt="Premium mahjong table"
              fill
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(90deg, rgba(20,51,34,0.82) 0%, rgba(20,51,34,0.45) 55%, rgba(20,51,34,0.15) 100%)' }}
            />
            <div className="absolute inset-0 flex flex-col justify-center px-10 lg:px-16">
              <span className="text-pq-rust text-[10px] tracking-[0.22em] uppercase mb-4">Atmosphere</span>
              <h3
                className="font-hero font-bold text-pq-cream leading-tight max-w-md text-balance"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}
              >
                WHERE TRADITION MEETS THE MODERN TABLE.
              </h3>
              <p className="text-pq-cream text-sm mt-4 max-w-sm leading-relaxed hover:font-bold hover:scale-[1.03] transition-all duration-200">
                Every detail in Poquito honours the weight and ritual of real Mahjong — the ceramic feel, the click of tiles, the quiet tension of a winning hand.
              </p>
            </div>
          </motion.div>

          {/* Smart Matchmaking — full width */}
          <FeatureCard feature={features[4]} className="md:col-span-3" delay={0.3} wide />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature, className = '', delay = 0, large = false, wide = false,
}: {
  feature: typeof features[0]; className?: string; delay?: number; large?: boolean; wide?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      whileHover={{ y: -3, transition: { duration: 0.3 } }}
      className={`relative group rounded-2xl overflow-hidden border border-white/[0.055] ${className}`}
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.018) 100%)',
        backdropFilter: 'blur(8px)',
        minHeight: wide ? 160 : large ? 280 : 240,
      }}
    >
      {/* Hover glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 70% 30%, rgba(182,90,47,0.07) 0%, transparent 70%)' }}
      />

      <div className={`p-7 lg:p-9 flex h-full ${wide ? 'flex-row items-center gap-12' : 'flex-col justify-between'}`}>
        <div className={`flex flex-col gap-4 ${wide ? 'flex-1 max-w-xl' : 'flex-1'}`}>
          <span className="text-pq-rust text-[10px] tracking-[0.22em] uppercase">{feature.tag}</span>
          <h3
            className="font-hero font-bold text-pq-cream leading-tight whitespace-pre-line text-balance"
            style={{ fontSize: wide ? 'clamp(1.5rem, 2.5vw, 2rem)' : 'clamp(1.4rem, 2.2vw, 1.9rem)' }}
          >
            {feature.title}
          </h3>
          <p className="text-pq-cream text-sm leading-relaxed hover:font-bold hover:scale-[1.03] transition-all duration-200">{feature.desc}</p>

          {feature.tiers && (
            <div className="flex flex-wrap gap-2 mt-1">
              {feature.tiers.map((tier, i) => (
                <span
                  key={tier}
                  className="px-3 py-1 rounded-full text-[10px] tracking-[0.12em] uppercase border"
                  style={{
                    borderColor: `rgba(182,90,47,${0.2 + i * 0.12})`,
                    color: `rgba(249,242,228,${0.4 + i * 0.12})`,
                    background: `rgba(182,90,47,${0.04 + i * 0.03})`,
                  }}
                >
                  {tier}
                </span>
              ))}
            </div>
          )}
        </div>

        {!wide && (
          <div className="flex items-end justify-end gap-2 mt-4">
            <motion.div
              className="rounded-[5px] overflow-hidden"
              style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.45)' }}
              animate={{ y: [0, -6, 0], rotate: [-3, -1, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image src={feature.tile} alt="tile" width={large ? 56 : 48} height={large ? 74 : 62} />
            </motion.div>
            {feature.tiles.slice(0, 2).map((t, i) => (
              <motion.div
                key={i}
                className="rounded-[4px] overflow-hidden opacity-55"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.35)' }}
                animate={{ y: [0, -8, 0], rotate: [5 + i * 3, 7 + i * 3, 5 + i * 3] }}
                transition={{ duration: 3.5 + i, repeat: Infinity, ease: 'easeInOut', delay: 0.5 + i * 0.3 }}
              >
                <Image src={t} alt="tile" width={large ? 44 : 38} height={large ? 58 : 50} />
              </motion.div>
            ))}
          </div>
        )}

        {wide && (
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {[feature.tile, ...feature.tiles].map((t, i) => (
              <motion.div
                key={i}
                className="rounded-[5px] overflow-hidden"
                style={{ opacity: 1 - i * 0.2, boxShadow: '0 8px 24px rgba(0,0,0,0.45)' }}
                animate={{ y: [0, -8, 0], rotate: [-4 + i * 4, -2 + i * 4, -4 + i * 4] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              >
                <Image src={t} alt="tile" width={52} height={68} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
