'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: 'Do I need to create a new account?',
    a: 'No. If you already have a Poquito account from the app, use the same login credentials here. Your progress, stats, and subscription all carry over seamlessly.',
  },
  {
    q: 'Can I play without subscribing?',
    a: 'Yes. New users get a free 2-week trial with full access to all features. No credit card required to start your trial.',
  },
  {
    q: 'What is Traditional Mahjong?',
    a: 'Traditional Mahjong is a four-player tile-based strategy game originating from China. Players draw and discard tiles to complete melds and form a winning hand. Poquito follows the standard ruleset with regional variations available.',
  },
  {
    q: 'What if a table doesn\'t fill up?',
    a: 'The host may choose to start the game with AI bot players filling empty seats. Bots play at a competitive level and ensure you never wait too long for a full table.',
  },
  {
    q: 'Will my subscription auto-renew?',
    a: 'Yes. Subscriptions renew automatically at the end of each billing cycle. You can turn off auto-renewal at any time from your account settings before the renewal date.',
  },
  {
    q: 'Can I switch between plans?',
    a: 'Yes. You can upgrade to an annual plan at any time. The annual plan will activate after your current monthly period ends, so you never lose days you\'ve already paid for.',
  },
  {
    q: 'Can I customize gameplay settings?',
    a: 'Yes. Customization options are available in Practice Mode and when creating a private table. You can adjust tile sets, time limits, scoring rules, and more.',
  },
  {
    q: 'How do I report bugs or issues?',
    a: 'Contact our support team at support@poquito.app. Please include your device model, OS version, and a description of the issue to help us resolve it quickly.',
  },
  {
    q: 'What happens if I switch devices?',
    a: 'Simply log in with the same credentials on your new device. All your data — including game history, tier ranking, and subscription status — is stored in the cloud and syncs automatically.',
  },
]

function FAQRow({ item, index }: { item: (typeof FAQS)[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      style={{
        borderBottom: '1px solid rgba(249,242,228,0.1)',
      }}
    >
      {/* Question row — the "tile shelf" */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0 1.5rem 0 0',
          fontFamily: 'Hero, Georgia, serif',
          textAlign: 'left',
          gap: '1rem',
          borderTop: '1px solid rgba(249,242,228,0.1)',
        }}
        aria-expanded={open}
      >
        {/* Index + question */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1, minWidth: 0 }}>
          <span
            style={{
              fontSize: '10px',
              letterSpacing: '0.15em',
              color: open ? '#B65A2F' : 'rgba(249,242,228,0.3)',
              fontWeight: 700,
              flexShrink: 0,
              transition: 'color 0.3s ease',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: open ? '#F9F2E4' : 'rgba(249,242,228,0.8)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'color 0.3s ease',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {item.q}
          </span>
        </div>

        {/* Arrow indicator */}
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
          style={{
            color: open ? '#B65A2F' : 'rgba(249,242,228,0.4)',
            fontSize: '1rem',
            flexShrink: 0,
            display: 'inline-block',
            lineHeight: 1,
          }}
        >
          ›
        </motion.span>
      </button>

      {/* Answer — snaps down like a physical tile */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                type: 'spring',
                stiffness: 400,
                damping: 35,
              },
              opacity: { duration: 0.2 },
            }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                borderTop: '1px solid rgba(249,242,228,0.08)',
                padding: '1.25rem 0 1.75rem 3rem',
              }}
            >
              <p
                style={{
                  color: 'rgba(249,242,228,0.6)',
                  fontSize: '0.875rem',
                  lineHeight: 1.75,
                  letterSpacing: '0.02em',
                  maxWidth: '680px',
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
      className="grid-overlay"
      style={{ backgroundColor: '#143322', position: 'relative' }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '9rem 2rem',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ height: '1px', width: '40px', backgroundColor: '#B65A2F' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#B65A2F', fontWeight: 700 }}>
              QUESTIONS
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
            FREQUENTLY ASKED
          </h2>
        </motion.div>

        {/* FAQ rows */}
        <div style={{ maxWidth: '900px' }}>
          {FAQS.map((item, i) => (
            <FAQRow key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
