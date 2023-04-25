import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Head from 'next/head'
import TopNav from './components/TopNav'
import { Providers } from './redux/provider'
import Navigation from './components/Navigation'
import FooterTop from './components/FooterTop'


// export const metadata = {
//   title: 'Sysco-Foodie',
//   description: 'Foodie on contentstack',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta title='Sysco-Foodie' description='Foodie on contentstack'/>
      </Head>
      <Header />
      <body>
        <Providers>
          <Navigation />
          <div className="container">
            {children}
          </div>
          <FooterTop />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
