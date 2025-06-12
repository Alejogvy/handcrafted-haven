'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <main className="py-12 px-4 max-w-screen-md mx-auto">
      <h1 className="text-4xl font-title mb-6 text-center">Contact Us</h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8 font-text">
        Have questions, suggestions, or just want to say hi? Fill out the form below and we’ll get back to you soon.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1 font-text">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-zinc-900"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1 font-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-zinc-900"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1 font-text">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-zinc-900"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white font-semibold py-2 px-6 rounded hover:opacity-90 transition"
          onClick={(e) => {
            e.preventDefault()
            alert('Message sent (simulated)')
          }}
        >
          Send Message
        </button>
      </form>
    </main>
  )
}
