import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import managementData from "./data/managementData";

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
      <Container className="py-5 mt-5 text-center">
        <h2 className="bg-blue py-3 text-white ">Yönetim Kurulu</h2>

        {/* filtrelenen verilere göre ilgili row lara map ile bastırma */}
        <Row className="lightblue">
          <Col className="border p-5 ">
            {/* Başkan içeriği */}
            {baskan.map((person) => (
              <div key={person.id}>
                <img src={person.image} alt={person.title} />
                <h3>{person.title}</h3>
                <p>Yönetim Kurulu Başkanı</p>
              </div>
            ))}
          </Col>
        </Row>

        <Row className="lightgreen">
          {/* Üyelerin içeriği */}
          {uye.map((person) => (
            <Col key={person.id} className="border p-5">
              <div>
                <img src={person.image} alt={person.title} />
                <h3>{person.title}</h3>
                <p>Yönetim Kurulu Üyesi</p>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="lightblue">
          {/* Koordinator içeriği */}
          {koordinator.map((person) => (
            <Col key={person.id} className="border p-5">
              <div>
                <img src={person.image} alt={person.title} />
                <h3>{person.title}</h3>
                <p>Koordinatör</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Management;