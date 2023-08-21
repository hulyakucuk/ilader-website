import React from "react";
import EducatorsData from "./data/EducatorsData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Educators = () => {
  return (
    <>
      <Container className="py-5 mt-5 text-center w-75">
        <h2 className="bg-blue py-3 text-white">Hocalarımız</h2>
        <Row className="text-center p-3 border align-items-center">
          <Col md={1} lg={1}></Col>
          <Col md={3}>
            <strong>HOCA ADI </strong>
          </Col>
          <Col md={2}>
            <strong>ÜNVANI</strong>
          </Col>
          <Col md={3}>
            <strong>ÇALIŞTIĞI KURUM</strong>
          </Col>
          <Col md={3}>
            <strong>ALANI</strong>
          </Col>
        </Row>

        {EducatorsData.map((item, index) => (
          <Row key={index} className="border p-3">
            <Col md={1} lg={1}>
              {item.id}
            </Col>
            <Col md={3}>{item.name}</Col>
            <Col md={2}>{item.title}</Col>
            <Col md={3}>{item.organization}</Col>
            <Col md={3}>{item.workarea}</Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Educators;
