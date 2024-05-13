import React from 'react'
import { cn } from '@/common/utils'
import { type TextInputProps } from './textInput'

interface BasicInputProps extends Omit<TextInputProps, 'variants'> {}

const BasicInput = React.forwardRef<HTMLInputElement, BasicInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'shadow-inset-2 border-dark bg-base placeholder:text-hint h-10 w-60 rounded border p-2 transition focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

export { BasicInput }
