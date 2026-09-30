'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

const contactItems = [
  {
    label: 'Phone',
    value: '+62 812 3456 7890',
    href: 'tel:+6281234567890',
    Icon: Phone,
  },
  {
    label: 'Email',
    value: 'arya@aryapratama.design',
    href: 'mailto:arya@aryapratama.design',
    Icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/aryapratama',
    href: 'https://linkedin.com/in/aryapratama',
    Icon: Linkedin,
    external: true,
  },
  {
    label: 'Instagram',
    value: '@arya.pratama_',
    href: 'https://instagram.com/arya.pratama_',
    Icon: Instagram,
    external: true,
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: 'var(--foreground)' }}
      aria-labelledby="contact-heading"
    >
      {/* Background typography */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="font-display font-bold uppercase leading-none"
          style={{
            fontSize: 'clamp(8rem, 20vw, 22rem)',
            letterSpacing: '-0.05em',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.04)',
            transform: 'translate(10%, 15%)',
          }}
        >
          CONTACT
        </div>
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="flex items-start gap-8 mb-16">
          <motion.div
            className="text-section-num leading-none select-none hidden lg:block"
            style={{ color: 'rgba(255,255,255,0.05)' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            aria-hidden="true"
          >
            04
          </motion.div>

          <div className="flex-1">
            <motion.div
              className="flex items-center gap-3 mb-4"
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className="w-8 h-px" style={{ backgroundColor: 'var(--accent)' }} />
              <span className="text-label" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              id="contact-heading"
              custom={0.1}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              style={{ color: 'var(--background)' }}
            >
              <span className="text-display block">LET&apos;S WORK</span>
              <span
                className="text-display block"
                style={{
                  WebkitTextStroke: '1.5px rgba(245,240,235,0.25)',
                  color: 'transparent',
                }}
              >
                TOGETHER.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — CTA Text */}
          <motion.div
            custom={0.2}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <p
              className="font-body text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(245,240,235,0.6)' }}
            >
              Have a project in mind? I&apos;m always open to discussing creative
              work, design collaborations, and new opportunities.
            </p>
            <p
              className="font-body text-base leading-relaxed mb-10"
              style={{ color: 'rgba(245,240,235,0.4)' }}
            >
              Let&apos;s create something meaningful together.
            </p>

            <a
              href="mailto:arya@aryapratama.design"
              className="btn-primary inline-flex"
              aria-label="Send email to start a project"
            >
              <span>GET IN TOUCH</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Availability indicator */}
            <div className="flex items-center gap-3 mt-8">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: '#4ADE80',
                  boxShadow: '0 0 10px #4ADE80',
                  animation: 'pulse 2s infinite',
                }}
              />
              <span
                className="font-inter text-sm font-medium"
                style={{ color: 'rgba(245,240,235,0.5)' }}
              >
                Available for creative projects
              </span>
            </div>
          </motion.div>

          {/* Right — Contact Items */}
          <motion.div
            custom={0.3}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="flex flex-col">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="contact-item group"
                  aria-label={`${item.label}: ${item.value}`}
                  data-cursor-hover
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-3">
                    <item.Icon
                      size={14}
                      strokeWidth={1.5}
                      style={{ color: 'var(--accent)' }}
                    />
                    <span
                      className="text-label"
                      style={{ color: 'rgba(245,240,235,0.3)' }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-display font-semibold text-base md:text-lg group-hover:text-accent transition-colors duration-300"
                      style={{ color: 'var(--background)' }}
                    >
                      {item.value}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: 'var(--accent)' }}
                    >
                      <path d="M2 8H14M14 8L8 2M14 8L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  )
}
