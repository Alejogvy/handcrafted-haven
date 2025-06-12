'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Product {
  id: string
  ownerEmail: string
  name: string
  description: string
  price: number
  category?: string
  imageUrl?: string
}

interface ProductContextType {
  products: Product[]
  addProduct: (product: Omit<Product, 'id'>) => void
  updateProduct: (product: Product) => void
  deleteProduct: (id: string) => void
  filterCategory: string
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      ownerEmail: 'seller@example.com',
      name: 'Ceramic Bowl',
      description: 'Handmade, ideal for decoration.',
      price: 25,
      category: 'Ceramics',
      imageUrl: '/images/bowls.webp',
    },
  ])

  const [filterCategory, setFilterCategory] = useState<string>('')

  function addProduct(product: Omit<Product, 'id'>) {
    const newProduct = { ...product, id: Date.now().toString() }
    setProducts((prev) => [...prev, newProduct])
  }

  function updateProduct(updatedProduct: Product) {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    )
  }

  function deleteProduct(id: string) {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        filterCategory,
        setFilterCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProductContext() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider')
  }
  return context
}
