import React from 'react'
import Container from './layout/Container'
import fruit from '../assets/images/fruit.webp'
import { Link } from 'react-router';
import { FaStar, FaHeart, FaEye, FaShoppingBag } from "react-icons/fa";

const ProductShowcase = ({ allData, title, isCategory }) => {
  return (
    <Container className='py-10'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-3xl font-bold font-pop text-black'>{title}</h2>
        <Link to='/category' className='text-green-600 font-semibold font-pop hover:underline text-lg'>View All →</Link>
      </div>
      {isCategory ? (
        <div className='grid grid-cols-6 gap-6'>
          {allData.map((item, index) => (
            <div 
              key={item.slug || item.id} 
              className={`border rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border-gray-200 hover:border-green-500 hover:border-2 hover:shadow-md`}
            >
              <div className='flex justify-center items-center h-56 rounded-md mb-4 overflow-hidden'>
                <img src={item.image || fruit} alt={item.name} className='w-full h-full object-cover' />
              </div>
              <div className='text-center'>
                <h3 className='font-pop font-semibold transition-colors duration-300 text-gray-800 hover:text-green-600'>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='grid grid-cols-5 gap-0'>
          {allData.map((item, index) => (
            <div 
              key={item.id} 
              className="border-t border-b border-l border-r border-gray-200 p-4 transition-all duration-300 cursor-pointer relative group overflow-hidden"
            >
              {item.sale && (
                <div className='absolute top-3 left-3 z-20'>
                  <span className='bg-red-500 text-white text-xs font-bold px-3 py-1 rounded'>Sale 50%</span>
                </div>
              )}
              
              <div className='h-48 mb-4 relative overflow-hidden flex items-center justify-center'>
                <img src={item.image || fruit} alt={item.name} className='max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105' />
                
                <div className='absolute top-3 right-3 flex flex-col gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <button className='w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-green-600 hover:text-white transition-colors text-gray-600'>
                    <FaHeart size={12} />
                  </button>
                  <button className='w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-green-600 hover:text-white transition-colors text-gray-600'>
                    <FaEye size={12} />
                  </button>
                </div>
              </div>
              
              <div className='flex items-center gap-1 mb-2 text-orange-400'>
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    size={12} 
                    fill={i < item.ratingCount ? 'currentColor' : 'none'} 
                    strokeWidth={i < item.ratingCount ? 0 : 1.5}
                    className={i < item.ratingCount ? '' : 'text-gray-300'}
                  />
                ))}
              </div>
              
              <h3 className='font-pop font-medium text-sm text-gray-800 mb-2'>{item.name}</h3>
              
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className={`font-pop font-bold ${item.sale ? 'text-gray-800' : 'text-gray-800'}`}>${item.price}</span>
                  {item.oldPrice && <span className='font-pop text-sm text-gray-400 line-through'>${item.oldPrice}</span>}
                </div>
                
                <button className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-white border border-gray-200 text-gray-600 hover:bg-green-600 hover:text-white">
                  <FaShoppingBag size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  )
}

export default ProductShowcase