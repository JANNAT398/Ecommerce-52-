import React from 'react'

const Reset = () => {
  return (
    <div className='max-w-[420px] bg-white p-6 my-10 mx-auto shadow-md'>
      <h3 className='font-pop text-[32px] font-semibold text-center'>
        Reset Password
      </h3>

      <div className="space-y-4 mt-4">
        <input
          type="password"
          placeholder="New Password"
          className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop text-sm"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop text-sm"
        />
      </div>

      <button className="w-full bg-primary text-white py-2 mt-4 font-pop text-sm rounded-full">
        Reset Password
      </button>
    </div>
  )
}

export default Reset