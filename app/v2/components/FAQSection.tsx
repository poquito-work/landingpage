'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const EASE = [0.22, 0.61, 0.36, 1] as const

const faqs = [
  {
    q: 'Do I need to create a new account on the website?',
    a: 'No. Log in with the same username and password as the App.',
  },
  {
    q: 'Can I still play without subscribing?',
    a: 'Yes! New accounts receive a free 2-week trial with full access to all features. After the trial, you can subscribe monthly or annually to continue playing.',
  },
  {
    q: 'What is Traditional Mahjong?',
    a: "Traditional Mahjong is a four-player tile game where players build a winning hand of 14 tiles by forming specific combinations. Poquito supports game variants including Passport (East Wind Round), Goulash (West Wind Round), and more.",
  },
  {
    q: "What happens if a table doesn't fill up?",
    a: 'The host may choose to begin the game with bots filling any empty seats, so the game can always start on time.',
  },
  {
    q: 'Will my subscription auto-renew?',
    a: 'Yes — subscriptions auto-renew. You can turn off auto-renewal at any time in your account settings before the next billing date.',
  },
  {
    q: 'Can I switch between monthly and annual plans?',
    a: 'Yes. When switching to an annual plan, the new plan begins once your current monthly billing period ends.',
  },
  {
    q: 'Can I customize my gameplay experience?',
    a: 'Yes — in Practice Mode and Create a Table Mode, you can customize game variants, turn timer settings, and more to tailor your experience.',
  },
  {
    q: 'How do I report bugs or unfair behavior?',
    a: 'Contact us at support@poquitomahjong.com [to be filled]. We take all reports seriously and respond as quickly as possible.',
  },
  {
    q: 'What happens to my progress if I switch devices?',
    a: 'Simply log in with the same credentials on your new device — your rank, stats, and progress are all preserved and synced to your account.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="section-pad relative overflow-hidden"
      style={{ background: '#143322' }}
    >
      {/* Subtle grain */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: EASE }}
          className="mb-16"
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
              Questions
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'Hero, Georgia, serif',
              fontWeight: 700,
              color: '#F9F2E4',
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              lineHeight: 1.02,
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
            }}
          >
            FREQUENTLY ASKED
          </h2>
        </motion.div>

        {/* FAQ items — acoustic accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: typeof faqs[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.65, ease: EASE, delay: index * 0.06 }}
      style={{
        borderBottom: '1px solid rgba(249,242,228,0.10)',
      }}
    >
      {/* Trigger row — heavy tile-like styling */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        style={{ cursor: 'pointer' }}
      >
        <span
          style={{
            fontFamily: 'Hero, Georgia, serif',
            fontWeight: isOpen ? 700 : 400,
            color: isOpen ? '#F9F2E4' : 'rgba(249,242,228,0.75)',
            fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
            lineHeight: 1.45,
            transition: 'color 0.25s ease, font-weight 0.25s ease',
            letterSpacing: '0.01em',
          }}
        >
          {faq.q}
        </span>

        {/* Expand icon — rotates 45° on open */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          style={{
            flexShrink: 0,
            width: 30,
            height: 30,
            borderRadius: '50%',
            border: `1px solid ${isOpen ? 'rgba(182,90,47,0.55)' : 'rgba(249,242,228,0.18)'}`,
            background: isOpen ? 'rgba(182,90,47,0.12)' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'border-color 0.25s ease, background 0.25s ease',
          }}
        >
          <svg
            style={{
              width: 12,
              height: 12,
              color: isOpen ? '#B65A2F' : 'rgba(249,242,228,0.55)',
              transition: 'color 0.25s ease',
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      {/* ACOUSTIC ACCORDION — spring bounce mimics heavy bone tiles colliding */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                type: 'spring',
                stiffness: 300,
                damping: 15,
              },
              opacity: {
                duration: 0.2,
                ease: 'easeOut',
              },
            }}
            style={{ overflow: 'hidden' }}
          >
            <motion.p
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -4 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 18,
              }}
              style={{
                color: 'rgba(249,242,228,0.65)',
                fontSize: '0.92rem',
                lineHeight: 1.72,
                paddingBottom: '1.5rem',
                fontWeight: 400,
                maxWidth: 600,
                fontFamily: 'Hero, Georgia, serif',
              }}
            >
              {faq.a}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
