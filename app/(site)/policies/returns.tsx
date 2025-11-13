import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Returns Policy — 621 ARCHIVAL'
}

export default function ReturnsPolicy() {
  return (
    <section className="bg-background py-16">
      <div className="container-grid space-y-4 text-sm uppercase tracking-[0.2em] text-foreground/70">
        <h1 className="font-display text-4xl text-foreground">Returns</h1>
        <p>Returns accepted within 14 days in original condition. Exchanges subject to availability.</p>
      </div>
    </section>
  )
}
