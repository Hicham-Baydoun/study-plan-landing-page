import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Study Plan Assistant',
  description: 'Revolutionize your learning with personalized AI guidance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <footer className="bg-primary text-white p-4 text-center">
          <p>&copy; 2024 AI Study Plan Assistant. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}