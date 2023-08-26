import React from "react";
import content from "./data/content";
import { Container, Row, Col } from "react-bootstrap";

const VisionAndMission = () => {
  return (
    <>
      <Container className="py-5 mt-8 w-75 mx-auto border bg-light rounded-5 shadow-lg">
        <h5 className="mb-4 text-center">VİZYONUMUZ, MİSYONUMUZ VE AMACIMIZ</h5>
        {content.map((info, idx) => (
          <Row key={idx} className="mt-3">
            <Col xs={12} md={10} className="mx-auto fs-6 lh-lg">
              <strong>{info.title}</strong> {info.paragraph}
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default VisionAndMission;
