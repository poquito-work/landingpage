'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const EASE = [0.22, 0.61, 0.36, 1] as const

const features = [
  {
    num: '01',
    title: 'PRACTICE MODE WITH BOTS',
    desc: 'Sharpen your skills with endless practice rounds against intelligent AI at multiple difficulty levels.',
    tile: '/images/v2/tiles/Mpt1m.png',
  },
  {
    num: '02',
    title: 'PRIVATE TABLES WITH FRIENDS',
    desc: 'Round up your crew and deal in. Create a private room, set your rules, and play on your terms.',
    tile: '/images/v2/tiles/Mpt2z.png',
  },
  {
    num: '03',
    title: 'PUBLIC LOBBY TABLES',
    desc: "The lobby's buzzing — grab a seat. Jump into a live game instantly with auto-matched players.",
    tile: '/images/v2/tiles/Mpt3z.png',
  },
  {
    num: '04',
    title: 'RANKED POINTS & TIERS',
    desc: 'Earn points, reach new tiers and unlock exclusive rewards. Climb from Beginner to Grand Master.',
    tile: '/images/v2/tiles/Mpt7z.png',
  },
  {
    num: '05',
    title: 'SMART MATCHMAKING',
    desc: 'The right table, right away. Our system reads your rank, playstyle, and win-rate for perfectly balanced games.',
    tile: '/images/v2/tiles/Mpu3z.png',
  },
]

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="features"
      className="section-pad relative overflow-hidden"
      style={{ background: '#143322' }}
    >
      {/* Grain texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: EASE }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span
              aria-hidden
              style={{ display: 'block', height: 1, width: 40, background: '#B65A2F' }}
            />
            <span
              style={{
                color: '#B65A2F',
                fontSize: '0.7rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                fontFamily: 'Hero, Georgia, serif',
                fontWeight: 400,
              }}
            >
              The Platform
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'Hero, Georgia, serif',
              fontWeight: 700,
              color: '#F9F2E4',
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              lineHeight: 1.02,
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              maxWidth: 600,
            }}
          >
            THE COMPLETE MAHJONG PLAYGROUND
          </h2>
        </motion.div>

        {/* Editorial asymmetric numbered list */}
        <div className="flex flex-col">
          {features.map((feature, i) => (
            <FeatureRow
              key={feature.num}
              feature={feature}
              index={i}
              isHovered={hoveredIndex === i}
              onHover={() => setHoveredIndex(i)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureRow({
  feature,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  feature: typeof features[0]
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.09 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        borderTop: '1px solid rgba(249,242,228,0.10)',
        paddingTop: '1.75rem',
        paddingBottom: '1.75rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Large number — far left, very low opacity */}
      <span
        aria-hidden
        style={{
          fontFamily: 'Hero, Georgia, serif',
          fontWeight: 700,
          fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
          color: 'rgba(249,242,228,0.12)',
          lineHeight: 1,
          flexShrink: 0,
          width: '5rem',
          textAlign: 'right',
          letterSpacing: '-0.02em',
          userSelect: 'none',
        }}
      >
        {feature.num}
      </span>

      {/* Feature text — slides right on hover */}
      <motion.div
        animate={{ x: isHovered ? 8 : 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        style={{ flex: 1 }}
      >
        <div
          style={{
            fontFamily: 'Hero, Georgia, serif',
            fontWeight: 700,
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            color: isHovered ? '#F9F2E4' : 'rgba(249,242,228,0.80)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            lineHeight: 1.15,
            marginBottom: '0.45rem',
            transition: 'color 0.3s ease',
          }}
        >
          {feature.title}
        </div>
        <p
          style={{
            color: 'rgba(249,242,228,0.50)',
            fontSize: '0.88rem',
            lineHeight: 1.6,
            fontWeight: 400,
            fontFamily: 'Hero, Georgia, serif',
            transition: 'color 0.3s ease',
            ...(isHovered ? { color: 'rgba(249,242,228,0.65)' } : {}),
          }}
        >
          {feature.desc}
        </p>
      </motion.div>

      {/* Tile icon — fades in from right on hover, rust tint overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 16, scale: 0.88 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.9 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{
              flexShrink: 0,
              position: 'relative',
            }}
          >
            <div style={{ position: 'relative', borderRadius: 6, overflow: 'hidden' }}>
              <Image
                src={feature.tile}
                alt={feature.title}
                width={52}
                height={68}
                style={{ display: 'block' }}
              />
              {/* Rust tint overlay */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(182,90,47,0.22)',
                  mixBlendMode: 'multiply',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom rule is handled by next row's border-top */}
    </motion.div>
  )
}
