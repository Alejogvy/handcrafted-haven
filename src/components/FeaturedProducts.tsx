// src/components/FeaturedProducts.tsx
'use client'

import Image from 'next/image'
import { products } from '../data/products'

export default function FeaturedProducts() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-title text-primary mb-8 text-center">
        Productos Destacados
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={300}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-title text-primary mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-foreground mb-2">
                {product.description}
              </p>
              <p className="text-accent font-semibold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
