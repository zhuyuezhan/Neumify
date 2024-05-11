import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/common/utils'

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    Pick<
      React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>,
      'src' | 'alt' | 'onLoadingStatusChange'
    > {
  fallback: React.ReactNode
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, src, alt, onLoadingStatusChange, fallback, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'shadow-outset-default active:shadow-outset-activate sd-transition relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  >
    <AvatarPrimitive.Image
      className={cn('aspect-square h-full w-full')}
      src={src}
      alt={alt}
      onLoadingStatusChange={onLoadingStatusChange}
    />
    <AvatarPrimitive.Fallback
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full'
      )}
    >
      {fallback}
    </AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
))
Avatar.displayName = 'Avatar'

export { Avatar }
