import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LessonsInfo from "./data/LessonsInfo";

const Lessons = () => {
  return (
    <>
      <Container className="py-5 mt-5 text-center w-75">
        <h2 className="bg-blue py-3 text-white">Derslerimiz</h2>
        <Row className="text-start p-3 border align-items-center">
          <Col md={1} lg={1}></Col>
          <Col md={3}>
            <strong>DERS (SEMİNER)</strong>
          </Col>
          <Col md={8}>
            <strong>HEDEF</strong>
          </Col>
        </Row>
        {LessonsInfo.map((lesson) => (
          <Row
            key={lesson.id}
            className="text-start p-3 border align-items-center"
          >
            <Col md={1} lg={1} className=" text-center ">
              {lesson.id}
            </Col>
            <Col md={3}>
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
