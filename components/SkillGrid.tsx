'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import type { Skill } from '@/data/skills'

// Software icon components using SVG paths with brand colors
const SkillIcon = ({ id, isHovered }: { id: string; isHovered: boolean }) => {
  const color = isHovered ? '#F5F0EB' : '#1A1A1A'
  const accentColor = isHovered ? '#F5F0EB' : '#FF4D00'

  const icons: Record<string, React.JSX.Element> = {
    ps: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
        <rect width="24" height="24" rx="4" fill={isHovered ? 'rgba(255,255,255,0.15)' : '#31A8FF'} opacity={isHovered ? 0.3 : 1} />
        <text x="4" y="17" fontFamily="Arial" fontSize="12" fontWeight="bold" fill={isHovered ? '#F5F0EB' : 'white'}>Ps</text>
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
        <rect width="24" height="24" rx="4" fill={isHovered ? 'rgba(255,255,255,0.15)' : '#FF9A00'} opacity={isHovered ? 0.3 : 1} />
        <text x="4" y="17" fontFamily="Arial" fontSize="12" fontWeight="bold" fill={isHovered ? '#F5F0EB' : 'white'}>Ai</text>
      </svg>
    ),
    figma: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
        <path d="M8 2h8a4 4 0 0 1 0 8H8z" fill={isHovered ? color : '#FF7262'} />
        <path d="M8 10h4a4 4 0 0 1 0 8H8z" fill={isHovered ? color : '#A259FF'} />
        <path d="M8 18a4 4 0 0 0 4 4v-8H8z" fill={isHovered ? color : '#0ACF83'} />
        <path d="M16 10a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" fill={isHovered ? accentColor : '#1ABCFE'} />
        <path d="M8 2a4 4 0 0 0 0 8h4V2z" fill={isHovered ? color : '#F24E1E'} />
      </svg>
    ),
    pr: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
        <rect width="24" height="24" rx="4" fill={isHovered ? 'rgba(255,255,255,0.15)' : '#9999FF'} opacity={isHovered ? 0.3 : 1} />
        <text x="4" y="17" fontFamily="Arial" fontSize="12" fontWeight="bold" fill={isHovered ? '#F5F0EB' : 'white'}>Pr</text>
      </svg>
    ),
    ae: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
        <rect width="24" height="24" rx="4" fill={isHovered ? 'rgba(255,255,255,0.15)' : '#9999FF'} opacity={isHovered ? 0.3 : 1} />
        <text x="3" y="17" fontFamily="Arial" fontSize="11" fontWeight="bold" fill={isHovered ? '#F5F0EB' : 'white'}>Ae</text>
      </svg>
    ),
    blender: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
        <circle cx="12" cy="12" r="10" fill={isHovered ? 'rgba(255,255,255,0.1)' : 'transparent'} />
        <circle cx="12" cy="12" r="4" fill={isHovered ? color : '#EA7600'} />
        <path d="M12 12L4 8M12 12L4 16M12 12L20 12" stroke={isHovered ? color : '#EA7600'} strokeWidth="2" />
        <circle cx="12" cy="12" r="8" stroke={isHovered ? color : '#EA7600'} strokeWidth="1" fill="none" />
      </svg>
    ),
    canva: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
        <circle cx="12" cy="12" r="10" fill={isHovered ? 'rgba(255,255,255,0.1)' : '#7D2AE8'} opacity={isHovered ? 0.3 : 1}/>
        <text x="5.5" y="17" fontFamily="Arial" fontSize="12" fontWeight="bold" fill={isHovered ? '#F5F0EB' : 'white'}>C</text>
      </svg>
    ),
    vscode: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
        <path d="M17 2L7 12.5L3 9L2 10.5L7 15.5V22L22 13.5V8.5L17 2Z" fill={isHovered ? color : '#007ACC'} />
        <path d="M22 8.5L17 2L12 9.5L17 14L22 11V8.5Z" fill={isHovered ? accentColor : '#005F9E'} />
      </svg>
    ),
    unity: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
        <path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" fill={isHovered ? 'rgba(255,255,255,0.1)' : '#222222'} stroke={isHovered ? color : '#555'} strokeWidth="1" />
        <path d="M12 8L16 10V14L12 16L8 14V10L12 8Z" fill={isHovered ? accentColor : '#AAAAAA'} />
      </svg>
    ),
  }

  return icons[id] || (
    <div
      className="w-8 h-8 rounded flex items-center justify-center font-display font-bold text-xs"
      style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : 'var(--border)' }}
    >
      {id.slice(0, 2).toUpperCase()}
    </div>
  )
}

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
              >
                <SkillIcon id={skill.id} isHovered={hoveredId === skill.id} />
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
