'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ROWS = 4
const COLS = 4

function TileMosaic() {
  const [revealed, setRevealed] = useState(false)
  const [mosaicHover, setMosaicHover] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      onHoverStart={() => setMosaicHover(true)}
      onHoverEnd={() => setMosaicHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gap: '6px',
        width: '100%',
        maxWidth: '480px',
        perspective: '1400px',
        transform: mosaicHover ? 'scale(1.01)' : 'scale(1)',
        transition: 'transform 0.5s cubic-bezier(0.22,0.61,0.36,1)',
      }}
    >
      {Array.from({ length: ROWS * COLS }, (_, idx) => {
        const row = Math.floor(idx / COLS)
        const col = idx % COLS
        const dr = Math.abs(row - 1.5)
        const dc = Math.abs(col - 1.5)
        const distance = Math.sqrt(dr * dr + dc * dc)
        const delay = 0.5 + distance * 0.18

        return (
          <Tile
            key={idx}
            row={row}
            col={col}
            delay={delay}
            revealed={revealed}
          />
        )
      })}
    </motion.div>
  )
}

interface TileProps {
  row: number
  col: number
  delay: number
  revealed: boolean
}

function Tile({ row, col, delay, revealed }: TileProps) {
  const bgX = (col / (COLS - 1)) * 100
  const bgY = (row / (ROWS - 1)) * 100

  return (
    <div
      style={{
        aspectRatio: '3 / 4',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: `transform 0.65s cubic-bezier(0.22,0.61,0.36,1) ${delay}s`,
        transform: revealed ? 'rotateY(180deg)' : 'rotateY(0deg)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      {/* Back face — off-white bone tile with concentric borders */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          backgroundColor: '#F9F2E4',
        }}
      >
        <div style={{ position: 'absolute', inset: '5px', border: '1px solid rgba(20,51,34,0.18)' }} />
        <div style={{ position: 'absolute', inset: '9px', border: '1px solid rgba(20,51,34,0.10)' }} />
      </div>

      {/* Front face — sliced logo segment */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          backgroundColor: '#143322',
          backgroundImage: "url('/images/poquito-logo.png')",
          backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
          backgroundPosition: `${bgX}% ${bgY}%`,
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: '#143322',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="grid-overlay"
    >
      {/* Content */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '7rem 2rem 5rem',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '55fr 45fr',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="flex flex-col-reverse md:grid"
      >
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          {/* Overline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                height: '1px',
                width: '40px',
                backgroundColor: '#B65A2F',
              }}
            />
            <span
              style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: '#B65A2F',
                fontWeight: 700,
              }}
            >
              TRADITIONAL MAHJONG
            </span>
          </div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            style={{
              fontFamily: 'Hero, Georgia, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              color: '#F9F2E4',
              textTransform: 'uppercase',
            }}
          >
            MAHJONG ON YOUR TIME, ANYWHERE YOU ARE.
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            style={{
              color: 'rgba(249,242,228,0.65)',
              fontSize: '1rem',
              letterSpacing: '0.03em',
              lineHeight: 1.7,
              maxWidth: '440px',
            }}
          >
            Practice, play, and compete your way to the top.
          </motion.p>

          {/* Download buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a
              href="#"
              style={{
                display: 'block',
                border: '1px solid rgba(249,242,228,0.25)',
                padding: '4px',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#B65A2F'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                  'rgba(249,242,228,0.25)'
              }}
            >
              <Image
                src="/images/appstore-badge.svg"
                alt="Download on App Store"
                width={140}
                height={42}
                style={{ display: 'block', height: '42px', width: 'auto' }}
              />
            </a>
            <a
              href="#"
              style={{
                display: 'block',
                border: '1px solid rgba(249,242,228,0.25)',
                padding: '4px',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#B65A2F'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                  'rgba(249,242,228,0.25)'
              }}
            >
              <Image
                src="/images/googleplay-badge.svg"
                alt="Get it on Google Play"
                width={140}
                height={42}
                style={{ display: 'block', height: '42px', width: 'auto' }}
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Tile Mosaic */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <TileMosaic />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(transparent, #143322)',
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}
