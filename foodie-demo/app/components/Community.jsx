'use client'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/heroslider.css';

// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination]);


function Updates(communityContent) {

    const communityCards = communityContent.props.community_section.slides;

    const posts = [
        {
            id: 1,
            title: 'Mochilero Kitchen',
            subtitle: 'OPERATIONS & RESOURCES',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/09/MochileroKitchenStaff-9-300x415.jpg',
        },
        {
            id: 1,
            title: 'Inflation Buster',
            subtitle: 'FOOD SERVICE UPDATE',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/07/chefpic2-300x415.jpg',
        },
        {
            id: 1,
            title: 'Recipes and Resources',
            subtitle: 'AMERICAN RESTAURANT',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/09/Nourishing-Neighbors-Thumbnail-300x415-1-300x415.png',
        },
        {
            id: 1,
            title: 'Hinded Foam Containers',
            subtitle: 'FOOD SERVICE UPDATE',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/09/Sustaianble-Agriculture-Thumbnail-300x415.png',
        },
        // More posts...
    ];


    return (

        <div>
            <div class="container-fluid">
                <h2 className="text-center font-bold text-4xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Our Community</h2>
                <div class="h_line mt-0 mb-4 pt-2 " style={{
                    color: "red", borderBottom: "5px solid #56B146",
                    width: "10rem", margin: "auto",
                }}></div>
                 <br></br>


                <div class="row mx-auto pr-8 pl-8 pt-3 max-w-7xl">
                    {
                        communityCards.map(communityCard => (
                            <div class="col">
                                <Card style={{ }}>
                                    <Card.Img variant="top" src={communityCard.image.url} />
                                    <Card.Body>
                                        <Card.Title className="text-sm text-center text-sky-500">{communityCard.link[0].title}</Card.Title>
                                        {communityCard.link.length == 2 ? (
                                                <Card.Text className="text-center pt-0 font-bold">
                                                    {communityCard.link[1].title}
                                                </Card.Text>
                                        ) : (
                                                <div></div>
                                            )
                                        }                                        
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
            <br></br> <br></br>
        </div >
    );
}

export default Updates
