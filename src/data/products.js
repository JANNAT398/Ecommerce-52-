import fruit from '../assets/images/fruit.webp'
import veg from '../assets/images/veg.webp'
import fish from '../assets/images/fish.webp'
import snacks from '../assets/images/snacks.webp'
import bevarage from '../assets/images/bevarage.webp'
import beauty from '../assets/images/beauty.webp'
import bread from '../assets/images/bread.webp'
import baking from '../assets/images/baking.webp'
import cooking from '../assets/images/cooking.webp'
import food from '../assets/images/food.webp'
import dish from '../assets/images/dish.webp'
import oil from '../assets/images/oil.webp'
import apple from '../assets/images/apple.webp'
import malta from '../assets/images/malta.webp'
import cabbage from '../assets/images/cabbage.webp'
import lettuce from '../assets/images/lettuce.webp'
import eggplant from '../assets/images/eggplant.webp'
import potato from '../assets/images/potato.webp'
import corn from '../assets/images/corn.webp'
import cauliflower from '../assets/images/cauliflower.webp'
import capsecum from '../assets/images/capsecum.webp'
import chili from '../assets/images/chili.webp'
import redchili from '../assets/images/redchili.webp'
import tomato from '../assets/images/tomato.webp'
import mangoes from '../assets/images/mangoes.webp'

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

export const popularTags = [
  'Healthy', 'Low Fat', 'Vegetarian', 'Kid Foods', 'Vitamins',
  'Nutritions', 'Meats', 'Snacks', 'Dessert', 'Gourmet',
  'Kuromi Foods', 'Vietnamese foods', 'Asian Foods', 'Milk', 'Drink',
]

