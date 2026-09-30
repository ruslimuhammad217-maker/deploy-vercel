'use client'

import { useRef, useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects, projectCategories } from '@/data/projects'
import type { ProjectCategory } from '@/data/projects'
import { ArrowUpRight } from 'lucide-react'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

// Asymmetric grid sizes for editorial feel
const gridSizes = [
  'lg:col-span-7 lg:row-span-2',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-6',
  'lg:col-span-6',
]

const aspectRatios = [
  'aspect-[4/5]',
  'aspect-[4/3]',
  'aspect-[4/3]',
  'aspect-square',
  'aspect-square',
  'aspect-square',
  'aspect-[4/3]',
  'aspect-[4/3]',
]

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="section-padding relative"
      style={{ backgroundColor: 'var(--background)' }}
      aria-labelledby="portfolio-heading"
    >
      <div className="container-main">
        {/* Section Header */}
        <div className="flex items-start gap-8 mb-12 lg:mb-16">
          <motion.div
            className="text-section-num leading-none select-none hidden lg:block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            aria-hidden="true"
          >
            03
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
              <span className="text-label">Creative Work</span>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <motion.h2
                id="portfolio-heading"
                className="text-display"
                custom={0.1}
                variants={fadeUpVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                SELECTED<br />
                <span className="text-accent-stroke">WORKS.</span>
              </motion.h2>

              <motion.p
                className="font-body text-sm max-w-xs leading-relaxed"
                style={{ color: 'var(--muted)' }}
                custom={0.2}
                variants={fadeUpVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                A curated collection of design projects across brand identity, UI/UX, motion, and digital art.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10 pb-8"
          style={{ borderBottom: '1px solid var(--border)' }}
          custom={0.25}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              className="px-4 py-2 font-inter text-xs font-semibold uppercase tracking-widest border transition-all duration-300"
              style={{
                backgroundColor: activeCategory === cat ? 'var(--foreground)' : 'transparent',
                color: activeCategory === cat ? 'var(--background)' : 'var(--muted)',
                borderColor: activeCategory === cat ? 'var(--foreground)' : 'var(--border)',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid — Asymmetric */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProjects.map((project, index) => {
              const gridClass = filteredProjects.length > 3 ? (gridSizes[index % gridSizes.length] || 'lg:col-span-6') : 'lg:col-span-6'
              const aspectClass = filteredProjects.length > 3 ? (aspectRatios[index % aspectRatios.length] || 'aspect-[4/3]') : 'aspect-[4/3]'

              return (
                <motion.div
                  key={project.id}
                  className={`${gridClass}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className={`portfolio-card block ${aspectClass} relative overflow-hidden`}
                    aria-label={`View ${project.title} — ${project.category}, ${project.year}`}
                    data-cursor-hover
                  >
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="portfolio-card-img"
                      style={{ objectFit: 'cover' }}
                    />

                    {/* Hover Overlay */}
                    <div className="portfolio-card-overlay">
                      <div className="portfolio-card-meta">
                        <span
                          className="font-inter text-xs font-semibold uppercase tracking-widest px-2 py-1"
                          style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                        >
                          {project.category}
                        </span>
                        <span className="font-inter text-xs text-white/60">
                          {project.year}
                        </span>
                      </div>
                      <div className="flex items-end justify-between">
                        <h3 className="portfolio-card-title">
                          {project.title}
                        </h3>
                        <motion.div
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-3"
                          style={{ backgroundColor: 'var(--accent)' }}
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <ArrowUpRight size={16} color="white" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div
                        className="absolute top-4 left-4 px-2 py-1 font-inter text-xs font-bold uppercase tracking-widest z-10"
                        style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                        aria-label="Featured project"
                      >
                        Featured
                      </div>
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="flex justify-center mt-16"
          custom={0.5}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className="font-body text-sm text-center max-w-sm" style={{ color: 'var(--muted)' }}>
            More work available upon request.{' '}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-semibold bg-transparent border-none p-0 underline underline-offset-4 transition-colors duration-300 hover:text-accent"
              style={{ color: 'var(--foreground)' }}
            >
              Get in touch →
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
