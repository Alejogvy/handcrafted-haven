'use client'

import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/data/products'

export default function HomePage() {
  const featuredProducts = products.slice(0, 3)

  return (
    <main className="pb-20">
      <Hero />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-title font-bold text-primary dark:text-white mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-primary/80 dark:text-secondary/80 max-w-2xl mx-auto">
            Our most popular handcrafted items loved by customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <article
              key={product.id}
              className="group bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-lg transition-all-theme overflow-hidden border border-gray-200 dark:border-zinc-700"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform-theme"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-title text-primary dark:text-white">
                    {product.title}
                  </h3>
                  <span className="bg-accent/10 text-accent text-sm font-medium px-2.5 py-0.5 rounded-full">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-primary/70 dark:text-secondary/70 mb-5 line-clamp-2">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="w-full inline-flex justify-center items-center px-4 py-2.5 bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors-theme font-medium"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 border border-primary dark:border-secondary text-primary dark:text-secondary hover:bg-primary/10 dark:hover:bg-secondary/10 rounded-lg transition-colors-theme font-medium"
          >
            View All Products
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}