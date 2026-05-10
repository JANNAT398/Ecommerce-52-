import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='max-w-[420px] bg-white p-6 my-10 mx-auto shadow-md'>
      <h3 className='font-pop text-[32px] font-semibold text-center'>Sign In</h3>
            <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-4 rounded-md font-pop text-sm"
              />

            <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop text-sm"
              />

        <div className="flex justify-between items-center my-4 text-[#808080]">

          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="font-pop text-sm">
              Remember me
            </label>
          </div>
          <Link
            to="/forgot-password"
            className="text-primary text-sm"
          >
            Forgot Password
          </Link>

          </div>
      <button className="w-full bg-primary text-white py-2 font-pop text-sm hover:bg-blue-600 rounded-full cursor-pointer">
        Login
      </button>
      <p className='text-center mt-4 text-sm text-[#808080]'>Don’t have account?
        <Link to ='/registration' className='text-primary cursor-pointer'>Registration</Link>
      </p>
</div>
  )
}

export default Login