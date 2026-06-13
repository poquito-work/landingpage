'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Feature {
  title: string
  description: string
  wide?: boolean
}

const FEATURES: Feature[] = [
  {
    title: 'PRACTICE MODE WITH BOTS',
    description: 'Sharpen your skills with endless practice rounds against intelligent AI opponents at every difficulty level.',
    wide: true,
  },
  {
    title: 'PRIVATE TABLES WITH FRIENDS',
    description: 'Round up your crew and deal in. Create private rooms, set your rules, and play on your terms.',
  },
  {
    title: 'PUBLIC LOBBY TABLES',
    description: "The lobby's buzzing — grab a seat and jump straight into competitive play with players worldwide.",
  },
  {
    title: 'RANKED POINTS & TIERS',
    description: 'Earn points, reach new tiers and unlock exclusive rewards as you climb the competitive ladder.',
  },
  {
    title: 'SMART MATCHMAKING',
    description: 'The right table, right away. Our algorithm matches you with players at your exact skill level.',
    wide: true,
  },
]

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        gridColumn: feature.wide ? '1 / -1' : undefined,
        backgroundColor: 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? '#B65A2F' : 'rgba(249,242,228,0.12)'}`,
        padding: '2.5rem',
        transform: hovered
          ? 'translateY(-4px) translateZ(8px)'
          : 'translateY(0) translateZ(0)',
        transition: 'all 0.35s cubic-bezier(0.22,0.61,0.36,1)',
        cursor: 'default',
      }}
    >
      {/* Index number */}
      <div
        style={{
          fontSize: '10px',
          letterSpacing: '0.2em',
          color: hovered ? '#B65A2F' : 'rgba(249,242,228,0.3)',
          fontWeight: 700,
          marginBottom: '1.5rem',
          transition: 'color 0.35s ease',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'Hero, Georgia, serif',
          fontSize: '0.95rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          color: '#F9F2E4',
          marginBottom: '1rem',
          textTransform: 'uppercase',
        }}
      >
        {feature.title}
      </h3>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          backgroundColor: hovered ? 'rgba(182,90,47,0.4)' : 'rgba(249,242,228,0.1)',
          marginBottom: '1rem',
          transition: 'background-color 0.35s ease',
        }}
      />

      {/* Description */}
      <p
        style={{
          color: 'rgba(249,242,228,0.6)',
          fontSize: '0.875rem',
          lineHeight: 1.7,
          letterSpacing: '0.02em',
        }}
      >
        {feature.description}
      </p>
    </motion.div>
  )
}

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="grid-overlay"
      style={{
        backgroundColor: '#143322',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '9rem 2rem',
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ height: '1px', width: '40px', backgroundColor: '#B65A2F' }} />
            <span
              style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: '#B65A2F',
                fontWeight: 700,
              }}
            >
              CAPABILITIES
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'Hero, Georgia, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              fontWeight: 700,
              color: '#F9F2E4',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            THE COMPLETE MAHJONG PLAYGROUND
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            backgroundColor: 'rgba(249,242,228,0.08)',
          }}
        >
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
