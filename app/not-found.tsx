'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="container-main text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="font-display font-bold uppercase leading-none select-none mb-8"
            style={{
              fontSize: 'clamp(8rem, 25vw, 20rem)',
              letterSpacing: '-0.05em',
              color: 'transparent',
              WebkitTextStroke: '2px var(--border)',
            }}
            aria-hidden="true"
          >
            404
          </div>

          <h1 className="font-display font-bold text-2xl uppercase tracking-tight mb-4">
            Page Not Found
          </h1>
          <p className="font-body text-sm mb-8" style={{ color: 'var(--muted)' }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link href="/" className="btn-primary inline-flex">
            <span>Back to Home</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
