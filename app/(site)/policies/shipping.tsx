import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping Policy — 621 ARCHIVAL'
}

export default function ShippingPolicy() {
  return (
    <section className="bg-background py-16">
      <div className="container-grid space-y-4 text-sm uppercase tracking-[0.2em] text-foreground/70">
        <h1 className="font-display text-4xl text-foreground">Shipping</h1>
        <p>Worldwide shipping within 7 business days. Customs fees are the responsibility of the recipient.</p>
      </div>
    </section>
  )
}
