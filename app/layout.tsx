// app/layout.tsx
import './globals.css'
import { Nunito_Sans, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from './contexts/ThemeContext'

const bodyFont = Nunito_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
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
    <html lang="en" className={`light ${bodyFont.variable} ${codeFont.variable}`}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
