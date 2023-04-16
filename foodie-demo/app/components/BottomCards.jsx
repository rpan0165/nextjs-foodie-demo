import React from 'react'


function BottomCards(spotlightContent) {

  const cards = spotlightContent.props.footer_spotlight_section.spotlight_container;
  console.log("spotlight: ",spotlightContent)

  return (
    <div>
      <div className='flex flex-row justify-center py-5 mx-auto max-w-7xl'>
        <section className='flex flex-col flex-wrap mx-3 basis-1/2 bg-gray-100'>
            <img src={cards[0].image.url} alt="" />
          <h1 className=' text-3xl font-bold py-4 px-4 mx-2 text-center' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{cards[0].link.title}</h1>
        </section>
        <section className='flex flex-col flex-wrap mx-3 basis-1/2 bg-gray-100'>
            <img src={cards[1].image.url} alt="" />
            <h1 className=' text-3xl font-bold py-4 px-4 mx-2 text-center ' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{cards[1].link.title}</h1>
        </section>
      </div>
    </div>
  )
}

export default BottomCards
