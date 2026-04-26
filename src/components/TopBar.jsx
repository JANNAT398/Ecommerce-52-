import React from 'react'
import Container from './layout/Container'
import { CiLocationOn } from "react-icons/ci";


const TopBar = () => {
  return (
     <>
        <div className='border border-solid border-b-gry'>
            <Container>
              <div className='flex justify-between'>
                <div> <CiLocationOn />Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
                <div>dfgd</div>
              </div>
            </Container>
        </div>
     </>
  )
}

export default TopBar