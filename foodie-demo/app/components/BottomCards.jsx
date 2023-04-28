'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


function BottomCards() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
  
      const fetchCards = async () => {
        setLoading(true);
        const res = await axios.get('https://cdn.contentstack.io/v3/content_types/foodie_bottomcards/entries?environment=development',
          {
            headers: {
              'api_key': 'blt16b29db83ad01635',
              'access_token': 'cse3066d807437d70a5cc6bee6',
              'Content-Type': 'application/json',
            }
          }
        );
  
        setCards(res.data.entries[0].card);
        setLoading(false);
      };
  
      fetchCards();
      console.log("fetched")
  
    }, []);
  
    return loading && cards.length == 0 ? (
      <div className="spinner-UI">
        <div className="spinner-container">
          <div className="loading-spinner">
          </div>
        </div>
      </div>
    ) : (
      <section className="section-bottom-cards mt-5" >
        <div className="grid grid-cols-12 gap-4 grid-flow-row sm:grid-flow-col justify-center mt-5" style={{width:"85%", margin:"0 auto", marginBottom:"5rem"}}>
            <div className=' col-span-6 flex flex-row border-2 border-orange-200 rounded-xl' style={{ margin: "12px", backgroundColor: "#FFF9F0" }}>
                <div className='bg-cover' style={{ width: "50%", borderRadius: "10px 0 0 10px", height: "21rem", backgroundColor: "yellow", backgroundImage: `url(${cards[0].image.url})`}}>
                </div>
                <div className='p-3 overflow-auto' style={{width:"50%", height: "21rem", }}>
                    <h3 href={cards[0].link.href} className='font-bold text-lg text-black' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", marginTop:"45%"}}>{cards[0].link.title}</h3>
                </div>
            </div>

            <div className='col-span-6 flex flex-row border-2 border-orange-200 rounded-xl' style={{ margin: "12px", backgroundColor: "#FFF9F0" }}>
                <div className='bg-cover' style={{ width: "50%", borderRadius: "10px 0 0 10px", height: "21rem", backgroundColor: "yellow", backgroundImage: `url(${cards[1].image.url})` }}>
                </div>
                <div className='p-3 overflow-auto' style={{width:"50%", height: "21rem" }}>
                    <h3 href={cards[1].link.href} className='font-bold text-lg text-black' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", marginTop:"45%" }}>{cards[1].link.title}</h3>
                </div>
            </div>
          </div>
      </section>
    )
}

export default BottomCards