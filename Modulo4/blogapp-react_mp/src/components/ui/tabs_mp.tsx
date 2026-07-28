import * as React from 'react'
import { cn } from '@/lib/utils'

interface TabsContextValue {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string
}

export function Tabs({ children, defaultValue, className, ...props }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue)

  return (
    <TabsContext.Provider value={{ value, onValueChange: setValue }}>
      <div className={cn('space-y-3', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}
export function TabsList({ children, className, ...props }: TabsListProps) {
  return (
    <div className={cn('flex gap-2', className)} {...props}>
      {children}
    </div>
  )
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}
export function TabsTrigger({ value, children, className, ...props }: TabsTriggerProps) {
  const context = React.useContext(TabsContext)
  const active = context?.value === value

  return (
    <button
      type="button"
      className={cn(
        'rounded-md px-3 py-1 text-sm',
        active ? 'bg-primary text-white' : 'bg-muted text-muted-foreground',
        className,
      )}
      onClick={() => context?.onValueChange(value)}
      {...props}
    >
      {children}
    </button>
  )
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}
export function TabsContent({ value, children, className, ...props }: TabsContentProps) {
  const context = React.useContext(TabsContext)
  if (context?.value !== value) return null

  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  )
}

