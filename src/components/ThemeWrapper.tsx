'use client'

import { useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { setDarkMode } = useTheme()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    } else {
      document.documentElement.classList.toggle('dark', prefersDark)
      setDarkMode(prefersDark)
    }
  }, [setDarkMode])

  return <>{children}</>
}