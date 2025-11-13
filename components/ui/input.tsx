import * as React from 'react'
import { cn } from '../../utils/cn'

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          'h-11 w-full border-b border-foreground/30 bg-transparent px-1 text-sm uppercase tracking-[0.2em] text-foreground transition focus:border-foreground focus:outline-none',
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
