'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const EASE = [0.22, 0.61, 0.36, 1] as const

export default function LoginSection() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [focused, setFocused]   = useState<string | null>(null)
  const [showPass, setShowPass] = useState(false)

  return (
    <section id="login" className="relative overflow-hidden" style={{ minHeight: '100vh' }}>

      {/* Full-bleed background — table-scene.png */}
      <Image
        src="/images/table-scene.png"
        alt="Mahjong table"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay — weighted left for form legibility, lighter right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(110deg, rgba(10,28,18,0.95) 0%, rgba(12,35,24,0.90) 35%, rgba(20,51,34,0.75) 65%, rgba(20,51,34,0.55) 100%)',
        }}
      />

      {/* Subtle rust radial glow top-right */}
      <div
        aria-hidden className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(182,90,47,0.10) 0%, transparent 65%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT — Editorial copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-pq-rust/60" />
              <span className="text-pq-rust text-xs tracking-[0.22em] uppercase font-normal">Member Access</span>
            </div>

            {/* Headline */}
            <h2
              className="font-hero font-bold text-pq-cream leading-tight tracking-tight text-balance mb-6"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}
            >
              WELCOME BACK TO THE TABLE.
            </h2>

            <p className="text-pq-cream leading-relaxed mb-10 max-w-sm font-normal hover:font-bold hover:scale-[1.03] transition-all duration-200">
              Your rank, your history, your rivals — all waiting. Sign in to pick up exactly where you left off.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8">
              {[
                { label: 'Players',      value: '10K+' },
                { label: 'Tables Live',  value: '340+' },
                { label: 'Avg. Game',    value: '22 min' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-hero font-bold text-pq-cream text-2xl">{value}</span>
                  <span className="text-pq-cream text-[10px] tracking-[0.14em] uppercase font-normal">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — Login form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          >
            <div
              className="rounded-2xl p-8 lg:p-10 border"
              style={{
                background: 'rgba(255,255,255,0.07)',
                borderColor: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
              }}
            >
              {/* Logo */}
              <div className="mb-7">
                <Image src="/images/logo.png" alt="Poquito" width={110} height={38} className="brightness-0 invert opacity-80" />
              </div>

              <h3
                className="font-hero font-bold text-pq-cream mb-1.5"
                style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)' }}
              >
                Sign In
              </h3>
              <p className="text-pq-cream text-sm mb-8 font-normal hover:font-bold hover:scale-[1.03] transition-all duration-200">
                Access your Poquito account to continue playing.
              </p>

              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-pq-cream text-xs tracking-[0.14em] uppercase font-normal">
                    Email Address
                  </label>
                  <div
                    className="relative rounded-xl transition-all duration-300"
                    style={{
                      border: `1.5px solid ${focused === 'email' ? 'rgba(249,242,228,0.55)' : 'rgba(255,255,255,0.14)'}`,
                      background: focused === 'email' ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.06)',
                      boxShadow: focused === 'email' ? '0 0 0 3px rgba(249,242,228,0.06)' : 'none',
                    }}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 bg-transparent text-pq-cream text-sm placeholder:text-pq-cream/25 outline-none font-hero"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="text-pq-cream text-xs tracking-[0.14em] uppercase font-normal">
                      Password
                    </label>
                    <a href="#" className="text-pq-rust text-xs hover:underline underline-offset-2 font-normal">
                      Forgot password?
                    </a>
                  </div>
                  <div
                    className="relative rounded-xl transition-all duration-300"
                    style={{
                      border: `1.5px solid ${focused === 'password' ? 'rgba(249,242,228,0.55)' : 'rgba(255,255,255,0.14)'}`,
                      background: focused === 'password' ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.06)',
                      boxShadow: focused === 'password' ? '0 0 0 3px rgba(249,242,228,0.06)' : 'none',
                    }}
                  >
                    <input
                      type={showPass ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocused('password')}
                      onBlur={() => setFocused(null)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3.5 bg-transparent text-pq-cream text-sm placeholder:text-pq-cream/25 outline-none font-hero pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-pq-cream hover:text-pq-cream transition-colors"
                    >
                      {showPass ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
                  className="w-full py-4 text-pq-cream text-sm tracking-[0.12em] uppercase rounded-xl mt-1 font-normal"
                  style={{ background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)', boxShadow: '0 8px 24px rgba(182,90,47,0.30)' }}
                  whileHover={{ scale: 1.01, boxShadow: '0 12px 36px rgba(182,90,47,0.45)' }}
                  whileTap={{ scale: 0.99 }}
                >
                  Sign In
                </motion.button>
              </form>

              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-[1px] bg-white/8" />
                <span className="text-pq-cream text-xs tracking-[0.1em] font-normal">or</span>
                <div className="flex-1 h-[1px] bg-white/8" />
              </div>

              <p className="text-center text-pq-cream text-sm font-normal hover:font-bold hover:scale-[1.03] transition-all duration-200">
                New to Poquito?{' '}
                <a href="#" className="text-pq-rust font-normal hover:underline underline-offset-2">
                  Create an account
                </a>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
