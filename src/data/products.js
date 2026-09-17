import fruit from '../assets/images/fruit.webp'
import veg from '../assets/images/veg.png'
import fish from '../assets/images/fish.png'
import snacks from '../assets/images/snacks.png'
import bevarage from '../assets/images/bevarage.png'
import beauty from '../assets/images/beauty.png'
import bread from '../assets/images/bread.png'
import baking from '../assets/images/baking.png'
import cooking from '../assets/images/cooking.png'
import food from '../assets/images/food.png'
import dish from '../assets/images/dish.png'
import oil from '../assets/images/oil.png'
import apple from '../assets/images/apple.png'
import malta from '../assets/images/malta.png'
import cabbage from '../assets/images/cabbage.png'
import lettuce from '../assets/images/lettuce.png'
import eggplant from '../assets/images/eggplant.png'
import potato from '../assets/images/potato.png'
import corn from '../assets/images/corn.png'
import cauliflower from '../assets/images/cauliflower.png'
import capsecum from '../assets/images/capsecum.png'
import chili from '../assets/images/chili.png'

export const categories = [
  { name: 'Fresh Fruit', slug: 'fresh-fruits', image: fruit },
  { name: 'Fresh Vegetables', slug: 'vegetables', image: veg },
  { name: 'Meat & Fish', slug: 'meat-fish', image: fish },
  { name: 'Snacks', slug: 'snacks', image: snacks },
  { name: 'Beverages', slug: 'beverages', image: bevarage },
  { name: 'Beauty & Health', slug: 'beauty-health', image: beauty },
  { name: 'Bread & Bakery', slug: 'bread-bakery', image: bread },
  { name: 'Baking Needs', slug: 'baking-needs', image: baking },
  { name: 'Cooking', slug: 'cooking', image: cooking },
  { name: 'Diabetic Food', slug: 'diabetic-food', image: food },
  { name: 'Dish Detergents', slug: 'dish-detergents', image: dish },
  { name: 'Oil', slug: 'oil', image: oil },
]

export const products = [
  { id: 1, name: 'Green Apple', price: 14.99, oldPrice: 20.99, ratingCount: 4, sale: true, category: 'fresh-fruits', image: apple, description: 'Crisp and juicy green apples, perfect for snacking or baking.' },
  { id: 2, name: 'Fresh Indian Malta', price: 20.0, oldPrice: null, ratingCount: 4, sale: false, category: 'fresh-fruits', image: malta, description: 'Sweet and tangy Indian malta oranges packed with vitamin C.' },
  { id: 3, name: 'Chinese cabbage', price: 12.0, oldPrice: null, ratingCount: 4, sale: false, category: 'vegetables', image: cabbage, description: 'Fresh Chinese cabbage ideal for stir-fries and salads.' },
  { id: 4, name: 'Green Lettuce', price: 9.0, oldPrice: null, ratingCount: 4, sale: false, category: 'vegetables', image: lettuce, description: 'Crunchy green lettuce leaves for healthy meals.' },
  { id: 5, name: 'Eggplant', price: 34.0, oldPrice: null, ratingCount: 4, sale: false, category: 'vegetables', image: eggplant, description: 'Fresh purple eggplants, great for grilling and curries.' },
  { id: 6, name: 'Big Potatoes', price: 20.0, oldPrice: null, ratingCount: 4, sale: false, category: 'vegetables', image: potato, description: 'Premium quality potatoes for all your cooking needs.' },
  { id: 7, name: 'Corn', price: 20.0, oldPrice: null, ratingCount: 4, sale: false, category: 'fresh-fruits', image: corn, description: 'Sweet golden corn on the cob, farm fresh.' },
  { id: 8, name: 'Fresh Cauliflower', price: 12.0, oldPrice: null, ratingCount: 4, sale: false, category: 'vegetables', image: cauliflower, description: 'White cauliflower heads, rich in nutrients.' },
  { id: 9, name: 'Green Capsicum', price: 9.0, oldPrice: 20.99, ratingCount: 4, sale: true, category: 'vegetables', image: capsecum, description: 'Vibrant green bell peppers with a crisp bite.' },
  { id: 10, name: 'Green Chili', price: 34.0, oldPrice: null, ratingCount: 4, sale: false, category: 'cooking', image: chili, description: 'Spicy green chilies to add heat to your dishes.' },
]

export const getProductById = (id) => products.find((p) => p.id === Number(id))

export const getProductsByCategory = (slug) =>
  slug ? products.filter((p) => p.category === slug) : products

export const searchProducts = (query) => {
  const q = query.trim().toLowerCase()
  if (!q) return products
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.replace('-', ' ').includes(q)
  )
}
