import React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cva } from 'class-variance-authority'
import { Plus } from 'lucide-react'
import { cn } from '@/common/utils'

const AccordionVariants = cva(
  'border-dark divide-dark shadow-inset-2 divide-y rounded border',
  {
    variants: {
      variant: {
        inset: 'shadow-inset-2',
        outset: 'shadow-outset-3'
      }
    },
    defaultVariants: {
      variant: 'outset'
    }
  }
)

const variantTypes = ['inset', 'outset'] as const
type VariantType = (typeof variantTypes)[number]

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    variant?: VariantType
  }
>(({ variant, className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(AccordionVariants({ variant }), className)}
    {...props}
  />
))

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('', className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'text-primary flex flex-1 items-center justify-between p-4 font-medium transition-all [&[data-state=open]>svg]:rotate-45',
        className
      )}
      {...props}
    >
      {children}
      <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 text-black font-extrabold" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-secondary overflow-hidden text-sm transition-all"
    {...props}
  >
    <div className={cn('px-4 pb-2', className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  type variantTypes
}
