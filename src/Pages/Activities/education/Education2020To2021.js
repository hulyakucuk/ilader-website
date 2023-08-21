import React from "react";
import EducationInfo from "./data/EducationInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Education2020To2021 = () => {

  // veri ve anahtarı parametre olarak alır. Alınan parametre dizi içeriyorsa li etiketi içinde
  // map fonksiyonu ile basar eğer dizi içermiyorsa p etiketi içine direkt basar
  const renderListItems = (data, key) => {
    return data.map((info) => (
      <div key={info[key]}>
        {Array.isArray(info[key]) ? (
          <ul>
            {info[key].map((item, index) => (
              <li className="list-style-circle" key={index}>
                {item}{index}
              </li>
            ))}
          </ul>
        ) : (
          <p>{info[key]}</p>
        )}
      </div>
    ));
  };

  return (
    <Container className="mt-5 py-5 w-75 mx-auto">
      <Row className="border mt-5">
        <h6 className="py-3">
          <strong>
            HAZİRAN 2020 - AĞUSTOS 2021 TARİHLERİ ARASINDAKİ FAALİYETLER
          </strong>
        </h6>
      </Row>
      <Row className="border p-3 ">
        <Col sm={12} md={4} lg={2}>
          <span className="sub-heading ">Eğitim Hizmeti:</span>
        </Col>
        <Col sm={12} md={8} lg={10}>
          {renderListItems(EducationInfo, "EducationService")}
        </Col>
      </Row>
      <Row className="border p-3">
        <Col sm={12} md={4} lg={2}>
          <span className="sub-heading">
            Eğitim Yöntemi, Hedefler ve Program
          </span>
        </Col>
        <Col sm={12} md={8} lg={10}>
          {renderListItems(EducationInfo, "program")}
        </Col>
      </Row>
      <Row className="border p-3">
        <Col sm={12} md={4} lg={2}>
          <span className="sub-heading">
            2020 - 2021 Tarihleri Arasındaki Faaliyetlerin Özeti
          </span>
        </Col>
        <Col sm={12} md={8} lg={10}>
          {renderListItems(EducationInfo, "summary")}
        </Col>
      </Row>
    </Container>
  );
};

export default Education2020To2021;
