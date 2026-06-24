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
      <div className="flex justify-between items-center my-6">
        <Link to="/">
          <img src={logo} alt="logo" fetchPriority="high" />
        </Link>
        <form onSubmit={handleSearch} className="relative flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="border border-[#808080] w-[400px] py-3 pl-11 placeholder:text-[#808080] placeholder:font-pop placeholder:text-sm rounded-tl-md rounded-bl-md"
          />
          <FaSearch className="absolute left-4 top-0 translate-y-1/2 text-gray-500 text-2xl" />
          <button
            type="submit"
            className="font-pop font-semibold text-sm text-white px-6 py-3.5 bg-primary rounded-br-md rounded-tr-md"
          >
            Search
          </button>
        </form>
        <div className="flex gap-x-8 items-center">
          <Link
            to="/wishlist"
            className="relative after:w-[2px] after:h-[25px] after:bg-gry after:content-[''] after:absolute after:top-[5px] after:right-[-16px]"
          >
            <Heart />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-pop">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className="flex gap-x-3 items-center">
            <div className="relative">
              <FaBagShopping className="text-[34px]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-pop">
                  {cartCount}
                </span>
              )}
            </div>
            <div>
              <span className="font-pop text-sm">Shopping cart:</span>
              <br />
              <span className="font-pop text-md font-bold">${cartTotal.toFixed(2)}</span>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default SearchBar
