import React from 'react'
import Container from '../components/layout/Container'
import banner from '../assets/images/banner.webp'
import banner1 from '../assets/images/banner1.webp'
import banner2 from '../assets/images/banner2.webp'
const Banner = () => {
  return (
     <>
   <Container>
     <div className='flex my-6'>
          <div className='max-w-[872px]'>
            <img src={banner} alt="banner" />
          </div>
          <div className='max-w-[423px] ml-6'>
               <img src={banner1} alt="banner1" className='mb-6'/>
               <img src={banner2} alt="banner1" />
          </div>
     </div>
   </Container>
    </>
  )
}

export default Banner