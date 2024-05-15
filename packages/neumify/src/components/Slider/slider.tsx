import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/common/utils'

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  color?: string
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ color, className, ...props }, ref) => {
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="shadow-inset-2 border-dark bg-base relative h-2 w-full grow overflow-hidden rounded-full border">
        <SliderPrimitive.Range
          className="bg-primary absolute h-full"
          style={{ backgroundColor: color }}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="border-dark shadow-outset-3 bg-base ring-offset-background block aspect-square w-5 rounded-full border transition-all hover:w-6 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  )
})
Slider.displayName = 'Slider'

export { Slider }
