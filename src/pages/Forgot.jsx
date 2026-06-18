import React from 'react'
import { Link } from 'react-router'


const Forgot = () => {
  return (
     <div className='max-w-[420px] bg-white p-6 my-10 mx-auto shadow-md'>
          <h3 className='font-pop text-[32px] font-semibold text-center'>
            Enter Your Email
          </h3>
    
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-4 rounded-md font-pop text-sm"
          />
          <button className="w-full bg-primary text-white py-2 font-pop text-sm rounded-full">
            Submit
          </button>
    
          <p className="text-center mt-4 text-sm text-[#808080]">
            Remember Password?
            <Link to="/login" className="text-primary ml-1">
              Login
            </Link>
          </p>
        </div>
  )
}

export default Forgot