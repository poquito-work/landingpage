'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const EASE = [0.22, 0.61, 0.36, 1] as const

const MONTHLY_FEATURES = [
  'Access to all game modes',
  'Public & private tables',
  'Ranked matchmaking',
  'Practice against smart bots',
  'Real-time leaderboards',
  'Cancel anytime',
]

const ANNUAL_FEATURES = [
  'Everything in Monthly',
  'Priority matchmaking',
  'Exclusive seasonal themes',
  'Advanced statistics',
  'Early access to new features',
  'Dedicated support',
]

const TIERS = [
  { name: 'Beginner', short: 'BGN',   color: '#6b9e80' },
  { name: 'Bronze',   short: 'BRZ',   color: '#cd8a4a' },
  { name: 'Silver',   short: 'SLV',   color: '#a8b8c8' },
  { name: 'Gold',     short: 'GLD',   color: '#d4aa40' },
  { name: 'Grand\nMaster', short: 'GM', color: '#B65A2F' },
]

/* Scattered background tile decorations */
const bgTiles = [
  { src: '/images/tiles/Mpt7z.png', left: '2%',  top: '18%', w: 52, rot: -14, op: 0.10, dur: 9,  delay: 0   },
  { src: '/images/tiles/Mpu1z.png', left: '5%',  top: '72%', w: 40, rot: 20,  op: 0.08, dur: 8,  delay: 1.5 },
  { src: '/images/tiles/Mpt2z.png', left: '91%', top: '12%', w: 48, rot: -8,  op: 0.09, dur: 10, delay: 0.5 },
  { src: '/images/tiles/Mpt1m.png', left: '88%', top: '75%', w: 44, rot: 18,  op: 0.10, dur: 7,  delay: 2.0 },
  { src: '/images/tiles/Mpt3z.png', left: '50%', top: '88%', w: 36, rot: -20, op: 0.07, dur: 11, delay: 1.0 },
]

