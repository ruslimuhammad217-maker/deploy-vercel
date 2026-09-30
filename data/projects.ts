export interface Project {
  id: string
  slug: string
  title: string
  category: ProjectCategory
  year: string
  client: string
  role: string
  shortDescription: string
  fullDescription: string
  challenge: string
  solution: string
  coverImage: string
  images: string[]
  tags: string[]
  featured: boolean
  color?: string
}

export type ProjectCategory =
  | 'All'
  | 'Graphic Design'
  | 'UI/UX'
  | 'Social Media'
  | 'Branding'
  | 'Video'
  | '3D'
  | 'Illustration'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'nova-brand-identity',
    title: 'Nova Brand Identity',
    category: 'Branding',
    year: '2026',
    client: 'Nova Studio',
    role: 'Brand Designer',
    shortDescription: 'Complete brand identity system for a creative studio',
    fullDescription:
      'A comprehensive brand identity project for Nova Studio, a creative agency based in Jakarta. The project included logo design, color system, typography, business cards, and brand guidelines.',
    challenge:
      'The client needed a brand identity that felt both timeless and contemporary — something that would stand out in a saturated creative market while maintaining professionalism.',
    solution:
      'I developed a modular identity system built around a geometric logomark that references both growth and creativity. The color palette pairs deep navy with warm gold for a premium editorial feel.',
    coverImage: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=85',
    images: [
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&q=85',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=85',
    ],
    tags: ['Logo Design', 'Brand System', 'Typography', 'Print Design'],
    featured: true,
    color: '#1A1A40',
  },
  {
    id: '2',
    slug: 'pulse-social-campaign',
    title: 'Pulse Social Campaign',
    category: 'Social Media',
    year: '2026',
    client: 'Pulse Fitness',
    role: 'Social Media Designer',
    shortDescription: 'Dynamic social media campaign for a fitness brand',
    fullDescription:
      'An energetic social media design system for Pulse Fitness, covering Instagram posts, stories, reels thumbnails, and carousel templates. The campaign focused on community building and energy.',
    challenge:
      'Standing out in the highly competitive fitness content space while maintaining brand consistency across all formats and aspect ratios.',
    solution:
      'Created a kinetic design language using bold typography, high-contrast photography treatments, and a punchy color system that feels native to social media but still distinctly branded.',
    coverImage: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=85',
    images: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=85',
      'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&q=85',
    ],
    tags: ['Social Media', 'Instagram', 'Content Design', 'Campaign'],
    featured: true,
    color: '#FF4D00',
  },
  {
    id: '3',
    slug: 'archi-app-ui',
    title: 'Archi App UI',
    category: 'UI/UX',
    year: '2025',
    client: 'Archi Platform',
    role: 'UI/UX Designer',
    shortDescription: 'Mobile app interface for an architecture platform',
    fullDescription:
      'UI/UX design for a mobile application connecting architects with clients. The app features project galleries, real-time messaging, and portfolio presentation tools.',
    challenge:
      'Designing a complex information architecture that still felt clean and intuitive for both professional architects and non-technical clients.',
    solution:
      'Used a structured editorial layout inspired by architecture magazines, with clear hierarchy, generous whitespace, and a neutral palette that lets project photography take center stage.',
    coverImage: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=85',
    images: [
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1200&q=85',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=85',
    ],
    tags: ['UI Design', 'UX Research', 'Mobile App', 'Figma'],
    featured: true,
    color: '#2D4A3E',
  },
  {
    id: '4',
    slug: 'terrain-3d-art',
    title: 'Terrain 3D Series',
    category: '3D',
    year: '2025',
    client: 'Personal Project',
    role: 'Art Director & 3D Artist',
    shortDescription: 'Abstract 3D art series exploring natural forms',
    fullDescription:
      'A personal exploration series using Blender to create abstract terrain-like compositions. Each piece combines organic forms with geometric precision.',
    challenge:
      'Finding the balance between technical 3D work and artistic expression without the visuals feeling cold or mechanical.',
    solution:
      'Developed a workflow using procedural textures and hand-sculpted details, paired with warm cinematic lighting to give each piece a tactile, almost photographic quality.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=85',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=85',
      'https://images.unsplash.com/photo-1614729939124-032d1e6c9945?w=1200&q=85',
    ],
    tags: ['Blender', '3D Art', 'Digital Art', 'Abstract'],
    featured: false,
    color: '#3A2A5E',
  },
  {
    id: '5',
    slug: 'verdant-packaging',
    title: 'Verdant Packaging',
    category: 'Graphic Design',
    year: '2025',
    client: 'Verdant Organics',
    role: 'Graphic Designer',
    shortDescription: 'Sustainable packaging design for an organic skincare brand',
    fullDescription:
      'Complete packaging design system for Verdant Organics, a sustainable skincare brand. Covers primary packaging, label design, box design, and retail display.',
    challenge:
      'Communicating premium quality and sustainability authenticity simultaneously — without falling into the clichés of "eco" design.',
    solution:
      'Used uncoated paper stocks, botanical illustration, and a restrained natural palette. The typography system balances apothecary tradition with contemporary minimalism.',
    coverImage: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7e0827?w=800&q=85',
    images: [
      'https://images.unsplash.com/photo-1609710228159-0fa9bd7e0827?w=1200&q=85',
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=85',
    ],
    tags: ['Packaging', 'Print Design', 'Illustration', 'Brand Design'],
    featured: false,
    color: '#3D5A3E',
  },
  {
    id: '6',
    slug: 'flux-motion-reel',
    title: 'Flux Motion Reel',
    category: 'Video',
    year: '2025',
    client: 'Self-commissioned',
    role: 'Motion Designer',
    shortDescription: 'Motion design showreel with kinetic typography',
    fullDescription:
      'A personal motion design showreel featuring kinetic typography, abstract motion graphics, and brand animation sequences created in After Effects.',
    challenge:
      'Showcasing diverse motion design capabilities while maintaining a cohesive aesthetic and narrative arc across varied styles.',
    solution:
      'Structured the reel around a central "flux" concept — constant transformation. Used consistent motion language (ease curves, pacing) to unify disparate stylistic pieces.',
    coverImage: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=800&q=85',
    images: [
      'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=1200&q=85',
    ],
    tags: ['After Effects', 'Motion Graphics', 'Typography', 'Animation'],
    featured: false,
    color: '#1A1A1A',
  },
  {
    id: '7',
    slug: 'atlas-illustration',
    title: 'Atlas Illustration Series',
    category: 'Illustration',
    year: '2024',
    client: 'Atlas Magazine',
    role: 'Illustrator',
    shortDescription: 'Editorial illustration series for Atlas Magazine',
    fullDescription:
      'A series of editorial illustrations commissioned for Atlas Magazine\'s "Futures" issue, exploring themes of technology, nature, and human connection.',
    challenge:
      'Translating complex conceptual themes into immediate, arresting visual metaphors that work both digitally and in print.',
    solution:
      'Developed a distinctive illustration style mixing geometric abstraction with organic linework, using a limited palette that reproduces faithfully across media.',
    coverImage: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=85',
    images: [
      'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200&q=85',
    ],
    tags: ['Illustration', 'Editorial', 'Digital Art', 'Print'],
    featured: false,
    color: '#B8860B',
  },
  {
    id: '8',
    slug: 'holo-ui-dashboard',
    title: 'Holo Dashboard UI',
    category: 'UI/UX',
    year: '2024',
    client: 'Holo Analytics',
    role: 'UI Designer',
    shortDescription: 'Data visualization dashboard for analytics platform',
    fullDescription:
      'UI design for a complex data analytics dashboard. The challenge was presenting dense, multi-layered data in a digestible, visually engaging way.',
    challenge:
      'Making data-heavy interfaces feel approachable and visually interesting without sacrificing clarity or performance.',
    solution:
      'Applied data visualization best practices with a dark interface that uses color strategically — only to encode data meaning, never decoratively.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85',
    ],
    tags: ['Dashboard', 'Data Viz', 'UI Design', 'Dark Mode'],
    featured: false,
    color: '#0D1B2A',
  },
]

export const projectCategories: ProjectCategory[] = [
  'All',
  'Graphic Design',
  'UI/UX',
  'Social Media',
  'Branding',
  'Video',
  '3D',
  'Illustration',
]
