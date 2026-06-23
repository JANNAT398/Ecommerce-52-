import React, { useState, useEffect } from 'react'
import Container from './layout/Container'
import banner from '../assets/images/banner.webp'
import banner1 from '../assets/images/banner1.webp'
import banner2 from '../assets/images/banner2.webp'

const SpecialBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '02',
    minutes: '18',
    seconds: '46'
  })
  
  const slides = [
    {
      bg: 'bg-blue-500',
      tag: 'BEST DEALS',
      title: 'Sale of the Month',
      showCountdown: true,
      image: banner
    },
    {
      bg: 'bg-black',
      tag: '85% FAT FREE',
      title: 'Low-Fat Meat',
      subtitle: 'Started at',
      price: '$79.99',
      showCountdown: false,
      image: banner1
    },
    {
      bg: 'bg-yellow-400',
      tag: 'SUMMER SALE',
      title: '100% Fresh Fruit',
      subtitle: 'Up to',
      discount: '64% OFF',
      showCountdown: false,
      image: banner2
    }
  ]

  // Countdown logic
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(prev => {
        let days = parseInt(prev.days)
        let hours = parseInt(prev.hours)
        let minutes = parseInt(prev.minutes)
        let seconds = parseInt(prev.seconds)
        
        seconds--
        
        if (seconds < 0) {
          seconds = 59
          minutes--
          
          if (minutes < 0) {
            minutes = 59
            hours--
            
            if (hours < 0) {
              hours = 23
              days--
              
              if (days < 0) {
                return { days: '00', hours: '02', minutes: '18', seconds: '46' }
              }
            }
          }
        }
        
        return {
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        }
      })
    }, 1000)
    
    return () => clearInterval(countdownInterval)
  }, [])

  return (
    <Container className='my-6'>
      <div className='grid grid-cols-3 gap-6'>
        {slides.map((slide, index) => (
          <div key={index} className={`${slide.bg} text-white rounded-2xl overflow-hidden`}>
            <div className='flex items-center'>
              <div className='w-1/2 p-6 flex flex-col items-center justify-center'>
                <span className='font-pop text-xs font-semibold uppercase tracking-widest mb-3'>
                  {slide.tag}
                </span>
                <h2 className='text-3xl font-bold font-pop mb-4 text-center'>
                  {slide.title}
                </h2>
                
                {slide.showCountdown ? (
                  <div className='flex gap-3 mb-4'>
                    <div className='flex flex-col items-center'>
                      <span className='text-xl font-bold font-pop'>{timeLeft.days}</span>
                      <span className='font-pop text-[10px] uppercase tracking-wider mt-1'>Days</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <span className='text-xl font-bold font-pop'>{timeLeft.hours}</span>
                      <span className='font-pop text-[10px] uppercase tracking-wider mt-1'>Hours</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <span className='text-xl font-bold font-pop'>{timeLeft.minutes}</span>
                      <span className='font-pop text-[10px] uppercase tracking-wider mt-1'>Mins</span>
                    </div>
                    <div className='flex flex-col items-center'>
                      <span className='text-xl font-bold font-pop'>{timeLeft.seconds}</span>
                      <span className='font-pop text-[10px] uppercase tracking-wider mt-1'>Secs</span>
                    </div>
                  </div>
                ) : (
                  <div className='mb-4'>
                    {slide.subtitle && (
                      <span className='font-pop text-sm font-medium mb-1 block'>
                        {slide.subtitle}
                      </span>
                    )}
                    {slide.price && (
                      <span className='font-pop text-lg font-bold mb-2 block'>
                        {slide.price}
                      </span>
                    )}
                    {slide.discount && (
                      <span className='bg-black text-white px-3 py-1 rounded-lg font-bold font-pop text-sm'>
                        {slide.discount}
                      </span>
                    )}
                  </div>
                )}
                
                <button className={`px-6 py-2 rounded-full font-bold font-pop flex items-center gap-2 transition-all text-xs ${
                  slide.bg === 'bg-black' ? 'bg-white text-black hover:bg-gray-100' : 
                  slide.bg === 'bg-yellow-400' ? 'bg-white text-black hover:bg-gray-100' : 
                  'bg-white text-blue-500 hover:bg-gray-100'
                }`}>
                  Shop Now →
                </button>
              </div>
              <div className='w-1/2'>
                <img src={slide.image} alt={`Banner ${index + 1}`} className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default SpecialBanner
