'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Instagram, Linkedin, Github } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

const imageVariants = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
  },
}

export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--background)' }}
      aria-label="Hero section"
    >
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 bottom-0"
          style={{ left: '33%', width: '1px', backgroundColor: 'var(--border)' }}
        />
        <div
          className="absolute top-0 bottom-0 hidden lg:block"
          style={{ left: '66%', width: '1px', backgroundColor: 'var(--border)' }}
        />
      </div>

      <div className="container-main flex-1 flex flex-col pt-28 pb-16 md:pt-32 md:pb-20">
        <motion.div
          className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT COLUMN — Main Text */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* Top label */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div
                className="w-8 h-px"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              <span className="text-label">Hello, I&apos;m</span>
            </motion.div>

            {/* Hero Name */}
            <div className="flex-1 flex flex-col justify-center">
              <motion.h1
                className="text-hero leading-none"
                variants={itemVariants}
              >
                ARYA
              </motion.h1>
              <motion.div variants={itemVariants} className="flex items-end gap-4 flex-wrap">
                <h1 className="text-hero leading-none text-outline">
                  PRATAMA
                </h1>
                <div className="hidden md:block mb-4">
                  <div
                    className="px-3 py-1 border"
                    style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  >
                    <span className="font-inter text-xs font-bold tracking-widest uppercase">
                      ✦ Available
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="mt-2">
                <h2
                  className="font-display font-700 uppercase"
                  style={{
                    fontSize: 'clamp(1.5rem, 4vw, 4rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--accent)',
                  }}
                >
                  GRAPHIC DESIGNER.
                </h2>
              </motion.div>
            </div>

            {/* Bottom section */}
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Description */}
                <motion.div variants={itemVariants}>
                  <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                    Saya seorang Graphic Designer yang berfokus pada{' '}
                    <em>visual identity</em>, social media design, UI/UX,
                    digital content, dan visual communication.
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }}
                    />
                    <span className="text-label">Based in Indonesia</span>
                  </div>
                </motion.div>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex flex-col gap-3">
                  <a
                    href="/resume/arya-pratama-resume.pdf"
                    download
                    className="btn-primary"
                    aria-label="Download Resume PDF"
                  >
                    <span>Download Resume</span>
                    <ArrowDown size={14} />
                  </a>
                  <button
                    onClick={scrollToPortfolio}
                    className="btn-outline"
                    aria-label="View Portfolio"
                  >
                    <span>View Portfolio</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Social Links */}
                  <div className="flex items-center gap-4 mt-2">
                    <a
                      href="https://instagram.com/aryapratama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border transition-all duration-300 hover:bg-foreground hover:text-background"
                      style={{ borderColor: 'var(--border)' }}
                      aria-label="Instagram"
                    >
                      <Instagram size={16} strokeWidth={1.5} />
                    </a>
                    <a
                      href="https://linkedin.com/in/aryapratama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border transition-all duration-300 hover:bg-foreground hover:text-background"
                      style={{ borderColor: 'var(--border)' }}
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} strokeWidth={1.5} />
                    </a>
                    <a
                      href="https://github.com/aryapratama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border transition-all duration-300 hover:bg-foreground hover:text-background"
                      style={{ borderColor: 'var(--border)' }}
                      aria-label="GitHub"
                    >
                      <Github size={16} strokeWidth={1.5} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — Profile Image */}
          <div className="lg:col-span-4 relative">
            <motion.div
              className="relative h-full min-h-[400px] lg:min-h-0"
              variants={imageVariants}
            >
              {/* Offset decorative frame */}
              <div
                className="absolute z-0"
                style={{
                  top: '1.5rem',
                  right: '-0.75rem',
                  bottom: '-0.75rem',
                  left: '1.5rem',
                  border: '1px solid var(--accent)',
                  opacity: 0.4,
                }}
              />

              {/* Main image */}
              <div
                className="relative z-10 h-full overflow-hidden"
                style={{
                  top: 0,
                  right: '0.75rem',
                  bottom: '0.75rem',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85"
                  alt="Arya Pratama — Graphic Designer"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                  priority
                  style={{ filter: 'contrast(1.05) saturate(0.9)' }}
                />

                {/* Overlay with text */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{
                    background: 'linear-gradient(to top, rgba(26,26,26,0.8) 0%, transparent 100%)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-white text-xs font-bold uppercase tracking-widest">
                        ARYA PRATAMA
                      </p>
                      <p className="font-inter text-white/60 text-xs tracking-wider">
                        Graphic Designer
                      </p>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--accent)' }}
                    >
                      <span className="font-display text-white text-xs font-bold">AP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating label */}
              <motion.div
                className="absolute z-20 top-4 left-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="px-3 py-1.5"
                  style={{ backgroundColor: 'var(--foreground)' }}
                >
                  <span className="font-inter text-white text-xs font-semibold uppercase tracking-wider">
                    ◆ Creative Designer
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom scroll indicator */}
        <motion.div
          className="flex items-center justify-between mt-8 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-label">2021 — 2026</span>
            <div className="w-16 h-px" style={{ backgroundColor: 'var(--border)' }} />
            <span className="text-label">Pekanbaru, Indonesia</span>
          </div>
          <button
            onClick={scrollToAbout}
            className="flex items-center gap-2 bg-transparent border-none group"
            aria-label="Scroll to About section"
          >
            <span className="text-label group-hover:text-accent transition-colors duration-300">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown
                size={14}
                strokeWidth={1.5}
                style={{ color: 'var(--muted)' }}
              />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
