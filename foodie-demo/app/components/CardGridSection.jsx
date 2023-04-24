'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/cardgridsection.css';
// import { GoSearch } from 'react-icons/go';
// import { FaRegDotCircle } from 'react-icons/fa';
// import { AiOutlineInstagram } from 'react-icons/io5';


// const images = [
//     { id: 1, url: 'https://via.placeholder.com/150' },
//     { id: 2, url: 'https://via.placeholder.com/150' },
//     { id: 3, url: 'https://via.placeholder.com/150' },
//     { id: 4, url: 'https://via.placeholder.com/150' },
//     { id: 5, url: 'https://via.placeholder.com/150' },
//     { id: 6, url: 'https://via.placeholder.com/150' },
//     { id: 7, url: 'https://via.placeholder.com/150' },
//     { id: 8, url: 'https://via.placeholder.com/150' },
//     { id: 9, url: 'https://via.placeholder.com/150' },
//     { id: 10, url: 'https://via.placeholder.com/150' },
//     { id: 11, url: 'https://via.placeholder.com/150' },
//     { id: 12, url: 'https://via.placeholder.com/150' },
//     { id: 13, url: 'https://via.placeholder.com/150' },
//     { id: 14, url: 'https://via.placeholder.com/150' },
//     { id: 15, url: 'https://via.placeholder.com/150' },
//     { id: 16, url: 'https://via.placeholder.com/150' },
//     { id: 17, url: 'https://via.placeholder.com/150' },
//     { id: 18, url: 'https://via.placeholder.com/150' },
// ];

const Card = ({ id, url }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="card" style={{ width: '400px', height: '400px', objectFit: 'cover' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={url} alt={`Image ${id}`} />
            {hovered && <span className="view"> 
             View
            </span>}
        </div>
    );
};

const CardGridSection = (cardGridContent) => {

    const photos = cardGridContent.props.insta_section.insta_photos;
    console.log("photos: ", photos)
    const [numRows, setNumRows] = useState(2);

    return (
        <>
            <h2 className="text-center font-bold text-4xl py-2 mt-3" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Connect With @SyscoFoodie</h2>
            <p className="text-center py-3" style={{ fontSize: "1.3rem" }}>Follow us on Instagram to see the relevant information regarding Sysco's latest resources for restaurant operators.</p>
            {/* <div class="h_line mt-0 mb-4 pt-0 " style={{
                color: "red", borderBottom: "5px solid #56B146",
                width: "10rem",
                margin: "auto",
            }}></div> */}
            <span>
                <p className="text-center text-lg"> 
                <span>
                </span> LIVE
                    Real-time updates and fresh content |<span>  </span> 
                    #syscofoodie
                    </p>
            </span>
            <div className="card-grid mt-3" style={{ margin: "1rem 21rem"}}>

                {photos.slice(0, numRows * 3).map((photo) => (
                    <Card key={photo.id} id={photo.id} url={photo.images.url}  />
                ))}
                {/* {numRows * 3 < photos.length && (
                    <button onClick={() => setNumRows(numRows + 4)} className='block mx-auto bg-green-400 px-4 py-2 font-bold rounded-sm hover:bg-green-500'>Load More</button>
                )} */}
            </div>
        </>
    );
};
export default CardGridSection;