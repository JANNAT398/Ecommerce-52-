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
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  useEffect(() => {
    const interval = setInterval(next, 3000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <Container className='py-12'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-2xl font-bold font-pop text-gray-800'>Client Testimonials</h2>
        <div className='flex gap-2'>
          <button
            onClick={prev}
            className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors'
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={next}
            className='w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors'
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
            <FaQuoteLeft size={20} className='text-green-200 mb-4' />
            <p className='text-sm text-gray-600 mb-6 leading-relaxed font-pop'>{testimonial.text}</p>
            <div className='flex items-center gap-4'>
              <img src={testimonial.avatar} alt={testimonial.name} className='w-10 h-10 rounded-full object-cover' />
              <div>
                <h4 className='font-semibold text-gray-800 font-pop text-sm'>{testimonial.name}</h4>
                <p className='text-xs text-gray-500 font-pop'>{testimonial.role}</p>
              </div>
              <div className='flex gap-1 ml-auto'>
                {[1,2,3,4,5].map(star => (
                  <FaStar key={star} size={10} className='text-orange-400' />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Testimonials
