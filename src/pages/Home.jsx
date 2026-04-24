import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  let data= useSelector((state)=>console.log(state))
  return (
    <div>Home</div>
  )
}

export default Home