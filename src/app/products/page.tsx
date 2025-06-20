import { products } from '@/data/products'
import Link from 'next/link'

export default function ProductsPage() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-title font-bold mb-6 text-center md:text-left">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="flex flex-col border border-gray-200 dark:border-zinc-700 rounded-lg shadow-sm p-4 bg-white dark:bg-zinc-900"
          >
            <img
              src={product.image}
              alt={product.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover rounded mb-3"
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
