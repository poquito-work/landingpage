'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: '50K+', label: 'Active Players' },
  { value: '2M+', label: 'Games Played' },
  { value: '4.8★', label: 'App Rating' },
]

export default function LoginSection() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const inputStyle = (field: string) => ({
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.06)',
    border: focusedField === field
      ? '1px solid rgba(182, 90, 47, 0.7)'
      : '1px solid rgba(249, 242, 228, 0.1)',
    color: '#F9F2E4',
    fontFamily: 'Hero, Georgia, serif',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border 0.2s ease, box-shadow 0.2s ease',
    boxShadow: focusedField === field
      ? '0 0 0 3px rgba(182, 90, 47, 0.12)'
      : 'none',
  })

  return (
    <section
      id="login"
      className="relative section-pad overflow-hidden"
    >
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/v4/table-scene.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 51, 34, 0.9) 0%, rgba(12, 35, 24, 0.75) 100%)',
          }}
        />
      </div>

      {/* Section number watermark */}
      <div
        className="absolute bottom-8 right-4 select-none pointer-events-none"
        style={{
          fontFamily: 'Hero, Georgia, serif',
          fontSize: '15vw',
          fontWeight: 700,
          color: 'rgba(249, 242, 228, 0.04)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        04
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <p
              className="text-xs tracking-[0.3em] font-bold mb-6"
              style={{ color: '#B65A2F', fontFamily: 'Hero, Georgia, serif' }}
            >
              SECTION 04
            </p>
            <h2
              className="text-4xl lg:text-6xl font-bold mb-8 leading-tight"
              style={{
                fontFamily: 'Hero, Georgia, serif',
                color: '#F9F2E4',
                letterSpacing: '-0.02em',
              }}
            >
              WELCOME BACK.<br />
              <span style={{ color: '#B65A2F' }}>YOUR TABLE</span><br />
              AWAITS.
            </h2>

            <p
              className="text-base leading-relaxed mb-12 max-w-md"
              style={{ color: 'rgba(249, 242, 228, 0.55)', fontFamily: 'Hero, Georgia, serif' }}
            >
              Sign in with the same credentials you use in the Poquito mobile app. Your progress, rankings, and friends list are right where you left them.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-3xl font-bold mb-1"
                    style={{ fontFamily: 'Hero, Georgia, serif', color: '#F9F2E4', letterSpacing: '-0.03em' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs tracking-widest"
                    style={{ color: 'rgba(249, 242, 228, 0.4)', fontFamily: 'Hero, Georgia, serif' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — login form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            className="p-8 lg:p-10 rounded-2xl"
            style={{
              background: 'rgba(12, 35, 24, 0.65)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              border: '1px solid rgba(249, 242, 228, 0.1)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
            }}
          >
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: 'Hero, Georgia, serif', color: '#F9F2E4' }}
            >
              Sign In
            </h3>
            <p
              className="text-sm mb-8"
              style={{ color: 'rgba(249, 242, 228, 0.4)', fontFamily: 'Hero, Georgia, serif' }}
            >
              Use your Poquito app credentials
            </p>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-2">
                <label
                  className="text-xs tracking-widest"
                  style={{ color: 'rgba(249, 242, 228, 0.5)', fontFamily: 'Hero, Georgia, serif' }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={inputStyle('email') as React.CSSProperties}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-xs tracking-widest"
                  style={{ color: 'rgba(249, 242, 228, 0.5)', fontFamily: 'Hero, Georgia, serif' }}
                >
                  PASSWORD
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={inputStyle('password') as React.CSSProperties}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-xs transition-colors duration-200"
                  style={{ color: 'rgba(182, 90, 47, 0.7)', fontFamily: 'Hero, Georgia, serif' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#B65A2F' }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(182, 90, 47, 0.7)' }}
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full text-sm font-bold tracking-widest mt-2 transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #B65A2F 0%, #943f1e 100%)',
                  color: '#F9F2E4',
                  fontFamily: 'Hero, Georgia, serif',
                  boxShadow: '0 8px 24px rgba(182, 90, 47, 0.3)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = '0 12px 32px rgba(182, 90, 47, 0.45)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 8px 24px rgba(182, 90, 47, 0.3)'
                }}
              >
                Sign In
              </button>
            </form>

            <p
              className="text-xs text-center mt-6"
              style={{ color: 'rgba(249, 242, 228, 0.3)', fontFamily: 'Hero, Georgia, serif' }}
            >
              No account yet? Download the Poquito app to get started.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
