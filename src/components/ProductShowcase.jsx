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
          {allData.map((item) => {
            const isSelected = item.isActive
            return (
              <Link
                key={item.slug || item.id || item.name}
                to={`/shop?category=${item.slug}`}
                className={`group border rounded-lg p-3 sm:p-4 transition-all duration-300 cursor-pointer bg-white flex flex-col items-center justify-between ${
                  isSelected
                    ? 'border-primary text-primary shadow-sm'
                    : 'border-gray-200 text-gray-800 hover:border-primary hover:text-primary hover:shadow-md'
                }`}
              >
                <div className="w-full h-28 sm:h-32 md:h-36 flex items-center justify-center mb-2 sm:mb-3 overflow-hidden">
                  <img
                    src={item.image || fruit}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-pop font-semibold text-xs sm:text-sm md:text-base line-clamp-1 transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>
              </Link>
            )
          })}
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
