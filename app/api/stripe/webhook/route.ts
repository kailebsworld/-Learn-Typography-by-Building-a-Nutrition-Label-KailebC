import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(request: Request) {
  if (!process.env.STRIPE_WEBHOOK_SECRET || !process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Stripe webhook not configured' }, { status: 500 })
  }

  const signature = headers().get('stripe-signature')
  const payload = await request.text()

  let event: Stripe.Event

  try {
    event = Stripe.webhooks.constructEvent(
      payload,
      signature as string,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (error) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      // TODO: create order document in Sanity or data store
      break
    }
    default:
      break
  }

  return NextResponse.json({ received: true })
}
