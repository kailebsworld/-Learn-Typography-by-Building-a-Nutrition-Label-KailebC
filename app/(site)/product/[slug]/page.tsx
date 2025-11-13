import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { products } from '../../../../seed/seed'
import { ProductDetail } from '../../../../components/product-detail'

export const dynamicParams = false

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((item) => item.slug === params.slug)
  if (!product) return { title: 'Product — 621 ARCHIVAL' }
  return {
    title: `${product.title} — 621 ARCHIVAL`,
    description: 'Pieces for the street.'
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug)
  if (!product) notFound()

  return (
    <div className="bg-background py-16">
      <div className="container-grid">
        <ProductDetail product={product} />
      </div>
    </div>
  )
}
