import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/common/utils'

interface SliderProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    'value'
  > {
  color?: string
}

const Thumb = () => (
  <SliderPrimitive.Thumb className="border-dark shadow-outset-3 bg-base ring-offset-background block aspect-square w-5 rounded-full border transition-all hover:w-6 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
)

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ color, className, ...props }, ref) => {
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex touch-none select-none items-center data-[orientation=vertical]:flex-col',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="shadow-inset-2 border-dark bg-base relative grow overflow-hidden rounded-full border data-[orientation=horizontal]:h-2 data-[orientation=vertical]:h-40 data-[orientation=horizontal]:w-40 data-[orientation=vertical]:w-2">
        <SliderPrimitive.Range
          className="bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          style={{ backgroundColor: color }}
        />
      </SliderPrimitive.Track>
      <Thumb />
      {props.defaultValue && props.defaultValue[1] && <Thumb />}
    </SliderPrimitive.Root>
  )
})
Slider.displayName = 'Slider'

export { Slider }
