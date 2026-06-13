'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const EASE = [0.22, 0.61, 0.36, 1] as const

const navLinks = [
  { label: 'Home',     href: '#hero'     },
  { label: 'Features', href: '#features' },
  { label: 'Pricing',  href: '#pricing'  },
  { label: 'FAQ',      href: '#faq'      },
]

export default function Navigation() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 48)
  })

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(12,35,24,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.28)' : 'none',
        transition: 'background 0.45s ease, backdrop-filter 0.45s ease, border-color 0.45s ease, box-shadow 0.45s ease',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* ── Logo + brand name ── */}
        <Link href="/" className="flex items-center gap-3 relative z-10">
          <Image
            src="/images/v2/logo.png"
            alt="Poquito Mahjong"
            width={88}
            height={30}
            priority
            className="brightness-0 invert opacity-85"
          />
          <span
            style={{
              color: 'rgba(249,242,228,0.35)',
              fontWeight: 300,
              fontSize: '1.1rem',
            }}
          >
            |
          </span>
          <span
            style={{
              fontFamily: 'Hero, Georgia, serif',
              fontWeight: 700,
              color: '#F9F2E4',
              fontSize: '1.4rem',
              lineHeight: 1,
              letterSpacing: '-0.01em',
            }}
          >
            Poquito
          </span>
        </Link>

        {/* ── Desktop nav links — center-right ── */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'Hero, Georgia, serif',
                fontSize: '0.78rem',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: 'rgba(249,242,228,0.65)',
                fontWeight: 400,
                transition: 'color 0.25s ease',
              }}
              className="hover:text-pq-cream transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Download CTA — rust pill ── */}
        <motion.a
          href="#download"
          className="hidden md:inline-flex items-center gap-2 text-pq-cream rounded-full"
          style={{
            background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)',
            padding: '0.55rem 1.4rem',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'Hero, Georgia, serif',
            fontWeight: 400,
            boxShadow: '0 4px 16px rgba(182,90,47,0.30)',
          }}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(182,90,47,0.45)' }}
          whileTap={{ scale: 0.97 }}
        >
          Download
        </motion.a>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 z-50"
          aria-label="Toggle menu"
        >
          {[
            menuOpen ? { rotate: 45,   y: 7  } : { rotate: 0, y: 0 },
            menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 },
            menuOpen ? { rotate: -45,  y: -7 } : { rotate: 0, y: 0 },
          ].map((anim, i) => (
            <motion.span
              key={i}
              className="block w-6 origin-center"
              style={{ height: '1.5px', background: '#F9F2E4' }}
              animate={anim}
              transition={{ duration: 0.3 }}
            />
          ))}
        </button>
      </div>

      {/* ── Full-screen mobile overlay menu ── */}
      <motion.div
        className="md:hidden fixed inset-0 flex flex-col items-center justify-center"
        style={{ background: 'rgba(10,28,18,0.97)', backdropFilter: 'blur(24px)', zIndex: 40 }}
        initial={{ opacity: 0, pointerEvents: 'none' }}
        animate={
          menuOpen
            ? { opacity: 1, pointerEvents: 'auto' as never }
            : { opacity: 0, pointerEvents: 'none' as never }
        }
        transition={{ duration: 0.4, ease: EASE }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: EASE }}
            >
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'Hero, Georgia, serif',
                  fontWeight: 700,
                  fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#F9F2E4',
                }}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: navLinks.length * 0.06, duration: 0.4, ease: EASE }}
          >
            <a
              href="#download"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Hero, Georgia, serif',
                fontWeight: 400,
                fontSize: '0.85rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#F9F2E4',
                background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)',
                padding: '0.75rem 2.5rem',
                borderRadius: 99,
              }}
            >
              Download
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
