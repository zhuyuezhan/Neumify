import React from 'react'
import { cn } from '@/common/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'shadow-inset-default focus-visible:shadow-inset-activate sd-trasnsition from-base-dark to-base-light placeholder:text-muted-foreground flex h-11 rounded-md bg-gradient-to-br px-6 py-4 text-sm transition duration-300 ease-in-out file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
