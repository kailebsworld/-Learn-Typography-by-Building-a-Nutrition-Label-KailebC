'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { formatPrice } from '../lib/format'
import { sanityImageLoader } from '../lib/image'
import { Button } from './ui/button'
import { useCart } from './cart-provider'

export type ProductSummary = {
  title: string
  slug: string
  price: number
  image: string
  sku: string
}

export function ProductCard({ title, slug, price, image, sku }: ProductSummary) {
  const { dispatch } = useCart()

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Link className="relative block overflow-hidden" href={`/product/${slug}`}>
        <div className="relative aspect-square overflow-hidden border border-foreground/15 bg-foreground/5">
          <Image
            alt={title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loader={sanityImageLoader}
            src={image}
            fill
          />
        </div>
      </Link>
      <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.2em]">
        <span>{title}</span>
        <span>{formatPrice(price)}</span>
      </div>
      <Button
        className="mt-3"
        size="sm"
        variant="outline"
        onClick={() =>
          dispatch({ type: 'ADD', item: { sku, title, price, quantity: 1, image, variant: 'Default' } })
        }
      >
        Quick add
      </Button>
    </motion.div>
  )
}
