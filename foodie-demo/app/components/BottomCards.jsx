import React from 'react'


function BottomCards() {
  return (
    <div>
      <div className='flex flex-row justify-center py-5 mx-auto max-w-7xl'>
        <section className='flex flex-col flex-wrap mx-3 basis-1/2 bg-gray-100'>
            <img src="https://foodie.sysco.com/wp-content/uploads/2023/02/Plant-Based-Campaign-Banner-Foodie-3907536-Corporate.jpg" alt="" />
            <h1 className=' text-3xl font-bold py-4 px-4 mx-2 text-center' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Opportunities with Plant-Based Options</h1>
        </section>
        <section className='flex flex-col flex-wrap mx-3 basis-1/2 bg-gray-100'>
            <img src="https://foodie.sysco.com/wp-content/uploads/2023/04/MicrosoftTeams-image-197.jpg" alt="" />
            <h1 className=' text-3xl font-bold py-4 px-4 mx-2 text-center ' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Mother's Day Menu Ideas</h1>
        </section>
      </div>
    </div>
  )
}

export default BottomCards
