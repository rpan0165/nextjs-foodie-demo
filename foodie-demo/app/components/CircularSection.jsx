'use client'
import '../styles/circularsections.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

function CircularSection(tilesContent) {
  
  const tiles = tilesContent.props.tile_section.tiles;
  
  return (
    <>
      <h2 className="heading-circles text-4xl font-bold" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Great Ways To Explore Sysco Foodie</h2>
      <br />
      <br />

      <Container className='max-w-8xl '>
        <Row className="justify-content-md-center ">
          {
            tiles.map(tile => (
              <Col sm md="2" className='p-3'>
                <Link href={tile.link.href} >
                  <img className='circle-image mt-3 p-3' src={tile.image.url}></img>
                  <h3 className='text-center mt-3 font-bold text-lg circle-text'>{tile.link.title}</h3>
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