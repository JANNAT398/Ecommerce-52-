import React from 'react'
import Container from './layout/Container'
import fruit from '../assets/images/fruit.webp'
import { Link } from 'react-router';

const ProductShowcase = ({allData}) => {
     console.log(allData);
  return (
    <>
    <Container>
      <h2>Popular Categories</h2>
      <Link to='/category'>View All</Link>
    <div className='flex gap-[29px] flex-wrap'>
      {allData.slice(0,12).map(item => (
            <div key={item.slug} className='border border-red-500 max-w-[14.66%] p-6'>
              <img src={fruit} alt="fruit" />
                <h3>{item.name || item.title}</h3>
                {item.price && <p>${item.price}</p>}
                {item.rating && <p>${item.rating}</p>}
            </div>
            ))}
    </div>
    </Container>
    </>
  )
}

export default ProductShowcase