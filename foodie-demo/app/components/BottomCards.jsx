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
        <p>loading</p>
      </div>
    ) : (
      <section className="section-bottom-cards" >
        <div className="container">
          <div className="grid grid-cols-12 grid-flow-row sm:grid-flow-col justify-center mt-5 mx-auto mb-12">
            <div className="col-span-6 flex flex-row border-1 border-[#EDE0CC] rounded-xl m-3 h-80 bg-[#FFF9F0] overflow-clip">
                <div className="w-1/2 h-full bg-[#FFF9F0]" style={{backgroundImage: `url(${cards[0].image.url})`}}>
                </div>
                <div className='p-3 overflow-auto w-1/2 h-full flex items-center'>
                    <h3 href={cards[0].link.href} className="font-bold text-lg text-black font-serif">{cards[0].link.title}</h3>
                </div>
              </div>
              
            <div className="col-span-6 flex flex-row border-1 border-[#EDE0CC] rounded-xl m-3 bg-[#FFF9F0] overflow-clip">
              <div className="w-1/2 h-full bg-[#FFF9F0]" style={{backgroundImage: `url(${cards[1].image.url})`}}>
              </div>
              <div className='p-3 overflow-auto w-1/2 h-full flex items-center'>
                  <h3 href={cards[1].link.href} className="font-bold text-lg text-black font-serif">{cards[1].link.title}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default BottomCards