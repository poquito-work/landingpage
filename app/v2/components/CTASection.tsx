'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.22, 0.61, 0.36, 1] as const

export default function CTASection() {
  return (
    <section
      id="download"
      className="relative overflow-hidden section-pad"
      style={{ background: '#143322' }}
    >
      {/* Rust radial glow — gives a warm "stage light" effect */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 50% 60%, rgba(182,90,47,0.10) 0%, transparent 65%)',
        }}
      />
      {/* Grain texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center relative z-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span aria-hidden style={{ display: 'block', height: 1, width: 40, background: '#B65A2F' }} />
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
            Get Started
          </span>
          <span aria-hidden style={{ display: 'block', height: 1, width: 40, background: '#B65A2F' }} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
          style={{
            fontFamily: 'Hero, Georgia, serif',
            fontWeight: 700,
            color: '#F9F2E4',
            fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
            lineHeight: 1.02,
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}
        >
          DOWNLOAD POQUITO
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          style={{
            color: 'rgba(249,242,228,0.60)',
            fontSize: '1rem',
            lineHeight: 1.7,
            marginBottom: '3rem',
            fontWeight: 400,
          }}
        >
          Available on iOS and Android. Join 10,000+ players.
        </motion.p>

        {/* Download buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <StoreButton
            src="/images/appstore-badge.svg"
            alt="Download on the App Store"
            label="App Store"
          />
          <StoreButton
            src="/images/googleplay-badge.svg"
            alt="Get it on Google Play"
            label="Google Play"
          />
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="flex items-center justify-center gap-12 mt-16 flex-wrap"
        >
          {[
            { label: 'Active Players', value: '10,000+'  },
            { label: 'App Store Rating', value: '4.8★'  },
            { label: 'Countries',       value: '120+'    },
          ].map(({ label, value }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: 'Hero, Georgia, serif',
                  fontWeight: 700,
                  color: '#F9F2E4',
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                  lineHeight: 1,
                }}
              >
                {value}
              </p>
              <p
                style={{
                  color: 'rgba(249,242,228,0.45)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                  marginTop: '0.4rem',
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function StoreButton({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <motion.a
      href="#"
      aria-label={alt}
      whileHover={{ scale: 1.05, filter: 'brightness(1.08)' } as never}
      whileTap={{ scale: 0.97 }}
      style={{ display: 'inline-flex' }}
    >
      <Image
        src={src}
        alt={alt}
        width={160}
        height={48}
        style={{ height: 48, width: 'auto', display: 'block' }}
      />
    </motion.a>
  )
}
