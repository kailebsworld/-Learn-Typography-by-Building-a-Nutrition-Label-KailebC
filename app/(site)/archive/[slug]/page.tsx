import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import { archiveProjects } from '../../../../seed/seed'
import { sanityImageLoader } from '../../../../lib/image'

export const dynamicParams = false

export async function generateStaticParams() {
  return archiveProjects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = archiveProjects.find((item) => item.slug === params.slug)
  if (!project) return { title: 'Project — 621 ARCHIVAL' }
  return {
    title: `${project.title} — 621 ARCHIVAL`,
    description: `Archive project from ${project.year}`
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = archiveProjects.find((item) => item.slug === params.slug)
  if (!project) notFound()

  return (
    <article className="bg-background py-16">
      <div className="container-grid space-y-12">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">{project.year}</p>
          <h1 className="font-display text-5xl">{project.title}</h1>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
            {project.tags.join(' · ')}
          </p>
        </header>
        <div className="grid gap-6">
          {project.gallery.map((image) => (
            <Image
              key={image}
              alt={project.title}
              className="w-full border border-foreground/10 object-cover"
              loader={sanityImageLoader}
              src={image}
              width={1200}
              height={800}
            />
          ))}
        </div>
        <section className="space-y-2 text-xs uppercase tracking-[0.2em] text-foreground/70">
          <h2 className="text-sm text-foreground">Credits</h2>
          <ul className="space-y-1">
            {project.credits.map((credit) => (
              <li key={credit}>{credit}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}
