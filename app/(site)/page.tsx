import Link from 'next/link'
import { Hero } from '../../components/hero'
import { EditorialGrid } from '../../components/editorial-grid'
import { Newsletter } from '../../components/newsletter'
import { Button } from '../../components/ui/button'
import { products, archiveProjects, drops } from '../../seed/seed'
import { formatPrice } from '../../lib/format'

export default function HomePage() {
  const featuredArchive = archiveProjects[0]
  const featuredShop = products[0]
  const latestDrop = drops[0]

  return (
    <div className="flex flex-col">
      <Hero
        description="Pieces from the archive. Pieces for the street."
        media={{
          type: 'image',
          src: featuredArchive?.cover ?? 'https://dummyimage.com/2000x1200/0a0a0a/ffffff',
          alt: featuredArchive?.title
        }}
        title="621 ARCHIVAL — design that cuts clean and lasts."
      />
      {featuredArchive && featuredShop && (
        <EditorialGrid
          archive={{
            title: 'Enter Archive',
            href: '/archive',
            image: featuredArchive.cover,
            caption: featuredArchive.title
          }}
          shop={{
            title: 'Shop The Drop',
            href: '/shop',
            image: featuredShop.images[0],
            caption: `${featuredShop.title} — ${formatPrice(featuredShop.price)}`
          }}
        />
      )}
      {latestDrop && (
        <section className="border-b border-foreground/10 bg-background py-16">
          <div className="container-grid flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">Latest Drop</span>
              <h2 className="font-display text-4xl">{latestDrop.title}</h2>
              <p className="max-w-xl text-sm uppercase tracking-[0.2em] text-foreground/70">{latestDrop.body}</p>
            </div>
            <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.2em]">
              <span>Launches {new Date(latestDrop.launchDate).toLocaleDateString()}</span>
              <Button asChild variant="outline">
                <Link href="/shop">Shop the drop</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
      <Newsletter />
    </div>
  )
}
