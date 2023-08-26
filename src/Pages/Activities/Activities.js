import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Education2020To2021 from "./contents/education/Education2020To2021";
import Education2021To2022 from "./contents/education/Education2021To2022";
import Lessons from "./contents/lessons/Lessons";
import Educators from "./contents/educators/Educators";
import "./style.css";
const Activities = () => {
  const [selectedComponent, setSelectedComponent] = useState(
    "Education2020To2021"
  );

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };
  return (
    <>
      <Container className="py-5 mt-5">
        <Row>
          <Col md={3} lg={2}>
            <Nav className="flex-column py-5 mt-2 sidebar bg-blue">
              <Nav.Link
                onClick={() => handleComponentClick("Education2020To2021")}
              >
                2020 - 2021 Yılı Faaliyetler
              </Nav.Link>
              <Nav.Link
                onClick={() => handleComponentClick("Education2021To2022")}
              >
                2021 - 2022 Yılı Faaliyetler
              </Nav.Link>
              <Nav.Link onClick={() => handleComponentClick("Lessons")}>
                Derslerimiz
              </Nav.Link>
              <Nav.Link onClick={() => handleComponentClick("Educators")}>
                Hocalarımız
              </Nav.Link>
              {/* ... Other sidebar links */}
            </Nav>
          </Col>
          <Col md={9} lg={10}>
            {selectedComponent === "Education2020To2021" && (
              <Education2020To2021 />
            )}
            {selectedComponent === "Education2021To2022" && (
              <Education2021To2022 />
            )}
            {selectedComponent === "Lessons" && <Lessons />}
            {selectedComponent === "Educators" && <Educators />}
            {/* ... Other component cases */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Activities;
