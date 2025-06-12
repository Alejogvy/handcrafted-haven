import { products } from '@/data/products'
import Link from 'next/link'

const featuredProducts = products.slice(0, 3)

export default function HomePage() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-title font-bold mb-6 text-center md:text-left">
        Featured Products
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        {featuredProducts.map(product => (
          <div
            key={product.id}
            className="flex flex-col w-full md:w-1/3 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-sm p-4 bg-white dark:bg-zinc-900"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-3 rounded"
            />
            <h2 className="text-lg font-semibold font-title mb-1">{product.title}</h2>
            <p className="text-green-700 dark:text-green-400 font-bold mb-2">
              ${product.price.toFixed(2)}
            </p>
            <Link
              href={`/products/${product.id}`}
              className="text-accent hover:underline mt-auto font-semibold"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
