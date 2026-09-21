import fruit from '../assets/images/fruit.webp'
import { getProductById } from '../data/products'

export function resolveProductImage(product) {
  if (!product) return fruit
  if (typeof product.image === 'string' && product.image.length > 0) {
    return product.image
  }
  const fresh = getProductById(product.id)
  return fresh?.image || fruit
}
