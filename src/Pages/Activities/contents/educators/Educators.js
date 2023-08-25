import React from "react";
import EducatorsData from "./data/EducatorsData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Educators = () => {
  return (
    <>
      <Container className="text-center w-100 mx-auto mt-5">
        <Row className=" text-md-start py-3 border align-items-center mx-auto">
          <Col md={3}>
            <strong>HOCA ADI </strong>
          </Col>
          <Col md={3}>
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
          <Row key={index} className="border text-md-start py-3 mx-auto ">
            <Col md={3}>{item.name}</Col>
            <Col md={3}>{item.title}</Col>
            <Col md={3}>{item.organization}</Col>
            <Col md={3}>{item.workarea}</Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Educators;
