import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="h-screen pt-28">
        <Outlet />
      </main>
    </>
  )
}

export { Layout }
