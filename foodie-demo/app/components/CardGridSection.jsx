'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/cardgridsection.css';
import { FaInstagram } from 'react-icons/fa';

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
        <section className="section-card-grid mb-4">
            <hr className='text-gray-300'/>
            <h2 className="text-center font-bold text-4xl py-2 mt-5" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{cardGridContent.props.insta_section.header}</h2>
            <p className="text-center py-3" style={{ fontSize: "1.3rem" }}>{cardGridContent.props.insta_section.description}</p>
            <span className="flex items-center justify-center text-center text-lg">
                <span className="text-red-600 text-2xl mr-2">&#9673;</span>
                <span className='font-bold text-sm'>LIVE</span>
                <span className="ml-2">Real-time updates and fresh content | 
                <a href="https://www.instagram.com/syscofoodie/" className="no-hover-effect"><FaInstagram className='inline-block mx-2' style={{height:'2em'}} /></a>
                <a href="https://www.instagram.com/syscofoodie/" className="no-hover-effect">#syscofoodie</a>
                </span>
            </span>
            <br></br>
            <div className='flex flex-col items-center'>
                <div className="card-grid mt-3" >
                {photos.slice(0, numRows * 3).map((photo) => (
                    <Card key={photo.id} id={photo.id} url={photo.images.url}  />
                ))}
                </div>
                {numRows * 3 < photos.length && (
                    <button 
                        onClick={() => setNumRows(numRows + 4)} 
                        className='block mx-auto btn-grad px-3 py-3 font-bold rounded-md mb-5 mt-5' style={{marginTop:'2rem', width: '25rem'}}>Load More
                    </button>
                )}
            </div>
        </section>
    );
};
export default CardGridSection;
