import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from './layout/Container'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { FaStar, FaHeart, FaShoppingBag, FaShareAlt, FaFire, FaAward } from 'react-icons/fa'
import { addToCart } from '../slices/cartSlice'
import { toggleWishlist, selectIsInWishlist } from '../slices/wishlistSlice'
import { toast } from 'react-toastify'
import { products as allProducts } from '../data/products'
import fruit from '../assets/images/fruit.webp'
import { useFormatPrice } from '../hooks/useFormatPrice'
import { useTranslation } from '../hooks/useTranslation'

const renderRatingStars = (count, starSize = 14) => (
  <div className="flex items-center gap-0.5 text-amber-400">
    {[...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        size={starSize}
        fill={i < count ? 'currentColor' : 'none'}
        strokeWidth={i < count ? 0 : 1.5}
        className={i < count ? 'text-amber-400' : 'text-gray-300'}
      />
    ))}
  </div>
)

const WishlistButton = ({ product, size = 'md' }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const isWishlisted = useSelector(selectIsInWishlist(product.id))
  const sizeClasses = size === 'lg' ? 'w-11 h-11' : 'w-9 h-9'
  const iconSize = size === 'lg' ? 16 : 14
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        dispatch(toggleWishlist(product))
        toast.info(isWishlisted ? t('removedFromWishlist') : t('addedToWishlist'))
      }}
      className={`${sizeClasses} rounded-full flex items-center justify-center border transition-colors shadow-sm bg-white ${isWishlisted
        ? 'text-red-500 border-red-200 bg-red-50'
        : 'text-gray-600 border-gray-200 hover:bg-primary hover:text-white hover:border-primary'
        }`}
      title={t('addToWishlist')}
    >
      <FaHeart size={iconSize} />
    </button>
  )
}

const SmallProductCard = ({ product, isSelected, onHover }) => {
  const dispatch = useDispatch()
  const formatPrice = useFormatPrice()
  const { t } = useTranslation()

  const handleAddToCart = (e) => {
    e.stopPropagation()
    dispatch(addToCart(product))
    toast.success(`${product.name} ${t('addedToCart')}`)
  }

  return (
    <motion.div
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => onHover(product.id)}
      className={`bg-white border hover:shadow-md transition-all duration-300 relative group p-4 flex flex-col justify-between h-full cursor-pointer select-none ${
        isSelected ? 'border-primary ring-2 ring-primary/30 shadow-md' : 'border-gray-200 hover:border-primary'
      }`}
    >
      <div>
        <div className="relative mb-3">
          {product.sale && (
            <div className="absolute top-0 left-0 z-10">
              <span className="bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded font-pop">
                {t('sale')} {
                  product.discount || (product.oldPrice && product.oldPrice > product.price
                    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
                    : 50)
                }%
              </span>
            </div>
          )}

          <div className="h-28 sm:h-32 flex items-center justify-center p-2 pointer-events-none">
            <img
              src={product.image || fruit}
              alt={product.name}
              className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <h3 className="font-pop font-normal text-sm text-gray-700 hover:text-primary transition-colors line-clamp-1 mb-2">
          {product.name}
        </h3>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5 font-pop">
            <span className="font-semibold text-sm text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-[#F2F2F2] border border-gray-200 text-gray-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary hover:bg-primary hover:text-white"
            title={t('addToCart')}
          >
            <FaShoppingBag size={12} />
          </button>
        </div>

        {renderRatingStars(product.ratingCount, 12)}
      </div>
    </motion.div>
  )
}

