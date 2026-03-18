import React from 'react'
import Navbar from './Navbar'
import {Outlet} from "react-router-dom"
import Footer from './Footer'
import ScrollToHash from './ScrollToHash'

const Layout = () => {
  return (
      <>
          <ScrollToHash/>
          <Navbar />
          <main>
              <Outlet/>
          </main>
          <Footer/>
      </>
  )
}

export default Layout