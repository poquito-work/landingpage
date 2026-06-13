'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const EASE = [0.22, 0.61, 0.36, 1] as const

const MONTHLY_FEATURES = [
  'All game modes',
  'Public & private tables',
  'Ranked matchmaking',
  'Practice against bots',
  'Cancel anytime',
]

const ANNUAL_FEATURES = [
  'Everything in Monthly',
  'Priority matchmaking',
  'Exclusive seasonal themes',
  'Advanced statistics',
  'Early access features',
  'Dedicated support',
]

const TIERS = [
  { name: 'Beginner',     short: 'BGN', color: '#6b9e80' },
  { name: 'Bronze',       short: 'BRZ', color: '#cd8a4a' },
  { name: 'Silver',       short: 'SLV', color: '#a8b8c8' },
  { name: 'Gold',         short: 'GLD', color: '#d4aa40' },
  { name: 'Grand Master', short: 'GM',  color: '#B65A2F' },
]

const bgTiles = [
  { src: '/images/v2/tiles/Mpt7z.png', left: '2%',  top: '18%', w: 52, rot: -14, op: 0.09, dur: 9,  delay: 0   },
  { src: '/images/v2/tiles/Mpu1z.png', left: '5%',  top: '72%', w: 40, rot: 20,  op: 0.07, dur: 8,  delay: 1.5 },
  { src: '/images/v2/tiles/Mpt2z.png', left: '91%', top: '12%', w: 48, rot: -8,  op: 0.08, dur: 10, delay: 0.5 },
  { src: '/images/v2/tiles/Mpt1m.png', left: '88%', top: '75%', w: 44, rot: 18,  op: 0.09, dur: 7,  delay: 2.0 },
  { src: '/images/v2/tiles/Mpt3z.png', left: '50%', top: '88%', w: 36, rot: -20, op: 0.06, dur: 11, delay: 1.0 },
]

