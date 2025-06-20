'use client'

import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { useReviewContext } from '@/context/ReviewContext'

interface Props {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === Number(params.id))
  const { getReviewsForProduct } = useReviewContext()
  const productReviews = getReviewsForProduct(params.id)

  if (!product) return notFound()

  const averageRating = productReviews.length
    ? (
        productReviews.reduce((sum, r) => sum + r.rating, 0) /
        productReviews.length
      ).toFixed(1)
    : null

  const getStarIcons = (rating: number) => {
    const fullStars = Math.floor(rating)
    const emptyStars = 5 - fullStars
    return '★'.repeat(fullStars) + '☆'.repeat(emptyStars)
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-title font-bold mb-2">{product.title}</h1>

      {/* Average star rating */}
      {averageRating && (
        <div className="mb-4 text-accent">
          <p>
            {getStarIcons(Number(averageRating))} ({averageRating} / 5 · {productReviews.length}{' '}
            review{productReviews.length !== 1 && 's'})
          </p>
        </div>
      )}

      <img
        src={product.image}
        alt={product.title}
        className="w-full h-auto rounded mb-4 shadow"
      />

      <p className="text-lg font-body mb-2">{product.description}</p>

      <p className="text-xl font-semibold text-green-700 dark:text-green-400 mb-4">
        ${product.price.toFixed(2)}
      </p>

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

      {/* Product Reviews */}
      <section className="mt-8 border-t border-primary/20 pt-6">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        {productReviews.length > 0 ? (
          <ul className="space-y-4 mb-4">
            {productReviews.slice(0, 2).map((review, idx) => (
              <li
                key={idx}
                className="border border-primary/20 rounded p-4 bg-background shadow-sm"
              >
                <p className="font-semibold text-accent">
                  Rating: {review.rating} / 5
                </p>
                <p className="text-sm text-muted-foreground">
                  By: {review.userEmail}
                </p>
                <p className="mt-2">{review.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground mb-4">No reviews yet.</p>
        )}
        <Link
          href={`/products/${product.id}/reviews`}
          className="text-accent hover:underline font-semibold"
        >
          {productReviews.length > 0 ? 'Read all reviews' : 'Leave a review'}
        </Link>
      </section>

      <Link
        href="/products"
        className="inline-block mt-6 text-accent hover:underline font-semibold"
      >
        ← Back to all products
      </Link>
    </main>
  )
}
