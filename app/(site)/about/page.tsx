import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — 621 ARCHIVAL'
}

export default function AboutPage() {
  return (
    <section className="bg-background py-20">
      <div className="container-grid space-y-6">
        <h1 className="font-display text-5xl">About</h1>
        <p className="max-w-2xl text-sm uppercase tracking-[0.2em] text-foreground/70">
          621 ARCHIVAL is a queer-led studio working at the intersection of archival design and
          everyday wear. We build lean digital narratives, sculptural garments, and limited drops in
          solidarity with independent creatives across Ukraine.
        </p>
      </div>
    </section>
  )
}
