import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardContents from './CardContents';
import './gallery.css';

const Gallery = () => {
  return (
    <div  className='mt-5 pt-5'>
    <h2 className='bg-blue py-3 text-white text-center py-3'>Galeri</h2>
    <Row xs={1} md={3} lg={4} className="g-4">
    {CardContents.map((content, idx) => (
          <Col key={idx}>
            <Card variant="w-auto">
              <Card.Img  variant="top img-auto img-fluid" src={content.image} />
              <Card.Body>
              <Card.Text  className="fixed-card-text p-2">
                {CardContents[idx].text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default Gallery;
