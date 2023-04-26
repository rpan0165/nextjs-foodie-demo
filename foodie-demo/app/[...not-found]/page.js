// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <div className='text-center' style={{marginTop:"7%", marginBottom:"4%"}}>
      <h1 className='font-bold text-4xl text-sky-600 mb-3'>404</h1>
      <h2 className='font-bold text-2xl mb-4'>This page could not be found.</h2>
      <Link href="/" className='mt-5 text-sky-600 hover:font-bold' style={{textDecoration:"none"}}>
        Go back home
      </Link>
    </div>
  </>
}