import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import TopBar from '../components/TopBar'
import SearchBar from '../components/SearchBar'
import Navbar from './Navbar'
import Footer from './Footer'
import FooterTop from './FooterTop'
import Breadcrumb from './Breadcrumb'

const MainlayOut = () => {
let pageName=useLocation().pathname
console.log(pageName.pathname)
  return (
    <>
      <TopBar />
        <SearchBar />
        <Navbar/>
        {pageName !== '/' && <Breadcrumb/> }
      <Outlet />
      <FooterTop/>
      <Footer/>
      </>
  )
}

export default MainlayOut