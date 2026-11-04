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
  type: 'work' | 'internship' | 'organization' | 'freelance' | 'event'
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Politeknik Caltex Riau',
    position: 'Graphic Designer & Social Media Specialist',
    location: 'Pekanbaru, Indonesia',
    startDate: 'Feb 2026',
    endDate: 'Jun 2026',
    isCurrent: false,
    description:
      'Responsible for designing visual communication materials for the institution, including social media content, event posters, digital banners, and promotional materials. Led the visual identity refresh for multiple campus events.',
    skills: ['Graphic Design', 'Social Media Design', 'Video Editing', 'Visual Communication', 'Adobe Illustrator', 'Adobe Photoshop', 'Capcut', 'Canva', 'Adobe After Effect'],
    images: [
      '/images/experience/IMG_5645.JPG',
      '/images/experience/IMG_6325.JPG',
    ],
    type: 'internship',
  },
  {
    id: '2',
    company: 'Kilang Pertamina Internasional RU II Dumai',
    position: 'Front-end Developer',
    location: 'Dumai, Indonesia',
    startDate: 'Aug 2025',
    endDate: 'Des 2026',
    isCurrent: false,
    description:
      'Collaborated with senior designers to create user interface designs for mobile and web applications. Conducted user research and usability testing, and delivered design deliverables using Figma including wireframes, prototypes, and design systems.',
    skills: ['UI Design', 'UX Research', 'Figma', 'Prototyping', 'User Testing'],
    images: [
      '/images/experience/2.jpg',
      '/images/experience/1.jpg',
    ],
    type: 'internship',
  },

]
