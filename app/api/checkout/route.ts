import { NextResponse } from 'next/server'
import { z } from 'zod'
import { stripe } from '../../../lib/stripe'

const bodySchema = z.object({
  items: z.array(z.object({ sku: z.string(), quantity: z.number().int().positive() }))
})

const skuToPriceMap: Record<string, string> = {
  sku_archival_tee_s: 'price_123_archival_tee',
  sku_archival_tee_m: 'price_123_archival_tee',
  sku_archival_tee_l: 'price_123_archival_tee',
  sku_archival_tee_xl: 'price_123_archival_tee',
  sku_steel_hoodie_s: 'price_123_steel_hoodie',
  sku_steel_hoodie_m: 'price_123_steel_hoodie',
  sku_steel_hoodie_l: 'price_123_steel_hoodie',
  sku_steel_hoodie_xl: 'price_123_steel_hoodie',
  sku_blue_tote: 'price_123_blue_tote'
}

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
  }

  const json = await request.json()
  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const successUrl = `${baseUrl}/checkout?status=success`
  const cancelUrl = `${baseUrl}/checkout?status=cancelled`

  const lineItems = parsed.data.items
    .map((item) => {
      const price = skuToPriceMap[item.sku]
      if (!price) return null
      return { price, quantity: item.quantity }
    })
    .filter(Boolean) as { price: string; quantity: number }[]

  if (lineItems.length === 0) {
    return NextResponse.json({ error: 'No valid items' }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: lineItems,
    allow_promotion_codes: true,
    success_url: successUrl,
    cancel_url: cancelUrl
  })

  return NextResponse.json({ url: session.url })
}
