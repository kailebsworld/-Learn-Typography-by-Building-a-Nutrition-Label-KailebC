'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export type FilterOption = {
  label: string
  value: string
}

type FilterBarProps = {
  sizes: FilterOption[]
  colors: FilterOption[]
  collections: FilterOption[]
}

export function FilterBar({ sizes, colors, collections }: FilterBarProps) {
  const router = useRouter()
  const params = useSearchParams()

  const query = useMemo(() => new URLSearchParams(params?.toString()), [params])

  const toggle = (key: string, value: string) => {
    const existing = query.getAll(key)
    if (existing.includes(value)) {
      query.delete(key)
      existing.filter((item) => item !== value).forEach((item) => query.append(key, item))
    } else {
      query.append(key, value)
    }
    router.push(`/shop?${query.toString()}`)
  }

  const setSearch = (value: string) => {
    if (value) {
      query.set('search', value)
    } else {
      query.delete('search')
    }
    router.push(`/shop?${query.toString()}`)
  }

  return (
    <div className="border-b border-foreground/10 bg-background py-6">
      <div className="container-grid flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
          <span className="text-foreground/50">Size:</span>
          {sizes.map((option) => (
            <Button
              key={option.value}
              size="sm"
              variant={query.getAll('size').includes(option.value) ? 'default' : 'outline'}
              onClick={() => toggle('size', option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
          <span className="text-foreground/50">Color:</span>
          {colors.map((option) => (
            <Button
              key={option.value}
              size="sm"
              variant={query.getAll('color').includes(option.value) ? 'default' : 'outline'}
              onClick={() => toggle('color', option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
          <span className="text-foreground/50">Collection:</span>
          {collections.map((option) => (
            <Button
              key={option.value}
              size="sm"
              variant={query.getAll('collection').includes(option.value) ? 'default' : 'outline'}
              onClick={() => toggle('collection', option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Input
            defaultValue={query.get('search') || ''}
            placeholder="Search"
            type="search"
            onBlur={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
