import React from 'react'
import { Link } from 'react-router'

const Registration = () => {
  return (
    <div className='max-w-[420px] bg-white p-6 my-10 mx-auto shadow-md'>
      <h3 className='font-pop text-[32px] font-semibold text-center'>Create Account</h3>
            <input
                type="name"
                placeholder="Enter Your Name"
                className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-4 rounded-md font-pop text-sm"
              />

            <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop text-sm"
              />
            <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 my-4 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop text-sm"
              />

      <div className="flex items-center my-4 text-[#808080]">
        <input type="checkbox" className="mr-2" />
            <label className="font-pop text-sm">
              I agree to the Terms and Conditions
            </label>
      </div>

      <button className="w-full bg-primary text-white py-2 font-pop text-sm hover:bg-blue-600 rounded-full cursor-pointer">
        Create Account
      </button>
      <p className='text-center mt-4 text-sm text-[#808080]'>Already have account?
        <Link to ='/login' className='text-primary cursor-pointer'> Login</Link>
      </p>
</div>
  )
}
export default Registration