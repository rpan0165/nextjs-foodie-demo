import Image from 'next/image'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
// import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Head from 'next/head'
import Link from 'next/link'
import TopNav from './components/TopNav'
import Navigation from './components/Navigation'
import CircularSection from './components/CircularSections'
import Updates from './components/Updates'
import Community from './components/Community'
import Footer from './components/Footer'
import CardGridSection from './components/CardgridSection'
import Solutions from './components/Solutions'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sysco-Foodie</title>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <meta charset="utf-8" />
        <meta name="keywords" content="${content.keywords}" />
        <meta name="description" content="${content.description!'Sysco lives at the heart of food and service. We are passionately committed to the success of every customer, supplier partner, community and associate.'}" />
        <meta name="robots" content="all" />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Link rel="apple-touch-icon" href="assets/images/Sysco-Logo-Color1.png" />
        <Link rel="shortcut icon" href="assets/images/Sysco-Logo-Color1.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <Link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <Link rel="stylesheet" href="assets/css/templatemo.css" />
        <Link rel="stylesheet" href="assets/css/custom.css" />

        {/* Load fonts style after rendering the layout styles */}
        <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap" />
        <Link rel="stylesheet" href="assets/css/fontawesome.min.css" />


        {/* FAVICONS */}

        {/* MOBILE SPECIFIC META */}

        {/* Icons */}
        <script src="https://kit.fontawesome.com/5a65935042.js" crossorigin="anonymous"></script>

        {/* Styles */}

        {/* Scripts */}
        <script type="text/javascript" src="../scripts/contentstack.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
        />

        {/* Cookie Consent */}
      </Head>
      <Header />

      <Navigation/>
      <HeroSlider />
      <br/>      <br/>
      <CircularSection/>
      <br/>      <br/>
    

      <Updates/>
      <br/>      <br/>
      <Solutions/>

      <br/>

      <br/>
      <Community/>

      <br/>
      <br/>
      <CardGridSection/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </>
  )
}
