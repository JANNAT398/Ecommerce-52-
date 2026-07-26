import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import Container from './layout/Container'
import logo from '../assets/images/logo.webp'
import { FaSearch } from 'react-icons/fa'
import Heart from '../icons/Heart'
import { FaBagShopping } from 'react-icons/fa6'
import { selectCartCount, selectCartTotal } from '../slices/cartSlice'
import { selectWishlistCount } from '../slices/wishlistSlice'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const cartCount = useSelector(selectCartCount)
  const cartTotal = useSelector(selectCartTotal)
  const wishlistCount = useSelector(selectWishlistCount)

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4 md:py-6">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="shrink-0">
            <img src={logo} alt="logo" fetchPriority="high" className="h-8 sm:h-10 w-auto" />
          </Link>
          <div className="flex md:hidden items-center gap-4">
            <Link to="/wishlist" className="relative p-1">
              <Heart />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-pop">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative p-1">
              <FaBagShopping className="text-2xl text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-pop">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        <form onSubmit={handleSearch} className="relative flex w-full md:w-[380px] lg:w-[480px]">
          <div className="relative flex-1 flex items-center">
            <FaSearch className="absolute left-3.5 text-gray-400 text-base pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="border border-gray-300 w-full py-2.5 sm:py-3 pl-10 pr-3 placeholder:text-gray-400 placeholder:font-pop text-sm rounded-l-md focus:outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="font-pop font-semibold text-xs sm:text-sm text-white px-5 sm:px-6 py-2.5 sm:py-3 bg-primary rounded-r-md hover:bg-opacity-90 transition-colors shrink-0"
          >
            Search
          </button>
        </form>

        <div className="hidden md:flex gap-x-6 lg:gap-x-8 items-center shrink-0">
          <Link
            to="/wishlist"
            className="relative pr-6 border-r border-gray-200"
          >
            <Heart />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 right-4 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-pop">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className="flex gap-x-3 items-center hover:opacity-90">
            <div className="relative">
              <FaBagShopping className="text-3xl text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-pop">
                  {cartCount}
                </span>
              )}
            </div>
            <div>
              <span className="font-pop text-xs text-gray-500 block">Shopping cart:</span>
              <span className="font-pop text-sm font-bold text-gray-900">${cartTotal.toFixed(2)}</span>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default SearchBar
