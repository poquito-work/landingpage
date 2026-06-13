'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function LoginSection() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [cardFocused, setCardFocused] = useState(false)

  const handleFocus = (field: string) => {
    setFocusedField(field)
    setCardFocused(true)
  }

  const handleBlur = () => {
    setFocusedField(null)
    setCardFocused(false)
  }

  return (
    <section
      id="login"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background: table-scene.png with heavy overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/v3/table-scene.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(12,35,24,0.88)',
        }}
      />
      {/* Grid overlay on top */}
      <div
        className="grid-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '9rem 2rem',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="flex flex-col md:grid"
      >
        {/* Left: Title & copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ height: '1px', width: '40px', backgroundColor: '#B65A2F' }} />
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#B65A2F', fontWeight: 700 }}>
              ACCOUNT
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'Hero, Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700,
              color: '#F9F2E4',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
            }}
          >
            SIGN IN
          </h2>
          <p
            style={{
              color: 'rgba(249,242,228,0.55)',
              fontSize: '0.9rem',
              lineHeight: 1.7,
              letterSpacing: '0.02em',
              maxWidth: '340px',
            }}
          >
            Access your account to manage your subscription, view your stats, and pick up right where you left off.
          </p>
        </motion.div>

        {/* Right: Form card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          style={{
            border: `1px solid ${cardFocused ? 'rgba(182,90,47,0.4)' : 'rgba(249,242,228,0.12)'}`,
            backgroundColor: 'rgba(12,35,24,0.7)',
            backdropFilter: 'blur(20px)',
            padding: '2.5rem',
            transform: cardFocused ? 'translateY(-4px)' : 'translateY(0)',
            boxShadow: cardFocused
              ? '0 20px 60px rgba(0,0,0,0.4)'
              : '0 8px 32px rgba(0,0,0,0.2)',
            transition: 'all 0.4s cubic-bezier(0.22,0.61,0.36,1)',
          }}
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Username */}
            <div>
              <label
                htmlFor="v3-username"
                style={{
                  display: 'block',
                  fontSize: '9px',
                  letterSpacing: '0.25em',
                  color: 'rgba(249,242,228,0.5)',
                  fontWeight: 700,
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                }}
              >
                USERNAME
              </label>
              <input
                id="v3-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => handleFocus('username')}
                onBlur={handleBlur}
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(249,242,228,0.04)',
                  border: `1px solid ${focusedField === 'username' ? '#B65A2F' : 'rgba(249,242,228,0.15)'}`,
                  color: '#F9F2E4',
                  padding: '12px 14px',
                  fontSize: '0.875rem',
                  fontFamily: 'Hero, Georgia, serif',
                  outline: 'none',
                  boxShadow:
                    focusedField === 'username'
                      ? '0 0 0 2px rgba(182,90,47,0.20)'
                      : 'none',
                  transition: 'all 0.25s ease',
                  letterSpacing: '0.03em',
                }}
                placeholder="Enter your username"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="v3-password"
                style={{
                  display: 'block',
                  fontSize: '9px',
                  letterSpacing: '0.25em',
                  color: 'rgba(249,242,228,0.5)',
                  fontWeight: 700,
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                }}
              >
                PASSWORD
              </label>
              <input
                id="v3-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => handleFocus('password')}
                onBlur={handleBlur}
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(249,242,228,0.04)',
                  border: `1px solid ${focusedField === 'password' ? '#B65A2F' : 'rgba(249,242,228,0.15)'}`,
                  color: '#F9F2E4',
                  padding: '12px 14px',
                  fontSize: '0.875rem',
                  fontFamily: 'Hero, Georgia, serif',
                  outline: 'none',
                  boxShadow:
                    focusedField === 'password'
                      ? '0 0 0 2px rgba(182,90,47,0.20)'
                      : 'none',
                  transition: 'all 0.25s ease',
                  letterSpacing: '0.03em',
                }}
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot password */}
            <div style={{ textAlign: 'right', marginTop: '-0.75rem' }}>
              <button
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(249,242,228,0.4)',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  fontFamily: 'Hero, Georgia, serif',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#B65A2F',
                border: '1px solid #B65A2F',
                color: '#F9F2E4',
                fontSize: '10px',
                letterSpacing: '0.2em',
                fontWeight: 700,
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'Hero, Georgia, serif',
                transition: 'background-color 0.3s ease',
                marginTop: '0.5rem',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#943f1e'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#B65A2F'
              }}
            >
              SIGN IN
            </button>

            {/* Divider */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '0.5rem',
              }}
            >
              <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(249,242,228,0.08)' }} />
              <span
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.15em',
                  color: 'rgba(249,242,228,0.3)',
                }}
              >
                OR
              </span>
              <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(249,242,228,0.08)' }} />
            </div>

            {/* Sign up */}
            <div style={{ textAlign: 'center' }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(249,242,228,0.4)',
                  letterSpacing: '0.03em',
                }}
              >
                Don&apos;t have an account?{' '}
              </span>
              <button
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#B65A2F',
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'Hero, Georgia, serif',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                SIGN UP
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
