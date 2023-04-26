import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const MagazineSection = (magazineContent) => {

  const magazines = magazineContent.props.magazine_section.category;

  return (
    <section className="section-magazine" >
      <div className="container mx-auto mb-16">
        <div className="flex flex-row justify-between mt-16 mb-2">
          <h3 className="text-left font-bold text-4xl font-serif">The Latest Edition of Foodie Magazine</h3>
          <Link href="#" className=''>
            <h4 className='text-sky-600 font-bold text-lg'>More From This Issue</h4>
          </Link>
        </div>
        <div className='grid grid-cols-2 grid-flow-col mx-auto sm:grid-flow-row mt-4 mb-44' style={{}}>
          <div className='col-span-1 '>
            <div className="parent relative">
              <Image className="image1 absolute top-48 md:top-56 lg:top-32 xl:top-16 left-0 md:left-12 lg:left-18 xl:left-32 shadow w-full sm:w-2/3 2xl:w-3/5" src={magazineContent.props.magazine_section.main_image.url} width={390} height={467} style={{transform:"rotate(-20deg)"}}/>
              <Image className="image2 absolute top-48 md:top-56 lg:top-32 xl:top-16 left-0 md:left-12 lg:left-18 xl:left-32 shadow w-full sm:w-2/3 2xl:w-3/5" src={magazineContent.props.magazine_section.main_image.url} width={390} height={467} style={{transform:"rotate(-10deg)"}}/>
              <Image className="image3 absolute top-48 md:top-56 lg:top-32 xl:top-16 left-0 md:left-12 lg:left-18 xl:left-32 shadow w-full sm:w-2/3 2xl:w-3/5" src={magazineContent.props.magazine_section.main_image.url} width={390} height={467} />
            </div>
          </div>
          <div className='col-span-1 bg-sky-50 p-3 rounded-xl mt-16'>
            <h3 className='font-bold'>IN THIS EDITION:</h3>
            <div className='flex flex-col '>
              <div className='flex flex-row'>
                <div className='basis-1/4 p-2 m-2'>
                  <Image className='rounded-lg w-28 h-28' src={magazines[0].image.url} width={100} height={100} />
                </div>
                <div className='basis-3/4 p-2'>
                  <h4 className="font-bold text-xl mt-2 font-serif">Catering Craze</h4>
                  <p className="mt-2 text-lg">Find inspiration from these key catering foods to prepare for larger events this summer.</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/4 p-2 m-2'>
                  <Image className='rounded-lg w-28 h-28' src={magazines[1].image.url} width={100} height={100} />
                </div>
                <div className='basis-3/4 p-2'>
                  <h4 className="font-bold text-xl mt-2 font-serif">Wings and a Paper</h4>
                  <p className="mt-2 text-lg">Staple local food and drink brings fresh take on pizza and wings to neighborhood sports bar for all.</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/4 p-2 m-2'>
                  <Image className='rounded-lg w-28 h-28' src={magazines[2].image.url} width={100} height={100} />
                </div>
                <div className='basis-3/4 p-2'>
                  <h4 className="font-bold text-xl mt-2 font-serif">Bridging the Digital Divide</h4> 
                  <p className="mt-2 text-lg">In the rapidly growing era of digital marketing, learn how to create a cohesive image between physical and digital presence for your restaurant.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  )
}

export default MagazineSection