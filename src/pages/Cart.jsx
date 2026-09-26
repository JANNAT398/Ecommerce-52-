import React from 'react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/layout/Container'
import { removeFromCart, updateQty, selectCartItems, selectCartTotal } from '../slices/cartSlice'
import { useFormatPrice } from '../hooks/useFormatPrice'
import { useTranslation } from '../hooks/useTranslation'
import { selectCurrencyInfo } from '../slices/appSettingsSlice'
import { resolveProductImage } from '../utils/productImage'

const Cart = () => {
  const dispatch = useDispatch()
  const formatPrice = useFormatPrice()
  const { t } = useTranslation()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const currencyInfo = useSelector(selectCurrencyInfo)
  const shippingUSD = total > 5 ? 0 : 2.99
  const totalUSD = total + shippingUSD

  if (items.length === 0) {
    return (
      <Container className="py-20 text-center">
        <h1 className="font-pop text-2xl font-bold mb-4">{t('yourCart')} {t('empty').toLowerCase()}</h1>
        <p className="font-pop text-gray-500 mb-8">{t('yourCart')}: {formatPrice(0)} — Add some products to get started.</p>
        <Link to="/shop" className="bg-primary text-white px-8 py-3 rounded-full font-pop text-sm">
          {t('shopNow')}
        </Link>
      </Container>
    )
  }

  return (
    <Container className="py-12">
      <h1 className="font-pop text-2xl font-bold mb-8">{t('shoppingCart')} <span className="text-primary text-base font-normal ml-2">({currencyInfo.code})</span></h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="border border-gray-200 rounded-lg overflow-x-auto">
            <div className="min-w-[500px]">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-gry p-4 font-pop text-sm font-semibold">
                <span>{t('product')}</span>
                <span className="text-center">{t('price')}</span>
                <span className="text-center">Quantity</span>
                <span className="text-center">{t('subtotal')}</span>
              </div>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center p-4 border-t border-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <img src={resolveProductImage(item)} alt={item.name} className="w-14 h-14 sm:w-16 sm:h-16 object-contain bg-gray-50 rounded" />
                    <div className="min-w-0">
                      <Link to={`/product/${item.id}`} className="font-pop font-medium text-sm sm:text-base hover:text-primary line-clamp-2">
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="block text-red-500 text-xs font-pop mt-1 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <span className="text-center font-pop text-sm">{formatPrice(item.price)}</span>
                  <div className="flex justify-center">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        type="button"
                        onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))}
                        className="px-2.5 py-1 text-sm"
                      >
                        −
                      </button>
                      <span className="px-2.5 py-1 border-x border-gray-300 font-pop text-xs sm:text-sm">{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))}
                        className="px-2.5 py-1 text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <span className="text-center font-pop font-semibold text-sm">
                    {formatPrice(item.price * item.qty)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-80 shrink-0">
          <div className="border border-gray-200 rounded-lg p-6 bg-gry">
            <h3 className="font-pop font-bold text-lg mb-4">{t('yourCart')} — {t('total')}</h3>
            <div className="space-y-3 font-pop text-sm">
              <div className="flex justify-between">
                <span>{t('subtotal')}</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('shipping')}</span>
                <span>{shippingUSD === 0 ? 'Free' : formatPrice(shippingUSD)}</span>
              </div>
              <div className="flex justify-between font-bold text-base border-t border-gray-300 pt-3">
                <span>{t('total')}</span>
                <span className="text-primary">{formatPrice(totalUSD)}</span>
              </div>
              <div className="pt-2 text-xs text-gray-500 text-right italic">
                1 USD ≈ {currencyInfo.code === 'BDT' ? '৳119.50' : '$1.00'}
              </div>
            </div>
            <Link
              to="/checkout"
              className="block w-full text-center bg-primary text-white py-3 rounded-full font-pop text-sm font-semibold mt-6 hover:opacity-90"
            >
              {t('checkout')}
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Cart
