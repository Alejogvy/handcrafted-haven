'use client'

import { SessionProvider } from 'next-auth/react'
import { ProductProvider } from '../context/ProductContext'
import { ThemeProvider } from 'next-themes'
import { ReviewProvider } from '../context/ReviewContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <SessionProvider>
        <ProductProvider>
          <ReviewProvider>
            {children}
          </ReviewProvider>
        </ProductProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}
