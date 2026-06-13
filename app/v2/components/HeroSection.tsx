'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState, useCallback } from 'react'

const EASE = [0.22, 0.61, 0.36, 1] as const
const ROWS = 5
const COLS = 5

function MosaicTile({
  row,
  col,
  flipped,
  onFlipComplete,
}: {
  row: number
  col: number
  flipped: boolean
  onFlipComplete: () => void
}) {
  const tileRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [fullyFlipped, setFullyFlipped] = useState(false)
  const rotX = useMotionValue(0)
  const rotY = useMotionValue(0)
  const springX = useSpring(rotX, { stiffness: 180, damping: 18 })
  const springY = useSpring(rotY, { stiffness: 180, damping: 18 })

  // Logo slice calculation — ROWS and COLS are always > 1, so no guard needed
  const bgPosX = (col / (COLS - 1)) * 100
  const bgPosY = (row / (ROWS - 1)) * 100

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!fullyFlipped || !tileRef.current) return
      const rect = tileRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      rotY.set(dx * 6)
      rotX.set(-dy * 6)
    },
    [fullyFlipped, rotX, rotY]
  )

  const handleMouseLeave = useCallback(() => {
    setHovered(false)
    rotX.set(0)
    rotY.set(0)
  }, [rotX, rotY])

  return (
    <div
      ref={tileRef}
      className="relative cursor-default"
      style={{
        perspective: 600,
        width: '100%',
        aspectRatio: '3/4',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Tilt wrapper — only active after flip completes */}
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          rotateX: fullyFlipped ? springX : 0,
          rotateY: fullyFlipped ? springY : 0,
          transformStyle: 'preserve-3d',
        }}
      >
      {/* Flip inner */}
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{
          duration: 0.7,
          ease: EASE,
          delay: row * 0.12 + col * 0.08 + 0.5,
        }}
        onAnimationComplete={() => {
          if (flipped) setFullyFlipped(true)
        }}
      >
        {/* BACK — off-white tile */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: 8,
            background: '#F9F2E4',
            border: '2px solid rgba(20,51,34,0.12)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.22)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Mahjong-style double-border inset */}
          <div
            style={{
              position: 'absolute',
              inset: 5,
              borderRadius: 4,
              border: '1.5px solid rgba(20,51,34,0.10)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 8,
              borderRadius: 3,
              border: '1px solid rgba(20,51,34,0.07)',
            }}
          />
        </div>

        {/* FRONT — logo slice */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: 8,
            rotateY: 180,
            overflow: 'hidden',
            boxShadow: hovered && fullyFlipped
              ? '0 8px 32px rgba(182,90,47,0.25), 0 2px 8px rgba(0,0,0,0.3)'
              : '0 4px 16px rgba(0,0,0,0.3)',
            backgroundImage: 'url(/images/poquito-logo.png)',
            backgroundSize: '500% 500%',
            backgroundPosition: `${bgPosX}% ${bgPosY}%`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Green overlay so the logo pops on the dark board */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(20,51,34,0.10)',
              borderRadius: 8,
            }}
          />
          {/* Inset border */}
          <div
            style={{
              position: 'absolute',
              inset: 4,
              borderRadius: 5,
              border: '1px solid rgba(249,242,228,0.12)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </motion.div>
      </motion.div>
    </div>
  )
}

