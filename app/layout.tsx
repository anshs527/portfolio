// app/layout.tsx
import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from './contexts/ThemeContext'

const bodyFont = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const codeFont = JetBrains_Mono({ subsets: ['latin'], variable: '--font-code', display: 'swap' })

export const metadata = {
  title: 'Ansh Shah - Portfolio',
  description: 'Trading Technology Research Assistant at the UIUC Financial Technology Lab, building ML and systems software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${codeFont.variable}`}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
