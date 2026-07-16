import type { PropsWithChildren } from 'react'

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

export function Dialog({ open, children }: DialogProps) {
  if (!open) return null
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">{children}</div>
}

export function DialogContent({ children }: PropsWithChildren) {
  return <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">{children}</div>
}

export function DialogHeader({ children }: PropsWithChildren) {
  return <div className="mb-4">{children}</div>
}

export function DialogFooter({ children }: PropsWithChildren) {
  return <div className="mt-6 flex justify-end gap-2">{children}</div>
}

export function DialogTitle({ children }: PropsWithChildren) {
  return <h2 className="text-lg font-semibold">{children}</h2>
}

export function DialogDescription({ children }: PropsWithChildren) {
  return <p className="text-sm text-muted-foreground">{children}</p>
}
