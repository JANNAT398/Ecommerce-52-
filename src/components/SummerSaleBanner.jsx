import React from 'react'
import { Link } from 'react-router'
import Container from './layout/Container'
import bannerImg from '../assets/images/discountbanner.webp'
import { FaArrowRight } from 'react-icons/fa'

const SummerSaleBanner = () => {
  return (
    <Container className="py-6">
      <div className="relative overflow-hidden rounded-xl bg-[#1A1A1A] min-h-[220px] sm:min-h-[260px] flex items-center shadow-md">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={bannerImg}
            alt="Summer Sale Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-left font-pop">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-gray-300 uppercase block mb-1">
              SUMMER SALE
            </span>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-2">
              <span className="text-[#FF8A00]">37%</span> OFF
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md font-normal leading-relaxed">
              Free on all your order, Free Shipping and 30 days money-back guarantee
            </p>
          </div>

          <div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-[#00B207] hover:bg-[#009606] text-white font-pop font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Shop Now <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SummerSaleBanner
