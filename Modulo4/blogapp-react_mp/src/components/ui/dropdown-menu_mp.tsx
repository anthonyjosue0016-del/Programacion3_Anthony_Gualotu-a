import * as React from 'react'
import { cn } from '@/lib/utils'

interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end'
}

interface DropdownMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export function DropdownMenu({ children }: React.PropsWithChildren<Record<string, unknown>>) {
  return <div className="relative inline-block">{children}</div>
}

export function DropdownMenuTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={cn('inline-flex items-center gap-2', className)} {...props}>
      {children}
    </button>
  )
}

export function DropdownMenuContent({ children, align = 'start', className, ...props }: DropdownMenuContentProps) {
  const alignmentClass = align === 'end' ? 'right-0' : 'left-0'
  return (
    <div className={cn('absolute z-50 mt-2 w-56 rounded-lg border bg-white shadow-lg', alignmentClass, className)} {...props}>
      {children}
    </div>
  )
}

export function DropdownMenuItem({ asChild, children, className, ...props }: DropdownMenuItemProps) {
  if (asChild) {
    const child = React.Children.only(children)
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        className: cn('w-full px-4 py-2 text-left text-sm hover:bg-muted', className, (child.props as any)?.className),
        ...props,
      })
    }
  }

  return (
    <button type="button" className={cn('w-full px-4 py-2 text-left text-sm hover:bg-muted', className)} {...props}>
      {children}
    </button>
  )
}

