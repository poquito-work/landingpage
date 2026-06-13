'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'features', href: '#features' },
    { label: 'pricing', href: '#pricing' },
    { label: 'faq', href: '#faq' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        borderBottom: scrolled ? '1px solid rgba(249, 242, 228, 0.08)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        background: scrolled ? 'rgba(20, 51, 34, 0.85)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/v4" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg overflow-hidden">
            <Image
              src="/images/v4/logo.png"
              alt="Poquito"
              fill
              className="object-contain"
            />
          </div>
          <span
            className="text-xl font-bold tracking-wider"
            style={{ fontFamily: 'Hero, Georgia, serif', color: '#F9F2E4' }}
          >
            Poquito
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest transition-colors duration-200"
              style={{
                fontFamily: 'Hero, Georgia, serif',
                color: 'rgba(249, 242, 228, 0.6)',
                letterSpacing: '0.1em',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#F9F2E4' }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(249, 242, 228, 0.6)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#cta"
            className="px-6 py-2.5 rounded-full text-sm font-bold tracking-widest transition-all duration-200"
            style={{
              background: '#B65A2F',
              color: '#F9F2E4',
              fontFamily: 'Hero, Georgia, serif',
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#943f1e' }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.background = '#B65A2F' }}
          >
            Download
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 rounded-full"
            style={{ background: '#F9F2E4' }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 rounded-full"
            style={{ background: '#F9F2E4' }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 rounded-full"
            style={{ background: '#F9F2E4' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(20, 51, 34, 0.96)', backdropFilter: 'blur(24px)' }}
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base tracking-widest"
                  style={{ fontFamily: 'Hero, Georgia, serif', color: 'rgba(249, 242, 228, 0.7)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#cta"
                className="inline-block px-6 py-3 rounded-full text-sm font-bold tracking-widest text-center"
                style={{ background: '#B65A2F', color: '#F9F2E4', fontFamily: 'Hero, Georgia, serif' }}
                onClick={() => setMenuOpen(false)}
              >
                Download
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
