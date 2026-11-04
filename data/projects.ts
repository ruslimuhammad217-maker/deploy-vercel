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
  instagramUrl?: string
}

export type ProjectCategory =
  | 'Social Media'
  | 'UI/UX'
  | 'Video'

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
    id: '5',
    slug: 'archi-app-ui',
    title: 'Smart Career',
    category: 'UI/UX',
    year: '2025',
    client: 'Academic',
    role: 'UI/UX Designer',
    shortDescription: 'Mobile app interface for an architecture platform',
    fullDescription:
      'Smart Career merupakan aplikasi pengembangan karier yang dirancang untuk membantu pengguna menemukan peluang pekerjaan sesuai dengan kompetensi, keterampilan, dan kemampuan yang dimiliki. Aplikasi ini menyediakan fitur rekomendasi pekerjaan yang disesuaikan dengan profil pengguna, informasi lowongan pekerjaan, serta tips dan trik dalam menghadapi proses wawancara kerja (interview). Melalui berbagai fitur tersebut, Smart Career bertujuan mempermudah pengguna dalam merencanakan perjalanan karier, menemukan pekerjaan yang sesuai, serta meningkatkan kesiapan dan kepercayaan diri dalam menghadapi dunia kerja.',
    challenge:
      'Designing a complex information architecture that still felt clean and intuitive for both professional architects and non-technical clients.',
    solution:
      'Used a structured editorial layout inspired by architecture magazines, with clear hierarchy, generous whitespace, and a neutral palette that lets project photography take center stage.',
    coverImage: '/images/project/cu2.png',
    images: [
      '/images/project/ui3.png',
    ],
    tags: ['UI Design', 'UX Research', 'Mobile App', 'Figma'],
    featured: false,
    color: '#2D4A3E',
  },
  {
    id: '6',
    slug: 'holo-ui-dashboard',
    title: 'Bridge for Justice ',
    category: 'UI/UX',
    year: '2024',
    client: 'Academic',
    role: 'UI/UX Designer',
    shortDescription: 'Data visualization dashboard for analytics platform',
    fullDescription:
      'Bridge for Justice merupakan aplikasi yang dirancang sebagai platform pengaduan dan komunikasi masyarakat untuk membantu melaporkan berbagai tindak kejahatan atau tindakan mencurigakan yang terjadi di lingkungan sekitar. Aplikasi ini menyediakan fitur pelaporan yang memungkinkan pengguna menyampaikan informasi terkait kejadian, serta forum diskusi sebagai wadah untuk berbagi informasi, bertukar pendapat, dan meningkatkan kesadaran masyarakat terhadap keamanan lingkungan. Melalui platform ini, Bridge for Justice bertujuan mendorong partisipasi aktif masyarakat dalam menciptakan lingkungan yang lebih aman, peduli, dan responsif terhadap permasalahan sosial.',
    challenge:
      'Making data-heavy interfaces feel approachable and visually interesting without sacrificing clarity or performance.',
    solution:
      'Applied data visualization best practices with a dark interface that uses color strategically — only to encode data meaning, never decoratively.',
    coverImage: '/images/project/cu3.png',
    images: [
      '/images/project/ui1.png',
    ],
    tags: ['Dashboard', 'Data Viz', 'UI Design', 'Dark Mode'],
    featured: false,
    color: '#0D1B2A',
  },
  {
    id: '7',
    slug: 'ecommerce-app-ui',
    title: 'NearFuel',
    category: 'UI/UX',
    year: '2024',
    client: 'ShopEase',
    role: 'UI/UX Designer',
    shortDescription: 'Clean and modern mobile e-commerce shopping experience',
    fullDescription:
      'NearFuel merupakan aplikasi berbasis lokasi yang dirancang untuk membantu pengguna menemukan persebaran Stasiun Pengisian Bahan Bakar Umum (SPBU) dan Stasiun Pengisian Kendaraan Listrik Umum (SPKLU) terdekat. Aplikasi ini menyediakan informasi detail mengenai setiap stasiun, seperti lokasi, fasilitas, dan informasi pendukung lainnya. Selain itu, pengguna dapat memberikan penilaian dan ulasan terhadap SPBU maupun SPKLU yang telah dikunjungi. Melalui fitur tersebut, NearFuel bertujuan memudahkan pengguna dalam menemukan fasilitas pengisian energi, memperoleh informasi yang relevan, serta membantu pengguna lain menentukan pilihan berdasarkan pengalaman dan penilaian masyarakat.',
    challenge:
      'Simplifying a complex purchase funnel without removing essential steps, while keeping the interface visually engaging to encourage browsing.',
    solution:
      'Redesigned the navigation to use a bottom-sheet exploration pattern, introduced a persistent mini-cart, and streamlined checkout to 3 steps with inline validation.',
    coverImage: '/images/project/cu1.png',
    images: [
      '/images/project/ui2.png',
    ],
    tags: ['E-Commerce', 'Mobile UI', 'UX Design', 'Prototyping'],
    featured: false,
    color: '#1A237E',
  },
  // ── Video ─────────────────────────────────────────────────

  {
    id: '10',
    slug: 'pmb-pcr-promotional-video',
    title: 'PMB PCR Ramadhan Video',
    category: 'Video',
    year: '2026',
    client: 'Politeknik Caltex Riau',
    role: 'Video Editor & Motion Graphics',
    shortDescription: 'Institutional promotional video highlighting campus facilities and admission programs',
    fullDescription:
      '**Video PMB Edisi Ramadan Politeknik Caltex Riau** merupakan konten kreatif yang diproduksi dalam rangka menyambut dan memperingati bulan suci Ramadan sekaligus menjadi media promosi Penerimaan Mahasiswa Baru (PMB) Politeknik Caltex Riau. Video ini menggabungkan nuansa Ramadan dengan penyampaian informasi dan promosi kampus melalui konsep visual yang menarik dan komunikatif. Konten ini bertujuan meningkatkan interaksi dengan audiens di media sosial, memperkuat citra positif kampus, serta memperkenalkan Politeknik Caltex Riau kepada calon mahasiswa dengan pendekatan yang lebih kreatif dan relevan.',
    challenge:
      'Menyajikan informasi institusional dan teknis yang padat agar tetap menarik ditonton hingga akhir tanpa terkesan monoton atau kaku.',
    solution:
      'Mengintegrasikan infografis animasi (motion graphics) di atas footage nyata, pacing video yang dinamis dengan pemilihan musik latar yang inspiratif dan bersemangat, serta transisi scene yang mulus.',
    coverImage: '/images/project/c3.png',
    images: [

    ],
    tags: ['Promo Video', 'Premiere Pro'],
    featured: false,
    color: '#1D3557',
    instagramUrl: 'https://www.instagram.com/reel/DWGmIMHkRnj/',
  },
]

export const projectCategories: ProjectCategory[] = [
  'Social Media',
  'UI/UX',
  'Video',
]
