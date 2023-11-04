import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './navbar'
export default function HeaderLayout() {
  return (
    <div className='header-layout-container'>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
