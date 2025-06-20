'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { data: session } = useSession()

  useEffect(() => setMounted(true), [])

  return (
    <header className="bg-background border-b border-primary/30 dark:border-primary/50 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-title font-bold text-accent hover:opacity-80 transition-colors-theme"
        >
          Handcrafted Haven
        </Link>

        <nav className="flex items-center gap-x-6 font-body text-sm">
          <Link href="/products" className="hover:text-accent transition-colors-theme">
            Products
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors-theme">
            About
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors-theme">
            Contact
          </Link>

          {session ? (
            <>
              <Link href="/profile" className="hover:text-accent transition-colors-theme">
                My Profile
              </Link>
              <button
                onClick={() => signOut()}
                className="px-3 py-1 border border-primary text-primary rounded-md hover:bg-accent/10 transition-colors-theme"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="hover:text-accent transition-colors-theme">
              Login
            </Link>
          )}

          {mounted && (
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme"
              className="px-3 py-1 border border-primary text-primary rounded-md hover:bg-accent/10 transition-colors-theme"
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}
