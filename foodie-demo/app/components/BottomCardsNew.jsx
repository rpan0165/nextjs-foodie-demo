import React from 'react'

function BottomCardsNew() {
    return (
        <div className="grid grid-cols-12 grid-flow-row sm:grid-flow-col justify-center mt-5" style={{width:"85%", margin:"0 auto", marginBottom:"5rem"}}>
            <div className=' col-span-6 flex flex-row border-2 border-orange-200 rounded-xl' style={{ margin: "12px", backgroundColor: "#FFF9F0" }}>
                
                <div style={{ width: "50%", borderRadius: "10px 0 0 10px", height: "21rem", backgroundColor: "yellow", backgroundImage: "url('https://foodie.sysco.com/wp-content/uploads/2023/02/Plant-Based-Campaign-Banner-Foodie-3907536-Corporate.jpg')" }}>
                </div>
                <div className='p-3 text-center overflow-auto' style={{width:"50%", height: "21rem", }}>

                    <h3 className='font-bold text-lg text-black' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", marginTop:"45%"}}>Opportunities with Plant-based Options</h3>

                </div>


            </div>

            <div className='col-span-6 flex flex-row border-2 border-orange-200 rounded-xl' style={{ margin: "12px", backgroundColor: "#FFF9F0" }}>
              
                <div style={{ width: "50%", borderRadius: "10px 0 0 10px", height: "21rem", backgroundColor: "yellow", backgroundImage: "url('https://foodie.sysco.com/wp-content/uploads/2023/04/MicrosoftTeams-image-197.jpg')" }}>
                </div>
                <div className='p-3 text-center overflow-auto' style={{width:"50%", height: "21rem" }}>

                    <h3 className='font-bold text-lg text-black' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", marginTop:"45%" }}>Mother's Day Menu Ideas</h3>

                </div>


            </div>
        </div>
    )
}

export default BottomCardsNew
