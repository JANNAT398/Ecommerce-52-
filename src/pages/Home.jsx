import React from 'react'
import Container from '../components/layout/Container'
import Banner from '../components/Banner'
import ProductShowcase from '../components/ProductShowcase'
import SpecialBanner from '../components/SpecialBanner'
import Testimonials from '../components/Testimonials'
import InstagramSection from '../components/InstagramSection'
import HotDeals from '../components/HotDeals'
import { FaTruck, FaShieldAlt, FaUndo, FaHeadset } from 'react-icons/fa'
import { categories, products } from '../data/products'

const featureData = [
  { icon: <FaTruck className="text-primary text-3xl" />, title: 'Free Shipping', desc: 'Above $5 Only' },
  { icon: <FaShieldAlt className="text-primary text-3xl" />, title: 'Secure Payment', desc: '100% Secure' },
  { icon: <FaUndo className="text-primary text-3xl" />, title: 'Easy Return', desc: '3 Days Return' },
  { icon: <FaHeadset className="text-primary text-3xl" />, title: '24/7 Support', desc: 'Dedicated Support' }
]

const Home = () => {
  return (
    <>
      {/* Banner Slider */}
      <Banner />

      {/* Features Section */}
      <Container className="py-8">
        <div className="grid grid-cols-4 gap-6">
          {featureData.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gry rounded-xl">
              <div className="p-3 bg-white rounded-full">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-pop font-bold">{feature.title}</h4>
                <p className="font-pop text-sm text-gray-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Popular Categories */}
      <ProductShowcase allData={categories} title='Popular Categories' isCategory={true} />
      
      {/* Popular Products */}
      <ProductShowcase allData={products} title='Popular Products' isCategory={false} />
      
      {/* Special Banner */}
      <SpecialBanner />
      
      {/* Hot Deals */}
      <HotDeals />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Instagram Section */}
      <InstagramSection />
    </>
  )
}

export default Home
