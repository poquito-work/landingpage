'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'

const ROWS = 5
const COLS = 5

function TileMosaic() {
  const [flipped, setFlipped] = useState<boolean[]>(Array(ROWS * COLS).fill(false))
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 60, damping: 20 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Convert spring values to grid tilt
  const rotateY = useTransform(springX, [-1, 1], [-8, 8])
  const rotateX = useTransform(springY, [-1, 1], [6, -6])

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Staggered flip reveal after 500ms
    const timeout = setTimeout(() => {
      const total = ROWS * COLS
      for (let i = 0; i < total; i++) {
        const row = Math.floor(i / COLS)
        const col = i % COLS
        const delay = (row * 0.1 + col * 0.1) * 1000
        setTimeout(() => {
          setFlipped((prev) => {
            const next = [...prev]
            next[i] = true
            return next
          })
        }, delay)
      }
    }, 500)
    return () => clearTimeout(timeout)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / (rect.width / 2))
    mouseY.set((e.clientY - centerY) / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '900px' }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
            gap: '6px',
          }}
        >
          {Array.from({ length: ROWS * COLS }).map((_, i) => {
            const row = Math.floor(i / COLS)
            const col = i % COLS
            const isFlipped = flipped[i]

            return (
              <div
                key={i}
                style={{
                  width: '64px',
                  height: '88px',
                  perspective: '600px',
                  position: 'relative',
                }}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Tile back */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #f0e8d6 0%, #ddd4be 100%)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.3)',
                    }}
                  />
                  {/* Tile front — logo slice */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      borderRadius: '8px',
                      backgroundImage: 'url(/images/poquito-logo.png)',
                      backgroundSize: '500% 500%',
                      backgroundPosition: `${(col / (COLS - 1)) * 100}% ${(row / (ROWS - 1)) * 100}%`,
                      backgroundColor: '#143322',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
                    }}
                  />
                </motion.div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0C2318 0%, #143322 50%, #1a3d28 100%)' }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(182, 90, 47, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[80vh]">
          {/* Left — text */}
          <div className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-xs tracking-[0.3em] font-bold"
              style={{ color: '#B65A2F', fontFamily: 'Hero, Georgia, serif' }}
            >
              TRADITIONAL MAHJONG · REIMAGINED
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-5xl lg:text-7xl font-bold leading-none"
              style={{ fontFamily: 'Hero, Georgia, serif', color: '#F9F2E4', letterSpacing: '-0.02em' }}
            >
              MAHJONG ON YOUR TIME,{' '}
              <span style={{ color: '#B65A2F' }}>ANYWHERE</span>{' '}
              YOU ARE.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-lg leading-relaxed max-w-lg"
              style={{ color: 'rgba(249, 242, 228, 0.65)', fontFamily: 'Hero, Georgia, serif' }}
            >
              Practice, play, and compete your way to the top.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#cta"
                className="px-8 py-3.5 rounded-full text-sm font-bold tracking-widest transition-all duration-200"
                style={{
                  background: '#B65A2F',
                  color: '#F9F2E4',
                  fontFamily: 'Hero, Georgia, serif',
                  boxShadow: '0 8px 24px rgba(182, 90, 47, 0.35)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = '#943f1e'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = '#B65A2F'
                  el.style.transform = 'translateY(0)'
                }}
              >
                Download Free
              </a>

              <div className="flex items-center gap-3">
                <a href="#cta" className="transition-opacity hover:opacity-80">
                  <Image
                    src="/images/appstore-badge.svg"
                    alt="Download on App Store"
                    width={130}
                    height={40}
                    className="h-10 w-auto"
                  />
                </a>
                <a href="#cta" className="transition-opacity hover:opacity-80">
                  <Image
                    src="/images/googleplay-badge.svg"
                    alt="Get it on Google Play"
                    width={130}
                    height={40}
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — tile mosaic */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center h-[480px] lg:h-[560px]"
          >
            <TileMosaic />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs tracking-[0.25em]"
          style={{ color: 'rgba(249, 242, 228, 0.35)', fontFamily: 'Hero, Georgia, serif' }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, rgba(249,242,228,0.4), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
