'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const EASE = [0.22, 0.61, 0.36, 1] as const

const navLinks = [
  { label: 'Home',       href: '#hero'    },
  { label: 'About Us',   href: '#about'   },
  { label: 'Contact Us', href: '#contact' },
]

/* Sections with a light (cream) background — nav uses dark text on these */
const LIGHT_IDS = new Set(['hero', 'faq'])
const SECTION_IDS = ['hero', 'pricing', 'features', 'login', 'faq', 'cta']

export default function Navigation() {
  const [scrolled,  setScrolled]  = useState(false)
  const [onLight,   setOnLight]   = useState(true)   // true = over cream section
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  /* Detect active section by comparing scroll position to offsetTop values */
  useEffect(() => {
    const update = () => {
      const y = window.scrollY + 88
      let active = 'hero'
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && y >= el.offsetTop) active = id
      }
      setOnLight(LIGHT_IDS.has(active))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  /* isDark drives all nav colours */
  const isDark = !onLight

  const navBg = scrolled
    ? isDark
      ? 'rgba(12,35,24,0.88)'
      : 'rgba(249,242,228,0.82)'
    : 'transparent'

  const navBorder = scrolled
    ? isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(20,51,34,0.09)'
    : 'none'

  const navShadow = scrolled
    ? isDark ? '0 4px 24px rgba(0,0,0,0.22)' : '0 4px 20px rgba(20,51,34,0.06)'
    : 'none'

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: navBg,
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: navBorder,
        boxShadow: navShadow,
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* ── Logo + Poquito name ── */}
        <Link href="/" className="flex items-center gap-3 relative z-10">
          <Image
            src="/images/logo.png"
            alt="Pocket Dragon Studios"
            width={90}
            height={32}
            priority
            className={`transition-all duration-500 ${isDark ? 'brightness-0 invert opacity-85' : 'opacity-90'}`}
          />
          <span
            className={`transition-all duration-500 text-xl ${isDark ? 'text-white/18' : 'text-pq-green/20'}`}
          >|</span>
          <span
            className={`font-hero font-bold tracking-[-0.02em] transition-all duration-500 ${isDark ? 'text-pq-cream' : 'text-pq-green'}`}
            style={{ fontSize: '1.45rem', lineHeight: 1 }}
          >
            Poquito
          </span>
        </Link>

        {/* ── Desktop nav links ── */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm tracking-[0.08em] uppercase transition-all duration-300 hover:tracking-[0.12em] ${
                isDark
                  ? 'text-pq-cream/65 hover:text-pq-cream'
                  : 'text-pq-green/60 hover:text-pq-green'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Login CTA ── */}
        <Link
          href="#login"
          className={`hidden md:flex items-center gap-2 px-6 py-2.5 text-sm tracking-[0.08em] uppercase rounded-full transition-all duration-300 ${
            isDark
              ? 'text-pq-cream/75 border border-pq-cream/20 hover:bg-pq-cream/10 hover:text-pq-cream hover:border-pq-cream/40'
              : 'text-pq-green border border-pq-green/22 hover:bg-pq-green/6 hover:border-pq-green/38'
          }`}
        >
          Login
        </Link>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          aria-label="Toggle menu"
        >
          {[
            menuOpen ? { rotate: 45, y: 5 }  : { rotate: 0, y: 0 },
            menuOpen ? { opacity: 0 }         : { opacity: 1 },
            menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 },
          ].map((anim, i) => (
            <motion.span
              key={i}
              className={`block w-6 h-[1.5px] origin-center ${isDark ? 'bg-pq-cream' : 'bg-pq-green'}`}
              animate={anim}
              transition={{ duration: 0.3 }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <motion.div
        className="md:hidden absolute top-full left-0 right-0 bg-pq-green/96 backdrop-blur-2xl border-b border-white/10"
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        style={{ overflow: 'hidden' }}
      >
        <div className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-pq-cream/70 text-base tracking-[0.1em] uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#login"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-6 py-3 border border-pq-cream/30 text-pq-cream text-sm tracking-[0.1em] uppercase rounded-full"
          >
            Login
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  )
}
