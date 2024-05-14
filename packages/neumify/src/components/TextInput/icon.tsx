import React from 'react'
import { cn } from '@/common/utils'
import { type TextInputProps } from './textInput'

interface IconInputProps extends Omit<TextInputProps, 'variants'> {}

const IconInput = React.forwardRef<HTMLInputElement, IconInputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <span
        className={cn(
          'border-dark bg-base divide-dark flex h-10 w-60 divide-x rounded border disabled:opacity-50',
          className
        )}
      >
        <span
          className={cn(
            'bg-base flex aspect-square h-full items-center justify-center rounded-l'
          )}
        >
          {label}
        </span>
        <input
          className={cn(
            'shadow-inset-2 placeholder:text-hint flex-shrink-1 bg-base min-w-0 flex-1 rounded-r p-2 transition focus-visible:outline-none disabled:cursor-not-allowed'
          )}
          ref={ref}
          {...props}
        />
      </span>
    )
  }
)

export { IconInput }
