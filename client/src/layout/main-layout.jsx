import React from 'react'
import { Heeader } from './header'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer'

export const MainLayout = () => {
  return (
    <>
      <header>
        <Heeader/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}
