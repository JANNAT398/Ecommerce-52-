import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductShowcase from '../components/ProductShowcase'

const Category = () => {
     let[allPro,SetallPro] = useState([])
     useEffect(() => {
       async function allPro() {
         let proData = await axios.get(
           'https://dummyjson.com/products/categories'
         )
         SetallPro(proData.data);
       }
       allPro()
     }, [])
  return (
    <>
    <ProductShowcase allPro={allPro}/>
    </>
  )
}

export default Category