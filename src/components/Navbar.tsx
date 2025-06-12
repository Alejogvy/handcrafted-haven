'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="bg-background border-b border-gray-300 dark:border-gray-700 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-title font-bold hover:opacity-80">
          Handcrafted Haven
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/products" className="hover:underline">
            Productos
          </Link>
          <Link href="/about" className="hover:underline">
            Acerca de
          </Link>
          <Link href="/contact" className="hover:underline">
            Contacto
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="ml-4 px-3 py-1 border rounded text-sm hover:bg-accent/10 transition"
            >
              {theme === 'light' ? '🌙 Oscuro' : '☀️ Claro'}
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}
