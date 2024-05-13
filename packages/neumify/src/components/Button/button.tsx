import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/common/utils'

const buttonVariants = cva(
  'shadow-outset-3 hover:shadow-inset-2 hover:border-light transition bg-base inline-flex items-center justify-center whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 rounded border border-dark transition-all',
  {
    variants: {
      variant: {
        primary: 'text-gray',
        secondary: 'text-warning',
        success: 'text-success',
        info: 'text-info',
        danger: 'text-danger'
      },
      size: {
        small: 'h-9 py-2 px-4',
        regular: 'h-10 py-2 px-4',
        large: 'h-11 py-2 px-4'
      },
      shape: {
        round: '',
        circle: 'aspect-square p-1 rounded-[9999px]',
        squire: 'aspect-square p-1',
        capsule: 'rounded-full'
      },
      animate: {
        false: '',
        top: 'hover:-translate-y-default',
        right: 'hover:translate-x-default',
        bottom: 'hover:translate-y-default',
        left: 'hover:-translate-x-default'
      },
      link: {
        false: '',
        true: 'border-none shadow-clear hover:shadow-clear'
      },
      underline: {
        false: '',
        true: 'underline-offset-8 hover:underline'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'regular',
      shape: 'round',
      animate: false,
      link: false,
      underline: false
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // isLoading?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      animate,
      link,
      underline,
      // isLoading,   //TODO
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            shape,
            animate,
            link,
            underline,
            className
          })
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
