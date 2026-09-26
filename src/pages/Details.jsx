import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/layout/Container'
import ProductCard from '../components/ProductCard'
import { getProductById, products } from '../data/products'
import { addToCart } from '../slices/cartSlice'
import { toggleWishlist, selectIsInWishlist } from '../slices/wishlistSlice'
import { FaStar, FaHeart, FaShoppingBag } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Details = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  const isWishlisted = useSelector(selectIsInWishlist(Number(id)))

  if (!product) return <Navigate to="/shop" replace />

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) dispatch(addToCart(product))
    toast.success(`${qty} item(s) added to cart`)
  }

  return (
    <>
      <Container className="py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gry rounded-xl p-6 sm:p-8 flex items-center justify-center">
            <img src={product.image} alt={product.name} className="max-h-72 sm:max-h-80 object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              {product.inStock === false ? (
                <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded">
                  Out of Stock
                </span>
              ) : product.sale && (
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
                  Sale 50%
                </span>
              )}
            </div>
            <h1 className="font-pop text-2xl sm:text-3xl font-bold mb-3">{product.name}</h1>
            <div className="flex items-center gap-1 mb-4 text-orange-400">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={14}
                  fill={i < product.ratingCount ? 'currentColor' : 'none'}
                  className={i < product.ratingCount ? '' : 'text-gray-300'}
                />
              ))}
              <span className="font-pop text-sm text-gray-500 ml-2">({product.ratingCount}.0)</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-pop text-2xl font-bold">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="font-pop text-lg text-gray-400 line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
            <p className="font-pop text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">{product.description}</p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  disabled={product.inStock === false}
                  className="px-3.5 py-2 font-pop disabled:opacity-50"
                >
                  −
                </button>
                <span className="px-4 py-2 font-pop text-sm border-x border-gray-300">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(qty + 1)}
                  disabled={product.inStock === false}
                  className="px-3.5 py-2 font-pop disabled:opacity-50"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={product.inStock === false}
                className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full font-pop text-sm font-semibold transition-colors ${
                  product.inStock === false
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-primary text-white hover:opacity-90'
                }`}
              >
                <FaShoppingBag /> {product.inStock === false ? 'Out of Stock' : 'Add to Cart'}
              </button>
              <button
                type="button"
                onClick={() => {
                  if (product.inStock === false && !isWishlisted) {
                    toast.warning('This product is out of stock and cannot be added to wishlist')
                    return
                  }
                  dispatch(toggleWishlist(product))
                  toast.info(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist')
                }}
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-colors ${
                  isWishlisted ? 'border-red-500 text-red-500 bg-red-50' : 'border-gray-300 text-gray-600 hover:border-primary hover:text-primary'
                }`}
              >
                <FaHeart />
              </button>
            </div>
            <p className="font-pop text-sm text-gray-500">
              Category:{' '}
              <Link to={`/shop?category=${product.category}`} className="text-primary hover:underline">
                {product.category.replace('-', ' ')}
              </Link>
            </p>
          </div>
        </div>
      </Container>

      {related.length > 0 && (
        <Container className="pb-12">
          <h2 className="font-pop text-xl sm:text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      )}
    </>
  )
}

export default Details
