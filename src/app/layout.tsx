import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import ThemeWrapper from '../components/ThemeWrapper'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Handcrafted Haven',
  description: 'Discover and sell unique handmade products.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-primary transition-colors duration-300`}>
        <Providers>
          <ThemeWrapper>
            <Navbar />
            <main className="min-h-[calc(100vh-160px)]">{children}</main>
            <Footer />
          </ThemeWrapper>
        </Providers>
      </body>
    </html>
  )
}
