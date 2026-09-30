'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import CustomCursor from '@/components/CustomCursor'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface ProjectDetailProps {
  project: Project
  otherProjects: Project[]
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function ProjectDetail({ project, otherProjects }: ProjectDetailProps) {
  const router = useRouter()

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        {/* Hero */}
        <section
          className="relative min-h-[75vh] flex flex-col justify-end"
          style={{ backgroundColor: 'var(--foreground)' }}
          aria-label={`${project.title} hero`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              style={{ opacity: 0.25, filter: 'grayscale(20%)' }}
            />
          </div>

          {/* Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, var(--foreground) 30%, rgba(26,26,26,0.3) 100%)',
            }}
          />

          <div className="container-main relative z-10 pb-16 pt-32">
            {/* Back */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/#portfolio"
                className="inline-flex items-center gap-2 font-inter text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
                style={{ color: 'rgba(245,240,235,0.5)' }}
                aria-label="Back to portfolio"
              >
                <ArrowLeft size={14} strokeWidth={1.5} />
                Back to Works
              </Link>
            </motion.div>

            {/* Meta */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-6"
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <span
                className="px-3 py-1 font-inter text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: 'var(--accent)', color: 'white' }}
              >
                {project.category}
              </span>
              <span
                className="font-inter text-sm"
                style={{ color: 'rgba(245,240,235,0.4)' }}
              >
                {project.year}
              </span>
              <span
                className="font-inter text-sm"
                style={{ color: 'rgba(245,240,235,0.4)' }}
              >
                ·
              </span>
              <span
                className="font-inter text-sm"
                style={{ color: 'rgba(245,240,235,0.4)' }}
              >
                {project.client}
              </span>
            </motion.div>

            <motion.h1
              className="text-display"
              style={{ color: 'var(--background)' }}
              custom={0.15}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              {project.title.toUpperCase()}
            </motion.h1>
          </div>
        </section>

        {/* Content */}
        <section
          className="section-padding"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <div className="container-main">
            {/* Overview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
              {/* Left — Project Info */}
              <motion.div
                className="lg:col-span-4"
                custom={0.2}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex flex-col gap-8">
                  {[
                    { label: 'Client', value: project.client },
                    { label: 'Role', value: project.role },
                    { label: 'Year', value: project.year },
                    { label: 'Category', value: project.category },
                  ].map((info) => (
                    <div
                      key={info.label}
                      className="pb-6"
                      style={{ borderBottom: '1px solid var(--border)' }}
                    >
                      <span className="text-label block mb-1">{info.label}</span>
                      <span className="font-display font-bold text-base uppercase tracking-tight">
                        {info.value}
                      </span>
                    </div>
                  ))}

                  <div>
                    <span className="text-label block mb-3">Tags</span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 font-inter text-xs font-medium uppercase tracking-wider border"
                          style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right — Description */}
              <motion.div
                className="lg:col-span-8"
                custom={0.3}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px" style={{ backgroundColor: 'var(--accent)' }} />
                  <span className="text-label">Overview</span>
                </div>
                <p className="font-body text-xl leading-relaxed mb-8" style={{ color: 'var(--foreground)' }}>
                  {project.fullDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <div>
                    <h3
                      className="font-display font-bold text-sm uppercase tracking-widest mb-3"
                      style={{ color: 'var(--accent)' }}
                    >
                      The Challenge
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h3
                      className="font-display font-bold text-sm uppercase tracking-widest mb-3"
                      style={{ color: 'var(--accent)' }}
                    >
                      The Solution
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {project.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Images Gallery */}
            <div className="flex flex-col gap-4">
              {project.images.map((img, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden w-full"
                  style={{ aspectRatio: index === 0 ? '16/9' : '3/1' }}
                  initial={{ clipPath: 'inset(100% 0 0 0)' }}
                  whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: index * 0.1 }}
                >
                  <Image
                    src={img}
                    alt={`${project.title} — Image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-cover"
                    style={{ filter: 'contrast(1.05)' }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Projects */}
        {otherProjects.length > 0 && (
          <section
            className="section-padding"
            style={{ backgroundColor: 'var(--foreground)' }}
            aria-label="More projects"
          >
            <div className="container-main">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-px" style={{ backgroundColor: 'var(--accent)' }} />
                <span className="text-label" style={{ color: 'rgba(245,240,235,0.3)' }}>
                  More Works
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherProjects.map((proj, index) => (
                  <motion.div
                    key={proj.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={`/portfolio/${proj.slug}`}
                      className="portfolio-card block relative overflow-hidden"
                      style={{ aspectRatio: '4/3' }}
                      aria-label={`View ${proj.title}`}
                      data-cursor-hover
                    >
                      <Image
                        src={proj.coverImage}
                        alt={proj.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="portfolio-card-img"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="portfolio-card-overlay">
                        <div className="portfolio-card-meta">
                          <span
                            className="font-inter text-xs font-semibold uppercase tracking-widest px-2 py-1"
                            style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                          >
                            {proj.category}
                          </span>
                          <span className="font-inter text-xs text-white/60">{proj.year}</span>
                        </div>
                        <div className="flex items-end justify-between">
                          <h3 className="portfolio-card-title">{proj.title}</h3>
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-3"
                            style={{ backgroundColor: 'var(--accent)' }}
                          >
                            <ArrowUpRight size={16} color="white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <Link href="/#portfolio" className="btn-outline" style={{ color: 'var(--background)', borderColor: 'rgba(245,240,235,0.2)' }}>
                  <span>View All Works</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
