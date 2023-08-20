import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardContents from "./HomeGalleryContent";
import "./gallery.css";
import Button from "react-bootstrap/Button";
import Media from "../../Pages/Media";
const Gallery = ({ withLink }) => {
  return (
    <div className="pt-5 center">
      <h2 className="bg-blue text-white text-center py-3">Galeri</h2>
      <Row xs={1} md={2} lg={3} className="g-4 py-5">
        {CardContents.map((content, idx) => (
          <Col key={idx}>
            <Card variant="w-auto" className="content">
              <div className="content-overlay bg-dark"></div>
              <Card.Img variant=" img-auto img-fluid" src={content.image} />
              <Card.Body className="content-details text-white">
                <Card.Text className="fixed-card-text p-2 ">
                  {CardContents[idx].text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center ">
        {withLink && (
          <Button
            className="my-5"
            variant="secondary "
            href="/medya"
            to={<Media />}
          >
            Daha Fazla
          </Button>
        )}
      </div>
    </div>
  );
};

export default Gallery;
