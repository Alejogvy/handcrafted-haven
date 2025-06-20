'use client'

import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative bg-secondary text-primary dark:bg-zinc-800 dark:text-white py-24 md:py-32 transition-colors-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-title font-bold mb-6 leading-tight">
            Welcome to <span className="text-accent dark:text-accent/90">Handcrafted</span> Haven
          </h1>
          
          <p className="text-lg md:text-xl mb-8 mx-auto max-w-2xl">
            Discover unique, handmade products from talented local artisans. Support craftsmanship and bring authenticity into your home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-full transition-colors-theme shadow-lg hover:shadow-xl"
              aria-label="Browse our products"
            >
              Browse Products
            </Link>
            
            <Link
              href="/about"
              className="border-2 border-primary text-primary dark:border-white dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-colors-theme"
              aria-label="Learn about our artisans"
            >
              Meet the Artisans
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero