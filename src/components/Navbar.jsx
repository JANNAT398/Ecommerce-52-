import React, { useRef, useState } from 'react'
import Container from '../components/layout/Container'
import { FaAngleDown, FaBars } from "react-icons/fa";
import { Link } from 'react-router';

const Navbar = () => {

const [homeOpen, setHomeOpen] = useState(false);
const [shopOpen, setShopOpen] = useState(false);
const [pagesOpen, setPagesOpen] = useState(false);
const [blogOpen, setBlogOpen] = useState(false);

  const dropdownRefHome = useRef(null);
  const dropdownRefShop= useRef(null);
  const dropdownRefPages = useRef(null);
  const dropdownRefBlog = useRef(null);

  return (
    <>
    <div className='bg-black text-white'>
      <Container>

          <ul className='flex items-center gap-8 text-sm font-pop relative'>
            <li className='p-4 bg-primary text-white'>
              <FaBars />
            </li>

            <div className='flex items-center gap-12 cursor-pointer bg-[#333333] py-3 px-6'>
              <li className='text-md font-bold hover:text-primary'>
                <Link to='#'>All Categories</Link>
              </li>

              <FaAngleDown />
            </div>
            <div
              className='relative'
              ref={dropdownRefHome}
              onMouseEnter={() => setHomeOpen(true)}
              onMouseLeave={() => setHomeOpen(false)}
            >

              <div className='flex items-center gap-1 cursor-pointer hover:text-primary'>
                <li>
                  <Link to='#'>Home</Link>
                </li>

                <FaAngleDown />
              </div>

              {homeOpen && (
                <div className='absolute top-full left-0 bg-black text-white py-3 px-4 min-w-[120px]'>

                  <ul className='space-y-2'>
                    <li className='hover:text-primary'>
                      <Link to='#'>Home1</Link>
                    </li>

                    <li className='hover:text-primary'>
                      <Link to='#'>Home2</Link>
                    </li>
                  </ul>

                </div>
              )}

            </div>
            <div
              className='relative'
              ref={dropdownRefShop}
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >

              <div className='flex items-center gap-1 cursor-pointer hover:text-primary'>
                <li>
                  <Link to='#'>Shop</Link>
                </li>

                <FaAngleDown />
              </div>

              {shopOpen && (
                <div className='absolute top-full left-0 bg-black text-white py-3 px-4 min-w-[120px]'>

                  <ul className='space-y-2'>
                    <li className='hover:text-primary'>
                      <Link to='#'>Shop1</Link>
                    </li>

                    <li className='hover:text-primary'>
                      <Link to='#'>Shop2</Link>
                    </li>
                  </ul>

                </div>
              )}
            </div>
            <div
              className='relative'
              ref={dropdownRefPages}
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
            >

              <div className='flex items-center gap-1 cursor-pointer hover:text-primary'>
                <li>
                  <Link to='#'>Pages</Link>
                </li>

                <FaAngleDown />
              </div>

              {pagesOpen && (
                <div className='absolute top-full left-0 bg-black text-white py-3 px-4 min-w-[120px]'>

                  <ul className='space-y-2'>
                    <li className='hover:text-primary'>
                      <Link to='#'>Pages1</Link>
                    </li>

                    <li className='hover:text-primary'>
                      <Link to='#'>Pages2</Link>
                    </li>
                  </ul>

                </div>
              )}

            </div>

            {/* Blog */}
            <div
              className='relative'
              ref={dropdownRefBlog}
              onMouseEnter={() => setBlogOpen(true)}
              onMouseLeave={() => setBlogOpen(false)}
            >

              <div className='flex items-center gap-1 cursor-pointer hover:text-primary'>
                <li>
                  <Link to='#'>Blog</Link>
                </li>

                <FaAngleDown />
              </div>

              {blogOpen && (
                <div className='absolute top-full left-0 bg-black text-white py-3 px-4 min-w-[120px]'>

                  <ul className='space-y-2'>
                    <li className='hover:text-primary'>
                      <Link to='#'>Blog1</Link>
                    </li>

                    <li className='hover:text-primary'>
                      <Link to='#'>Blog2</Link>
                    </li>
                  </ul>

                </div>
              )}

            </div>
            <li className='hover:text-primary'>
              <Link to='#'>About Us</Link>
            </li>
            <li className='hover:text-primary'>
              <Link to='#'>Contact Us</Link>
            </li>
          </ul>
       
      </Container>
      </div>
    </>
  )
}

export default Navbar