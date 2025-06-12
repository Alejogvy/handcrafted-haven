'use client'

import React from 'react'

const Hero = () => {
  return (
    <section
      className="bg-secondary text-primary dark:bg-zinc-800 dark:text-white py-20 transition-colors-theme"
      role="region"
      aria-label="Hero section"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-title font-bold mb-6 drop-shadow-sm">
          Welcome to Handcrafted Haven
        </h1>
        <p className="text-lg md:text-xl font-body max-w-3xl mx-auto text-balance">
          Discover unique, handmade products from talented local artisans. Support craftsmanship and bring authenticity into your home.
        </p>
      </div>
    </section>
  )
}

export default Hero
