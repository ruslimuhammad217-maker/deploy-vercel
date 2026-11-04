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
  | 'Social Media'
  | 'UI/UX'
  | '3D'

export const projects: Project[] = [
  // ── Social Media ──────────────────────────────────────────
  {
    id: '1',
    slug: 'pulse-social-campaign',
    title: 'PCR FUN RUN 2026',
    category: 'Social Media',
    year: '2026',
    client: 'Politeknik Caltex Riau',
    role: 'Graphic Designer',
    shortDescription: 'Dynamic social media campaign for a fitness brand',
    fullDescription:
      'PCR Fun Run 2026 merupakan kegiatan olahraga lari sejauh 5 kilometer (5K) yang diselenggarakan oleh Politeknik Caltex Riau (PCR) dalam rangka memperingati hari jadi PCR yang ke-25 tahun. Mengusung semangat kebersamaan, kesehatan, dan gaya hidup aktif, acara ini menjadi wadah bagi civitas akademika, alumni, serta masyarakat umum untuk berpartisipasi dalam kegiatan positif yang penuh energi dan kebersamaan. Tidak hanya menjadi ajang olahraga, PCR Fun Run juga menjadi momentum untuk merayakan perjalanan 25 tahun Politeknik Caltex Riau dalam berkontribusi di dunia pendidikan dan masyarakat.',
    challenge:
      'Standing out in the highly competitive fitness content space while maintaining brand consistency across all formats and aspect ratios.',
    solution:
      'Created a kinetic design language using bold typography, high-contrast photography treatments, and a punchy color system that feels native to social media but still distinctly branded.',
    coverImage: '/images/project/c1.png',
    images: [
      '/images/project/1.png',

    ],
    tags: ['Social Media', 'Instagram', 'Content Design', 'Campaign'],
    featured: false,
    color: '#FF4D00',
  },
  {
    id: '2',
    slug: 'brand-social-identity',
    title: 'PMB PCR',
    category: 'Social Media',
    year: '2026',
    client: 'Politeknik Caltex Riau',
    role: 'Graphic Designer',
    shortDescription: 'Cohesive social media visual identity for a creative studio',
    fullDescription:
      'Penerimaan Mahasiswa Baru (PMB) Politeknik Caltex Riau merupakan program penerimaan calon mahasiswa yang diselenggarakan untuk memberikan kesempatan kepada lulusan SMA/SMK sederajat dalam melanjutkan pendidikan ke jenjang perguruan tinggi. Melalui berbagai jalur seleksi dan program penerimaan, PMB PCR menyediakan informasi mengenai program studi, persyaratan pendaftaran, serta tahapan seleksi. Kegiatan ini juga didukung dengan berbagai strategi promosi melalui media digital, media cetak, dan sosialisasi ke sekolah-sekolah untuk memperkenalkan keunggulan, fasilitas, serta peluang karier yang ditawarkan Politeknik Caltex Riau.',
    challenge:
      'Creating a visual system that could scale across different content types and creators while remaining immediately recognizable as the brand.',
    solution:
      'Designed a modular template system with locked brand elements (color blocks, typeface, logo lock-up) and flexible zones for photography and copy.',
    coverImage: '/images/project/c3.png',
    images: [
      '/images/project/3.png',
    ],
    tags: ['Instagram', 'TikTok', 'Brand Identity'],
    featured: false,
    color: '#6C2BD9',
  },
  {
    id: '3',
    slug: 'content-creator-pack',
    title: 'Semarak Perak PCR',
    category: 'Social Media',
    year: '2025',
    client: 'Politkenik Caltex Riau',
    role: 'Graphic Designer',
    shortDescription: 'Ready-to-use social media templates for content creators',
    fullDescription:
      'Dies Natalis ke-25 Politeknik Caltex Riau merupakan perayaan hari jadi Politeknik Caltex Riau yang menandai perjalanan 25 tahun dalam berkontribusi di bidang pendidikan, teknologi, dan pengembangan sumber daya manusia. Mengusung semangat kebersamaan dan inovasi, rangkaian kegiatan Dies Natalis diselenggarakan sebagai bentuk apresiasi atas pencapaian institusi sekaligus momentum untuk mempererat hubungan antara civitas akademika, alumni, dan masyarakat. Perayaan ini juga menjadi wujud komitmen Politeknik Caltex Riau untuk terus berkembang, berinovasi, dan mencetak generasi unggul yang siap menghadapi tantangan masa depan.',
    challenge:
      'Balancing creative flexibility with ease of use — the templates needed to feel polished out-of-the-box but be simple enough for non-designers to customize.',
    solution:
      'Built templates in Figma with clearly labeled components and auto-layout, making swaps quick. Each template family follows a consistent grid and spacing system.',
    coverImage: '/images/project/c4.png',
    images: [
      '/images/project/2.png',
    ],
    tags: ['Instagram', 'Brand Identity'],
    featured: false,
    color: '#E91E8C',
  },
  {
    id: '4',
    slug: 'pcr-futsal-championship',
    title: 'PCR Futsal Championship',
    category: 'Social Media',
    year: '2025',
    client: 'BEM PCR',
    role: 'Graphic Designer',
    shortDescription: 'Ready-to-use social media templates for content creators',
    fullDescription:
      'PCR Futsal Championship merupakan kompetisi olahraga futsal yang diselenggarakan oleh Badan Eksekutif Mahasiswa (BEM) Politeknik Caltex Riau dan terbuka bagi seluruh perguruan tinggi yang ada di Provinsi Riau. Kegiatan ini menjadi wadah bagi mahasiswa untuk menyalurkan bakat, mengembangkan kemampuan, serta menunjukkan semangat sportivitas dan kompetisi dalam bidang olahraga. Selain menjadi ajang pertandingan, PCR Futsal Championship juga bertujuan mempererat hubungan dan membangun solidaritas antarmahasiswa dari berbagai perguruan tinggi melalui semangat kebersamaan dan persahabatan.',
    challenge:
      'Balancing creative flexibility with ease of use — the templates needed to feel polished out-of-the-box but be simple enough for non-designers to customize.',
    solution:
      'Built templates in Figma with clearly labeled components and auto-layout, making swaps quick. Each template family follows a consistent grid and spacing system.',
    coverImage: '/images/project/c2.png',
    images: [
      '/images/project/4.png',
    ],
    tags: ['Instagram', 'Brand Identity'],
    featured: false,
    color: '#E91E8C',
  },
  // ── UI/UX ──────────────────────────────────────────────────
  {
    id: '4',
    slug: 'archi-app-ui',
    title: 'Archi App UI',
    category: 'UI/UX',
    year: '2026',
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
    id: '5',
    slug: 'holo-ui-dashboard',
    title: 'Holo Dashboard UI',
    category: 'UI/UX',
    year: '2025',
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
  {
    id: '6',
    slug: 'ecommerce-app-ui',
    title: 'E-Commerce App UI',
    category: 'UI/UX',
    year: '2024',
    client: 'ShopEase',
    role: 'UI/UX Designer',
    shortDescription: 'Clean and modern mobile e-commerce shopping experience',
    fullDescription:
      'Full UI/UX design for a mobile e-commerce app, covering onboarding, product discovery, cart flow, and checkout. The focus was on reducing friction and increasing conversion.',
    challenge:
      'Simplifying a complex purchase funnel without removing essential steps, while keeping the interface visually engaging to encourage browsing.',
    solution:
      'Redesigned the navigation to use a bottom-sheet exploration pattern, introduced a persistent mini-cart, and streamlined checkout to 3 steps with inline validation.',
    coverImage: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=800&q=85',
    images: [
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=1200&q=85',
    ],
    tags: ['E-Commerce', 'Mobile UI', 'UX Design', 'Prototyping'],
    featured: false,
    color: '#1A237E',
  },
  // ── 3D ────────────────────────────────────────────────────
  {
    id: '7',
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
    featured: true,
    color: '#3A2A5E',
  },
  {
    id: '8',
    slug: 'neon-city-3d',
    title: 'Neon City 3D',
    category: '3D',
    year: '2025',
    client: 'Personal Project',
    role: '3D Artist',
    shortDescription: 'Cinematic 3D cyberpunk cityscape render',
    fullDescription:
      'A cinematic 3D environment piece depicting a rain-soaked cyberpunk city at night, created in Blender. The project focused on atmospheric lighting, volumetric fog, and neon reflections on wet surfaces.',
    challenge:
      'Achieving a believable sense of atmosphere, scale, and light in a wholly digital environment with limited render time.',
    solution:
      'Used Cycles rendering with carefully placed emission planes and volumetric scattering to simulate wet-street neon reflections, with a filmic color grade in post.',
    coverImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=85',
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=85',
    ],
    tags: ['Blender', 'Rendering', 'Environment Design', 'Cyberpunk'],
    featured: false,
    color: '#0A0A2E',
  },
  {
    id: '9',
    slug: 'product-3d-visualization',
    title: 'Product 3D Visualization',
    category: '3D',
    year: '2024',
    client: 'Luxe Brand',
    role: '3D Product Visualizer',
    shortDescription: '3D product renders for a luxury lifestyle brand',
    fullDescription:
      "High-fidelity 3D product visualization for Luxe Brand's new fragrance line. Created photorealistic bottle renders in Blender for use across web, social media, and print.",
    challenge:
      'Matching real-world material qualities (glass refraction, gold metal, frosted caps) in a 3D render that could substitute for expensive studio photography.',
    solution:
      'Used physically-based material shaders with HDRI lighting and custom environment setups to achieve photorealistic results, iterating closely with the client on material specs.',
    coverImage: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=85',
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683702?w=1200&q=85',
    ],
    tags: ['Blender', 'Product Render', '3D Visualization', 'Luxury'],
    featured: false,
    color: '#2C1810',
  },
]

export const projectCategories: ProjectCategory[] = [
  'Social Media',
  'UI/UX',
  '3D',
]