export default function PricingSection() {
  const [tooltip, setTooltip] = useState(false)

  return (
    <section
      id="pricing"
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
      {/* Rust glow top-right */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(182,90,47,0.10) 0%, transparent 65%)' }}
      />

      {/* Ambient background tiles */}
      {bgTiles.map((t, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute pointer-events-none"
          style={{ left: t.left, top: t.top, zIndex: 1, opacity: t.op, rotate: t.rot }}
          animate={{ y: [0, -8, 0], rotate: [t.rot, t.rot + 2, t.rot] }}
          transition={{ duration: t.dur, repeat: Infinity, ease: 'easeInOut', delay: t.delay }}
        >
          <Image src={t.src} alt="" width={t.w} height={Math.round(t.w * 1.32)} />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span style={{ display: 'block', height: 1, width: 40, background: '#B65A2F' }} aria-hidden />
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
              Membership
            </span>
            <span style={{ display: 'block', height: 1, width: 40, background: '#B65A2F' }} aria-hidden />
          </div>

          <h2
            style={{
              fontFamily: 'Hero, Georgia, serif',
              fontWeight: 700,
              color: '#F9F2E4',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.02,
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
            }}
          >
            UNLOCK THE TABLE
          </h2>
          <p
            style={{
              color: 'rgba(249,242,228,0.60)',
              fontSize: '1rem',
              marginTop: '1rem',
              fontWeight: 400,
              maxWidth: 400,
              margin: '1rem auto 0',
              lineHeight: 1.65,
            }}
          >
            One subscription. Every game mode, every table, every rank.
          </p>
        </motion.div>

        {/* Cards — annual dominant, monthly secondary */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-5 items-stretch">

          {/* ── ANNUAL (dominant) ── */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
            className="relative rounded-2xl overflow-hidden flex flex-col p-8 lg:p-10"
            style={{
              background: 'linear-gradient(150deg, #1e4d35 0%, #143322 55%, #0a1e10 100%)',
              border: '1px solid rgba(182,90,47,0.30)',
              boxShadow: '0 32px 80px rgba(12,35,24,0.60), 0 0 0 1px rgba(182,90,47,0.10) inset',
            }}
          >
            {/* Pulsing rust glow border */}
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{ opacity: [0.35, 0.85, 0.35] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ boxShadow: '0 0 0 1px rgba(182,90,47,0.28) inset' }}
            />

            {/* Rust radial highlight */}
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(182,90,47,0.18) 0%, transparent 65%)' }}
            />

            {/* Decorative tiles top-right */}
            <div className="absolute top-6 right-14 hidden lg:flex gap-2 items-start pointer-events-none opacity-[0.20]">
              {[
                { src: '/images/v2/tiles/Mpt7z.png', rot: 18, top: 0   },
                { src: '/images/v2/tiles/Mpu1z.png', rot: -12, top: 20 },
              ].map((t, i) => (
                <div key={i} style={{ transform: `rotate(${t.rot}deg) translateY(${t.top}px)` }}>
                  <Image src={t.src} alt="" width={52} height={68} />
                </div>
              ))}
            </div>

            {/* Header */}
            <div className="flex items-start justify-between mb-6 relative z-10">
              <div>
                <p
                  style={{
                    color: '#B65A2F',
                    fontSize: '0.68rem',
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    fontWeight: 400,
                    marginBottom: 6,
                  }}
                >
                  Annual
                </p>
                <p style={{ color: 'rgba(249,242,228,0.65)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 400 }}>
                  Grand Master Access
                </p>
              </div>
              <span
                style={{
                  background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)',
                  color: '#F9F2E4',
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '0.35rem 0.9rem',
                  borderRadius: 99,
                  fontWeight: 400,
                }}
              >
                Season Pass
              </span>
            </div>

            {/* Price */}
            <div className="mb-2 relative z-10">
              <div className="flex items-end gap-2">
                <span
                  style={{
                    fontFamily: 'Hero, Georgia, serif',
                    fontWeight: 700,
                    color: '#F9F2E4',
                    fontSize: 'clamp(3.2rem, 5vw, 4.6rem)',
                    lineHeight: 1,
                  }}
                >
                  Rs 2,499
                </span>
                <span style={{ color: 'rgba(249,242,228,0.65)', fontSize: '0.95rem', marginBottom: '0.4rem', fontWeight: 400 }}>
                  / yr
                </span>
              </div>
              <p style={{ color: 'rgba(249,242,228,0.70)', fontSize: '0.85rem', marginTop: '0.4rem', fontWeight: 400 }}>
                <span style={{ color: '#B65A2F' }}>Save 30%</span>
                <span style={{ margin: '0 0.5rem', opacity: 0.4 }}>·</span>
                <span>Rs 208 / mo</span>
              </p>
            </div>

            {/* Tier progression */}
            <div className="mt-5 mb-7 relative z-10">
              <p style={{ color: 'rgba(249,242,228,0.45)', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 400 }}>
                Rank Progression
              </p>
              <div className="flex items-center gap-0">
                {TIERS.map((tier, i) => (
                  <div key={tier.short} className="flex items-center gap-0 flex-1">
                    <div className="flex flex-col items-center gap-1.5 flex-1">
                      <motion.div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          background: tier.color,
                          color: '#fff',
                          fontSize: 8,
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 0 8px ${tier.color}55`,
                        }}
                        animate={{ boxShadow: [`0 0 5px ${tier.color}33`, `0 0 12px ${tier.color}77`, `0 0 5px ${tier.color}33`] }}
                        transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                      >
                        {tier.short.slice(0, 1)}
                      </motion.div>
                      <span
                        style={{
                          color: 'rgba(249,242,228,0.50)',
                          fontSize: 7,
                          letterSpacing: '0.06em',
                          textAlign: 'center',
                          lineHeight: 1.3,
                          fontWeight: 400,
                        }}
                      >
                        {tier.short}
                      </span>
                    </div>
                    {i < TIERS.length - 1 && (
                      <div
                        style={{
                          height: 1,
                          width: '100%',
                          margin: '0 2px',
                          background: `linear-gradient(90deg, rgba(182,90,47,${0.25 + i * 0.1}), rgba(182,90,47,${0.50 + i * 0.1}))`,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-3 mb-8 flex-1 relative z-10">
              {ANNUAL_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3" style={{ fontSize: '0.88rem', color: 'rgba(249,242,228,0.85)', fontWeight: 400 }}>
                  <CheckCircle accent />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="relative z-10">
              <motion.a
                href="#"
                className="block text-center py-4 rounded-xl text-pq-cream text-sm uppercase tracking-widest"
                style={{
                  background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)',
                  boxShadow: '0 8px 24px rgba(182,90,47,0.40)',
                  fontFamily: 'Hero, Georgia, serif',
                  fontWeight: 400,
                  letterSpacing: '0.14em',
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 14px 40px rgba(182,90,47,0.55)' }}
                whileTap={{ scale: 0.98 }}
              >
                Get Annual Plan
              </motion.a>

              <div className="flex items-center justify-center gap-2 mt-3 relative">
                <button
                  onMouseEnter={() => setTooltip(true)}
                  onMouseLeave={() => setTooltip(false)}
                  className="flex items-center gap-1.5 group"
                  style={{ color: 'rgba(249,242,228,0.55)', fontSize: '0.75rem', fontWeight: 400, background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm.75-10.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5zm0 6a.75.75 0 00-1.5 0v.5a.75.75 0 001.5 0v-.5z" clipRule="evenodd" />
                  </svg>
                  Non-refundable · see details
                </button>
                {tooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-8 left-0 right-0 rounded-xl p-4 z-20"
                    style={{
                      background: 'rgba(10,28,18,0.97)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(249,242,228,0.75)',
                      fontSize: '0.8rem',
                      lineHeight: 1.6,
                      fontWeight: 400,
                    }}
                  >
                    Annual subscriptions are non-refundable. Upon cancellation, benefits remain active until the end of the current subscription term.
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── MONTHLY (secondary) ── */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
            className="relative rounded-2xl flex flex-col p-8"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: '0 16px 48px rgba(12,35,24,0.40)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Header */}
            <div className="mb-6">
              <p style={{ color: 'rgba(249,242,228,0.65)', fontSize: '0.68rem', letterSpacing: '0.24em', textTransform: 'uppercase', fontWeight: 400, marginBottom: 6 }}>
                Monthly
              </p>
              <p style={{ color: 'rgba(249,242,228,0.45)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 400 }}>
                Challenger Access
              </p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-end gap-1">
                <span
                  style={{
                    fontFamily: 'Hero, Georgia, serif',
                    fontWeight: 700,
                    color: '#F9F2E4',
                    fontSize: 'clamp(2.6rem, 4vw, 3.6rem)',
                    lineHeight: 1,
                  }}
                >
                  Rs 299
                </span>
                <span style={{ color: 'rgba(249,242,228,0.55)', fontSize: '0.9rem', marginBottom: '0.3rem', fontWeight: 400 }}>
                  / mo
                </span>
              </div>
              <p style={{ color: 'rgba(249,242,228,0.40)', fontSize: '0.78rem', marginTop: '0.35rem', fontWeight: 400 }}>
                Billed monthly
              </p>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-3.5 mb-8 flex-1">
              {MONTHLY_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3" style={{ fontSize: '0.88rem', color: 'rgba(249,242,228,0.75)', fontWeight: 400 }}>
                  <CheckCircle />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.a
              href="#"
              className="block text-center py-4 rounded-xl uppercase"
              style={{
                border: '1px solid rgba(255,255,255,0.14)',
                color: '#F9F2E4',
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                fontFamily: 'Hero, Georgia, serif',
                fontWeight: 400,
                transition: 'background 0.25s ease, border-color 0.25s ease',
              }}
              whileHover={{ scale: 1.02, background: 'rgba(255,255,255,0.06)' } as never}
              whileTap={{ scale: 0.98 }}
            >
              Get Monthly
            </motion.a>
            <p style={{ textAlign: 'center', color: 'rgba(249,242,228,0.35)', fontSize: '0.75rem', marginTop: '0.75rem', fontWeight: 400 }}>
              Cancel anytime
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ textAlign: 'center', color: 'rgba(249,242,228,0.30)', fontSize: '0.75rem', marginTop: '2.5rem', fontWeight: 400, letterSpacing: '0.05em' }}
        >
          All plans include full access. Prices in INR. Taxes may apply.
        </motion.p>
      </div>
    </section>
  )
}

function CheckCircle({ accent = false }: { accent?: boolean }) {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.5"
        style={{ stroke: accent ? 'rgba(182,90,47,0.55)' : 'rgba(255,255,255,0.14)' }} />
      <path d="M5 8l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ stroke: accent ? '#B65A2F' : 'rgba(255,255,255,0.40)' }} />
    </svg>
  )
}
