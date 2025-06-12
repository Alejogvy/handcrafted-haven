import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id)

  if (!product) return notFound()

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-title font-bold mb-4">{product.title}</h1>
      
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-auto rounded mb-4 shadow"
      />
      
      <p className="text-lg font-body mb-2">{product.description}</p>
      
      <p className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">
        ${product.price.toFixed(2)}
      </p>

      {/* Link to the reviews page */}
      <Link
        href={`/products/${product.id}/reviews`}
        className="inline-block mb-6 text-accent hover:underline font-semibold"
      >
        ⭐ Read and add reviews
      </Link>

      {product.features?.length ? (
        <>
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside mb-4">
            {product.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </>
      ) : null}

      <Link
        href="/products"
        className="inline-block mt-6 text-accent hover:underline font-semibold"
      >
        ← Back to all products
      </Link>
    </main>
  )
}
