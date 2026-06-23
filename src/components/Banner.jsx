import React, { useState, useEffect } from 'react'
import Container from '../components/layout/Container'
import banner from '../assets/images/banner.webp'
import banner1 from '../assets/images/banner1.webp'
import banner2 from '../assets/images/banner2.webp'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      main: banner,
      topRight: banner1,
      bottomRight: banner2,
      title: 'Fresh & Healthy Organic Food',
      subtitle: 'Sale up to 30% OFF',
      description: 'Free shipping on all your order.'
    },
    {
      main: banner1,
      topRight: banner,
      bottomRight: banner2,
      title: 'Summer Sale 75% OFF',
      subtitle: 'Only Fruit & Vegetable',
      description: 'Limited time offer!'
    },
    {
      main: banner2,
      topRight: banner1,
      bottomRight: banner,
      title: 'Special Products Deal of the Month',
      subtitle: 'Best Deal',
      description: 'Don\'t miss out!'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [slides.length])

  const handleDotClick = (index) => {
    setCurrentSlide(index)
  }

  return (
    <Container className='my-6'>
      <div className='relative'>
        <div className='flex gap-6'>
          {/* Left Large Banner */}
          <div className='w-2/3 rounded-2xl overflow-hidden relative bg-gradient-to-r from-green-600 to-green-500'>
            <div className='flex items-center'>
              <div className='w-1/2 p-12 text-white'>
                <h2 className='text-5xl font-bold font-pop mb-6'>{slides[currentSlide].title}</h2>
                <div className='flex items-center gap-3 mb-4'>
                  <span className='font-pop text-lg'>{slides[currentSlide].subtitle}</span>
                  <span className='bg-orange-400 px-4 py-1 rounded-lg font-bold'>30% OFF</span>
                </div>
                <p className='font-pop text-lg mb-8'>{slides[currentSlide].description}</p>
                <button className='bg-white text-green-600 px-10 py-3 rounded-full font-bold font-pop flex items-center gap-2 hover:bg-green-50 transition-colors'>
                  Shop now →
                </button>
              </div>
              <div className='w-1/2 h-full'>
                <img src={slides[currentSlide].main} alt='Main Banner' className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
          
          {/* Right Small Banners */}
          <div className='w-1/3 flex flex-col gap-6'>
            {/* Top Right */}
            <div className='rounded-2xl overflow-hidden bg-white p-6 flex items-center'>
              <div className='w-1/2'>
                <span className='text-sm font-pop text-gray-600 uppercase tracking-wider'>Summer Sale</span>
                <h3 className='text-3xl font-bold font-pop mb-4'>75% OFF</h3>
                <p className='text-sm text-gray-500 mb-4'>Only Fruit & Vegetable</p>
                <button className='text-primary font-bold font-pop flex items-center gap-2'>
                  Shop Now →
                </button>
              </div>
              <div className='w-1/2'>
                <img src={slides[currentSlide].topRight} alt='Top Banner' className='w-full h-auto' />
              </div>
            </div>
            
            {/* Bottom Right */}
            <div className='rounded-2xl overflow-hidden bg-gradient-to-r from-green-800 to-green-700 text-white p-6 flex items-center'>
              <div className='w-full text-center'>
                <span className='text-sm font-pop text-green-300 uppercase tracking-wider mb-4 block'>Best Deal</span>
                <h3 className='text-3xl font-bold font-pop mb-6'>Special Products Deal of the Month</h3>
                <button className='text-green-400 font-bold font-pop flex items-center gap-2 mx-auto'>
                  Shop Now →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dot Indicators */}
        <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-primary w-8' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Banner
