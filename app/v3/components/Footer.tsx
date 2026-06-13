'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const TILE_ICONS = [
  '/images/v3/tiles/Mpt1m.png',
  '/images/v3/tiles/Mpt2z.png',
  '/images/v3/tiles/Mpu1z.png',
]

const COMPANY_LINKS = [
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Refund Policy', href: '#' },
  { label: 'Cookie Policy', href: '#' },
]

const PLAY_LINKS = [
  { label: 'Download iOS', href: '#' },
  { label: 'Download Android', href: '#' },
  { label: 'Sign In', href: '#login' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0C2318',
        borderTop: '1px solid rgba(249,242,228,0.08)',
        position: 'relative',
      }}
    >
      {/* Top decorative rust line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '2rem',
          right: '2rem',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(182,90,47,0.3), transparent)',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '5rem 2rem 3rem',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '4rem',
        }}
        className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      >
        {/* Brand column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <Link href="/v3" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
            <Image
              src="/images/v3/logo.png"
              alt="Poquito Mahjong"
              width={110}
              height={34}
              style={{ objectFit: 'contain', height: '34px', width: 'auto' }}
            />
          </Link>
          <p
            style={{
              color: 'rgba(249,242,228,0.4)',
              fontSize: '0.8rem',
              lineHeight: 1.7,
              letterSpacing: '0.03em',
              maxWidth: '240px',
            }}
          >
            Precision. Play. Prestige. Traditional Mahjong, engineered for the modern era.
          </p>
        </motion.div>

        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <h4
            style={{
              fontSize: '9px',
              letterSpacing: '0.25em',
              color: 'rgba(249,242,228,0.4)',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            COMPANY
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  style={{
                    color: 'rgba(249,242,228,0.55)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    letterSpacing: '0.04em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color = '#F9F2E4'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(249,242,228,0.55)'
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <h4
            style={{
              fontSize: '9px',
              letterSpacing: '0.25em',
              color: 'rgba(249,242,228,0.4)',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            LEGAL
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  style={{
                    color: 'rgba(249,242,228,0.55)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    letterSpacing: '0.04em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color = '#F9F2E4'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(249,242,228,0.55)'
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Decorative tile column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <h4
            style={{
              fontSize: '9px',
              letterSpacing: '0.25em',
              color: 'rgba(249,242,228,0.4)',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            PLAY
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {PLAY_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  style={{
                    color: 'rgba(249,242,228,0.55)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    letterSpacing: '0.04em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color = '#F9F2E4'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(249,242,228,0.55)'
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Decorative tile outlines */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {TILE_ICONS.map((src, i) => (
              <div
                key={i}
                style={{
                  width: '32px',
                  aspectRatio: '3/4',
                  border: '1px solid rgba(249,242,228,0.15)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={src}
                  alt="Tile"
                  fill
                  style={{ objectFit: 'contain', padding: '2px', opacity: 0.4 }}
                  sizes="32px"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '1.5rem 2rem',
          borderTop: '1px solid rgba(249,242,228,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p
          style={{
            color: 'rgba(249,242,228,0.25)',
            fontSize: '11px',
            letterSpacing: '0.08em',
          }}
        >
          © 2026 Pocket Dragon/Poquito. All Rights Reserved.
        </p>
        <p
          style={{
            color: 'rgba(249,242,228,0.2)',
            fontSize: '10px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          PRECISION. PLAY. PRESTIGE.
        </p>
      </div>
    </footer>
  )
}
