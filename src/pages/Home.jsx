import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/layout/Container'
import Banner from '../components/Banner'

const Home = () => {
  let data= useSelector((state)=>console.log(state))
  return (
    <>
    <Banner/>
    </>
  )
}

export default Home