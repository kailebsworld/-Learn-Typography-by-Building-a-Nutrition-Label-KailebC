import Stripe from 'stripe'

const secretKey = process.env.STRIPE_SECRET_KEY

if (!secretKey) {
  console.warn('STRIPE_SECRET_KEY is not set. Checkout will not work locally without it.')
}

export const stripe = secretKey
  ? new Stripe(secretKey, { apiVersion: '2023-10-16' })
  : ({} as Stripe)

export type CheckoutItem = {
  sku: string
  quantity: number
}
