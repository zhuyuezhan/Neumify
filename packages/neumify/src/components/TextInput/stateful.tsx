import React from 'react'
import { Check, X } from 'lucide-react'
import { cva } from 'class-variance-authority'
import { cn } from '@/common/utils'
import { type TextInputProps } from './textInput'

const statefulInputVariants = cva(
  'shadow-inset-2 bg-base flex h-10 w-60 items-center justify-center rounded border',
  {
    variants: {
      state: {
        initial: 'border-dark',
        passed: 'border-success',
        failed: 'border-danger'
      }
    },
    defaultVariants: {
      state: 'initial'
    }
  }
)

interface StatefulInputProps extends Omit<TextInputProps, 'variants'> {}

const StatefulInput = React.forwardRef<HTMLInputElement, StatefulInputProps>(
  ({ state, stateInfo, className, ...props }, ref) => {
    return (
      <span className={cn(statefulInputVariants({ state }), className)}>
        <input
          className={cn(
            'placeholder:text-hint h-full min-w-0 flex-1 rounded-l bg-transparent p-2 transition focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        <span className="flex aspect-square h-full items-center justify-center">
          {state === 'passed' && <Check className="text-success" />}
          {state === 'failed' && <X className="text-danger" />}
          {state === 'initial' && <></>}
        </span>
      </span>
    )
  }
)

export { StatefulInput }
