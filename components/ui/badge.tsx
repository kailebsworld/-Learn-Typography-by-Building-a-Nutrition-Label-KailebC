import { cn } from '../../utils/cn'

export function Badge({ className, children }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('inline-flex items-center border border-foreground/30 px-2 py-1 text-[10px] uppercase tracking-[0.2em]', className)}>
      {children}
    </span>
  )
}
