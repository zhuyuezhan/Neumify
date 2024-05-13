import React from 'react'
import { cn } from '@/common/utils'
import { type TextInputProps } from './textInput'

interface ButtonInputProps extends Omit<TextInputProps, 'variants'> {}

const ButtonInput = React.forwardRef<HTMLInputElement, ButtonInputProps>(
  ({ label, onClick, className, ...props }, ref) => {
    return (
      <span
        className={cn(
          'border-dark divide-dark flex h-10 w-60 divide-x rounded border disabled:opacity-50',
          className
        )}
      >
        <input
          className={cn(
            'shadow-inset-2  bg-base placeholder:text-hint h-full min-w-0 flex-1 rounded-l p-2 transition focus-visible:outline-none disabled:cursor-not-allowed'
          )}
          ref={ref}
          {...props}
        />
        <span
          className={cn(
            'shadow-outset-3 hover:shadow-inset-2 flex aspect-square h-full items-center justify-center overflow-hidden rounded-r'
          )}
          onClick={onClick}
        >
          {label}
        </span>
      </span>
    )
  }
)
export { ButtonInput }
