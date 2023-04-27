import Header from './components/Header'
import Footer from './components/Footer'
import Head from 'next/head'
import TopNav from './components/TopNav'
import { Providers } from './redux/provider'
import Navigation from './components/Navigation'
import HeaderNavBar from './components/HeaderNavBar'
import FooterTop from './components/FooterTop'
import './globals.css'


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
            <HeaderNavBar />
              {children}
              {/* <FooterTop/> */}
            <Footer/>
          </Providers>
        </body>
    </html>
  )
}
