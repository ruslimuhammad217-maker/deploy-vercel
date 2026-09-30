export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  isCurrent: boolean
  description: string
  skills: string[]
  images: string[]
  type: 'work' | 'internship' | 'organization' | 'freelance'
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Politeknik Caltex Riau',
    position: 'Graphic Designer & Content Creator',
    location: 'Pekanbaru, Indonesia',
    startDate: 'Feb 2026',
    endDate: 'Jun 2026',
    isCurrent: false,
    description:
      'Responsible for designing visual communication materials for the institution, including social media content, event posters, digital banners, and promotional materials. Led the visual identity refresh for multiple campus events.',
    skills: ['Graphic Design', 'Social Media Design', 'Video Editing', 'Visual Communication', 'Adobe Illustrator'],
    images: [
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    ],
    type: 'work',
  },
  {
    id: '2',
    company: 'Studio Kreasi Nusantara',
    position: 'UI/UX Design Intern',
    location: 'Pekanbaru, Indonesia',
    startDate: 'Aug 2025',
    endDate: 'Jan 2026',
    isCurrent: false,
    description:
      'Collaborated with senior designers to create user interface designs for mobile and web applications. Conducted user research and usability testing, and delivered design deliverables using Figma including wireframes, prototypes, and design systems.',
    skills: ['UI Design', 'UX Research', 'Figma', 'Prototyping', 'User Testing'],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    ],
    type: 'internship',
  },
  {
    id: '3',
    company: 'Freelance',
    position: 'Brand & Visual Designer',
    location: 'Remote',
    startDate: 'Jan 2024',
    endDate: 'Present',
    isCurrent: true,
    description:
      'Working independently with clients across Indonesia to develop brand identities, marketing materials, social media assets, and digital content. Clients span industries including F&B, fashion, tech startups, and education.',
    skills: ['Brand Design', 'Logo Design', 'Packaging', 'Social Media', 'Client Management'],
    images: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    ],
    type: 'freelance',
  },
  {
    id: '4',
    company: 'HIMTI PCR',
    position: 'Head of Creative Division',
    location: 'Pekanbaru, Indonesia',
    startDate: 'Mar 2023',
    endDate: 'Mar 2024',
    isCurrent: false,
    description:
      'Led a team of 8 designers responsible for all visual communication of the student organization. Managed creative direction for events, publications, and social media presence reaching 2,000+ students.',
    skills: ['Team Leadership', 'Creative Direction', 'Event Design', 'Social Media Management'],
    images: [
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80',
    ],
    type: 'organization',
  },
]
