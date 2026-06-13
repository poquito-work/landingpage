'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Tooltip({ text }: { text: string }) {
  const [visible, setVisible] = useState(false)

  return (
    <span className="relative inline-flex items-center">
      <button
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        className="w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0"
        style={{
          background: 'rgba(249, 242, 228, 0.12)',
          color: 'rgba(249, 242, 228, 0.5)',
          border: '1px solid rgba(249, 242, 228, 0.15)',
        }}
        aria-label="Information"
      >
        i
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 px-4 py-3 rounded-xl text-xs leading-relaxed pointer-events-none z-20"
            style={{
              background: 'rgba(20, 51, 34, 0.98)',
              border: '1px solid rgba(249, 242, 228, 0.12)',
              color: 'rgba(249, 242, 228, 0.7)',
              fontFamily: 'Hero, Georgia, serif',
              backdropFilter: 'blur(20px)',
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative section-pad overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #143322 0%, #0C2318 100%)' }}
    >
      {/* Section number watermark */}
      <div
        className="absolute top-12 left-4 select-none pointer-events-none"
        style={{
          fontFamily: 'Hero, Georgia, serif',
          fontSize: '15vw',
          fontWeight: 700,
          color: 'rgba(249, 242, 228, 0.04)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        03
      </div>

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(182, 90, 47, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p
            className="text-xs tracking-[0.3em] font-bold mb-4"
            style={{ color: '#B65A2F', fontFamily: 'Hero, Georgia, serif' }}
          >
            SECTION 03
          </p>
          <h2
            className="text-4xl lg:text-6xl font-bold"
            style={{
              fontFamily: 'Hero, Georgia, serif',
              color: '#F9F2E4',
              letterSpacing: '-0.02em',
            }}
          >
            CHOOSE YOUR PLAN
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Monthly plan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-8 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(249, 242, 228, 0.1)',
            }}
          >
            <p
              className="text-xs tracking-[0.25em] font-bold mb-6"
              style={{ color: 'rgba(249, 242, 228, 0.5)', fontFamily: 'Hero, Georgia, serif' }}
            >
              MONTHLY
            </p>

            <div className="mb-2">
              <span
                className="font-bold leading-none"
                style={{
                  fontFamily: 'Hero, Georgia, serif',
                  fontSize: '5.5rem',
                  color: '#F9F2E4',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                ₹299
              </span>
            </div>
            <p
              className="text-sm mb-8"
              style={{ color: 'rgba(249, 242, 228, 0.4)', fontFamily: 'Hero, Georgia, serif' }}
            >
              per month · billed monthly
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Full access to all game modes',
                'Ranked tables & leaderboards',
                'Smart matchmaking',
                'Cancel anytime',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: 'rgba(249, 242, 228, 0.65)', fontFamily: 'Hero, Georgia, serif' }}
                >
                  <span style={{ color: '#B65A2F', fontSize: '1.1em' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className="block w-full py-3.5 rounded-full text-sm font-bold tracking-widest text-center transition-all duration-200"
              style={{
                background: 'rgba(182, 90, 47, 0.2)',
                color: '#B65A2F',
                border: '1px solid rgba(182, 90, 47, 0.4)',
                fontFamily: 'Hero, Georgia, serif',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = 'rgba(182, 90, 47, 0.35)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = 'rgba(182, 90, 47, 0.2)'
              }}
            >
              Get Started
            </a>
          </motion.div>

          {/* Annual plan — glowing border */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(182, 90, 47, 0.06)',
              border: '1px solid rgba(182, 90, 47, 0.35)',
            }}
          >
            {/* Pulsing glow border */}
            <motion.div
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: '0 0 40px rgba(182, 90, 47, 0.2), inset 0 0 40px rgba(182, 90, 47, 0.04)',
              }}
            />

            {/* Best value badge */}
            <div className="absolute top-6 right-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold tracking-wider"
                style={{
                  background: '#B65A2F',
                  color: '#F9F2E4',
                  fontFamily: 'Hero, Georgia, serif',
                }}
              >
                BEST VALUE
              </span>
            </div>

            <p
              className="text-xs tracking-[0.25em] font-bold mb-6"
              style={{ color: '#B65A2F', fontFamily: 'Hero, Georgia, serif' }}
            >
              ANNUAL
            </p>

            <div className="mb-1">
              <span
                className="font-bold leading-none"
                style={{
                  fontFamily: 'Hero, Georgia, serif',
                  fontSize: '5.5rem',
                  color: '#F9F2E4',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                ₹2,499
              </span>
            </div>
            <div className="flex items-center gap-2 mb-8">
              <p
                className="text-sm"
                style={{ color: 'rgba(249, 242, 228, 0.55)', fontFamily: 'Hero, Georgia, serif' }}
              >
                ₹208/mo · Save 30%
              </p>
              <Tooltip text="Annual plans are non-refundable. You will be billed once for the full year upfront." />
            </div>

            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Everything in Monthly',
                'Priority matchmaking',
                'Exclusive annual badge',
                'Early access to new features',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: 'rgba(249, 242, 228, 0.65)', fontFamily: 'Hero, Georgia, serif' }}
                >
                  <span style={{ color: '#B65A2F', fontSize: '1.1em' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className="block w-full py-3.5 rounded-full text-sm font-bold tracking-widest text-center transition-all duration-200"
              style={{
                background: '#B65A2F',
                color: '#F9F2E4',
                fontFamily: 'Hero, Georgia, serif',
                boxShadow: '0 8px 24px rgba(182, 90, 47, 0.3)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = '#943f1e'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = '#B65A2F'
                el.style.transform = 'translateY(0)'
              }}
            >
              Get Annual Plan
            </a>
          </motion.div>
        </div>

        {/* 2-week trial note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 text-sm"
          style={{ color: 'rgba(249, 242, 228, 0.35)', fontFamily: 'Hero, Georgia, serif' }}
        >
          Start with a free 2-week trial · No credit card required
        </motion.p>
      </div>
    </section>
  )
}
