'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    number: '01',
    title: 'Practice Mode with Bots',
    description: 'Sharpen your skills with endless practice rounds. Our intelligent bots adapt to your level — from beginner to grandmaster.',
    tile: '/images/v4/tiles/Mpt1m.png',
  },
  {
    number: '02',
    title: 'Private Tables with Friends',
    description: 'Round up your crew and deal in. Create a private table, set the rules, and play your way with people you know.',
    tile: '/images/v4/tiles/Mpt2m.png',
  },
  {
    number: '03',
    title: 'Public Lobby Tables',
    description: "The lobby's buzzing — grab a seat. Jump into live tables with players from around the world, any time of day.",
    tile: '/images/v4/tiles/Mpt3m.png',
  },
  {
    number: '04',
    title: 'Ranked Points & Tiers',
    description: 'Earn points, reach new tiers and unlock exclusive rewards. Climb the leaderboard and prove your mastery.',
    tile: '/images/v4/tiles/Mpt4m.png',
  },
  {
    number: '05',
    title: 'Smart Matchmaking',
    description: 'The right table, right away. Our system connects you with players of similar skill — no waiting, just playing.',
    tile: '/images/v4/tiles/Mpt7z.png',
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, y: 40 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      whileHover={{ x: 4 }}
      className="relative flex items-center gap-0 w-full cursor-default overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(249, 242, 228, 0.07)',
        borderLeft: '4px solid #B65A2F',
        borderRadius: '12px',
        transition: 'background 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
      }}
    >
      {/* Left: number + title */}
      <div className="flex items-center gap-8 px-8 py-7 flex-1 min-w-0">
        <span
          className="text-5xl font-bold flex-shrink-0 select-none"
          style={{
            fontFamily: 'Hero, Georgia, serif',
            color: 'rgba(249, 242, 228, 0.08)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          {feature.number}
        </span>
        <h3
          className="text-xl font-bold"
          style={{
            fontFamily: 'Hero, Georgia, serif',
            color: '#F9F2E4',
            letterSpacing: '0.01em',
          }}
        >
          {feature.title}
        </h3>
      </div>

      {/* Right: description + tile image */}
      <div className="flex items-center gap-6 px-8 py-7 w-[45%] flex-shrink-0">
        <p
          className="text-sm leading-relaxed flex-1"
          style={{
            fontFamily: 'Hero, Georgia, serif',
            color: 'rgba(249, 242, 228, 0.55)',
          }}
        >
          {feature.description}
        </p>
        <div className="relative w-12 h-16 flex-shrink-0 opacity-80">
          <Image
            src={feature.tile}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative section-pad overflow-hidden"
      style={{ background: '#143322' }}
    >
      {/* Section number watermark */}
      <div
        className="absolute top-12 right-8 select-none pointer-events-none"
        style={{
          fontFamily: 'Hero, Georgia, serif',
          fontSize: '15vw',
          fontWeight: 700,
          color: 'rgba(249, 242, 228, 0.04)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        02
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-xs tracking-[0.3em] font-bold mb-4"
            style={{ color: '#B65A2F', fontFamily: 'Hero, Georgia, serif' }}
          >
            SECTION 02
          </p>
          <h2
            className="text-4xl lg:text-6xl font-bold"
            style={{
              fontFamily: 'Hero, Georgia, serif',
              color: '#F9F2E4',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            THE COMPLETE MAHJONG<br />PLAYGROUND
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
