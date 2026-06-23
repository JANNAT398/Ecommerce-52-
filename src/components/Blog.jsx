import React from 'react'
import Container from './layout/Container'
import banner from '../assets/images/banner.webp'
import banner1 from '../assets/images/banner1.webp'
import banner2 from '../assets/images/banner2.webp'
import { Link } from 'react-router'
import { FaCalendarAlt, FaCommentAlt } from 'react-icons/fa'

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: banner,
      date: '01 Jan, 2024',
      comments: 12,
      title: 'Organic Food & Vegetable Tips',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      image: banner1,
      date: '15 Feb, 2024',
      comments: 8,
      title: 'Healthy Lifestyle Benefits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      image: banner2,
      date: '20 Mar, 2024',
      comments: 15,
      title: 'Fresh Fruits for Daily Life',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]

  return (
    <Container className='py-12'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-2xl font-bold font-pop text-gray-800'>Our Blog</h2>
        <Link to='/blog' className='text-green-600 font-semibold font-pop hover:underline text-sm'>View All →</Link>
      </div>
      <div className='grid grid-cols-3 gap-6'>
        {blogs.map(blog => (
          <div key={blog.id} className='bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
            <div className='relative'>
              <img src={blog.image} alt={blog.title} className='w-full h-48 object-cover' />
            </div>
            <div className='p-5'>
              <div className='flex gap-4 mb-3'>
                <div className='flex items-center gap-2 text-gray-500 text-xs'>
                  <FaCalendarAlt size={10} />
                  <span>{blog.date}</span>
                </div>
                <div className='flex items-center gap-2 text-gray-500 text-xs'>
                  <FaCommentAlt size={10} />
                  <span>{blog.comments} Comments</span>
                </div>
              </div>
              <h3 className='font-semibold font-pop text-gray-800 mb-2 hover:text-green-600 transition-colors cursor-pointer'>{blog.title}</h3>
              <p className='text-sm text-gray-500 mb-4 font-pop line-clamp-2'>{blog.description}</p>
              <Link to={`/blog/${blog.id}`} className='text-green-600 text-sm font-semibold font-pop hover:underline flex items-center gap-1'>
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Blog
