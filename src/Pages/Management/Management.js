import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import managementData from "./data/managementData";
import { motion } from "framer-motion";

const Management = () => {
  // data daki verileri positions bilgisine göre filtreleme işlemi
  const uye = managementData.filter((data) =>
    data.positions.includes("Yönetim Kurulu Üyesi")
  );
  const koordinator = managementData.filter((data) =>
    data.positions.includes("Koordinatör")
  );
  const baskan = managementData.filter((data) =>
    data.positions.includes("Yönetim Kurulu Başkanı")
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container className="py-5 mt-5 text-center ">
          <h2 className="bg-blue py-3 text-white shadow-lg">Yönetim Kurulu</h2>

          {/* filtrelenen verilere göre ilgili row lara map ile bastırma */}
          <Row className="lightblue mx-auto shadow-lg">
            <Col  md={6}  className="mx-auto ">
              {/* Başkan içeriği */}
              {baskan.map((person) => (
                <div key={person.id}>
                  <img src={person.image} alt={person.title} className="img-fluid person-image mt-3 rounded-2 shadow-lg"/>
                  <h3 className="mt-3">{person.title}</h3>
                  <p>Yönetim Kurulu Başkanı</p>
                </div>
              ))}
            </Col>
          </Row>

          <Row className="lightgreen mx-auto shadow-lg">
            {/* Üyelerin içeriği */}
            {uye.map((person) => (
              <Col md={6} lg={2}  key={person.id} className=" mx-auto">
                <div>
                  <img src={person.image} alt={person.title} className="img-fluid person-image mt-3 rounded-2 shadow-lg"/>
                  <h3 className="mt-3">{person.title}</h3>
                  <p>Yönetim Kurulu Üyesi</p>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="lightblue mx-auto shadow-lg">
            {/* Koordinator içeriği */}
            {koordinator.map((person) => (
              <Col  md={6}   key={person.id} className="mx-auto">
                <div>
                  <img src={person.image} alt={person.title} className="img-fluid person-image mt-3 rounded-2 shadow-lg" />
                  <h3 className="mt-3">{person.title}</h3>
                  <p>Koordinatör</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.div>
    </>
  );
};

export default Management;
