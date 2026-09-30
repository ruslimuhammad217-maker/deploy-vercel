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
    icon: '/icons/photoshop.svg',
    proficiency: 'expert',
    description: 'Photo editing, digital painting, compositing',
  },
  {
    id: 'ai',
    name: 'Illustrator',
    category: 'design',
    icon: '/icons/illustrator.svg',
    proficiency: 'expert',
    description: 'Vector illustration, logo design, print',
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    icon: '/icons/figma.svg',
    proficiency: 'expert',
    description: 'UI/UX design, prototyping, design systems',
  },
  {
    id: 'pr',
    name: 'Premiere Pro',
    category: 'motion',
    icon: '/icons/premiere.svg',
    proficiency: 'advanced',
    description: 'Video editing, color grading, export',
  },
  {
    id: 'ae',
    name: 'After Effects',
    category: 'motion',
    icon: '/icons/aftereffects.svg',
    proficiency: 'advanced',
    description: 'Motion graphics, animation, visual effects',
  },
  {
    id: 'blender',
    name: 'Blender',
    category: '3d',
    icon: '/icons/blender.svg',
    proficiency: 'intermediate',
    description: '3D modeling, rendering, animation',
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'design',
    icon: '/icons/canva.svg',
    proficiency: 'expert',
    description: 'Social media design, presentations',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'development',
    icon: '/icons/vscode.svg',
    proficiency: 'advanced',
    description: 'Code editing, web development',
  },
  {
    id: 'unity',
    name: 'Unity',
    category: 'development',
    icon: '/icons/unity.svg',
    proficiency: 'intermediate',
    description: 'Game development, interactive design',
  },
]
