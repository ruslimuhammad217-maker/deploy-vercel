'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { experiences } from '@/data/experience'
import type { Experience as ExperienceType } from '@/data/experience'

const typeLabels: Record<ExperienceType['type'], string> = {
  work: 'Full-time',
  internship: 'Internship',
  organization: 'Organization',
  freelance: 'Freelance',
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [activeId, setActiveId] = useState<string | null>(null)

  const toggleActive = (id: string) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding relative"
      style={{ backgroundColor: 'var(--foreground)' }}
      aria-labelledby="experience-heading"
    >
      <div className="container-main">
        {/* Section Header */}
        <div className="flex items-start gap-8 mb-16 lg:mb-20">
          <motion.div
            className="text-section-num leading-none select-none hidden lg:block"
            style={{ color: 'rgba(255,255,255,0.06)' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            aria-hidden="true"
          >
            02
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
              <span className="text-label" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Work History
              </span>
            </motion.div>

            <motion.h2
              id="experience-heading"
              className="text-display"
              style={{ color: 'var(--background)' }}
              custom={0.1}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              EXPERI<span style={{ color: 'var(--accent)', WebkitTextStroke: '0px' }}>–</span>
              <br />
              <span
                style={{
                  WebkitTextStroke: '1.5px rgba(245,240,235,0.3)',
                  color: 'transparent',
                }}
              >
                ENCE.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Experience List */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              custom={0.2 + index * 0.1}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div
                className="py-8 cursor-pointer group"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  borderBottom: index === experiences.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
                onClick={() => toggleActive(exp.id)}
                role="button"
                aria-expanded={activeId === exp.id}
                aria-controls={`exp-detail-${exp.id}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleActive(exp.id)}
              >
                {/* Top Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Year + Type */}
                    <div className="flex items-center gap-4 mb-3">
                      <span
                        className="font-display font-bold text-sm uppercase tracking-widest"
                        style={{ color: 'var(--accent)' }}
                      >
                        {exp.isCurrent ? exp.startDate + ' — Present' : `${exp.startDate} — ${exp.endDate}`}
                      </span>
                      <span
                        className="px-2 py-0.5 text-xs font-inter font-semibold uppercase tracking-widest border"
                        style={{
                          borderColor: 'rgba(255,255,255,0.15)',
                          color: 'rgba(255,255,255,0.4)',
                        }}
                      >
                        {typeLabels[exp.type]}
                      </span>
                      {exp.isCurrent && (
                        <span
                          className="flex items-center gap-1.5 text-xs font-inter font-semibold uppercase tracking-widest"
                          style={{ color: 'var(--accent)' }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }}
                          />
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
                      <h3
                        className="font-display font-bold uppercase group-hover:text-accent transition-colors duration-300"
                        style={{
                          fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                          letterSpacing: '-0.02em',
                          color: 'var(--background)',
                        }}
                      >
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 md:mt-0">
                        <span className="font-inter text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                          @
                        </span>
                        <span
                          className="font-display font-semibold text-base uppercase tracking-tight"
                          style={{ color: 'rgba(255,255,255,0.7)' }}
                        >
                          {exp.company}
                        </span>
                        <span className="font-inter text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
                          · {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 border flex items-center justify-center mt-1"
                    style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                    animate={{ rotate: activeId === exp.id ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <line x1="7" y1="1" x2="7" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="1" y1="7" x2="13" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                </div>

                {/* Expandable Detail */}
                <AnimatePresence>
                  {activeId === exp.id && (
                    <motion.div
                      id={`exp-detail-${exp.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Description */}
                        <div>
                          <p
                            className="font-body text-sm leading-relaxed mb-6"
                            style={{ color: 'rgba(255,255,255,0.6)' }}
                          >
                            {exp.description}
                          </p>

                          {/* Skills */}
                          <div>
                            <span
                              className="text-label mb-3 block"
                              style={{ color: 'rgba(255,255,255,0.3)' }}
                            >
                              Skills Used
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1 text-xs font-inter font-medium uppercase tracking-wider"
                                  style={{
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    color: 'rgba(255,255,255,0.5)',
                                  }}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Images */}
                        {exp.images.length > 0 && (
                          <div className="grid grid-cols-2 gap-2">
                            {exp.images.map((img, i) => (
                              <div
                                key={i}
                                className="relative overflow-hidden"
                                style={{ aspectRatio: '4/3' }}
                              >
                                <Image
                                  src={img}
                                  alt={`${exp.company} documentation ${i + 1}`}
                                  fill
                                  sizes="(max-width: 768px) 50vw, 25vw"
                                  className="object-cover transition-transform duration-700 hover:scale-105"
                                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
