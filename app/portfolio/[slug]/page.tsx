import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectDetail from '@/components/ProjectDetail'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Project Not Found' }

  return {
    title: `${project.title} — Arya Pratama`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Arya Pratama`,
      description: project.shortDescription,
      images: [{ url: project.coverImage }],
    },
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) notFound()

  const otherProjects = projects.filter((p) => p.slug !== params.slug).slice(0, 2)

  return <ProjectDetail project={project!} otherProjects={otherProjects} />
}
