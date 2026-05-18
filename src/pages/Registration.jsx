import React, { useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

const Registration = () => {

        const [regData, setRegData] = useState({
          email: "",
          password: "",
          confirmPassword: "",
          terms: false
        })

        let handleChange = (e) => {

          let name = e.target.name
          let value = e.target.value

          if (name !== 'terms') {
            setRegData({
              ...regData,
              [name]: value
            })
          } else {
            setRegData({
              ...regData,
              terms: !regData.terms
            })
          }
        }

        let handleClick = async () => {
          let user = await axios.post('http://localhost:5000/registration',regData)
          let {success} = user.data
          console.log(success)
          
          console.log(regData)
          console.log(data)

        }

  return (

          <div className='max-w-[420px] bg-white p-6 my-10 mx-auto shadow-md'>

            <h3 className='font-pop text-[32px] font-semibold text-center'>
              Create Account
            </h3>

            <input
              onChange={handleChange}
              name='email'
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-4 rounded-md font-pop text-sm"
            />

            <input
              onChange={handleChange}
              name='password'
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop text-sm"
            />

            <input
              onChange={handleChange}
              name='confirmPassword'
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 my-4 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop text-sm"
            />

            <div className="flex items-center my-4 text-[#808080]">

              <label className="font-pop text-sm">

                <input
                  onChange={handleChange}
                  name='terms'
                  type="checkbox"
                  className="mr-2"
                />

                I agree to the Terms and Conditions

              </label>

            </div>

            <button
              onClick={handleClick}
              className="w-full bg-primary text-white py-2 font-pop text-sm hover:bg-blue-600 rounded-full cursor-pointer"
            >
              Create Account
            </button>

            <p className='text-center mt-4 text-sm text-[#808080]'>
              Already have account?

              <Link to='/login' className='text-primary cursor-pointer'>
                Login
              </Link>

            </p>

          </div>
  )
}

export default Registration