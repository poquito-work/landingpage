'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MONTHLY_FEATURES = [
  'Unlimited game rounds',
  'Private tables with friends',
  'Public lobby access',
  'Ranked matchmaking',
  'Basic tier rewards',
  'Bot practice mode',
]

const ANNUAL_FEATURES = [
  'Everything in Monthly',
  'Priority matchmaking queue',
  'Exclusive annual tier badge',
  'Early access to new features',
  'Extended game history',
  'Premium support',
]

function PlanCard({
  title,
  price,
  period,
  badge,
  features,
  isHighlighted,
  index,
  tooltip,
}: {
  title: string
  price: string
  period: string
  badge?: string
  features: string[]
  isHighlighted: boolean
  index: number
  tooltip?: string
}) {
  const [hovered, setHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? '#B65A2F' : 'rgba(255,255,255,0.12)'}`,
        backgroundColor: isHighlighted ? 'rgba(182,90,47,0.05)' : 'rgba(255,255,255,0.03)',
        padding: '3rem',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 24px 64px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2)'
          : '0 4px 16px rgba(0,0,0,0.15)',
        transition: 'all 0.35s cubic-bezier(0.22,0.61,0.36,1)',
        cursor: 'default',
        position: 'relative',
      }}
    >
      {/* Badge */}
      {badge && (
        <div
          style={{
            position: 'absolute',
            top: '-1px',
            right: '2rem',
            backgroundColor: '#B65A2F',
            color: '#F9F2E4',
            fontSize: '9px',
            letterSpacing: '0.2em',
            fontWeight: 700,
            padding: '5px 12px',
            textTransform: 'uppercase',
          }}
        >
          {badge}
        </div>
      )}

      {/* Title */}
      <div
        style={{
          fontSize: '10px',
          letterSpacing: '0.25em',
          color: 'rgba(249,242,228,0.5)',
          fontWeight: 700,
          marginBottom: '2rem',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </div>

      {/* Price */}
      <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
        <span
          style={{
            fontFamily: 'Hero, Georgia, serif',
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            fontWeight: 700,
            color: '#F9F2E4',
            letterSpacing: '-0.02em',
          }}
        >
          {price}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span
            style={{
              fontSize: '0.8rem',
              color: 'rgba(249,242,228,0.4)',
              letterSpacing: '0.05em',
            }}
          >
            {period}
          </span>
          {tooltip && (
            <div style={{ position: 'relative' }}>
              <button
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                style={{
                  width: '16px',
                  height: '16px',
                  border: '1px solid rgba(249,242,228,0.3)',
                  borderRadius: '50%',
                  background: 'none',
                  cursor: 'pointer',
                  color: 'rgba(249,242,228,0.5)',
                  fontSize: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                }}
              >
                i
              </button>
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: 'absolute',
                      bottom: '120%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#0C2318',
                      border: '1px solid rgba(249,242,228,0.15)',
                      padding: '10px 14px',
                      width: '200px',
                      fontSize: '11px',
                      color: 'rgba(249,242,228,0.7)',
                      lineHeight: 1.5,
                      letterSpacing: '0.02em',
                      zIndex: 10,
                    }}
                  >
                    {tooltip}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          backgroundColor: hovered ? 'rgba(182,90,47,0.3)' : 'rgba(249,242,228,0.08)',
          margin: '2rem 0',
          transition: 'background-color 0.35s ease',
        }}
      />

      {/* Features */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        {features.map((f) => (
          <li
            key={f}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              color: 'rgba(249,242,228,0.7)',
              fontSize: '0.875rem',
              letterSpacing: '0.02em',
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                color: '#B65A2F',
                fontSize: '0.7rem',
                marginTop: '3px',
                flexShrink: 0,
                fontWeight: 700,
              }}
            >
              &#10003;
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        style={{
          marginTop: '2.5rem',
          width: '100%',
          padding: '14px',
          backgroundColor: isHighlighted ? '#B65A2F' : 'transparent',
          border: `1px solid ${isHighlighted ? '#B65A2F' : 'rgba(249,242,228,0.25)'}`,
          color: '#F9F2E4',
          fontSize: '10px',
          letterSpacing: '0.2em',
          fontWeight: 700,
          textTransform: 'uppercase',
          cursor: 'pointer',
          fontFamily: 'Hero, Georgia, serif',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          const btn = e.currentTarget
          if (!isHighlighted) {
            btn.style.backgroundColor = 'rgba(182,90,47,0.1)'
            btn.style.borderColor = '#B65A2F'
          } else {
            btn.style.backgroundColor = '#943f1e'
          }
        }}
        onMouseLeave={(e) => {
          const btn = e.currentTarget
          btn.style.backgroundColor = isHighlighted ? '#B65A2F' : 'transparent'
          btn.style.borderColor = isHighlighted ? '#B65A2F' : 'rgba(249,242,228,0.25)'
        }}
      >
        GET STARTED
      </button>
    </motion.div>
  )
}

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="grid-overlay"
      style={{ backgroundColor: '#0C2318', position: 'relative' }}
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
              PLANS
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
            SUBSCRIPTION PLANS
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            maxWidth: '900px',
          }}
        >
          <PlanCard
            title="Monthly"
            price="Rs 299"
            period="/ month"
            features={MONTHLY_FEATURES}
            isHighlighted={false}
            index={0}
          />
          <PlanCard
            title="Annual"
            price="Rs 2,499"
            period="/ year"
            badge="Save 30%"
            features={ANNUAL_FEATURES}
            isHighlighted={true}
            index={1}
            tooltip="Annual plans are non-refundable once activated. You retain full access for the entire subscription period."
          />
        </div>
      </div>
    </section>
  )
}
