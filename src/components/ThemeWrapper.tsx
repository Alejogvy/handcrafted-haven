'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  )
}
