'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const navItems = [
  { label: '01 About', href: '#about' },
  { label: '02 Experience', href: '#experience' },
  { label: '03 Work', href: '#portfolio' },
  { label: '04 Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)

      // Track active section
      const sections = ['about', 'experience', 'portfolio', 'contact']
      const current = sections.find((section) => {
        const el = document.getElementById(section)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
      >
        <div
          className="transition-all duration-500"
          style={{
            backgroundColor: isScrolled ? 'rgba(245, 240, 235, 0.92)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(16px)' : 'none',
            borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
          }}
        >
          <div className="container-main">
            <div className="flex items-center justify-between py-5">
              {/* Logo */}
              <Link
                href="/"
                className="font-display font-bold text-sm tracking-widest uppercase text-foreground no-underline hover:text-accent transition-colors duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                ARYA<span style={{ color: 'var(--accent)' }}>.</span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
                {navItems.map((item) => {
                  const sectionId = item.href.replace('#', '')
                  const isActive = activeSection === sectionId
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className={`nav-link bg-transparent border-none p-0 ${isActive ? 'text-accent' : ''}`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {item.label}
                    </button>
                  )
                })}
                <a
                  href="/resume/arya-pratama-resume.pdf"
                  download
                  className="btn-primary text-xs py-2.5 px-5"
                  aria-label="Download Resume PDF"
                >
                  <span>Resume</span>
                </a>
              </nav>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden relative z-10 p-2 border border-foreground/20 bg-transparent"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? (
                  <X size={20} strokeWidth={1.5} />
                ) : (
                  <Menu size={20} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: 'var(--foreground)' }}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="container-main flex-1 flex flex-col justify-center gap-2 pt-24">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left bg-transparent border-none p-0 font-display font-bold text-white uppercase tracking-tight py-3 border-b border-white/10 text-3xl hover:text-accent transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)' }}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8"
              >
                <a
                  href="/resume/arya-pratama-resume.pdf"
                  download
                  className="inline-flex items-center gap-2 font-inter text-sm font-semibold uppercase tracking-widest text-accent border border-accent px-6 py-3"
                >
                  Download Resume
                </a>
              </motion.div>
            </div>
            <div className="container-main pb-10">
              <p className="text-white/30 text-xs font-inter tracking-widest uppercase">
                Based in Indonesia · Available for Creative Projects
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
