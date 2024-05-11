import React, { useState, useId } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/common/utils'

export interface ItemVo {
  label: string
  key: string
  children: React.ReactNode
}
interface NavbarProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, 'onChange'> {
  items: ItemVo[]
  onChange: (item: ItemVo) => void
  defaultActiveKey: string | number
  className?: string
}
const Navbar = React.forwardRef<HTMLUListElement, NavbarProps>(
  ({ items, defaultActiveKey, onChange, className, ...props }, ref) => {
    const [activeKey, setActiveKey] = useState<any>(defaultActiveKey)
    const sliderId = useId()

    const handleLinkClick = (item: ItemVo) => {
      if (item.key !== activeKey) {
        onChange(item)
        setActiveKey(item.key)
      }
    }
    return (
      <ul
        className={cn(
          'from-base-light to-base-dark bg-base shadow-outset-default relative flex w-fit list-none rounded-lg bg-gradient-to-br px-4 py-2',
          className
        )}
        ref={ref}
        {...props}
      >
        {items.map((item) => {
          return (
            <li
              key={item.key}
              className={cn('relative flex items-center justify-center')}
              onClick={() => handleLinkClick(item)}
            >
              {item.key === activeKey && (
                <motion.div
                  layoutId={sliderId}
                  className={cn(
                    'z-2 shadow-inset-default opacity-1 absolute h-full w-full rounded-lg '
                  )}
                ></motion.div>
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

export { Navbar }
