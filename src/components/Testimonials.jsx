import React, { useState, useEffect } from 'react'
import Container from './layout/Container'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const testimonials = [
    {
      name: 'Robert Fox',
      role: 'Customer',
      avatar: 'https://i.pravatar.cc/48?u=robert',
      text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.'
    },
    {
      name: 'Dianne Russell',
      role: 'Customer',
      avatar: 'https://i.pravatar.cc/48?u=dianne',
      text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.'
    },
    {
      name: 'Eleanor Pena',
      role: 'Customer',
      avatar: 'https://i.pravatar.cc/48?u=eleanor',
      text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.'
    }
  ]

  const next = () => {
    setCurrent(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setCurrent(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(next, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Container className='py-12'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-3xl font-bold font-pop text-black'>Client Testimonials</h2>
        <div className='flex gap-2'>
          <button
            onClick={prev}
            className='w-10 h-10 rounded-full border border-green-600 text-green-600 flex items-center justify-center hover:bg-green-50 transition-colors cursor-pointer'
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className='w-10 h-10 rounded-full border border-green-600 text-green-600 flex items-center justify-center hover:bg-green-50 transition-colors cursor-pointer'
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className='relative overflow-hidden'>
        <div 
          className='flex transition-transform duration-500'
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className='min-w-full'>
              <div className='grid grid-cols-3 gap-6'>
                {testimonials.map((t, i) => (
                  <div 
                    key={i} 
                    className={`bg-white p-6 rounded-lg shadow-sm border transition-all duration-300 ${
                      i === current ? 'border-green-600 shadow-md' : 'border-gray-100'
                    }`}
                  >
                    <FaQuoteLeft size={24} className={`mb-4 ${i === current ? 'text-green-500' : 'text-green-200'}`} />
                    <p className='text-sm text-gray-600 mb-6 leading-relaxed font-pop'>{t.text}</p>
                    <div className='flex items-center gap-4'>
                      <img src={t.avatar} alt={t.name} className='w-12 h-12 rounded-full object-cover' />
                      <div>
                        <h4 className={`font-semibold font-pop text-base ${i === current ? 'text-green-700' : 'text-gray-800'}`}>{t.name}</h4>
                        <p className='text-xs text-gray-500 font-pop'>{t.role}</p>
                      </div>
                      <div className='flex gap-1 ml-auto'>
                        {[1,2,3,4,5].map(star => (
                          <FaStar 
                            key={star} 
                            size={12} 
                            fill='currentColor' 
                            className={i === current ? 'text-green-500' : 'text-orange-400'} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Testimonials
