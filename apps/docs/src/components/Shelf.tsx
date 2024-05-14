import React from 'react'

interface ShelfProps {
  title: string
  children: React.ReactNode[] | React.ReactNode
}
const Shelf: React.FC<ShelfProps> = ({ title, children }) => {
  return (
    <>
      <span className="text-lg">{title}</span>
      <div className="mb-6 flex items-center justify-center gap-4">
        {children}
      </div>
    </>
  )
}

export { Shelf }
