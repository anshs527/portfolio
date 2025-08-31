// app/layout.tsx
import './globals.css'
import { ThemeProvider } from './contexts/ThemeContext'

export const metadata = {
  title: 'Ansh Shah - Portfolio',
  description: 'Founding Engineer at Storato.io',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}