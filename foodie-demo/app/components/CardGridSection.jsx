'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/cardgridsection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faInstagram } from "@fortawesome/free-solid-svg-icons";


const images = [
    { id: 1, url: 'https://via.placeholder.com/150' },
    { id: 2, url: 'https://via.placeholder.com/150' },
    { id: 3, url: 'https://via.placeholder.com/150' },
    { id: 4, url: 'https://via.placeholder.com/150' },
    { id: 5, url: 'https://via.placeholder.com/150' },
    { id: 6, url: 'https://via.placeholder.com/150' },
    { id: 7, url: 'https://via.placeholder.com/150' },
    { id: 8, url: 'https://via.placeholder.com/150' },
    { id: 9, url: 'https://via.placeholder.com/150' },
    { id: 10, url: 'https://via.placeholder.com/150' },
    { id: 11, url: 'https://via.placeholder.com/150' },
    { id: 12, url: 'https://via.placeholder.com/150' },
];

const Card = ({ id, url }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={url} alt={`Image ${id}`} />
            {hovered && <span className="view"> <FontAwesomeIcon icon={faSearch} /> View</span>}
        </div>
    );
};

const CardGridSection = () => {
    const [numRows, setNumRows] = useState(4);

    return (
        <>
            <h2 className="text-center font-bold text-4xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Connect With @SyscoFoodie</h2>
            <p className="text-center pb-2" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "1.3rem" }}>Follow us on Instagram to see the relevant information regarding Sysco's latest resources for restaurant operators.</p>
            <div class="h_line mt-0 mb-4 pt-0 " style={{
                color: "red", borderBottom: "5px solid #56B146",
                width: "10rem",
                margin: "auto",
            }}></div>
            <span>
                <p className="text-center text-lg">LIVE
                    Real-time updates and fresh content | </p>
            </span>
            <div className="card-grid">

                {images.slice(0, numRows * 3).map((image) => (
                    <Card key={image.id} id={image.id} url={image.url} />
                ))}
                {numRows * 3 < images.length && (
                    <button onClick={() => setNumRows(numRows + 4)}>Load More</button>
                )}
            </div>
        </>
    );
};
export default CardGridSection;