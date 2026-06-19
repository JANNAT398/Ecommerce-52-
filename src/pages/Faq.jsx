import React from 'react'
import Container from '../components/layout/Container'
import faq from '../assets/images/faq.webp'
const Faq = () => {
  return (
     <>
       <Container>
              <div className='flex items-center justify-between'>
                <div className='50%'>
                 
                </div>
                <div className='45%'>
                 <img className='max-w-[50%] mx-end' src={faq} alt="faq" />
                </div>
              </div>
       </Container>
     </>
    );
};

export default Faq