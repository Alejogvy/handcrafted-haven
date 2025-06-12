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
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      <div className="relative w-full h-80 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>

      <p className="text-lg mb-2">{product.description}</p>
      <p className="text-xl font-semibold text-green-700 mb-6">${product.price}</p>

      <Link
        href="/products"
        className="text-blue-600 hover:underline text-sm"
      >
        ← Volver al catálogo
      </Link>
    </main>
  )
}
