'use client'

import { Button } from './ui/button'

export type VariantOption = {
  label: string
  value: string
  disabled?: boolean
}

type SizeSelectorProps = {
  options: VariantOption[]
  value?: string
  onChange: (value: string) => void
}

export function SizeSelector({ options, value, onChange }: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <Button
          key={option.value}
          disabled={option.disabled}
          size="sm"
          variant={value === option.value ? 'default' : 'outline'}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}
