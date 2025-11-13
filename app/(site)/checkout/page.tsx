'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '../../../components/ui/button'
import { useCart } from '../../../components/cart-provider'

export default function CheckoutPage() {
  const params = useSearchParams()
  const { state } = useCart()
  const [loading, setLoading] = useState(false)
  const status = params?.get('status')

  useEffect(() => {
    if (status === 'success') {
      // In a full implementation we would clear the cart and confirm order
    }
  }, [status])

  const startCheckout = async () => {
    setLoading(true)
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: state.items.map((item) => ({ sku: item.sku, quantity: item.quantity }))
      })
    })

    const data = await response.json()
    setLoading(false)
    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <section className="bg-background py-16">
      <div className="container-grid space-y-6">
        <h1 className="font-display text-5xl">Checkout</h1>
        {status === 'success' && (
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            Payment successful — your order is on the way.
          </p>
        )}
        {status === 'cancelled' && (
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
            Checkout cancelled. You can try again below.
          </p>
        )}
        <Button disabled={loading || state.items.length === 0} size="lg" onClick={startCheckout}>
          {loading ? 'Redirecting…' : 'Continue to Stripe'}
        </Button>
      </div>
    </section>
  )
}
