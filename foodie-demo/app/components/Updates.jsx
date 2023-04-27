'use client'
import React from 'react';

function Updates(cardContent) {

    const cards = cardContent.props.card_section.card_section;

    return (
        <section className="section-update mb-5">
            <div class="container-fluid mx-auto">
                {/* title + subtitle */}
                <h2 className="text-center font-bold mt-5 mb-2 lg:text-4xl sm:text-2xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Foodservice Update</h2>
                <p className="text-center pb-2 lg:text-lg sm:text-sm" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Stay informed of current supply and demand changes in the market</p>
                <br></br>
                <div className='grid lg:grid-cols-4 mr-5 mb-5 mx-auto md:grid-cols-2 sm:grid-cols-1' style={{ width: "85%" }}>
                {
                  cards.map(card => (
                    <div className='flex flex-col border-2 rounded-lg flex-wrap' style={{ margin: "12px", backgroundColor: "#FFF9F0" }}>
                      <div className="bg-cover" style={{ width: "100%", height: "17.5rem", backgroundColor: "yellow", backgroundImage: `url(${card.image.url})` }}></div>
                      <div className='p-4' style={{ }}>
                        <h5 className='text-sm text-sky-500 font-bold mb-2'>{card.link1.title}</h5>
                        <h3 className='pt-0 font-bold lg:text-lg md:text-sm sm:text-sm' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{card.link2.title}</h3>
                      </div>  
                    </div>
                  ))
                }
                </div>
            </div>
        </section >
    );
}

export default Updates
