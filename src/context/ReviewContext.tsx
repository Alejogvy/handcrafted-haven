'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Review {
    productId: string
    userEmail: string
    comment: string
    rating: number
  }  

interface ReviewContextType {
  reviews: Review[]
  addReview: (review: Review) => void
  getReviewsForProduct: (productId: string) => Review[]
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined)

export function ReviewProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([])

  function addReview(review: Review) {
    setReviews(prev => [...prev, review])
  }

  function getReviewsForProduct(productId: string) {
    return reviews.filter(r => r.productId === productId)
  }

  return (
    <ReviewContext.Provider value={{ reviews, addReview, getReviewsForProduct }}>
      {children}
    </ReviewContext.Provider>
  )
}

export function useReviewContext() {
  const context = useContext(ReviewContext)
  if (!context) throw new Error('useReviewContext must be used within a ReviewProvider')
  return context
}
