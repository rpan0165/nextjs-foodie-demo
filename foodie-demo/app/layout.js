import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Head from 'next/head'
import TopNav from './components/TopNav'
import { Providers } from './redux/provider'
import Navigation from './components/Navigation'

export const metadata = {
  title: 'Sysco-Foodie',
  description: 'Foodie on contentstack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
        <body>
        <Providers>
          <Navigation/>
            {children}
          <Footer/>
        </Providers>
        </body>
    </html>
  )
}
