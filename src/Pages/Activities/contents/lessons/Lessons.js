import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LessonsInfo from "./data/LessonsInfo";

const Lessons = () => {
  return (
    <>
      <Container className="text-center w-100 mx-auto mt-5">
        <Row className="text-start py-3 border align-items-center mx-auto">
          <Col md={4}>
            <strong>DERS (SEMİNER)</strong>
          </Col>
          <Col md={8}>
            <strong>HEDEF</strong>
          </Col>
        </Row>
        {LessonsInfo.map((lesson) => (
          <Row
            key={lesson.id}
            className="text-start py-3 border align-items-center mx-auto"
          >
        
            <Col md={4}>
              {lesson.name}
            </Col>
            <Col md={8} >
              {lesson.objective}
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Lessons;
