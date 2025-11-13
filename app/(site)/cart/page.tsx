'use client'

import { formatPrice } from '../../../lib/format'
import { useCart } from '../../../components/cart-provider'
import { Button } from '../../../components/ui/button'

export default function CartPage() {
  const { state, dispatch } = useCart()
  const subtotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (state.items.length === 0) {
    return (
      <section className="bg-background py-20">
        <div className="container-grid space-y-6">
          <h1 className="font-display text-5xl">Your cart</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
            Empty for now. Explore the archive or shop the drop.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background py-16">
      <div className="container-grid grid gap-12 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          {state.items.map((item) => (
            <article key={item.sku} className="flex items-start justify-between border-b border-foreground/10 pb-4">
              <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em]">
                <span className="text-sm text-foreground">{item.title}</span>
                <span className="text-foreground/60">{item.variant}</span>
                <span>{formatPrice(item.price)}</span>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost" onClick={() => dispatch({ type: 'DECREMENT', sku: item.sku })}>
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button size="sm" variant="ghost" onClick={() => dispatch({ type: 'INCREMENT', sku: item.sku })}>
                    +
                  </Button>
                </div>
              </div>
              <Button size="sm" variant="ghost" onClick={() => dispatch({ type: 'REMOVE', sku: item.sku })}>
                Remove
              </Button>
            </article>
          ))}
        </div>
        <aside className="space-y-4 border border-foreground/10 p-6 text-xs uppercase tracking-[0.2em]">
          <h2 className="font-display text-2xl">Summary</h2>
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <Button size="lg" onClick={() => dispatch({ type: 'TOGGLE', value: true })}>
            Checkout
          </Button>
        </aside>
      </div>
    </section>
  )
}
