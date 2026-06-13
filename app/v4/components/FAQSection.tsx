'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Do I need to create a new account?',
    a: 'No. Use the same login credentials from the Poquito mobile app. Your account, progress, and friends list transfer seamlessly to the web.',
  },
  {
    q: 'Can I play without subscribing?',
    a: 'Yes. You get a free 2-week trial with full access to all features. No credit card required to start.',
  },
  {
    q: 'What is Traditional Mahjong?',
    a: 'Traditional Mahjong is a four-player tile-based game. Players draw and discard tiles to complete a winning hand of 14 tiles. Poquito supports Passport and Goulash variants.',
  },
  {
    q: "What if a table doesn't fill up?",
    a: 'The host may choose to begin the game with AI bots filling empty seats. You can also wait for more players to join the lobby.',
  },
  {
    q: 'Will my subscription auto-renew?',
    a: 'Yes. Subscriptions auto-renew at the end of each billing period. You can disable auto-renewal at any time in your account settings.',
  },
  {
    q: 'Can I switch from monthly to annual?',
    a: 'Yes. Your annual plan will begin after your current monthly billing period ends. No overlap, no double billing.',
  },
  {
    q: 'Can I customize gameplay?',
    a: 'Yes. In Practice Mode and Create Table mode, you can adjust game rules, scoring systems, and bot difficulty to your preference.',
  },
  {
    q: 'How do I report bugs or give feedback?',
    a: 'Contact us at support@poquito.app. We review every report and prioritize fixes in our weekly releases.',
  },
  {
    q: 'What if I switch devices?',
    a: 'Simply log in with your Poquito credentials on any device. All progress, rankings, purchased items, and friend lists are preserved in the cloud.',
  },
]

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 0.61, 0.36, 1] }}
      className="overflow-hidden rounded-xl"
      style={{
        background: isOpen ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.03)',
        border: isOpen
          ? '1px solid rgba(182, 90, 47, 0.3)'
          : '1px solid rgba(249, 242, 228, 0.07)',
        transition: 'background 0.25s ease, border 0.25s ease',
      }}
    >
      {/* Question row */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span
          className="text-base font-bold leading-snug"
          style={{ fontFamily: 'Hero, Georgia, serif', color: '#F9F2E4' }}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: isOpen ? '#B65A2F' : 'rgba(249, 242, 228, 0.1)',
            color: isOpen ? '#F9F2E4' : 'rgba(249, 242, 228, 0.5)',
            fontSize: '1.2rem',
            lineHeight: 1,
          }}
        >
          +
        </motion.span>
      </button>

      {/* 3D flip answer reveal */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ rotateX: -90, opacity: 0, height: 0 }}
            animate={{ rotateX: 0, opacity: 1, height: 'auto' }}
            exit={{ rotateX: -90, opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            style={{
              transformOrigin: 'top center',
              perspective: '600px',
              overflow: 'hidden',
            }}
          >
            <div className="px-7 pb-6">
              <div
                className="h-px w-full mb-5"
                style={{ background: 'rgba(249, 242, 228, 0.08)' }}
              />
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: 'Hero, Georgia, serif',
                  color: 'rgba(249, 242, 228, 0.6)',
                }}
              >
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section
      id="faq"
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
        05
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
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
            SECTION 05
          </p>
          <h2
            className="text-4xl lg:text-6xl font-bold"
            style={{
              fontFamily: 'Hero, Georgia, serif',
              color: '#F9F2E4',
              letterSpacing: '-0.02em',
            }}
          >
            FREQUENTLY ASKED
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} item={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
