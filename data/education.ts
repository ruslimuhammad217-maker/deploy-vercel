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
    startYear: '2022',
    endYear: '2026',
    gpa: '3.8',
    location: 'Pekanbaru, Indonesia',
    description:
      'Focused on computer science fundamentals with a personal specialization in graphic design, UI/UX, and visual communication throughout the program.',
    achievements: [
      'Juara 3 International Competitive Programming and Multimedia Competition (Kategori Multimedia)',

    ],
  },
  {
    id: '2',
    institution: 'SMA Negeri 11 Pekanbaru',
    degree: 'High School',
    field: 'Science',
    startYear: '2019',
    endYear: '2022',
    location: 'Pekanbaru, Indonesia',
    description: 'Graduated with honors. Active in art and design extracurricular activities.',
  },
]
