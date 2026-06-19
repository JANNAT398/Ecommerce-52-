import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/layout/Container'
import Banner from '../components/Banner'
import ProductShowcase from '../components/ProductShowcase'
import axios from 'axios'

const Home = () => {
  let[allPro,SetallPro] = useState([])
  useEffect(() => {
    async function allPro() {
      let proData = await axios.get(
        'https://dummyjson.com/products/category'
      )
      SetallPro(proData.data);
    }
    allPro()
  }, [])


  return (
    <>
    <Banner/>
    <ProductShowcase allPro={allPro} />
    </>
  )
}

export default Home