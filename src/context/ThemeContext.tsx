'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type ThemeContextType = {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const toggleTheme = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newMode)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const initialMode = savedTheme 
      ? savedTheme === 'dark' 
      : prefersDark
    
    setDarkMode(initialMode)
    document.documentElement.classList.toggle('dark', initialMode)
  }, [])

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Exporta el hook useTheme
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}