'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkModeOn = document.documentElement.classList.contains('dark');
    setIsDark(darkModeOn);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newMode = isDark ? 'light' : 'dark';

    root.classList.toggle('dark', newMode === 'dark');
    setIsDark(!isDark);
    localStorage.setItem('theme', newMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-xl px-3 py-2 rounded-full bg-accent text-white hover:bg-secondary transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
