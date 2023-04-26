import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const MagazineSection = (magazineContent) => {

  const magazines = magazineContent.props.magazine_section.category;

  return (
    <section className="section-magazine" >
      <hr className='text-gray-300' />
      <br />
      <div className='mx-auto mb-5' style={{ width: "80%" }}>

        <div className="flex flex-row justify-between mt-5 mb-5">
          <h3 className="text-left font-bold text-3xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>The Latest Edition of Foodie Magazine</h3>
          <Link href="https://foodie.sysco.com/foodie_magazines/edition-30/" className=''>
            <h4 className='text-sky-600 font-bold text-sm pt-1'>More From This Issue</h4>
          </Link>
        </div>

        <div className='grid grid-cols-2 grid-flow-col mx-auto sm:grid-flow-row mt-4' style={{}}>
          <div className='col-span-1 '>
            <div className="parent relative">
              <Image className='image1 absolute top-16 left-28' src={magazineContent.props.magazine_section.main_image.url} width={300} height={300} style={{transform:"rotate(-20deg)"}}/>
              <Image className='image2 absolute top-16 left-28' src={magazineContent.props.magazine_section.main_image.url} width={300} height={300} style={{transform:"rotate(-10deg)"}}/>
              <Image className='image3 absolute top-16 left-28' src={magazineContent.props.magazine_section.main_image.url} width={300} height={300} />


            </div>
          </div>
          <div className='col-span-1 bg-sky-50 p-3 rounded-xl'>

            <h3 className='font-bold'>IN THIS EDITION:</h3>
            <div className='flex flex-col '>
              <div className='flex flex-row'>
                <div className='basis-1/4 p-2 m-2'>
                  <Image className='rounded-lg' src={magazines[0].image.url} width={150} height={150} />
                </div>
                <div className='basis-3/4 p-2'>
                  <h4 className='font-bold text-lg mt-2' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Catering Craze</h4>
                  <p className='mt-2 text-sm'>Find inspiration from these key catering foods to prepare for larger events this summer.</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/4 p-2 m-2'>
        
                  <Image className='rounded-lg' src={magazines[1].image.url} width={150} height={150} />
                </div>
                <div className='basis-3/4 p-2'>
                  <h4 className='font-bold text-lg mt-2' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Wings and a Paper</h4>
                  <p className='mt-2 text-sm'>Staple local food and drink brings fresh take on pizza and wings to neighborhood sports bar for all.</p>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/4 p-2 m-2'>
    
                  <Image className='rounded-lg' src={magazines[2].image.url} width={150} height={150} />
                </div>
                <div className='basis-3/4 p-2'>
                  <h4 className='font-bold text-lg mt-2' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Bridging the Digital Divide</h4> 
                  <p className='mt-2 text-sm'>In the rapidly growing era of digital marketing, learn how to create a cohesive image between physical and digital presence for your restaurant.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MagazineSection