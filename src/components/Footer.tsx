'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-zinc-800 text-background dark:text-white py-8 mt-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm font-body gap-4">
        <p className="text-center md:text-left">
          © 2025 Handcrafted Haven. All rights reserved.
        </p>
        <nav className="flex gap-6 text-background/90 dark:text-white/80">
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
