import React from 'react'
import { Link } from 'react-router'
import Container from './layout/Container'
import ProductCard from '../components/ProductCard'
import fruit from '../assets/images/fruit.webp'

const ProductShowcase = ({ allData, title, isCategory, viewAllLink = '/category' }) => {
  return (
    <Container className="py-6 sm:py-10">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-pop text-black">{title}</h2>
        <Link
          to={viewAllLink}
          className="text-green-600 font-semibold font-pop hover:underline text-sm sm:text-base lg:text-lg shrink-0"
        >
          View All →
        </Link>
      </div>
      {isCategory ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {allData.map((item) => (
            <Link
              key={item.slug || item.id}
              to={`/shop?category=${item.slug}`}
              className="border rounded-lg p-3 sm:p-4 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border-gray-200 hover:border-green-500 hover:shadow-md bg-white"
            >
              <div className="flex justify-center items-center h-32 sm:h-44 md:h-52 rounded-md mb-3 overflow-hidden">
                <img src={item.image || fruit} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="font-pop font-semibold text-xs sm:text-sm md:text-base transition-colors duration-300 text-gray-800 hover:text-green-600 line-clamp-1">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border border-gray-200 rounded-lg overflow-hidden">
          {allData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </Container>
  )
}

export default ProductShowcase
