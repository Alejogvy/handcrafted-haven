'use client'

import { useParams } from 'next/navigation'
import { useReviewContext } from '@/context/ReviewContext'
import { useProductContext } from '@/context/ProductContext'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'

export default function ProductReviewsPage() {
  const { id } = useParams()
  const { products } = useProductContext()
  const { reviews, addReview } = useReviewContext()
  const { data: session } = useSession()

  const product = products.find((p) => p.id === id)
  const productReviews = reviews.filter((r) => r.productId === id)

  const [form, setForm] = useState({ rating: 5, comment: '' })

  if (!product) return <p className="p-4">Producto no encontrado.</p>

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!session?.user?.email) return

    addReview({
      productId: product.id,
      userEmail: session.user.email,
      rating: form.rating,
      comment: form.comment,
    })

    setForm({ rating: 5, comment: '' })
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-title font-bold mb-4">Reviews for {product.name}</h1>

      {productReviews.length > 0 ? (
        <ul className="space-y-4 mb-6">
          {productReviews.map((review, idx) => (
            <li key={idx} className="border border-primary/20 rounded p-4 bg-background shadow-sm">
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
        <p className="mb-6">No reviews yet.</p>
      )}

      {session ? (
        <form onSubmit={handleSubmit} className="space-y-4 border-t border-primary/20 pt-6">
          <h2 className="text-xl font-semibold">Add Your Review</h2>
          <div>
            <label className="block mb-1 font-medium">Rating (1–5)</label>
            <input
              type="number"
              name="rating"
              min={1}
              max={5}
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value) })}
              required
              className="w-full p-2 border rounded bg-background"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Comment</label>
            <textarea
              name="comment"
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              required
              className="w-full p-2 border rounded bg-background"
            />
          </div>
          <button
            type="submit"
            className="bg-accent text-white px-4 py-2 rounded hover:opacity-90"
          >
            Submit Review
          </button>
        </form>
      ) : (
        <p className="text-sm text-muted-foreground">
          You must be logged in to leave a review.
        </p>
      )}

      <Link
        href={`/products/${product.id}`}
        className="inline-block mt-6 text-accent hover:underline"
      >
        ← Back to product
      </Link>
    </main>
  )
}
