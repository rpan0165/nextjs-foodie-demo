'use client'
import '../styles/circularsections.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

function CircularSection() {

  const circles1 = [
    {
      id: 1,
      image: 'https://foodie.sysco.com/wp-content/uploads/2020/06/Circle-Images-for-Foodie-1.png',
      text: 'Tips & Trends',
      link: '/circle1',
    },
    {
      id: 2,
      image: 'https://foodie.sysco.com/wp-content/uploads/2020/06/sysco-brands.jpg',
      text: 'Sysco Brands',
      link: '/circle1',
    },
    {
      id: 3,
      image: 'https://foodie.sysco.com/wp-content/uploads/2022/09/CES-Fall_2022-Digital-Banners_3383554_300x415-1-edited.jpg',
      text: 'Cutting Edge Solutions',
      link: '/circle1',
    },
    {
      id: 4,
      image: 'https://foodie.sysco.com/wp-content/uploads/2020/06/FoodieLive-Homepage-Bubble.png',
      text: 'Sysco Exclusive Webinars',
      link: '/circle1',
    },
    {
      id: 5,
      image: 'https://foodie.sysco.com/wp-content/uploads/2020/06/customer-testimonials.jpg',
      text: 'Testimonials',
      link: '/circle1',
    },
    {
      id: 6,
      image: '	https://foodie.sysco.com/wp-content/uploads/2020/06/Recipes.png',
      text: 'Recipes',
      link: '/circle1',
    },
    {
      id: 7,
      image: 'https://foodie.sysco.com/wp-content/uploads/2020/09/300x300-1.png',
      text: 'Foodie Solutions',
      link: '/circle1',
    },
    {
      id: 8,
      image: 'https://foodie.sysco.com/wp-content/uploads/2020/06/Virtual-Restaurant.png',
      text: 'Virtual Restaurants',
      link: '/circle1',
    },
    {
      id: 9,
      image: 'https://foodie.sysco.com/wp-content/uploads/2020/06/Send-Us-a-Story.png',
      text: 'Send Us A Story',
      link: '/circle1',
    },
    {
      id: 10,
      image: 'https://foodie.sysco.com/wp-content/uploads/2020/06/Become-a-Customer.png',
      text: 'Become A Customer',
      link: '/circle1',
    },
    // Add more circle objects here as needed
  ];


  return (
    <>
      <h2 className="heading-circles text-4xl font-bold" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Great Ways To Explore Sysco Foodie</h2>
      <br />
      <br />

      <Container fluid className=''>
        <Row className="justify-content-md-center mx-10 ">
          {
            circles1.map(circle => (
              <Col sm md="2" className='p-3'>
                <Link href={circle.link} >
                  <img className='circle-image mt-3 p-3' src={circle.image}></img>
                  <h3 className='text-center mt-3 font-bold text-lg circle-text'>{circle.text}</h3>
                </Link>
              </Col>
            ))
          }

        </Row>
      </Container>
    </>
  );
}

export default CircularSection;