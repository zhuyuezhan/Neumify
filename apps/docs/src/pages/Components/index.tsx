import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Link = ({ route, label }: { route: string; label: string }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `hover:text-info ${isActive ? 'text-info' : ''}`
      }
      to={route}
    >
      {label}
    </NavLink>
  )
}

const Components: React.FC = () => {
  return (
    <div className="flex px-16 pt-8">
      <aside className="fixed flex w-1/12 flex-col gap-4">
        <Link label="Button" route="/components/Button" />
        <Link label="TextInput" route="/components/TextInput" />
        <Link label="Accordion" route="/components/Accordion" />
      </aside>
      <main className="flex-1 px-16">
        <Outlet />
      </main>
    </div>
  )
}

export { Components }
export * from './Buttons'
export * from './TextInputs'
export * from './Accordions'
