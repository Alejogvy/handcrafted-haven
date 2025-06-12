'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-zinc-800 text-background dark:text-white py-8 mt-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm font-body">
        <p className="mb-2">
          © 2025 Handcrafted Haven. All rights reserved.
        </p>
        <nav className="flex justify-center gap-6 text-background/90 dark:text-white/80">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
