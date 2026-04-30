import React from 'react'
import Container from './layout/Container'
import logo from '../assets/images/logo.webp'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <Container>
      <div className='flex justify-between items-center'>
        <div>
          <img src={logo} alt="logo" fetchPriority='high' />
        </div>
        <div className='relative'>
          <input
            type="text"
            placeholder='Search'
            className='border border-[#808080] w-[498px] py-3 pl-10 
            placeholder:text-[#808080] placeholder:font-pop placeholder:text-sm rounded'
          />
          <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' />
        </div>
        <div>
          sdfsdfr
        </div>
      </div>
    </Container>
  )
}

export default SearchBar