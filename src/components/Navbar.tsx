'use client'

import { useTheme } from '@/context/ThemeContext'

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-800">
      {/* Your Navbar content */}
      <button 
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {darkMode ? (
          <span>🌙 Modo Oscuro</span>
        ) : (
          <span>☀️ Modo Claro</span>
        )}
      </button>
    </nav>
  )
}