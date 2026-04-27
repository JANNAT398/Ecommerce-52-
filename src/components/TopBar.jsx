import React from 'react'
import Container from './layout/Container'
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";



const TopBar = () => {
  return (
     <>
        <div className='border border-solid border-b-gry font-pop text-[#666666] text-sm'>
            <Container>
              <div className='flex justify-between'>
                <div className='flex items-center gap-x-1'> <CiLocationOn /> Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
                <div className='flex gap-x-5'>
                  <div className='flex items-center'>
                    Eng 
                    <FaAngleDown />
                  </div>
                  <div className='flex items-center'>
                    USD
                    <FaAngleDown />
                  </div>
                  <div className='flex items-center relative after::w-[5px] after::h-[5px] after::bg-red-500 after::content-[*]'>
                  Sign In/Sign Up
                  </div>
                </div>
              </div>
            </Container>
        </div>
     </>
  )
}

export default TopBar