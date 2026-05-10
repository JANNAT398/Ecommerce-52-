import React from 'react'
import Container from './layout/Container'
import { FaSearch } from 'react-icons/fa'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";


const FooterTop = () => {
  return (
    <div className='bg-gry py-10'>
     <Container>
          <div className='flex justify-between'>
               <div>
                    <h5 className='font-pop text-6 font-semibold'>Subcribe our Newsletter</h5>
                    <p className='font-pop text-sm font-normal text-[#999999] max-w-[400px]'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
               </div>
               <div className='flex'>
                    <div className='relative flex'>
                              <input
                                type="text"
                                placeholder='Your email address'
                                className='border border-[#808080] w-[400px] py-3 pl-11 
                                placeholder:text-[#808080] placeholder:font-pop placeholder:text-md 
                                rounded-tl-full rounded-bl-full bg-white '
                              />
                              <button className='font-pop font-semibold text-sm text-white px-10 py-4 bg-primary rounded-full left-[-30px] top-0 relative '>Subscribe</button>
                            </div>
                            <div className='flex gap-2 ml-10'>
                              <div className='text-2xl hover:bg-primary hover:text-white cursor-pointer  w-10 h-10 rounded-full flex justify-center items-center'>
                                  <FaFacebookF />
                              </div>
                              <div className='text-2xl hover:bg-primary hover:text-white cursor-pointer w-10 h-10 rounded-full flex justify-center items-center'>
                                  <FaTwitter/>
                              </div>
                              <div className='text-2xl hover:bg-primary hover:text-white cursor-pointer w-10 h-10 rounded-full flex justify-center items-center'>
                                  <FaPinterestP/>
                              </div>
                              <div className='text-2xl hover:bg-primary hover:text-white cursor-pointer w-10 h-10 rounded-full flex justify-center items-center'>
                                  <CiInstagram/>
                              </div>
                            </div>
               </div>
          </div>
     </Container>
    </div>
  )
}

export default FooterTop