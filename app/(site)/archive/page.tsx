import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { archiveProjects } from '../../../seed/seed'
import { sanityImageLoader } from '../../../lib/image'

export const metadata: Metadata = {
  title: 'Archive — 621 ARCHIVAL'
}

export default function ArchivePage() {
  return (
    <section className="bg-background py-16">
      <div className="container-grid space-y-10">
        <header className="space-y-4">
          <h1 className="font-display text-5xl">Archive</h1>
          <p className="max-w-2xl text-sm uppercase tracking-[0.2em] text-foreground/70">
            Poster-like case studies, lookbooks, and collaborations since 2021.
          </p>
        </header>
        <div className="grid gap-12 md:grid-cols-2">
          {archiveProjects.map((project) => (
            <article key={project.slug} className="space-y-4">
              <Link className="group relative block" href={`/archive/${project.slug}`}>
                <div className="relative aspect-[4/5] overflow-hidden border border-foreground/10 bg-foreground/5">
                  <Image
                    alt={project.title}
                    loader={sanityImageLoader}
                    src={project.cover}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex flex-col gap-1 text-xs uppercase tracking-[0.2em]">
                  <span className="text-foreground">{project.title}</span>
                  <span className="text-foreground/60">{project.year}</span>
                  <span className="text-foreground/60">{project.tags.join(' · ')}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
