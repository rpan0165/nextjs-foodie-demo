import React from 'react'

const MagazineSection = (magazineContent) => {

  const magazines = magazineContent.props.magazine_section.category;

  return (
    <div style={{ backgroundColor: "#2A2F33" }}>
      <div className='grid grid-cols-2 mx-auto' style={{ backgroundColor: "#2A2F33", width: "70%" }}>
        <div className='col-span-1 ml-5'>
          <br />
          <h3 className="text-left text-white font-bold text-lg" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>The Latest Edition of Foodie</h3>
          <div class="h_line mt-0 mb-4 pt-2 " style={{
            borderBottom: "3px solid #56B146",
            width: "10rem",
          }}></div>
          <h4 className="text-left text-white font-bold text-md">ON THE COVER</h4>
          <h2 className="text-left text-white font-bold text-4xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Foodie Magazine</h2>
          <h4 className="text-left text-white text-xl mt-1" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>People | Products | Platforms</h4>
          <div class="h_line_thin mt-0 mb-4 " style={{
            borderBottom: "3px solid #56B146",
            width: "10rem", height: "2rem"
          }}></div>
          <div>
            
          </div>
        </div>
        <div className='col-span-1'>
          <h1 className='text-white'>Column 2</h1>
        </div>
      </div>
    </div>
  )
}

export default MagazineSection