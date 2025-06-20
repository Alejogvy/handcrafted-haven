'use client'

import { useParams } from 'next/navigation'
import { useReviewContext } from '@/context/ReviewContext'
import { useProductContext } from '@/context/ProductContext'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'
import { Star, StarIcon } from 'lucide-react'

export default function ProductReviewsPage() {
  const { id } = useParams()
  const { products } = useProductContext()
  const { reviews, addReview } = useReviewContext()
  const { data: session } = useSession()

  const product = products.find((p) => p.id === id)
  const productReviews = reviews.filter((r) => r.productId === id)

  const [form, setForm] = useState({ rating: 5, comment: '' })

  if (!product) return <p className="p-4">Product not found.</p>

  const averageRating = productReviews.length
    ? (
        productReviews.reduce((sum, r) => sum + r.rating, 0) /
        productReviews.length
      ).toFixed(1)
    : null

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const emptyStars = 5 - fullStars

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIcon
          key={`full-${i}`}
          className="w-5 h-5 text-yellow-500"
          fill="currentColor"
          stroke="none"
        />
      )
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="w-5 h-5 text-yellow-500"
        />
      )
    }

    return <div className="flex items-center space-x-1">{stars}</div>
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!session?.user?.email) return

    if (form.rating < 1 || form.rating > 5) {
      alert('Rating must be between 1 and 5')
      return
    }

    if (form.comment.trim().length < 10) {
      alert('Comment must be at least 10 characters long')
      return
    }

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
      <h1 className="text-3xl font-title font-bold mb-2">Reviews for {product.name}</h1>

      {averageRating && (
        <div className="flex items-center gap-2 mb-6 text-accent">
          {renderStars(Number(averageRating))}
          <span className="text-sm text-muted-foreground">
            ({averageRating} / 5 · {productReviews.length} review{productReviews.length !== 1 && 's'})
          </span>
        </div>
      )}

      {productReviews.length > 0 ? (
        <ul className="space-y-4 mb-6">
          {productReviews.map((review, idx) => (
            <li key={idx} className="border border-primary/20 rounded p-4 bg-background shadow-sm">
              <div className="flex items-center gap-2">
                {renderStars(review.rating)}
                <span className="text-sm text-muted-foreground">By: {review.userEmail}</span>
              </div>
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
