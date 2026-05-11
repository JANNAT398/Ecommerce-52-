import React, { useRef, useState } from 'react'
import Container from '../components/layout/Container'
import { Link } from 'react-router'
import { FaBars, FaAngleDown } from "react-icons/fa"
import { CiApple } from "react-icons/ci"
import { GiFruitBowl, GiChickenLeg, GiButter, GiCampCookingPot } from "react-icons/gi"
import { IoFishOutline } from "react-icons/io5"
import { RiDrinksFill } from "react-icons/ri"
import { CiIceCream } from "react-icons/ci"
import { BsCake2 } from "react-icons/bs"
import { FaPlus } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { useOutsideClick } from '../hooks/useOutsideClick '


const Navbar = () => {

  const [sideBar, setSideBar] = useState(false)
  const [categories, setCategories] = useState(false)

  const [homeOpen, setHomeOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)

  const dropdownRefSideBar = useRef(null)
  const dropdownRefCategories = useRef(null)
  const dropdownRefHome = useRef(null)
  const dropdownRefShop = useRef(null)
  const dropdownRefPages = useRef(null)
  const dropdownRefBlog = useRef(null)

  useOutsideClick(
    dropdownRefSideBar,
    () => setSideBar(false),
    sideBar
  )

  return (
    <div className='bg-[#1A1A1A] text-white'>
  <Container>

    <div className="flex justify-between items-center w-full">

      <div className="flex items-center gap-8">

        <ul className='flex items-center gap-8 text-sm font-pop relative'>

          <li
            onClick={() => setSideBar(true)}
            className='p-4 bg-primary cursor-pointer'
          >
            <FaBars />
          </li>

          {sideBar && (
            <div className="fixed inset-0 bg-black/40 z-50">

              <div
                ref={dropdownRefSideBar}
                className="fixed top-0 left-0 h-full w-80 bg-white p-5"
              >

                <ul className="space-y-3 text-black">

                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><CiApple className='text-2xl'/> Fresh Fruit</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><GiFruitBowl className='text-2xl'/> Vegetables</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><IoFishOutline className='text-2xl'/> River Fish</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><GiChickenLeg className='text-2xl'/> Chicken & Meat</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><RiDrinksFill className='text-2xl'/> Drink & Water</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><CiIceCream className='text-2xl'/> Ice Cream</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><BsCake2 className='text-2xl'/> Cake & Bread</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><GiButter className='text-2xl'/> Butter & Cream</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><GiCampCookingPot className='text-2xl'/> Cooking</Link></li>

                  <li className="sidebar border-t border-b border-gray-200">
                    <Link to="#" className='flex items-center gap-2'>
                      <FaPlus /> View all Category
                    </Link>
                  </li>

                </ul>

              </div>
            </div>
          )}

          <div
            className="relative flex items-center cursor-pointer bg-[#333333] py-3 px-6"
            ref={dropdownRefCategories}
            onMouseEnter={() => setCategories(true)}
            onMouseLeave={() => setCategories(false)}
          >
            <div className='font-bold flex items-center gap-2 hover:text-primary'>
              <span><Link to="#">All Categories</Link></span>
              <FaAngleDown />
            </div>

            {categories && (
              <div className="absolute top-full left-0 mt-1 w-80 bg-white z-50">

                <ul className="text-black">

                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><CiApple className='text-2xl'/> Fresh Fruit</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><GiFruitBowl className='text-2xl'/> Vegetables</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><IoFishOutline className='text-2xl'/> River Fish</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><GiChickenLeg className='text-2xl'/> Chicken & Meat</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><RiDrinksFill className='text-2xl'/> Drink & Water</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><CiIceCream className='text-2xl'/> Ice Cream</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><BsCake2 className='text-2xl'/> Cake & Bread</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><GiButter className='text-2xl'/> Butter & Cream</Link></li>
                  <li className="sidebar"><Link to="#" className='flex items-center gap-2'><GiCampCookingPot className='text-2xl'/> Cooking</Link></li>

                  <li className="sidebar border-t border-b border-gray-200">
                    <Link to="#" className='flex items-center gap-2'>
                      <FaPlus /> View all Category
                    </Link>
                  </li>

                </ul>

              </div>
            )}
          </div>

          <div
            className='relative'
            ref={dropdownRefHome}
            onMouseEnter={() => setHomeOpen(true)}
            onMouseLeave={() => setHomeOpen(false)}
          >
            <div className='flex items-center gap-1 cursor-pointer hover:text-primary'>
              <li><Link to="#">Home</Link></li>
              <FaAngleDown />
            </div>

            {homeOpen && (
              <div className='absolute left-0 bg-black text-white py-3 px-4'>
                <ul className='space-y-2'>
                  <li><Link to="#" className='hover:text-primary'>Home1</Link></li>
                  <li><Link to="#" className='hover:text-primary'>Home2</Link></li>
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
              <li><Link to="#">Shop</Link></li>
              <FaAngleDown />
            </div>

            {shopOpen && (
              <div className='absolute left-0 bg-black text-white py-3 px-4'>
                <ul className='space-y-2'>
                  <li><Link to="#" className='hover:text-primary'>Shop1</Link></li>
                  <li><Link to="#" className='hover:text-primary'>Shop2</Link></li>
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
              <li><Link to="#">Pages</Link></li>
              <FaAngleDown />
            </div>

            {pagesOpen && (
              <div className='absolute left-0 bg-black text-white py-3 px-4'>
                <ul className='space-y-2'>
                  <li><Link to="#" className='hover:text-primary'>Pages1</Link></li>
                  <li><Link to="#" className='hover:text-primary'>Pages2</Link></li>
                </ul>
              </div>
            )}
          </div>

          <div
            className='relative'
            ref={dropdownRefBlog}
            onMouseEnter={() => setBlogOpen(true)}
            onMouseLeave={() => setBlogOpen(false)}
          >
            <div className='flex items-center gap-1 cursor-pointer hover:text-primary'>
              <li><Link to="#">Blog</Link></li>
              <FaAngleDown />
            </div>

            {blogOpen && (
              <div className='absolute left-0 bg-black text-white py-3 px-4'>
                <ul className='space-y-2'>
                  <li><Link to="#" className='hover:text-primary'>Blog1</Link></li>
                  <li><Link to="#" className='hover:text-primary'>Blog2</Link></li>
                </ul>
              </div>
            )}
          </div>
          <li><Link to="#" className='hover:text-primary'>About Us</Link></li>
          <li><Link to="#" className='hover:text-primary'>Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <Link to="tel:2195550114">
          <span className='flex text-sm gap-2 items-center text-[#FFFFFF]'>
            <FiPhoneCall />
            (219) 555-0114
          </span>
        </Link>
      </div>
    </div>
  </Container>
</div>
  )
}

export default Navbar