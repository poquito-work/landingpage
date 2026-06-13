'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const floatingTiles = [
  { src: '/images/v4/tiles/Mpt1z.png', top: '10%', left: '5%', size: 60, delay: 0, rotation: -15 },
  { src: '/images/v4/tiles/Mpt2z.png', top: '20%', right: '8%', size: 50, delay: 0.8, rotation: 12 },
  { src: '/images/v4/tiles/Mpt3z.png', bottom: '25%', left: '10%', size: 48, delay: 1.4, rotation: 8 },
  { src: '/images/v4/tiles/Mpt1m.png', top: '55%', right: '5%', size: 56, delay: 0.4, rotation: -10 },
  { src: '/images/v4/tiles/Mpu1z.png', bottom: '15%', right: '15%', size: 44, delay: 1.0, rotation: 20 },
  { src: '/images/v4/tiles/Mpu3z.png', top: '35%', left: '3%', size: 40, delay: 1.8, rotation: -5 },
]

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative section-pad overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0C2318 0%, #143322 100%)' }}
    >
      {/* Section number watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        style={{
          fontFamily: 'Hero, Georgia, serif',
          fontSize: '20vw',
          fontWeight: 700,
          color: 'rgba(249, 242, 228, 0.03)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        06
      </div>

      {/* Floating tiles */}
      {floatingTiles.map((tile, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -12, 0], rotate: [tile.rotation, tile.rotation + 3, tile.rotation] }}
          transition={{
            duration: 4 + i * 0.5,
            delay: tile.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute pointer-events-none"
          style={{
            top: tile.top,
            bottom: (tile as { bottom?: string }).bottom,
            left: (tile as { left?: string }).left,
            right: (tile as { right?: string }).right,
            opacity: 0.12,
          }}
        >
          <Image
            src={tile.src}
            alt=""
            width={tile.size}
            height={Math.round(tile.size * 1.4)}
            className="object-contain"
          />
        </motion.div>
      ))}

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(182, 90, 47, 0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p
            className="text-xs tracking-[0.3em] font-bold mb-6"
            style={{ color: '#B65A2F', fontFamily: 'Hero, Georgia, serif' }}
          >
            SECTION 06
          </p>
          <h2
            className="text-5xl lg:text-7xl font-bold mb-6 leading-none"
            style={{
              fontFamily: 'Hero, Georgia, serif',
              color: '#F9F2E4',
              letterSpacing: '-0.02em',
            }}
          >
            DOWNLOAD<br />THE GAME
          </h2>
          <p
            className="text-lg mb-12"
            style={{
              fontFamily: 'Hero, Georgia, serif',
              color: 'rgba(249, 242, 228, 0.5)',
            }}
          >
            Available now on iOS and Android. Free to download.
          </p>
        </motion.div>

        {/* Download buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#"
            className="group transition-all duration-200"
            style={{ filter: 'brightness(0.85)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'brightness(1)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'brightness(0.85)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <Image
              src="/images/appstore-badge.svg"
              alt="Download on App Store"
              width={180}
              height={56}
              className="h-14 w-auto"
            />
          </a>

          <a
            href="#"
            className="group transition-all duration-200"
            style={{ filter: 'brightness(0.85)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'brightness(1)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'brightness(0.85)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <Image
              src="/images/googleplay-badge.svg"
              alt="Get it on Google Play"
              width={180}
              height={56}
              className="h-14 w-auto"
            />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-sm"
          style={{ color: 'rgba(249, 242, 228, 0.25)', fontFamily: 'Hero, Georgia, serif' }}
        >
          Free 2-week trial · No credit card required
        </motion.p>
      </div>
    </section>
  )
}
