import React from 'react'
import {Routes, Route } from "react-router";
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Forgot from './pages/Forgot';
import MainlayOut from './components/MainlayOut';
import Reset from './pages/Reset';


const App = () => {
  return (
<>
<Routes>
  <Route element={<MainlayOut/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forgot-password" element={<Forgot/>} />
      <Route path="/reset-password" element={<Reset/>} />
  </Route>
</Routes></>  
)
}

export default App