import React from 'react'

const MagazineSection = (magazineContent) => {

  const magazines = magazineContent.props.magazine_section.category;

  return (
    <div className='grid grid-cols-2' style={{ backgroundColor: "#2A2F33" }}>
      <div className='col-span-1'>
        <h1 className='text-white'>Column 1</h1>
        <h3 className="text-left text-white font-bold text-md" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>The Latest Edition of Foodie</h3>
                <div class="h_line mt-0 mb-4 pt-2 " style={{
                    color: "red", borderBottom: "5px solid #56B146",
                    width: "10rem",
                }}></div>
           <h2 className="text-left text-white font-bold text-md" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>The Latest Edition of Foodie</h2>
                <div class="h_line mt-0 mb-4 pt-2 " style={{
                    color: "red", borderBottom: "5px solid #56B146",
                    width: "10rem", margin: "auto",
                }}></div>
      </div>
      <div className='col-span-1'>
        <h1 className='text-white'>Column 2</h1>
      </div>
    </div>
  )
}

export default MagazineSection