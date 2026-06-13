'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'FEATURES', href: '#features' },
  { label: 'PRICING', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          backgroundColor: scrolled ? 'rgba(12,35,24,0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(249,242,228,0.1)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.22,0.61,0.36,1)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link href="/v3" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image
              src="/images/v3/logo.png"
              alt="Poquito Mahjong"
              width={120}
              height={36}
              style={{ objectFit: 'contain', height: '36px', width: 'auto' }}
            />
          </Link>

          {/* Center Links */}
          <div
            style={{
              display: 'flex',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  color: 'rgba(249,242,228,0.7)',
                  textDecoration: 'none',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  fontWeight: 700,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#F9F2E4'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(249,242,228,0.7)'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Login button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link
              href="#login"
              className="hidden md:block"
              style={{
                color: '#F9F2E4',
                border: '1px solid rgba(249,242,228,0.3)',
                padding: '8px 20px',
                fontSize: '10px',
                letterSpacing: '0.2em',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = '#B65A2F'
                el.style.color = '#B65A2F'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(249,242,228,0.3)'
                el.style.color = '#F9F2E4'
              }}
            >
              LOGIN
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '22px',
                    height: '1px',
                    backgroundColor: '#F9F2E4',
                    transition: 'all 0.3s ease',
                    transform:
                      mobileOpen
                        ? i === 0
                          ? 'rotate(45deg) translate(4px, 4px)'
                          : i === 1
                          ? 'scaleX(0)'
                          : 'rotate(-45deg) translate(4px, -4px)'
                        : 'none',
                    opacity: mobileOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>

        {/* Decorative rule when scrolled */}
        {scrolled && (
          <div
            style={{
              position: 'absolute',
              bottom: '-1px',
              left: '2rem',
              right: '2rem',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(182,90,47,0.4), transparent)',
            }}
          />
        )}
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: 'rgba(12,35,24,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(249,242,228,0.1)',
              padding: '2rem',
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  color: '#F9F2E4',
                  textDecoration: 'none',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  fontWeight: 700,
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(249,242,228,0.08)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#login"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                marginTop: '1rem',
                color: '#F9F2E4',
                border: '1px solid rgba(249,242,228,0.3)',
                padding: '12px 20px',
                fontSize: '10px',
                letterSpacing: '0.2em',
                fontWeight: 700,
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              LOGIN
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