export const products = [
  { id: 1, name: 'Green Apple', price: 14.99, oldPrice: 20.99, rating: 5, ratingCount: 5, sale: true, inStock: true, category: 'fresh-fruits', tags: ['Healthy', 'Vitamins'], image: apple, description: 'Crisp and juicy green apples, perfect for snacking or baking.' },
  { id: 2, name: 'Chinese cabbage', price: 12.0, oldPrice: null, rating: 4, ratingCount: 4, sale: false, inStock: true, category: 'vegetables', tags: ['Healthy', 'Low Fat', 'Vegetarian'], image: cabbage, description: 'Fresh Chinese cabbage ideal for stir-fries and salads.' },
  { id: 3, name: 'Green Lettuce', price: 9.0, oldPrice: null, rating: 4, ratingCount: 4, sale: false, inStock: true, category: 'vegetables', tags: ['Healthy', 'Low Fat', 'Vegetarian'], image: lettuce, description: 'Crunchy green lettuce leaves for healthy meals.' },
  { id: 4, name: 'Eggplant', price: 34.0, oldPrice: null, rating: 3, ratingCount: 3, sale: false, inStock: false, category: 'vegetables', tags: ['Vegetarian', 'Asian Foods'], image: eggplant, description: 'Fresh purple eggplants, great for grilling and curries.' },
  { id: 5, name: 'Fresh Cauliflower', price: 12.0, oldPrice: null, rating: 4, ratingCount: 4, sale: false, inStock: true, category: 'vegetables', tags: ['Healthy', 'Vegetarian', 'Nutritions'], image: cauliflower, description: 'White cauliflower heads, rich in nutrients.' },
  { id: 6, name: 'Green Capsicum', price: 9.0, oldPrice: 20.99, rating: 5, ratingCount: 5, sale: true, inStock: true, category: 'vegetables', tags: ['Healthy', 'Low Fat', 'Vegetarian'], image: capsecum, description: 'Vibrant green bell peppers with a crisp bite.' },
  { id: 7, name: 'Green Chili', price: 34.0, oldPrice: null, rating: 4, ratingCount: 4, sale: false, inStock: true, category: 'cooking', tags: ['Asian Foods', 'Vietnamese foods'], image: chili, description: 'Spicy green chilies to add heat to your dishes.' },
  { id: 8, name: 'Big Potatoes', price: 20.0, oldPrice: null, rating: 4, ratingCount: 4, sale: false, inStock: true, category: 'vegetables', tags: ['Healthy', 'Kid Foods'], image: potato, description: 'Premium quality potatoes for all your cooking needs.' },
  { id: 9, name: 'Corn', price: 20.0, oldPrice: null, rating: 5, ratingCount: 5, sale: false, inStock: true, category: 'fresh-fruits', tags: ['Healthy', 'Nutritions'], image: corn, description: 'Sweet golden corn on the cob, farm fresh.' },
  { id: 10, name: 'Red Chili', price: 12.0, oldPrice: null, rating: 3, ratingCount: 3, sale: false, inStock: true, category: 'cooking', tags: ['Asian Foods', 'Gourmet'], image: redchili, description: 'Fiery red chilies with bold spicy flavor.' },
  { id: 11, name: 'Red Tomatoes', price: 8.0, oldPrice: 14.99, rating: 4, ratingCount: 4, sale: true, inStock: true, category: 'vegetables', tags: ['Healthy', 'Low Fat', 'Vegetarian'], image: tomato, description: 'Ripe juicy red tomatoes, perfect for salads and sauces.' },
  { id: 12, name: 'Sunder Mangoes', price: 34.0, oldPrice: null, rating: 5, ratingCount: 5, sale: false, inStock: true, category: 'fresh-fruits', tags: ['Healthy', 'Dessert', 'Vitamins'], image: mangoes, description: 'Sweet sun-ripened mangoes with rich tropical flavor.' },
  { id: 13, name: 'Fresh Indian Malta', price: 20.0, oldPrice: null, rating: 4, ratingCount: 4, sale: false, inStock: true, category: 'fresh-fruits', tags: ['Healthy', 'Drink', 'Vitamins'], image: malta, description: 'Sweet and tangy Indian malta oranges packed with vitamin C.' },
  { id: 14, name: 'Fresh Salmon Fillet', price: 28.0, oldPrice: 35.0, rating: 5, ratingCount: 5, sale: true, inStock: true, category: 'meat-fish', tags: ['Meats', 'Healthy', 'Gourmet'], image: fish, description: 'Premium fresh salmon fillet, rich in omega-3.' },
  { id: 15, name: 'Crispy Potato Chips', price: 6.0, oldPrice: null, rating: 4, ratingCount: 4, sale: false, inStock: true, category: 'snacks', tags: ['Snacks', 'Kid Foods'], image: snacks, description: 'Crunchy salted potato chips for snacking.' },
  { id: 16, name: 'Fresh Orange Juice', price: 11.0, oldPrice: null, rating: 4, ratingCount: 4, sale: false, inStock: true, category: 'beverages', tags: ['Drink', 'Vitamins', 'Healthy'], image: bevarage, description: '100% pure fresh orange juice, no added sugar.' },
  { id: 17, name: 'Organic Face Cream', price: 18.0, oldPrice: 24.0, rating: 4, ratingCount: 4, sale: true, inStock: true, category: 'beauty-health', tags: ['Healthy', 'Vitamins'], image: beauty, description: 'Natural organic face cream for daily skincare.' },
  { id: 18, name: 'Whole Wheat Bread', price: 5.0, oldPrice: null, rating: 4, ratingCount: 4, sale: false, inStock: true, category: 'bread-bakery', tags: ['Healthy', 'Kid Foods'], image: bread, description: 'Soft whole wheat bread baked fresh daily.' },
  { id: 19, name: 'All Purpose Flour', price: 7.0, oldPrice: null, rating: 3, ratingCount: 3, sale: false, inStock: true, category: 'baking-needs', tags: ['Baking', 'Kid Foods'], image: baking, description: 'Fine all-purpose flour for baking and cooking.' },
  { id: 20, name: 'Sugar Free Biscuits', price: 10.0, oldPrice: null, rating: 4, ratingCount: 4, sale: false, inStock: true, category: 'diabetic-food', tags: ['Healthy', 'Low Fat'], image: food, description: 'Diabetic-friendly sugar free biscuits.' },
  { id: 21, name: 'Dish Wash Liquid', price: 8.0, oldPrice: null, rating: 3, ratingCount: 3, sale: false, inStock: true, category: 'dish-detergents', tags: ['Gourmet'], image: dish, description: 'Powerful dish wash liquid with lemon freshness.' },
  { id: 22, name: 'Extra Virgin Olive Oil', price: 15.0, oldPrice: 19.0, rating: 5, ratingCount: 5, sale: true, inStock: true, category: 'oil', tags: ['Healthy', 'Gourmet', 'Low Fat'], image: oil, description: 'Cold-pressed extra virgin olive oil for cooking.' },
  { id: 23, name: 'Fresh Full Cream Milk', price: 6.0, oldPrice: null, rating: 4, ratingCount: 4, sale: false, inStock: true, category: 'beverages', tags: ['Milk', 'Drink', 'Kid Foods'], image: bevarage, description: 'Farm-fresh full cream milk, rich and creamy.' },
  { id: 24, name: 'Vietnamese Spring Rolls', price: 14.0, oldPrice: null, rating: 4, ratingCount: 4, sale: false, inStock: true, category: 'snacks', tags: ['Vietnamese foods', 'Asian Foods', 'Kuromi Foods'], image: snacks, description: 'Authentic Vietnamese spring rolls with dipping sauce.' },
  { id: 25, name: 'Chocolate Dessert Bar', price: 9.0, oldPrice: 12.0, rating: 5, ratingCount: 5, sale: true, inStock: true, category: 'snacks', tags: ['Dessert', 'Snacks', 'Kid Foods'], image: snacks, description: 'Rich chocolate dessert bar for sweet cravings.' },
]

export const getCategoryCounts = () => {
  const counts = {}
  products.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1
  })
  return counts
}

export const getPriceBounds = () => ({
  min: Math.floor(Math.min(...products.map((p) => p.price))),
  max: Math.ceil(Math.max(...products.map((p) => p.price))),
})

export const getSaleProducts = (limit = 3) =>
  products.filter((p) => p.sale).slice(0, limit)

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
