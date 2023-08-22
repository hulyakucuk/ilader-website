import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Education2021To2022Info from "./data/Education2021To2022Info";
import renderDescription from "./data/RenderDescription";

const Education2021To2022 = () => {


  return (
    <Container className="mt-5 py-5 w-75 mx-auto">
      <Row className="border mt-5">
        <h6 className="py-3">
          <strong>
            EYLÜL 2021-AĞUSTOS 2022 TARİHLERİ ARASINDAKİ FAALİYETLER
          </strong>
        </h6>
      </Row>

      {Education2021To2022Info.map((info, index) => (
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

export default Education2021To2022;
