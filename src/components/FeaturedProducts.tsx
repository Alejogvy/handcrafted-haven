// src/app/components/FeaturedProducts.tsx
import React from 'react'

const products = [
  {
    id: 1,
    name: 'Rustic Wooden Bowl',
    description: 'Hand-carved from olive wood.',
    image: '/images/bowl.jpg',
  },
  {
    id: 2,
    name: 'Woven Basket',
    description: 'Natural fiber basket from local artisans.',
    image: '/images/basket.jpg',
  },
  {
    id: 3,
    name: 'Ceramic Vase',
    description: 'Hand-painted floral design.',
    image: '/images/vase.jpg',
  },
]

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-background text-center">
      <h2 className="text-3xl font-title mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow dark:bg-zinc-700">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