export default function PricingSection() {
  const [tooltip, setTooltip] = useState(false)

  return (
    <section
      id="pricing"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0c2318 0%, #143322 50%, #0e1f14 100%)' }}
    >
      {/* Grain */}
      <div
        aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />
      {/* Rust glow top-right */}
      <div
        aria-hidden className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(182,90,47,0.12) 0%, transparent 65%)' }}
      />
      {/* Green glow bottom-left */}
      <div
        aria-hidden className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,66,48,0.60) 0%, transparent 70%)' }}
      />

      {/* Ambient background tiles */}
      {bgTiles.map((t, i) => (
        <motion.div
          key={i} aria-hidden
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
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-[1px] w-8 bg-pq-rust/50" />
            <span className="text-pq-rust text-xs tracking-[0.22em] uppercase">Membership</span>
            <span className="h-[1px] w-8 bg-pq-rust/50" />
          </div>
          <h2
            className="font-hero font-bold text-pq-cream leading-tight tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            UNLOCK THE TABLE
          </h2>
          <p className="text-pq-cream mt-4 max-w-md mx-auto leading-relaxed font-normal hover:font-bold hover:scale-[1.03] transition-all duration-200">
            One subscription. Every game mode, every table, every rank. No ads, no limits.
          </p>
        </motion.div>

        {/* Cards — asymmetric: annual dominant (left), monthly secondary (right) */}
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
              border: '1px solid rgba(182,90,47,0.28)',
              boxShadow: '0 32px 80px rgba(12,35,24,0.60), 0 0 0 1px rgba(182,90,47,0.12) inset',
            }}
          >
            {/* Pulsing glow border animation */}
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ boxShadow: '0 0 0 1px rgba(182,90,47,0.30) inset' }}
            />

            {/* Grain overlay */}
            <div
              aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
            />

            {/* Rust radial highlight top-right */}
            <div
              aria-hidden className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(182,90,47,0.20) 0%, transparent 65%)' }}
            />

            {/* Decorative tiles — top-right, layered */}
            <div className="absolute top-6 right-16 hidden lg:flex gap-2 items-start pointer-events-none opacity-[0.22]">
              {[
                { src: '/images/tiles/Mpt7z.png', rot: 18, top: 0 },
                { src: '/images/tiles/Mpu1z.png', rot: -12, top: 20 },
              ].map((t, i) => (
                <div key={i} style={{ transform: `rotate(${t.rot}deg) translateY(${t.top}px)` }}>
                  <Image src={t.src} alt="" width={52} height={68} />
                </div>
              ))}
            </div>

            {/* Header row */}
            <div className="flex items-start justify-between mb-6 relative z-10">
              <div>
                <p className="text-pq-rust text-[10px] tracking-[0.22em] uppercase mb-1.5 font-normal">Annual</p>
                <p className="text-pq-cream text-xs tracking-[0.12em] uppercase font-normal">Grand Master Access</p>
              </div>
              <span
                className="text-pq-cream text-[10px] tracking-[0.14em] uppercase px-3 py-1.5 rounded-full font-normal"
                style={{ background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)' }}
              >
                Season Pass
              </span>
            </div>

            {/* Price */}
            <div className="mb-2 relative z-10">
              <div className="flex items-end gap-2">
                <span
                  className="font-hero font-bold text-pq-cream leading-none"
                  style={{ fontSize: 'clamp(3.5rem, 5.5vw, 5rem)' }}
                >
                  $79.99
                </span>
                <span className="text-pq-cream text-base mb-2 font-normal">/ yr</span>
              </div>
              <p className="text-pq-cream text-sm mt-1 font-normal hover:font-bold hover:scale-[1.03] transition-all duration-200">
                <span className="text-pq-rust font-normal">$6.67 / mo</span>
                <span className="mx-2 text-pq-cream">·</span>
                <span className="text-pq-cream">Save 33%</span>
              </p>
            </div>

            {/* Tier progression */}
            <div className="mt-5 mb-7 relative z-10">
              <p className="text-pq-cream text-[9px] tracking-[0.18em] uppercase mb-3 font-normal">Rank Progression</p>
              <div className="flex items-center gap-0">
                {TIERS.map((tier, i) => (
                  <div key={tier.short} className="flex items-center gap-0 flex-1">
                    <div className="flex flex-col items-center gap-1.5 flex-1">
                      <motion.div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold"
                        style={{ background: tier.color, color: '#fff', boxShadow: `0 0 10px ${tier.color}55` }}
                        animate={{ boxShadow: [`0 0 6px ${tier.color}44`, `0 0 14px ${tier.color}88`, `0 0 6px ${tier.color}44`] }}
                        transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                      >
                        {tier.short.slice(0, 1)}
                      </motion.div>
                      <span className="text-pq-cream text-[7px] tracking-[0.06em] text-center leading-tight whitespace-pre-line font-normal" style={{ fontSize: '7px' }}>
                        {tier.short}
                      </span>
                    </div>
                    {i < TIERS.length - 1 && (
                      <div className="h-[1px] w-full mx-1" style={{ background: 'linear-gradient(90deg, rgba(182,90,47,0.35), rgba(182,90,47,0.60))' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-3 mb-8 flex-1 relative z-10">
              {ANNUAL_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-pq-cream text-sm font-normal hover:font-bold hover:scale-[1.02] transition-all duration-200">
                  <CheckCircle accent />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="relative z-10">
              <motion.a
                href="#"
                className="block text-center py-4 rounded-xl text-pq-cream text-sm tracking-[0.12em] uppercase font-normal"
                style={{ background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)', boxShadow: '0 8px 24px rgba(182,90,47,0.40)' }}
                whileHover={{ scale: 1.02, boxShadow: '0 14px 40px rgba(182,90,47,0.55)' }}
                whileTap={{ scale: 0.98 }}
              >
                Get Annual Plan
              </motion.a>

              <div className="flex items-center justify-center gap-2 mt-3 relative">
                <button
                  onMouseEnter={() => setTooltip(true)}
                  onMouseLeave={() => setTooltip(false)}
                  className="flex items-center gap-1.5 text-pq-cream text-xs group font-normal hover:font-bold transition-all duration-200"
                >
                  <svg className="w-3 h-3 group-hover:text-pq-cream/50 transition-colors" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm.75-10.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5zm0 6a.75.75 0 00-1.5 0v.5a.75.75 0 001.5 0v-.5z" clipRule="evenodd" />
                  </svg>
                  Non-refundable · see details
                </button>
                {tooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-8 left-0 right-0 rounded-xl p-4 text-xs text-pq-cream leading-relaxed z-20 border border-white/8 font-normal"
                    style={{ background: 'rgba(12,35,24,0.96)', backdropFilter: 'blur(16px)' }}
                  >
                    Annual subscriptions are non-refundable. Benefits remain active until the end of the current term.
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
            className="relative rounded-2xl flex flex-col p-8 border"
            style={{
              background: 'rgba(255,255,255,0.035)',
              borderColor: 'rgba(255,255,255,0.08)',
              boxShadow: '0 16px 48px rgba(12,35,24,0.40)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Header */}
            <div className="mb-6">
              <p className="text-pq-cream text-[10px] tracking-[0.22em] uppercase mb-1.5 font-normal">Monthly</p>
              <p className="text-pq-cream text-xs tracking-[0.12em] uppercase font-normal">Challenger Access</p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-end gap-1">
                <span
                  className="font-hero font-bold text-pq-cream leading-none"
                  style={{ fontSize: 'clamp(2.8rem, 4vw, 3.8rem)' }}
                >
                  $9.99
                </span>
                <span className="text-pq-cream text-sm mb-1.5 font-normal">/ mo</span>
              </div>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-3.5 mb-8 flex-1">
              {MONTHLY_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-pq-cream text-sm font-normal hover:font-bold hover:scale-[1.02] transition-all duration-200">
                  <CheckCircle />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.a
              href="#"
              className="block text-center py-4 rounded-xl border border-white/15 text-pq-cream text-sm tracking-[0.1em] uppercase hover:bg-white/5 hover:text-pq-cream hover:border-white/25 hover:font-bold hover:scale-[1.03] transition-all duration-300 font-normal"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            >
              Get Monthly
            </motion.a>
            <p className="text-center text-pq-cream text-xs mt-3 font-normal">Billed monthly · Cancel anytime</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-pq-cream text-xs mt-10 tracking-wide font-normal"
        >
          All plans include full access. Prices in USD. Taxes may apply.
        </motion.p>
      </div>
    </section>
  )
}

function CheckCircle({ accent = false }: { accent?: boolean }) {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.5"
        style={{ stroke: accent ? 'rgba(182,90,47,0.50)' : 'rgba(255,255,255,0.14)' }} />
      <path d="M5 8l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ stroke: accent ? '#B65A2F' : 'rgba(255,255,255,0.40)' }} />
    </svg>
  )
}
