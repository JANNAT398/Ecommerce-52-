import React, { useRef, useState } from 'react'
import Container from '../components/layout/Container'
import { FaAngleDown } from "react-icons/fa";
import { useOutsideClick } from "../hooks/useOutsideClick ";
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownRefTwo = useRef(null);
  const dropdownRefThree = useRef(null);
  const dropdownRefFour = useRef(null);
  
  useOutsideClick(dropdownRef, () => setOpen(false), open);
  useOutsideClick(dropdownRefTwo, () => setOpenTwo(false), openTwo);
  useOutsideClick(dropdownRefThree, () => setOpenThree(false), openThree);
  useOutsideClick(dropdownRefFour, () => setOpenFour(false), openFour);
  return (
    <>
        <Container>
           <div className='bg-black text-white'>
             <ul className='flex gap-x-8 text-sm font-pop items-center relative'>
               <li className='p-4 bg-primary text-white mr-30'>
                   <FaBars/>
               </li>
               <div className='flex items-center gap-12 cursor-pointer absolute top-0 left-[46px] bg-[#333333] p-3.25'>
                    <li className='text-md font-bold hover:text-primary'>
                    <Link to ='#'>All Categories</Link>
                    </li>
                    <FaAngleDown/>
               </div>
            <div className='flex items-center gap-1 relative left-[40px]'>
              <div className="relative" ref={dropdownRef}>
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setOpen(!open)}
                  //onMouseEnter={() => setOpen(true)}
                  //onMouseLeave={() => setOpen(false)}
                >
                  <li className='hover:text-primary'><Link to ='#'>Home</Link></li>
                  <FaAngleDown />
                </div>
                {open && (
                  <div className="absolute top-[25px] bg-black text-white py-3 px-3">
                    <ul>
                      <li className='hover:text-primary'><Link to ='#'>Home1</Link></li>
                      <li className='hover:text-primary'><Link to ='#'>Home2</Link></li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className='flex items-center gap-1 relative left-[40px]'>
              <div className="relative" ref={dropdownRefTwo}>
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setOpenTwo(!openTwo)}
               //    onMouseEnter={() => setOpenTwo(true)}
                >
                  <li className='hover:text-primary'><Link to ='#'>Shop</Link></li>
                  <FaAngleDown />
                </div>
                {openTwo && (
                  <div className="absolute top-[25px] bg-black text-white py-3 px-3">
                    <ul>
                      <li className='hover:text-primary'><Link to ='#'>Shop1</Link></li>
                      <li className='hover:text-primary'><Link to ='#'>Shop2</Link></li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className='flex items-center gap-1 relative left-[40px]'>
              <div className="relative" ref={dropdownRefThree}>
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setOpenThree(!openThree)}
               //    onMouseEnter={() => setOpenThree(true)}
                >
                  <li className='hover:text-primary'><Link to ='#'>Pages</Link></li>
                  <FaAngleDown />
                </div>
                {openThree && (
                  <div className="absolute top-[25px] bg-black text-white py-3 px-3">
                    <ul>
                      <li className='hover:text-primary'><Link to ='#'>Pages1</Link></li>
                      <li className='hover:text-primary'><Link to ='#'>Pages2</Link></li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className='flex items-center gap-1 relative left-[40px]'>
              <div className="relative" ref={dropdownRefFour}>
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setOpenFour(!openFour)}
               //    onMouseEnter={() => setOpenFour(true)}
                >
                  <li className='hover:text-primary'><Link to ='#'>Blog</Link></li>
                  <FaAngleDown />
                </div>
                {openFour && (
                  <div className="absolute top-[25px] bg-black text-white py-3 px-3">
                    <ul>
                      <li className='hover:text-primary'><Link to ='#'>Blog1</Link></li>
                      <li className='hover:text-primary'><Link to ='#'>Blog2</Link></li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <li className='hover:text-primary relative left-[40px]'><Link to ='#'>About Us</Link></li>
            <li className='hover:text-primary relative left-[40px]'><Link to ='#'>Contact Us</Link></li>
          </ul>
          </div>
        </Container>
    </>
  )
}

export default Navbar