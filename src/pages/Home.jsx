import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/layout/Container'
import Banner from '../components/Banner'
import ProductShowcase from '../components/ProductShowcase'
import axios from 'axios'

const Home = () => {
  let[allPro,SetallPro] = useState([])
  let[allCat,SetAllCat] = useState([])
  useEffect(() => {
    async function allPro() {
      let proData = await axios.get(
        'https://dummyjson.com/products/categories'
      )
      SetallPro(proData.data.slice(0,12));
    }
    allPro()
  }, [])

  useEffect(() => {
    async function allCat() {
      let proData = await axios.get(
        'https://dummyjson.com/products'
      )
      SetAllCat(proData.data.products.slice(0,12));
    }
    allCat()
  }, [])


  return (
    <>
    <Banner/>
    <ProductShowcase allData={allPro} />
    <ProductShowcase allData={allCat} />
    </>
  )
}

export default Home