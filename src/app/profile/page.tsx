'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useProductContext } from '../../context/ProductContext'

export default function ProfilePage() {
  const { data: session } = useSession()
  const { products, addProduct } = useProductContext()

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  })

  if (!session) {
    return <p className="text-center py-10">Please log in to view your profile.</p>
  }

  const userProducts = products.filter(
    (p) => p.ownerEmail === session.user?.email
  )

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.description || !form.price) {
      alert('Please complete all required fields.')
      return
    }
    if (!session || !session.user || !session.user.email) {
        alert('You must be authenticated to add a product.')
        return
    }
    addProduct({
      ownerEmail: session.user.email ?? '',
      name: form.name,
      description: form.description,
      price: Number(form.price),
      imageUrl: form.imageUrl || undefined,
    })
    setForm({ name: '', description: '', price: '', imageUrl: '' })
  }

  return (
    <main className="max-w-screen-md mx-auto py-10 px-4">
      <h1 className="text-4xl font-title mb-6 text-center">
        Hello, {session.user?.name || session.user?.email}
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Your products</h2>
        {userProducts.length === 0 ? (
          <p>You have not added any products yet.</p>
        ) : (
          <ul className="space-y-4">
            {userProducts.map((product) => (
              <li
                key={product.id}
                className="border rounded p-4 flex gap-4 items-center"
              >
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                )}
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="font-semibold mt-1">${product.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Add new product</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded p-2"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block font-medium mb-1">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              className="w-full border rounded p-2"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block font-medium mb-1">
              Price (USD) *
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full border rounded p-2"
              value={form.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />
          </div>

          <div>
            <label htmlFor="imageUrl" className="block font-medium mb-1">
              Image URL (optional)
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              className="w-full border rounded p-2"
              value={form.imageUrl}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white font-semibold py-2 px-6 rounded hover:opacity-90"
          >
            Add product
          </button>
        </form>
      </section>
    </main>
  )
}
