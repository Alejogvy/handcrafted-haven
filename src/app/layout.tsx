// src/app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import ThemeWrapper from '../components/ThemeWrapper'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Handcrafted Haven',
  description: 'Descubre y vende productos artesanales únicos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-background text-primary transition-colors duration-300`}>
        <Providers>
          <ThemeWrapper>
            <Navbar />
            {children}
          </ThemeWrapper>
        </Providers>
      </body>
    </html>
  )
}
