'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section
      id="cta"
      className="grid-overlay"
      style={{
        backgroundColor: '#0C2318',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative rust line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '2rem',
          right: '2rem',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #B65A2F, transparent)',
          opacity: 0.5,
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '9rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}
        >
          <div style={{ height: '1px', width: '40px', backgroundColor: '#B65A2F' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#B65A2F', fontWeight: 700 }}>
            DOWNLOAD
          </span>
          <div style={{ height: '1px', width: '40px', backgroundColor: '#B65A2F' }} />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          style={{
            fontFamily: 'Hero, Georgia, serif',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 700,
            color: '#F9F2E4',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            lineHeight: 0.95,
            marginBottom: '1.5rem',
          }}
        >
          GET POQUITO
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          style={{
            color: 'rgba(249,242,228,0.5)',
            fontSize: '0.95rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '3rem',
          }}
        >
          iOS & Android. Traditional Mahjong in your pocket.
        </motion.p>

        {/* Download buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a
            href="#"
            style={{
              display: 'block',
              border: '1px solid rgba(249,242,228,0.25)',
              padding: '6px',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = '#B65A2F'
              el.style.boxShadow = '0 0 0 1px #B65A2F'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(249,242,228,0.25)'
              el.style.boxShadow = 'none'
            }}
          >
            <Image
              src="/images/appstore-badge.svg"
              alt="Download on App Store"
              width={160}
              height={48}
              style={{ display: 'block', height: '48px', width: 'auto' }}
            />
          </a>
          <a
            href="#"
            style={{
              display: 'block',
              border: '1px solid rgba(249,242,228,0.25)',
              padding: '6px',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = '#B65A2F'
              el.style.boxShadow = '0 0 0 1px #B65A2F'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(249,242,228,0.25)'
              el.style.boxShadow = 'none'
            }}
          >
            <Image
              src="/images/googleplay-badge.svg"
              alt="Get it on Google Play"
              width={160}
              height={48}
              style={{ display: 'block', height: '48px', width: 'auto' }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
