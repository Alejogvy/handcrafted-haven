import React from 'react'

export default function ContactPage() {
  return (
    <main className="py-12 px-4 max-w-screen-md mx-auto text-center">
      <h1 className="text-4xl font-title mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        We'd love to hear from you! Reach out with questions, feedback, or partnership inquiries.
      </p>
      <a
        href="mailto:hello@handcraftedhaven.com"
        className="inline-block px-6 py-3 bg-primary text-white rounded hover:opacity-90 transition"
      >
        hello@handcraftedhaven.com
      </a>
    </main>
  )
}