function TileMosaic() {
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    // Trigger the cascade flip after 500ms
    const t = setTimeout(() => setFlipped(true), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gap: '8px',
        width: '100%',
        maxWidth: 380,
      }}
    >
      {Array.from({ length: ROWS * COLS }).map((_, idx) => {
        const r = Math.floor(idx / COLS)
        const c = idx % COLS
        return (
          <MosaicTile
            key={idx}
            row={r}
            col={c}
            flipped={flipped}
            onFlipComplete={() => {}}
          />
        )
      })}
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: '#143322' }}
    >
      {/* Subtle radial glow — centered left */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 0% 50%, rgba(26,66,48,0.70) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 100% 50%, rgba(182,90,47,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Grain texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20 lg:pt-24 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* ── LEFT — Editorial text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 lg:gap-10 relative z-10"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span
                aria-hidden
                style={{ display: 'block', height: 1, width: 40, background: '#B65A2F' }}
              />
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
                Traditional Mahjong · Reimagined
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: 'Hero, Georgia, serif',
                fontWeight: 700,
                color: '#F9F2E4',
                lineHeight: 1.02,
                letterSpacing: '0.02em',
                fontSize: 'clamp(2.6rem, 5.5vw, 5.2rem)',
                textTransform: 'uppercase',
              }}
            >
              MAHJONG ON YOUR TIME,{' '}
              <span style={{ color: '#B65A2F' }}>ANYWHERE</span>{' '}
              YOU ARE.
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={itemVariants}
              style={{
                color: 'rgba(249,242,228,0.75)',
                fontSize: 'clamp(1rem, 1.4vw, 1.1rem)',
                lineHeight: 1.7,
                maxWidth: 460,
                fontWeight: 400,
              }}
            >
              Practice, play, and compete your way to the top.
              Enjoy real-time Traditional Mahjong action at your fingertips.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <motion.a
                href="#pricing"
                className="inline-flex items-center gap-3 text-pq-cream px-8 py-4 rounded-full text-sm uppercase"
                style={{
                  background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)',
                  letterSpacing: '0.12em',
                  fontFamily: 'Hero, Georgia, serif',
                  fontWeight: 400,
                  boxShadow: '0 8px 32px rgba(182,90,47,0.35)',
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 16px 48px rgba(182,90,47,0.50)' }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Download App</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              <div className="flex items-center gap-3">
                <StoreButton
                  icon="/images/v2/appstore.png"
                  label="App Store"
                />
                <StoreButton
                  icon="/images/v2/googleplay.png"
                  label="Google Play"
                />
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                {['#2a5c3f', '#B65A2F', '#1a4230'].map((bg, i) => (
                  <div
                    key={i}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      border: '2px solid rgba(249,242,228,0.18)',
                      background: bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 10,
                      fontWeight: 700,
                      color: '#F9F2E4',
                    }}
                  >
                    {['A', 'M', 'R'][i]}
                  </div>
                ))}
              </div>
              <span style={{ color: 'rgba(249,242,228,0.65)', fontSize: '0.85rem', fontWeight: 400 }}>
                Join{' '}
                <span style={{ color: '#F9F2E4', fontWeight: 700 }}>10,000+</span>{' '}
                players worldwide
              </span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — 5×5 Tile Mosaic ── */}
          <motion.div
            initial={{ opacity: 0, x: 48, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
            className="relative flex items-center justify-center z-10"
          >
            {/* Ambient glow behind mosaic */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: -40,
                background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(182,90,47,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <TileMosaic />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span
          style={{
            color: 'rgba(249,242,228,0.35)',
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <motion.div
          style={{
            width: 1,
            height: 36,
            background: 'linear-gradient(to bottom, rgba(249,242,228,0.25), transparent)',
          }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

function StoreButton({ icon, label }: { icon: string; label: string }) {
  return (
    <motion.a
      href="#"
      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl"
      style={{
        background: 'rgba(249,242,228,0.06)',
        border: '1px solid rgba(249,242,228,0.12)',
        backdropFilter: 'blur(8px)',
      }}
      whileHover={{ scale: 1.04, background: 'rgba(249,242,228,0.10)' } as never}
      whileTap={{ scale: 0.97 }}
    >
      <Image src={icon} alt={label} width={20} height={20} className="rounded-sm flex-shrink-0" />
      <span
        style={{
          fontSize: '0.82rem',
          color: '#F9F2E4',
          fontWeight: 400,
          whiteSpace: 'nowrap',
          fontFamily: 'Hero, Georgia, serif',
        }}
      >
        {label}
      </span>
    </motion.a>
  )
}
