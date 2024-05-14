import React, { useState, useId } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/common/utils'

interface ItemVo {
  label: string
  key: string
  children: React.ReactNode
}
interface NavbarProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, 'onChange'> {
  items: ItemVo[]
  onChange: (item: ItemVo) => void
  activeKey?: string | number
  className?: string
}
const Navbar = React.forwardRef<HTMLUListElement, NavbarProps>(
  ({ items, activeKey, onChange, className, ...props }, ref) => {
    const sliderId = useId()

    const handleLinkClick = (item: ItemVo) => {
      if (item.key !== activeKey) {
        onChange(item)
      }
    }
    return (
      <ul
        className={cn(
          'bg-base border-dark shadow-outset-3 relative flex h-fit min-h-12 w-fit list-none rounded border px-4',
          className
        )}
        ref={ref}
        {...props}
      >
        {items.map((item) => {
          return (
            <li
              key={item.key}
              className={cn(
                'hover:shadow-inset-2 relative flex cursor-pointer items-center justify-center'
              )}
              onClick={() => handleLinkClick(item)}
            >
              {item.key === activeKey && (
                <motion.div
                  layoutId={sliderId}
                  className={cn(
                    'z-2 shadow-inset-2 border-dark absolute h-full w-full border-x'
                  )}
                  transition={{ duration: 0.25 }}
                />
              )}
              {item.children}
            </li>
          )
        })}
      </ul>
    )
  }
)
Navbar.displayName = 'Navbar'

export { Navbar, type NavbarProps, type ItemVo }
