import { Metadata } from 'next'
import { products } from '../../../seed/seed'
import { ProductCard } from '../../../components/product-card'
import { FilterBar } from '../../../components/filter-bar'

export const metadata: Metadata = {
  title: 'Shop — 621 ARCHIVAL'
}

const sizeOptions = [
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' }
]

const colorOptions = [
  { label: 'Steel', value: 'Steel' },
  { label: 'Blue', value: 'Blue' }
]

const collectionOptions = [
  { label: 'Drop 01', value: 'drop-01' }
]

type ShopPageProps = {
  searchParams?: Record<string, string | string[]>
}

export default function ShopPage({ searchParams }: ShopPageProps) {
  const selectedSizes = new Set<string>(
    typeof searchParams?.size === 'string'
      ? [searchParams.size]
      : Array.isArray(searchParams?.size)
      ? searchParams?.size
      : []
  )

  const selectedColors = new Set<string>(
    typeof searchParams?.color === 'string'
      ? [searchParams.color]
      : Array.isArray(searchParams?.color)
      ? searchParams?.color
      : []
  )

  const selectedCollections = new Set<string>(
    typeof searchParams?.collection === 'string'
      ? [searchParams.collection]
      : Array.isArray(searchParams?.collection)
      ? searchParams?.collection
      : []
  )

  const searchQuery = typeof searchParams?.search === 'string' ? searchParams?.search.toLowerCase() : ''

  const filteredProducts = products.filter((product) => {
    const matchesSize = selectedSizes.size
      ? product.variants.some((variant) => selectedSizes.has(variant.size))
      : true
    const matchesColor = selectedColors.size
      ? product.variants.some((variant) => selectedColors.has(variant.color))
      : true
    const matchesCollection = selectedCollections.size ? selectedCollections.has(product.drop) : true
    const matchesSearch = searchQuery
      ? product.title.toLowerCase().includes(searchQuery) ||
        (product.description?.toLowerCase().includes(searchQuery) ?? false)
      : true

    return matchesSize && matchesColor && matchesCollection && matchesSearch
  })

  return (
    <div className="bg-background">
      <FilterBar collections={collectionOptions} colors={colorOptions} sizes={sizeOptions} />
      <section className="py-12">
        <div className="container-grid grid gap-10 md:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              image={product.images[0]}
              price={product.price}
              sku={product.sku}
              slug={product.slug}
              title={product.title}
            />
          ))}
          {filteredProducts.length === 0 && (
            <p className="col-span-full text-sm uppercase tracking-[0.2em] text-foreground/60">
              Nothing matched your filters. Clear selections to see more pieces.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
