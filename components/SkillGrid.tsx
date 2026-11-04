'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Skill } from '@/data/skills'

interface SkillGridProps {
  skills: Skill[]
  isInView: boolean
}

export default function SkillGrid({ skills, isInView }: SkillGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div
      className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-0"
      style={{ border: '1px solid var(--border)' }}
      role="list"
      aria-label="Design skills and tools"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
          role="listitem"
        >
          <div
            className="skill-card"
            style={{ borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)', margin: '-1px 0 0 -1px' }}
            onMouseEnter={() => setHoveredId(skill.id)}
            onMouseLeave={() => setHoveredId(null)}
            data-cursor-hover
            aria-label={`${skill.name} — ${skill.description}`}
          >
            <div className="skill-card-content">
              <motion.div
                animate={hoveredId === skill.id ? { rotate: [0, -5, 5, 0], scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.4 }}
                className="w-12 h-12 relative flex items-center justify-center"
              >
                <Image
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  width={48}
                  height={48}
                  className="w-11 h-11 object-contain select-none"
                  unoptimized
                />
              </motion.div>
              <span className="skill-card-name">
                {skill.name}
              </span>
            </div>

            {/* Proficiency dot */}
            <div
              className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full transition-colors duration-300"
              style={{
                backgroundColor:
                  hoveredId === skill.id
                    ? 'var(--background)'
                    : skill.proficiency === 'expert'
                    ? 'var(--accent)'
                    : skill.proficiency === 'advanced'
                    ? 'var(--foreground)'
                    : 'var(--muted)',
              }}
              title={skill.proficiency}
              aria-label={`Proficiency: ${skill.proficiency}`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
