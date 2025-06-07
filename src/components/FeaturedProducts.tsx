import Image from 'next/image'
import React from 'react'

const products = [
  {
    id: 1,
    name: 'Rustic Wooden Bowl',
    description: 'Hand-carved from olive wood.',
    image: '/images/passover.webp',
    width: 400,
    height: 300
  },
  {
    id: 2,
    name: 'Woven Basket',
    description: 'Natural fiber basket from local artisans.',
    image: '/images/feathers.webp',
    width: 400,
    height: 300
  },
  {
    id: 3,
    name: 'Ceramic Vase',
    description: 'Hand-painted floral design.',
    image: '/images/bowls.webp',
    width: 400,
    height: 300
  },
]

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-background text-center">
      <h2 className="text-3xl font-title mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md dark:bg-zinc-700 hover:shadow-lg transition-shadow">
            <div className="relative w-full aspect-square overflow-hidden rounded-md mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={product.width}
                height={product.height}
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts