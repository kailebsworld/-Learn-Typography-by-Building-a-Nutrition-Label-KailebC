'use client'

import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog'

export function SizeChartDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="link">
          Size chart
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Size Guide</DialogTitle>
        <DialogDescription>
          Tailored with a relaxed fit. For a closer fit, consider sizing down.
        </DialogDescription>
        <table className="mt-6 w-full border-collapse text-xs uppercase tracking-[0.2em]">
          <thead>
            <tr className="border-b border-foreground/20 text-left">
              <th className="pb-2">Size</th>
              <th className="pb-2">Chest (in)</th>
              <th className="pb-2">Length (in)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { size: 'S', chest: '34-36', length: '27' },
              { size: 'M', chest: '38-40', length: '28' },
              { size: 'L', chest: '42-44', length: '29' },
              { size: 'XL', chest: '46-48', length: '30' }
            ].map((row) => (
              <tr key={row.size} className="border-b border-foreground/10">
                <td className="py-3">{row.size}</td>
                <td>{row.chest}</td>
                <td>{row.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DialogContent>
    </Dialog>
  )
}
