'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education } from '@/data/education'
import { skills } from '@/data/skills'
import SkillGrid from '@/components/SkillGrid'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative"
      style={{ backgroundColor: 'var(--background)' }}
      aria-labelledby="about-heading"
    >
      <div className="container-main">
        {/* Section Header */}
        <div className="flex items-start gap-8 mb-16 lg:mb-24">
          {/* Section Number */}
          <motion.div
            className="text-section-num leading-none select-none hidden lg:block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            aria-hidden="true"
          >
            01
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
              <span className="text-label">About & Skills</span>
            </motion.div>

            <motion.h2
              id="about-heading"
              className="text-display"
              custom={0.1}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              SKILLS &<br />
              <span className="text-accent-stroke">EDUCATION</span>
            </motion.h2>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — About Text + Education */}
          <div className="lg:col-span-5">
            {/* About Paragraph */}
            <motion.div
              custom={0.2}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mb-12"
            >
              <p className="font-body text-lg leading-relaxed mb-6" style={{ color: 'var(--foreground)' }}>
                Saya adalah seorang Graphic Designer dengan passion yang kuat
                terhadap dunia visual. Saya percaya bahwa desain yang baik bukan
                hanya tentang estetika — tetapi tentang{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                  komunikasi yang bermakna.
                </em>
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                Dengan latar belakang Teknik Informatika dan pengalaman nyata dalam
                brand design, UI/UX, motion graphics, dan 3D art — saya membawa
                perspektif yang unik di persimpangan antara teknologi dan seni.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              custom={0.3}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-px" style={{ backgroundColor: 'var(--accent)' }} />
                <span className="text-label">Education</span>
              </div>

              <div className="flex flex-col gap-0">
                {education.map((edu, index) => (
                  <div
                    key={edu.id}
                    className="py-6 group"
                    style={{ borderBottom: '1px solid var(--border)' }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3
                          className="font-display font-bold text-base uppercase tracking-tight group-hover:text-accent transition-colors duration-300"
                          style={{ letterSpacing: '-0.01em' }}
                        >
                          {edu.institution}
                        </h3>
                        <p className="font-body text-sm mt-0.5" style={{ color: 'var(--muted)' }}>
                          {edu.degree} · {edu.field}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-display font-bold text-sm uppercase tracking-tight">
                          {edu.startYear} — {edu.endYear}
                        </p>
                        {edu.gpa && (
                          <p
                            className="font-inter text-xs font-semibold mt-0.5"
                            style={{ color: 'var(--accent)' }}
                          >
                            GPA: {edu.gpa}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {edu.location}
                    </p>
                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="mt-3 flex flex-col gap-1">
                        {edu.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span style={{ color: 'var(--accent)' }} className="mt-0.5 flex-shrink-0">
                              ◆
                            </span>
                            <span className="font-body text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                              {ach}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Skills Grid */}
          <div className="lg:col-span-7">
            <motion.div
              custom={0.3}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-px" style={{ backgroundColor: 'var(--accent)' }} />
                <span className="text-label">Tools & Technologies</span>
              </div>
              <p className="font-body text-sm leading-relaxed max-w-md" style={{ color: 'var(--muted)' }}>
                Hover on each tool to explore. My creative toolkit spans from
                traditional design software to motion, 3D, and development tools.
              </p>
            </motion.div>

            <SkillGrid skills={skills} isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  )
}
