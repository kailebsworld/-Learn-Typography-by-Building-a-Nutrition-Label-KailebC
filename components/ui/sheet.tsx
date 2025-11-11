'use client'

import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cn } from '../../utils/cn'

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close

type SheetContentProps = SheetPrimitive.DialogContentProps & {
  side?: 'left' | 'right'
}

const SheetContent = ({ className, side = 'right', ...props }: SheetContentProps) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 bg-foreground/30 backdrop-blur" />
    <SheetPrimitive.Content
      className={cn(
        'fixed inset-y-0 flex w-full max-w-sm flex-col bg-background p-6 shadow-xl focus:outline-none',
        side === 'right' ? 'right-0' : 'left-0',
        className
      )}
      {...props}
    />
  </SheetPrimitive.Portal>
)
SheetContent.displayName = SheetPrimitive.Content.displayName

export { Sheet, SheetTrigger, SheetClose, SheetContent }
