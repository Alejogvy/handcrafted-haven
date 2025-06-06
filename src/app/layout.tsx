import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import ThemeWrapper from '@/components/ThemeWrapper'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}