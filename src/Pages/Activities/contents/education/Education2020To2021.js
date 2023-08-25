import React from "react";
import Education2020To2021Info from "./data/Education2020To2021Info";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import renderDescription from "./data/RenderDescription";

const Education2020To2021 = () => {


  return (
    <Container className="w-100 mx-auto">
    <Row className="border mt-5">
      <h6 className="py-3">
        <strong>
        HAZİRAN 2020 - AĞUSTOS 2021 TARİHLERİ ARASINDAKİ FAALİYETLER </strong>
      </h6>
    </Row>

    {Education2020To2021Info.map((info, index) => (
      <Row key={index} className="border py-3">
        <Col sm={12} md={3} className="text-start">
          <span className="sub-heading">{info.name}</span>
        </Col>
        <Col sm={12} md={9}>
          {renderDescription(info.description)}
        </Col>
      </Row>
    ))}
  </Container>
  );
};

export default Education2020To2021;
