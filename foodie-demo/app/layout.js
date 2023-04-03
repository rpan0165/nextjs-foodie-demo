import './globals.css'
import Header from './components/Header'
import Head from 'next/head'
import TopNav from './components/TopNav'

export const metadata = {
  title: 'Sysco-Foodie',
  description: 'Foodie on contentstack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        {children}
      </body>
    

    </html>
  )
}
