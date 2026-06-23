import React from 'react'
import ProductShowcase from '../components/ProductShowcase'
import fruit from '../assets/images/fruit.webp'
import banner from '../assets/images/banner.webp'
import banner1 from '../assets/images/banner1.webp'
import banner2 from '../assets/images/banner2.webp'

const categoryData = [
  { name: 'Fresh Fruit', slug: 'fresh-fruits', image: fruit },
  { name: 'Fresh Vegetables', slug: 'vegetables', image: fruit },
  { name: 'Meat & Fish', slug: 'meat-fish', image: fruit },
  { name: 'Snacks', slug: 'snacks', image: fruit },
  { name: 'Beverages', slug: 'beverages', image: fruit },
  { name: 'Beauty & Health', slug: 'beauty-health', image: fruit },
  { name: 'Bread & Bakery', slug: 'bread-bakery', image: fruit },
  { name: 'Baking Needs', slug: 'baking-needs', image: fruit },
  { name: 'Cooking', slug: 'cooking', image: fruit },
  { name: 'Diabetic Food', slug: 'diabetic-food', image: fruit },
  { name: 'Dish Detergents', slug: 'dish-detergents', image: fruit },
  { name: 'Oil', slug: 'oil', image: fruit }
]

const productData = [
  { id: 1, name: 'Green Apple', price: 14.99, oldPrice: 20.99, ratingCount: 4, sale: true, active: false, image: banner },
  { id: 2, name: 'Fresh Indian Malta', price: 20.00, oldPrice: null, ratingCount: 3, sale: false, active: false, image: banner1 },
  { id: 3, name: 'Chinese cabbage', price: 12.00, oldPrice: null, ratingCount: 4, sale: false, active: true, image: fruit },
  { id: 4, name: 'Green Lettuce', price: 9.00, oldPrice: 20.99, ratingCount: 5, sale: true, active: false, image: banner2 },
  { id: 5, name: 'Eggplant', price: 34.00, oldPrice: null, ratingCount: 3, sale: false, active: false, image: banner },
  { id: 6, name: 'Big Potatoes', price: 20.00, oldPrice: null, ratingCount: 5, sale: false, active: false, image: banner1 },
  { id: 7, name: 'Corn', price: 20.00, oldPrice: null, ratingCount: 4, sale: false, active: false, image: fruit },
  { id: 8, name: 'Fresh Cauliflower', price: 12.00, oldPrice: null, ratingCount: 5, sale: false, active: false, image: banner2 },
  { id: 9, name: 'Green Capsicum', price: 9.00, oldPrice: 20.99, ratingCount: 4, sale: true, active: false, image: banner },
  { id: 10, name: 'Green Chili', price: 34.00, oldPrice: null, ratingCount: 5, sale: false, active: false, image: banner1 }
]

const Category = () => {
  return (
    <>
      <ProductShowcase allData={categoryData} title='All Categories' isCategory={true} />
      <ProductShowcase allData={productData} title='All Products' isCategory={false} />
    </>
  )
}

export default Category
