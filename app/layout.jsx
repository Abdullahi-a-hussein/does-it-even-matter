import NavBar from '../components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Does it even matter',
  description: 'the nuances of human behavior, social science, social media dynamics, and the intriguing realm of decision-making',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-5xl mx-auto px-4`}>
      <NavBar />
      {children}
      </body>
    </html>
  )
}
