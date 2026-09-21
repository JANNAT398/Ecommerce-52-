import React from 'react'
import Container from '../components/layout/Container'
import Banner from '../components/Banner'
import ProductShowcase from '../components/ProductShowcase'
import SpecialBanner from '../components/SpecialBanner'
import SummerSaleBanner from '../components/SummerSaleBanner'
import Testimonials from '../components/Testimonials'
import InstagramSection from '../components/InstagramSection'
import HotDeals from '../components/HotDeals'
import { FaTruck, FaShieldAlt, FaUndo, FaHeadset } from 'react-icons/fa'
import { categories, products } from '../data/products'
import { useTranslation } from '../hooks/useTranslation'

const featureDataKeys = [
  { icon: <FaTruck className="text-primary text-3xl" />, titleKey: 'freeShipping', descKey: 'freeShippingSub' },
  { icon: <FaShieldAlt className="text-primary text-3xl" />, titleKey: 'securePayment', descKey: 'securePaymentSub' },
  { icon: <FaUndo className="text-primary text-3xl" />, titleKey: 'easyReturn', descKey: 'easyReturnSub' },
  { icon: <FaHeadset className="text-primary text-3xl" />, titleKey: 'dedicatedSupport', descKey: 'dedicatedSupportSub' }
]

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <Banner />

      <Container className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureDataKeys.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gry rounded-xl">
              <div className="p-3 bg-white rounded-full">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-pop font-bold">{t(feature.titleKey)}</h4>
                <p className="font-pop text-sm text-gray-500">{t(feature.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <ProductShowcase allData={categories} title={t('popularCategories')} isCategory={true} />

      <ProductShowcase allData={products} title={t('popularProducts')} isCategory={false} />

      <HotDeals />

      <SummerSaleBanner />

      <ProductShowcase allData={products} title={t('featuredProducts')} isCategory={false} />

      <SpecialBanner />

      <Testimonials />

      <InstagramSection />
    </>
  )
}

export default Home
