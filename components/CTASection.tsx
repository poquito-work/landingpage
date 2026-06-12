'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.22, 0.61, 0.36, 1] as const

export default function CTASection() {
  return (
    <section
      id="download"
      className="relative overflow-hidden"
      style={{ padding: '9rem 0' }}
    >
      {/* Full-bleed photography background — Image 3 */}
      <div className="absolute inset-0">
        <Image
          src="/images/hands-playing.png"
          alt="Players at the table"
          fill
          className="object-cover object-center"
          priority={false}
        />
        {/* Rich gradient overlay: dark green bottom-left to transparent top-right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(12,35,24,0.96) 0%, rgba(20,51,34,0.88) 40%, rgba(20,51,34,0.70) 70%, rgba(20,51,34,0.50) 100%)',
          }}
        />
        {/* Bottom fade for smooth transition to footer */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(12,35,24,0.85))' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 bg-pq-rust/60" />
          <span className="text-pq-rust text-xs tracking-[0.22em] uppercase">Get Started</span>
          <span className="h-[1px] w-8 bg-pq-rust/60" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
          className="font-hero font-bold text-pq-cream leading-tight tracking-tight text-balance mb-6"
          style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.8rem)' }}
        >
          YOUR SEAT IS{' '}
          <span className="text-pq-rust">WAITING.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="text-pq-cream leading-relaxed max-w-xl mx-auto mb-12 hover:font-bold hover:scale-[1.03] transition-all duration-200"
          style={{ fontSize: '1.1rem' }}
        >
          Thousands of tables are live right now. Download Poquito and make your first move.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 text-pq-green px-8 py-4 rounded-full text-sm tracking-[0.1em] uppercase shadow-xl shadow-pq-cream/10"
            style={{ background: 'linear-gradient(135deg, #F9F2E4 0%, #EDE5D0 100%)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 20px 60px rgba(249,242,228,0.18)' }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Free
          </motion.a>

          <div className="flex items-center gap-3">
            <StoreBadge icon="/images/appstore.png"   label="App Store"   sub="Download on the" />
            <StoreBadge icon="/images/googleplay.png" label="Google Play" sub="Get it on" />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="flex items-center justify-center gap-10 mt-16 flex-wrap"
        >
          {[
            { label: '10,000+', sub: 'Active Players' },
            { label: '4.8★',    sub: 'App Store Rating' },
            { label: '120+',    sub: 'Countries' },
          ].map(({ label, sub }) => (
            <div key={sub} className="text-center">
              <p className="font-hero font-bold text-pq-cream text-2xl">{label}</p>
              <p className="text-pq-cream text-xs tracking-[0.12em] uppercase mt-0.5">{sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function StoreBadge({ icon, label, sub }: { icon: string; label: string; sub: string }) {
  return (
    <motion.a
      href="#"
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300"
      style={{
        border: '1px solid rgba(249,242,228,0.15)',
        background: 'rgba(249,242,228,0.06)',
        backdropFilter: 'blur(12px)',
      }}
      whileHover={{ scale: 1.04, background: 'rgba(249,242,228,0.12)' } as never}
      whileTap={{ scale: 0.97 }}
    >
      <Image src={icon} alt={label} width={22} height={22} className="rounded-md" />
      <div className="flex flex-col">
        <span className="text-pq-cream text-[9px] tracking-[0.12em] uppercase leading-none">{sub}</span>
        <span className="text-pq-cream text-xs leading-tight mt-0.5">{label}</span>
      </div>
    </motion.a>
  )
}
