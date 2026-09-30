export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startYear: string
  endYear: string
  gpa?: string
  description?: string
  location: string
  achievements?: string[]
}

export const education: Education[] = [
  {
    id: '1',
    institution: 'Politeknik Caltex Riau',
    degree: 'D-IV',
    field: 'Teknik Informatika',
    startYear: '2021',
    endYear: '2025',
    gpa: '3.78',
    location: 'Pekanbaru, Indonesia',
    description:
      'Focused on computer science fundamentals with a personal specialization in graphic design, UI/UX, and visual communication throughout the program.',
    achievements: [
      'Best Final Project — Visual Communication Category',
      'Winner — Campus Poster Design Competition 2023',
      'Head of Creative Division, HIMTI PCR',
    ],
  },
  {
    id: '2',
    institution: 'SMA Negeri 1 Pekanbaru',
    degree: 'High School',
    field: 'Science',
    startYear: '2018',
    endYear: '2021',
    location: 'Pekanbaru, Indonesia',
    description: 'Graduated with honors. Active in art and design extracurricular activities.',
  },
]
