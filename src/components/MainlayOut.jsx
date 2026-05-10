import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import TopBar from '../components/TopBar'
import SearchBar from '../components/SearchBar'
import Navbar from './Navbar'
import Footer from './Footer'
import FooterTop from './FooterTop'
import Breadcrumb from './Breadcrumb'
// import Modal from '../components/Modals'
// import Sidebar from '../components/SideBar'

const MainlayOut = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [sideOpen, setSideOpen] = useState(false);
let pageName=useLocation().pathname
console.log(pageName.pathname)
  return (
    <>
      <TopBar />
      {/* <div className="relative"> */}
        <SearchBar />
        <Navbar/>
        {pageName !== '/' && <Breadcrumb/> }
        {/* <div className="absolute right-10 top-1/2 -translate-y-1/2 flex gap-3">
          <button
            onClick={() => setModalOpen(true)}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Modal
          </button>

          <button
            onClick={() => setSideOpen(true)}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Sidebar
          </button> */}
        {/* </div>
      </div> */}

      <Outlet />
      <FooterTop/>
      <Footer/>
      {/* <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Sidebar open={sideOpen} onClose={() => setSideOpen(false)} /> */}
    </>
  )
}

export default MainlayOut