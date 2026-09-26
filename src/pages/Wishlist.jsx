import React from 'react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/layout/Container'
import ProductCard from '../components/ProductCard'
import { removeFromWishlist, selectWishlistItems } from '../slices/wishlistSlice'

const Wishlist = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectWishlistItems)

  if (items.length === 0) {
    return (
      <Container className="py-20 text-center">
        <h1 className="font-pop text-2xl font-bold mb-4">Your wishlist is empty</h1>
        <p className="font-pop text-gray-500 mb-8">Save products you love for later.</p>
        <Link to="/shop" className="bg-primary text-white px-8 py-3 rounded-full font-pop text-sm">
          Browse Products
        </Link>
      </Container>
    )
  }

  return (
    <Container className="py-8 sm:py-12">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h1 className="font-pop text-xl sm:text-2xl font-bold">My Wishlist ({items.length})</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((product) => (
          <div key={product.id} className="relative group">
            <ProductCard product={product} />
            <button
              type="button"
              onClick={() => dispatch(removeFromWishlist(product.id))}
              className="absolute top-2 left-2 text-xs bg-red-500 hover:bg-red-600 text-white px-2.5 py-1 rounded font-pop z-30 shadow-xs transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Wishlist
