import React, { useRef, useState } from 'react'
import Container from '../components/layout/Container'
import { Link } from 'react-router'
import { FaBars, FaAngleDown } from 'react-icons/fa'
import { CiApple } from 'react-icons/ci'
import { GiFruitBowl, GiChickenLeg, GiButter, GiCampCookingPot } from 'react-icons/gi'
import { IoFishOutline } from 'react-icons/io5'
import { RiDrinksFill } from 'react-icons/ri'
import { CiIceCream } from 'react-icons/ci'
import { BsCake2 } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { useOutsideClick } from '../hooks/useOutsideClick '

const categoryLinks = [
  { label: 'Fresh Fruit', icon: CiApple, slug: 'fresh-fruits' },
  { label: 'Vegetables', icon: GiFruitBowl, slug: 'vegetables' },
  { label: 'River Fish', icon: IoFishOutline, slug: 'meat-fish' },
  { label: 'Chicken & Meat', icon: GiChickenLeg, slug: 'meat-fish' },
  { label: 'Drink & Water', icon: RiDrinksFill, slug: 'beverages' },
  { label: 'Ice Cream', icon: CiIceCream, slug: 'snacks' },
  { label: 'Cake & Bread', icon: BsCake2, slug: 'bread-bakery' },
  { label: 'Butter & Cream', icon: GiButter, slug: 'cooking' },
  { label: 'Cooking', icon: GiCampCookingPot, slug: 'cooking' },
]

const CategoryList = ({ onNavigate }) => (
  <ul className="text-black">
    {categoryLinks.map(({ label, icon: Icon, slug }) => (
      <li key={label} className="sidebar">
        <Link
          to={`/shop?category=${slug}`}
          className="flex items-center gap-2"
          onClick={onNavigate}
        >
          <Icon className="text-2xl" /> {label}
        </Link>
      </li>
    ))}
    <li className="sidebar border-t border-b border-gray-200">
      <Link to="/category" className="flex items-center gap-2" onClick={onNavigate}>
        <FaPlus /> View all Category
      </Link>
    </li>
  </ul>
)

const NavDropdown = ({ label, links }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useOutsideClick(ref, () => setOpen(false), open)

  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
        <span>{label}</span>
        <FaAngleDown />
      </div>
      {open && (
        <div className="absolute left-0 bg-black text-white py-3 px-4 min-w-[140px] z-50">
          <ul className="space-y-2">
            {links.map(({ to, label: linkLabel }) => (
              <li key={to}>
                <Link to={to} className="hover:text-primary font-pop text-sm">
                  {linkLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [categories, setCategories] = useState(false)
  const dropdownRefSideBar = useRef(null)
  const dropdownRefMobileMenu = useRef(null)
  const dropdownRefCategories = useRef(null)

  useOutsideClick(dropdownRefSideBar, () => setSideBar(false), sideBar)
  useOutsideClick(dropdownRefMobileMenu, () => setMobileMenu(false), mobileMenu)

  return (
    <div className="bg-[#1A1A1A] text-white sticky top-0 z-40 shadow-md">
      <Container>
        <div className="flex justify-between items-center w-full">
          {/* Mobile & Tablet Header Controls */}
          <div className="flex lg:hidden items-center justify-between w-full py-2">
            <button
              onClick={() => setMobileMenu(true)}
              className="p-2.5 bg-primary rounded text-white flex items-center gap-2 font-pop text-sm font-medium focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <FaBars className="text-lg" />
              <span>Menu</span>
            </button>

            <Link to="tel:2195550114" className="flex items-center gap-2 text-xs sm:text-sm hover:text-primary transition-colors">
              <FiPhoneCall className="text-primary text-base" />
              <span>(219) 555-0114</span>
            </Link>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden lg:flex justify-between items-center w-full">
            <div className="flex items-center gap-6 xl:gap-8">
              <ul className="flex items-center gap-6 xl:gap-8 text-sm font-pop relative list-none m-0 p-0">
                <li onClick={() => setSideBar(true)} className="p-4 bg-primary cursor-pointer hover:bg-opacity-90 transition-colors">
                  <FaBars />
                </li>

                {sideBar && (
                  <div className="fixed inset-0 bg-black/50 z-50 transition-opacity">
                    <div
                      ref={dropdownRefSideBar}
                      className="fixed top-0 left-0 h-full w-80 bg-white p-5 overflow-y-auto shadow-2xl"
                    >
                      <div className="flex justify-between items-center mb-4 pb-2 border-b">
                        <h3 className="text-black font-bold font-pop text-lg">All Categories</h3>
                        <button onClick={() => setSideBar(false)} className="text-gray-500 hover:text-black text-xl font-bold">×</button>
                      </div>
                      <CategoryList onNavigate={() => setSideBar(false)} />
                    </div>
                  </div>
                )}

                <li
                  className="relative flex items-center cursor-pointer bg-[#333333] py-3 px-5 xl:px-6 list-none"
                  ref={dropdownRefCategories}
                  onMouseEnter={() => setCategories(true)}
                  onMouseLeave={() => setCategories(false)}
                >
                  <div className="font-bold flex items-center gap-2 hover:text-primary">
                    <Link to="/category">All Categories</Link>
                    <FaAngleDown />
                  </div>
                  {categories && (
                    <div className="absolute top-full left-0 mt-0 w-80 bg-white shadow-xl z-50 rounded-b-md">
                      <CategoryList />
                    </div>
                  )}
                </li>

                <li className="list-none">
                  <NavDropdown label="Home" links={[{ to: '/', label: 'Home' }]} />
                </li>
                <li className="list-none">
                  <NavDropdown
                    label="Shop"
                    links={[
                      { to: '/shop', label: 'Shop Grid' },
                      { to: '/category', label: 'Categories' },
                    ]}
                  />
                </li>
                <li className="list-none">
                  <NavDropdown
                    label="Pages"
                    links={[
                      { to: '/about', label: 'About Us' },
                      { to: '/faq', label: 'FAQ' },
                      { to: '/contact', label: 'Contact' },
                    ]}
                  />
                </li>
                <li className="list-none">
                  <NavDropdown
                    label="Blog"
                    links={[
                      { to: '/blog', label: 'Blog List' },
                      { to: '/blog/1', label: 'Blog Details' },
                    ]}
                  />
                </li>
                <li className="list-none">
                  <Link to="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li className="list-none">
                  <Link to="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Link to="tel:2195550114" className="flex text-sm gap-2 items-center text-white hover:text-primary transition-colors">
                <FiPhoneCall className="text-primary text-base" />
                <span>(219) 555-0114</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Slide-Over Menu Drawer */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-black/60 z-50 lg:hidden">
          <div
            ref={dropdownRefMobileMenu}
            className="fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-white text-black p-5 overflow-y-auto shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
                <span className="font-bold font-pop text-lg text-primary">Navigation</span>
                <button
                  onClick={() => setMobileMenu(false)}
                  className="text-gray-500 hover:text-black font-bold text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 font-pop">
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Main Pages</h4>
                  <ul className="space-y-2 text-sm font-medium">
                    <li>
                      <Link to="/" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-primary">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-primary">
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link to="/category" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-primary">
                        All Categories
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-primary">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-primary">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-primary">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-primary">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-primary">
                        My Account
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Categories</h4>
                  <CategoryList onNavigate={() => setMobileMenu(false)} />
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-gray-200 text-xs text-gray-500 font-pop">
              <p>Call Us 24/7:</p>
              <Link to="tel:2195550114" className="text-sm font-bold text-primary block mt-1">
                (219) 555-0114
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
