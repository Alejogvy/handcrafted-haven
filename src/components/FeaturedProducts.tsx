'use client'

import Image from 'next/image'
import Link from 'next/link'
import { products } from '../data/products'

export default function FeaturedProducts() {
  return (
    <section className="py-12 px-4 bg-background">
      <h2 className="text-3xl font-title font-bold text-accent mb-10 text-center">
        Featured Products
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md flex flex-col overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-56">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div className="mb-4">
                <h3 className="text-lg font-title text-primary mb-1">
                  {product.title}
                </h3>
                <p className="text-sm text-foreground dark:text-white/80 mb-2 line-clamp-3">
                  {product.description}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <p className="text-accent font-semibold">${product.price}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="text-sm border border-primary px-3 py-1 rounded hover:bg-accent/10 transition-colors-theme"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