const FeaturedCard = ({ product, onAddToCart, onShare }) => {
  const formatPrice = useFormatPrice()
  const { t } = useTranslation()
  const disc = product.discount || (product.oldPrice && product.oldPrice > product.price
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 50)

  const nutritionLabels = [
    { label: t('carbs'), value: '23g' },
    { label: t('fat'), value: '0.4g' },
    { label: t('prot'), value: '0.5g' },
    { label: t('fibr'), value: '3.8g' },
  ]

  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.97 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="col-span-2 row-span-2 bg-white border-2 border-primary rounded-sm relative p-5 sm:p-6 flex flex-col justify-between shadow-md overflow-hidden"
    >
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        {product.sale && (
          <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded font-pop flex items-center gap-1">
            <FaFire size={10} /> {t('sale')} {disc}%
          </span>
        )}
        <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded font-pop flex items-center gap-1">
          <FaAward size={10} /> {t('bestNew')}
        </span>
      </div>

      <motion.div
        key={`img-${product.id}`}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        className="flex-1 flex items-center justify-center p-2 mt-4 mb-4 min-h-[220px] sm:min-h-[260px] md:min-h-[300px]"
      >
        <img
          src={product.image || fruit}
          alt={product.name}
          className="max-h-full max-w-full object-contain drop-shadow-md"
        />
      </motion.div>

      <motion.div
        key={`actions-${product.id}`}
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="flex items-center justify-between gap-3 mb-5 px-1"
      >
        <WishlistButton product={product} size="lg" />

        <button
          type="button"
          onClick={(e) => onAddToCart(e, product)}
          className="flex-1 h-11 bg-primary hover:bg-primary/90 text-white rounded-full font-pop font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-[0.98]"
        >
          {t('addToCart')} <FaShoppingBag size={14} />
        </button>

        <button
          type="button"
          onClick={onShare}
          className="w-11 h-11 rounded-full flex items-center justify-center border border-gray-200 bg-white text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm"
          title={t('shareLinkCopied')}
        >
          <FaShareAlt size={15} />
        </button>
      </motion.div>

      <motion.div
        key={`info-${product.id}`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.3 }}
        className="space-y-2.5"
      >
        <Link to={`/product/${product.id}`}>
          <h3 className="font-pop font-medium text-lg text-primary hover:underline transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-3 font-pop">
          <span className="font-bold text-2xl text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-base text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {renderRatingStars(product.ratingCount)}
          <span className="font-pop text-xs text-orange-500 font-medium">
            ({(product.ratingCount * 473).toLocaleString()} {t('reviewCount')})
          </span>
        </div>

        <p className="font-pop text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {product.description || 'Fresh and high-quality product, farm-sourced daily for the best taste and nutrition.'}
        </p>

        <div className="pt-3 mt-2">
          <div className="grid grid-cols-4 divide-x divide-gray-300">
            {nutritionLabels.map((n) => (
              <div key={n.label} className="text-center px-1 first:pl-0 last:pr-0">
                <div className="font-pop font-bold text-sm text-gray-800">{n.value}</div>
                <div className="font-pop text-[10px] text-gray-400 uppercase tracking-wide mt-0.5">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const HotDeals = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [selectedId, setSelectedId] = useState(allProducts[0]?.id || 1)

  const selectedProduct = allProducts.find(p => p.id === selectedId) || allProducts[0]

  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    dispatch(addToCart(product))
    toast.success(`${product.name} ${t('addedToCart')}`)
  }

  const handleShare = (e) => {
    e.stopPropagation()
    toast.info(t('shareLinkCopied'))
  }

  return (
    <Container className="py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold font-pop text-black">{t('hotDeals')}</h2>
        <Link
          to='/category'
          className="text-green-600 font-semibold font-pop hover:underline text-lg"
        >
          {t('viewAll')}
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0 auto-rows-auto">
        <AnimatePresence mode="wait">
          <FeaturedCard
            key={selectedProduct.id}
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onShare={handleShare}
          />
        </AnimatePresence>

        {allProducts.map(product => (
          <SmallProductCard
            key={product.id}
            product={product}
            isSelected={product.id === selectedId}
            onHover={setSelectedId}
          />
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="font-pop text-xs text-gray-400">
          💡 {t('hoverHint')}
        </p>
      </div>
    </Container>
  )
}

export default HotDeals
