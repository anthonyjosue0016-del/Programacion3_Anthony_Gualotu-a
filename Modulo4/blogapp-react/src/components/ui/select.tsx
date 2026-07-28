import * as React from 'react'
import { cn } from '@/lib/utils'

interface SelectContextState {
  value: string
  onValueChange: (value: string) => void
}

const SelectContext = React.createContext<SelectContextState | null>(null)

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  onValueChange: (value: string) => void
}

export function Select({ value, onValueChange, children, className, ...props }: SelectProps) {
  return (
    <SelectContext.Provider value={{ value, onValueChange }}>
      <div className={cn('relative', className)} {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  )
}

export function SelectTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={cn('inline-flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm', className)} {...props}>
      {children}
    </button>
  )
}

interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string
}

export function SelectValue({ children, placeholder, className, ...props }: SelectValueProps) {
  const context = React.useContext(SelectContext)
  return (
    <span className={cn('text-sm', className)} {...props}>
      {children || context?.value || placeholder}
    </span>
  )
}

export function SelectContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mt-2 rounded-md border bg-white shadow-sm', className)} {...props}>
      {children}
    </div>
  )
}

interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export function SelectItem({ value, className, children, ...props }: SelectItemProps) {
  const context = React.useContext(SelectContext)

  return (
    <button
      type="button"
      className={cn('w-full px-3 py-2 text-left text-sm hover:bg-muted', className)}
      onClick={() => context?.onValueChange(value)}
      {...props}
    >
      {children}
    </button>
  )
}
