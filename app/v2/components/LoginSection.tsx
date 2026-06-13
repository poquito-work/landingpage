'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const EASE = [0.22, 0.61, 0.36, 1] as const

export default function LoginSection() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [focused, setFocused]   = useState<string | null>(null)
  const [showPass, setShowPass] = useState(false)

  return (
    <section id="login" className="relative overflow-hidden" style={{ minHeight: '100vh' }}>

      {/* Full-bleed background — table-scene.png */}
      <Image
        src="/images/v2/table-scene.png"
        alt="Mahjong table"
        fill
        className="object-cover object-center"
        priority={false}
      />

      {/* Heavy dark overlay — weighted left for text/form legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(110deg, rgba(8,22,14,0.97) 0%, rgba(12,35,24,0.92) 38%, rgba(20,51,34,0.78) 65%, rgba(20,51,34,0.50) 100%)',
        }}
      />

      {/* Subtle rust glow top-right */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(182,90,47,0.09) 0%, transparent 65%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT — Editorial copy + stats ── */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-7">
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
                Member Access
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: 'Hero, Georgia, serif',
                fontWeight: 700,
                color: '#F9F2E4',
                fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                lineHeight: 1.02,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              WELCOME BACK TO THE TABLE.
            </h2>

            <p
              style={{
                color: 'rgba(249,242,228,0.65)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: 380,
                fontWeight: 400,
                fontSize: '0.95rem',
              }}
            >
              Your rank, your history, your rivals — all waiting. Sign in to pick up exactly where you left off.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-10 flex-wrap">
              {[
                { label: 'Players',     value: '10K+' },
                { label: 'Tables Live', value: '340+' },
                { label: 'Avg Game',    value: '22 min' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span
                    style={{
                      fontFamily: 'Hero, Georgia, serif',
                      fontWeight: 700,
                      color: '#F9F2E4',
                      fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                    }}
                  >
                    {value}
                  </span>
                  <span
                    style={{
                      color: 'rgba(249,242,228,0.45)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — Glassmorphic login card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          >
            <div
              className="rounded-2xl p-8 lg:p-10"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(28px)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.38)',
              }}
            >
              {/* Logo */}
              <div style={{ marginBottom: '1.75rem' }}>
                <Image src="/images/v2/logo.png" alt="Poquito" width={108} height={36} className="brightness-0 invert opacity-80" />
              </div>

              <h3
                style={{
                  fontFamily: 'Hero, Georgia, serif',
                  fontWeight: 700,
                  color: '#F9F2E4',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.02em',
                }}
              >
                Sign In
              </h3>
              <p
                style={{
                  color: 'rgba(249,242,228,0.50)',
                  fontSize: '0.85rem',
                  marginBottom: '2rem',
                  fontWeight: 400,
                }}
              >
                Access your Poquito account to continue playing.
              </p>

              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>

                {/* Username */}
                <div className="flex flex-col gap-2">
                  <label
                    style={{
                      color: 'rgba(249,242,228,0.65)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                    }}
                  >
                    Username
                  </label>
                  <div
                    style={{
                      borderRadius: 12,
                      border: `1.5px solid ${focused === 'username' ? 'rgba(249,242,228,0.55)' : 'rgba(255,255,255,0.14)'}`,
                      background: focused === 'username' ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.06)',
                      boxShadow: focused === 'username' ? '0 0 0 3px rgba(249,242,228,0.06)' : 'none',
                      transition: 'border-color 0.25s ease, background 0.25s ease',
                    }}
                  >
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      onFocus={() => setFocused('username')}
                      onBlur={() => setFocused(null)}
                      placeholder="your_username"
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        background: 'transparent',
                        color: '#F9F2E4',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontFamily: 'Hero, Georgia, serif',
                        fontWeight: 400,
                      }}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label
                      style={{
                        color: 'rgba(249,242,228,0.65)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        fontWeight: 400,
                      }}
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      style={{ color: '#B65A2F', fontSize: '0.78rem', fontWeight: 400, textDecoration: 'none' }}
                      className="hover:underline underline-offset-2"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div
                    style={{
                      borderRadius: 12,
                      border: `1.5px solid ${focused === 'password' ? 'rgba(249,242,228,0.55)' : 'rgba(255,255,255,0.14)'}`,
                      background: focused === 'password' ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.06)',
                      boxShadow: focused === 'password' ? '0 0 0 3px rgba(249,242,228,0.06)' : 'none',
                      transition: 'border-color 0.25s ease, background 0.25s ease',
                      position: 'relative',
                    }}
                  >
                    <input
                      type={showPass ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocused('password')}
                      onBlur={() => setFocused(null)}
                      placeholder="••••••••"
                      style={{
                        width: '100%',
                        padding: '0.875rem 3rem 0.875rem 1rem',
                        background: 'transparent',
                        color: '#F9F2E4',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontFamily: 'Hero, Georgia, serif',
                        fontWeight: 400,
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      style={{
                        position: 'absolute',
                        right: 14,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'rgba(249,242,228,0.45)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      {showPass ? (
                        <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="w-full py-4 text-pq-cream text-sm tracking-widest uppercase rounded-xl mt-1"
                  style={{
                    background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)',
                    boxShadow: '0 8px 24px rgba(182,90,47,0.30)',
                    fontFamily: 'Hero, Georgia, serif',
                    fontWeight: 400,
                    letterSpacing: '0.14em',
                    fontSize: '0.82rem',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  whileHover={{ scale: 1.01, boxShadow: '0 12px 36px rgba(182,90,47,0.45)' }}
                  whileTap={{ scale: 0.99 }}
                >
                  Sign In
                </motion.button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
                <span style={{ color: 'rgba(249,242,228,0.35)', fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.08em' }}>
                  or
                </span>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
              </div>

              <p style={{ textAlign: 'center', color: 'rgba(249,242,228,0.55)', fontSize: '0.85rem', fontWeight: 400 }}>
                New to Poquito?{' '}
                <a href="#" style={{ color: '#B65A2F', fontWeight: 400, textDecoration: 'none' }} className="hover:underline underline-offset-2">
                  Sign up
                </a>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
