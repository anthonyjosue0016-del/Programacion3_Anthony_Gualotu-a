import * as React from 'react'
import { cn } from '@/lib/utils'

export const Avatar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('relative inline-flex h-full w-full overflow-hidden rounded-full bg-muted', className)} {...props} />
  ),
)
Avatar.displayName = 'Avatar'

export const AvatarImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, ...props }, ref) => <img ref={ref} className={cn('aspect-square h-full w-full object-cover', className)} {...props} />,
)
AvatarImage.displayName = 'AvatarImage'

export const AvatarFallback = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn('flex h-full w-full items-center justify-center text-sm font-medium', className)} {...props} />
  ),
)
AvatarFallback.displayName = 'AvatarFallback'

