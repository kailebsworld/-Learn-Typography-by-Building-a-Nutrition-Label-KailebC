'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../utils/cn'

const buttonVariants = {
  default: 'inline-flex items-center justify-center gap-2 rounded-full border border-foreground/10 bg-foreground px-6 py-2 text-sm font-medium uppercase tracking-[0.2em] text-background transition hover:bg-foreground/90',
  ghost: 'inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm uppercase tracking-[0.2em] text-foreground transition hover:border-foreground/30 hover:bg-foreground/5',
  outline: 'inline-flex items-center justify-center gap-2 rounded-full border border-foreground/40 px-6 py-2 text-sm uppercase tracking-[0.2em] text-foreground transition hover:bg-foreground/5',
  link: 'text-sm uppercase tracking-[0.2em] underline-offset-8 hover:underline'
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: keyof typeof buttonVariants
  size?: 'sm' | 'md' | 'lg' | 'icon'
}

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-8 px-3 text-[10px]',
  md: 'h-10 px-4 text-xs',
  lg: 'h-12 px-6 text-sm',
  icon: 'h-10 w-10 p-0'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants[variant], sizeStyles[size], className)} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button }
