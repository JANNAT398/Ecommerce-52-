import React from 'react'
import Container from '../components/layout/Container'
import faq from '../assets/images/faq.webp'
const Faq = () => {
  return (
     <>
       <Container>
          <div className='flex items-center justify-between'>
            <div className='max-w-[648px]'>
            <h1 className='font-semibold font-poppins text-[48px] w-[532px]'>Welcome, Let’s Talk About Our Ecobazar</h1>
            </div>
            <div className='max-w-[741px] mt-[33px]'>
              <img src={faq} alt="faq" />
            </div>
          </div>
       </Container>
     </>
    );
};

export default Faq