import React from 'react'
import Container from './layout/Container'
import logo from '../assets/images/logo.webp'
import { FaSearch } from "react-icons/fa";
import Heart from '../icons/Heart';
import { FaBagShopping } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <Container>
      <div className='flex justify-between items-center'>
        <div>
          <img src={logo} alt="logo" fetchPriority='high' />
        </div>
        <div className='relative flex'>
          <input
            type="text"
            placeholder='Search'
            className='border border-[#808080] w-[400px] py-3 pl-11 
            placeholder:text-[#808080] placeholder:font-pop placeholder:text-sm 
            rounded-tl-md rounded-bl-md '
          />
          <FaSearch className='absolute left-4 top-0 translate-y-1/2 text-gray-500 text-2xl' />
          <button className='font-pop font-semibold text-sm text-white px-6 py-3.5 bg-primary rounded-br-md rounded-tr-md '>Search</button>
        </div>
        <div className='flex gap-x-8'>
         <div className=' relative after:w-[2px] after:h-[25px] after:bg-gry after:content-[] after:absolute
          after:top-[5px] after:right-[-16px]'>
           <Heart/>
         </div>
        <div className='flex gap-x-3'>
           <div>
             <FaBagShopping className='text-[34px]' />
           </div>
           <div>
              <span className='font-pop text-sm'>Shopping cart:</span><br/>
              <span className='font-pop text-md font-bold'>$57.00</span>
           </div>
        </div>
        </div>
      </div>
    </Container>
  )
}

export default SearchBar