'use client'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Updates() {

    const posts = [
        {
            id: 1,
            title: 'Market Corner',
            subtitle: 'OPERATIONS & RESOURCES',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2020/12/Market-Corner-Image-300x415-1.jpg',
        },
        {
            id: 1,
            title: 'Inflation Buster',
            subtitle: 'FOOD SERVICE UPDATE',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/06/Inflation-Busters-300x415-with-title-and-border.png',
        },
        {
            id: 1,
            title: 'Recipes and Resources',
            subtitle: 'AMERICAN RESTAURANT',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2022/08/Untitled-design-61.png',
        },
        {
            id: 1,
            title: 'Hinded Foam Containers',
            subtitle: 'FOOD SERVICE UPDATE',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',

            imageUrl:
                'https://foodie.sysco.com/wp-content/uploads/2021/05/Foam-Containers-300x415-with-title-and-border-1.png',
        },
        // More posts...
    ];


    return (
        <div>
            <div class="container-fluid">
                <h2 className="text-center font-bold text-4xl" style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>Foodservice Update</h2>
                <p className="text-center pb-2" style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize:"1.3rem"}}>Stay informed of current supply and demand changes in the market</p>
                <div class="h_line mt-0 mb-4 pt-0 " style={{ color: "red", borderBottom: "5px solid #56B146",
                width: "10rem", 
    margin: "auto", }}></div>
            {/* <div className='green-line text-center pb-3 content-center text-green-500'><hr width="20%" ></hr></div> */}

            <div class="row mr-5 ml-5 pr-8 pl-8">
                {
                    posts.map(post => (
                        <div class="col">
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={post.imageUrl} />
                                <Card.Body>
                                    <Card.Title className="text-sm text-center text-sky-500">{post.subtitle}</Card.Title>
                                    <Card.Text className="text-center pt-0 font-bold">
                                        {post.title}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
        </div >
    );
}

export default Updates
