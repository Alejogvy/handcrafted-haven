'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <main className="py-12 px-4 max-w-screen-md mx-auto">
      <h1 className="text-4xl font-title mb-6 text-center">Contáctanos</h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
        ¿Tienes preguntas, sugerencias o simplemente quieres saludarnos? Completa el siguiente formulario y te responderemos pronto.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 dark:border-gray-600 rounded p-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 dark:border-gray-600 rounded p-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full border border-gray-300 dark:border-gray-600 rounded p-2"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white font-semibold py-2 px-6 rounded hover:opacity-90"
          onClick={(e) => {
            e.preventDefault()
            alert('Mensaje enviado (simulado)')
          }}
        >
          Enviar
        </button>
      </form>
    </main>
  )
}
