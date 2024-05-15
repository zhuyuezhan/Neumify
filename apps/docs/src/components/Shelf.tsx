import React from 'react'
import { cn } from '@/common/utils'


interface ShelfProps {
  title: string,
  className?: string
  children: React.ReactNode[] | React.ReactNode
}
const Shelf: React.FC<ShelfProps> = ({ title,className, children }) => {
  return (
    <>
      <span className="text-lg">{title}</span>
      <div className={cn("mb-6 flex items-center justify-center gap-4",className)}>
        {children}
      </div>
    </>
  )
}

export { Shelf }
