import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'

const MainlayOut = () => {
  return (
<>
   <TopBar/>
   <Outlet/>
</>
)
}

export default MainlayOut