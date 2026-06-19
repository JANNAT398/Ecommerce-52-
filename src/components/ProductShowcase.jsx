import React from 'react'
import Container from './layout/Container'

const ProductShowcase = ({allPro}) => {
     console.log(allPro);
  return (
    <>
    <Container>
      <h2>Popular Categories</h2>
     {allPro.map(item => (
          <div>
             <h3>{item.name}</h3>
          </div>
          ))}
    </Container>
    </>
  )
}

export default ProductShowcase