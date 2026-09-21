import React from 'react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { FaStar, FaHeart, FaEye, FaShoppingBag } from 'react-icons/fa'
import { addToCart } from '../slices/cartSlice'
import { toggleWishlist, selectIsInWishlist } from '../slices/wishlistSlice'
import { toast } from 'react-toastify'
import { useFormatPrice } from '../hooks/useFormatPrice'
import { useTranslation } from '../hooks/useTranslation'
import { resolveProductImage } from '../utils/productImage'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const formatPrice = useFormatPrice()
  const { t } = useTranslation()
  const isWishlisted = useSelector(selectIsInWishlist(product.id))

  const handleAddToCart = (e) => {
    e.stopPropagation()
    if (product.inStock === false) {
      toast.error('This product is out of stock')
      return
    }
    dispatch(addToCart(product))
    toast.success(`${product.name} ${t('addedToCart')}`)
  }

  const handleWishlist = (e) => {
    e.stopPropagation()
    dispatch(toggleWishlist(product))
    toast.info(isWishlisted ? t('removedFromWishlist') : t('addedToWishlist'))
  }

  const discountPercent = product.discount
    ? product.discount
    : product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : 50

  return (
    <div className="bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 relative group p-4 flex flex-col justify-between h-full">
      <div>
        <div className="relative mb-3">
          {product.inStock === false && (
            <div className="absolute top-0 left-0 z-10">
              <span className="bg-gray-900 text-white text-xs font-medium px-2.5 py-1 rounded font-pop">
                Out of Stock
              </span>
            </div>
          )}
          {product.sale && product.inStock !== false && (
            <div className="absolute top-0 left-0 z-10">
              <span className="bg-red-500 text-white text-xs font-medium px-2.5 py-1 rounded font-pop">
                {t('sale')} {discountPercent}%
              </span>
            </div>
          )}

          <div className="absolute top-0 right-0 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              type="button"
              onClick={handleWishlist}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors shadow-sm bg-white ${isWishlisted
                ? 'text-red-500 border-red-200 bg-red-50'
                : 'text-gray-600 border-gray-200 hover:bg-primary hover:text-white hover:border-primary'
                }`}
              title={t('addToWishlist')}
            >
              <FaHeart size={14} />
            </button>
            <Link
              to={`/product/${product.id}`}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 bg-white text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm"
              title={t('quickView')}
            >
              <FaEye size={14} />
            </Link>
          </div>

          <div className="h-44 sm:h-48 flex items-center justify-center p-2 bg-gray-50 rounded-lg">
            <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
              <img
                src={resolveProductImage(product)}
                alt={product.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="font-pop font-normal text-sm sm:text-base text-gray-700 hover:text-primary transition-colors line-clamp-1 mb-2">
            {product.name}
          </h3>
        </Link>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5 font-pop">
            <span className="font-semibold text-base text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={product.inStock === false}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors border ${
              product.inStock === false
                ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#F2F2F2] border-gray-200 text-gray-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary hover:bg-primary hover:text-white'
            }`}
            title={t('addToCart')}
          >
            <FaShoppingBag size={14} />
          </button>
        </div>

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
