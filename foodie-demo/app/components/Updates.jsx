'use client'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Updates(cardContent) {

    const cards = cardContent.props.card_section.card_section;

    return (
        <section className="section-update">
            <div class="container-fluid">
                <h2 className="text-center font-bold text-4xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Foodservice Update</h2>
                <p className="text-center pb-2" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: "1.3rem" }}>Stay informed of current supply and demand changes in the market</p>
                <div class="h_line mt-0 mb-4 pt-0 " style={{
                    color: "red", borderBottom: "5px solid #56B146",
                    width: "10rem",
                    margin: "auto",
                }}></div>
                {/* <div className='green-line text-center pb-3 content-center text-green-500'><hr width="20%" ></hr></div> */}

                <div class="row mx-auto pr-8 pl-8 pt-4 max-w-7xl">
                    {
                        cards.map(card => (
                            <div class="col">
                                <Card style={{ backgroundColor: "#FFF9F0"}}>
                                    <Card.Img variant="top" src={card.image.url} />
                                    <Card.Body>
                                        <Card.Title className="text-sm text-center text-sky-500">{card.link[0].title}</Card.Title>
                                        <Card.Text className="text-center pt-0 font-bold">
                                            {card.link[1].title}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section >
    );
}

export default Updates
