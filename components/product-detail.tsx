'use client'

import { useState } from 'react'
import Image from 'next/image'
import { sanityImageLoader } from '../lib/image'
import { formatPrice } from '../lib/format'
import { Button } from './ui/button'
import { SizeSelector } from './size-selector'
import { SizeChartDialog } from './size-chart-dialog'
import { useCart } from './cart-provider'

export type ProductVariant = {
  sku: string
  size: string
  color: string
  stock: number
}

export type ProductDetailData = {
  title: string
  price: number
  description?: string
  images: string[]
  variants: ProductVariant[]
}

export function ProductDetail({ product }: { product: ProductDetailData }) {
  const { dispatch } = useCart()
  const [activeVariant, setActiveVariant] = useState(product.variants[0])
  const primaryImage = product.images[0] ?? 'https://dummyimage.com/1200x1200/0f0f0f/ffffff'

  const addToCart = () => {
    if (!activeVariant) return
    dispatch({
      type: 'ADD',
      item: {
        sku: activeVariant.sku,
        title: product.title,
        price: product.price,
        quantity: 1,
        image: primaryImage,
        variant: activeVariant.size
      }
    })
    dispatch({ type: 'TOGGLE', value: true })
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="relative aspect-square overflow-hidden border border-foreground/15 bg-foreground/5">
          <Image
            alt={product.title}
            loader={sanityImageLoader}
            src={primaryImage}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="space-y-2 text-xs uppercase tracking-[0.3em]">
          <span>621 ARCHIVAL</span>
          <h1 className="font-display text-4xl tracking-tight text-foreground">{product.title}</h1>
        </div>
        {product.description && (
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">{product.description}</p>
        )}
        <div className="text-xs uppercase tracking-[0.3em]">{formatPrice(product.price)}</div>
        <SizeSelector
          options={product.variants.map((variant) => ({
            label: variant.size,
            value: variant.sku,
            disabled: variant.stock === 0
          }))}
          value={activeVariant?.sku}
          onChange={(sku) => {
            const variant = product.variants.find((item) => item.sku === sku)
            if (variant) setActiveVariant(variant)
          }}
        />
        <SizeChartDialog />
        <Button disabled={!activeVariant || activeVariant.stock === 0} size="lg" onClick={addToCart}>
          {!activeVariant || activeVariant.stock === 0 ? 'Sold out' : 'Add to cart'}
        </Button>
      </div>
    </div>
  )
}
