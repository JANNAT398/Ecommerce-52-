import React, { useState } from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar'
import Modal from '../Modals'
import Sidebar from '../SideBar'

const MainlayOut = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <>
      <TopBar />
      <div className="relative">
        <SearchBar />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex gap-3">
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
          </button>
        </div>
      </div>

      <Outlet />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Sidebar open={sideOpen} onClose={() => setSideOpen(false)} />
    </>
  )
}

export default MainlayOut