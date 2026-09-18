import React from 'react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { FaStar, FaHeart, FaEye, FaShoppingBag } from 'react-icons/fa'
import { addToCart } from '../slices/cartSlice'
import { toggleWishlist, selectIsInWishlist } from '../slices/wishlistSlice'
import { toast } from 'react-toastify'
import fruit from '../assets/images/fruit.webp'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const isWishlisted = useSelector(selectIsInWishlist(product.id))

  const handleAddToCart = (e) => {
    e.stopPropagation()
    dispatch(addToCart(product))
    toast.success(`${product.name} added to cart`)
  }

  const handleWishlist = (e) => {
    e.stopPropagation()
    dispatch(toggleWishlist(product))
    toast.info(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist')
  }

  const discountPercent = product.discount
    ? product.discount
    : product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : 50

  return (
    <div className="bg-white border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300 relative group p-4 flex flex-col justify-between h-full">
      <div>
        {/* Top Section: Sale Badge, Hover Icons & Image */}
        <div className="relative mb-3">
          {product.sale && (
            <div className="absolute top-0 left-0 z-10">
              <span className="bg-red-500 text-white text-xs font-medium px-2.5 py-1 rounded font-pop">
                Sale {discountPercent}%
              </span>
            </div>
          )}

          {/* Hover Action Buttons */}
          <div className="absolute top-0 right-0 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              type="button"
              onClick={handleWishlist}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors shadow-sm bg-white ${isWishlisted
                ? 'text-red-500 border-red-200 bg-red-50'
                : 'text-gray-600 border-gray-200 hover:bg-primary hover:text-white hover:border-primary'
                }`}
              title="Add to Wishlist"
            >
              <FaHeart size={14} />
            </button>
            <Link
              to={`/product/${product.id}`}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 bg-white text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm"
              title="Quick View"
            >
              <FaEye size={14} />
            </Link>
          </div>

          {/* Product Image */}
          <div className="h-44 sm:h-48 flex items-center justify-center p-2">
            <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
              <img
                src={product.image || fruit}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
        </div>

        {/* Product Title */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-pop font-normal text-sm sm:text-base text-gray-700 hover:text-primary transition-colors line-clamp-1 mb-2">
            {product.name}
          </h3>
        </Link>
      </div>

      <div>
        {/* Price Row & Cart Button */}
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5 font-pop">
            <span className="font-semibold text-base text-gray-900">
              ${Number(product.price).toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${Number(product.oldPrice).toFixed(2)}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-[#F2F2F2] border border-gray-200 text-gray-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary hover:bg-primary hover:text-white"
            title="Add to Cart"
          >
            <FaShoppingBag size={14} />
          </button>
        </div>

        {/* Rating Stars (Below Price) */}
        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={12}
              fill={i < product.ratingCount ? 'currentColor' : 'none'}
              strokeWidth={i < product.ratingCount ? 0 : 1.5}
              className={i < product.ratingCount ? 'text-amber-400' : 'text-gray-300'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
