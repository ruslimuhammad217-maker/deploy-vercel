export interface Skill {
  id: string
  name: string
  category: SkillCategory
  icon: string
  proficiency: 'expert' | 'advanced' | 'intermediate'
  description: string
}

export type SkillCategory = 'design' | 'motion' | '3d' | 'development' | 'productivity'

export const skills: Skill[] = [
  {
    id: 'ps',
    name: 'Photoshop',
    category: 'design',
    icon: '/icons/ps.png',
    proficiency: 'expert',
    description: 'Photo editing, digital painting, compositing',
  },
  {
    id: 'ai',
    name: 'Illustrator',
    category: 'design',
    icon: '/icons/ai.png',
    proficiency: 'expert',
    description: 'Vector illustration, logo design, print',
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    icon: '/icons/figma.png',
    proficiency: 'expert',
    description: 'UI/UX design, prototyping, design systems',
  },
  {
    id: 'pr',
    name: 'Premiere Pro',
    category: 'motion',
    icon: '/icons/pp.png',
    proficiency: 'advanced',
    description: 'Video editing, color grading, export',
  },
  {
    id: 'ae',
    name: 'After Effects',
    category: 'motion',
    icon: '/icons/ae.png',
    proficiency: 'advanced',
    description: 'Motion graphics, animation, visual effects',
  },
  {
    id: 'blender',
    name: 'Blender',
    category: '3d',
    icon: '/icons/blnd.png',
    proficiency: 'intermediate',
    description: '3D modeling, rendering, animation',
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'design',
    icon: '/icons/canva.png',
    proficiency: 'expert',
    description: 'Social media design, presentations',
  },
  {
    id: 'capcut',
    name: 'CapCut',
    category: 'motion',
    icon: '/icons/cc.png',
    proficiency: 'expert',
    description: 'Short-form video editing, reels, TikTok content',
  },
]
