import React from "react";
import Container from "react-bootstrap/Container";
import "./style.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Contact from "../Contact/Contact";
import logo from "../../assets/logo.jpg";
import NavDropdown from "react-bootstrap/NavDropdown";
import Media from "../../Pages/Media/Media";
import VisionAndMission from "../../Pages/VisionAndMission/VisionAndMission";
import Management from "../../Pages/Management/Management";
import Educators from "../../Pages/Activities/educators/Educators";
import Education2020To2021 from "../../Pages/Activities/education/Education2020To2021";
import Education2021To2022 from "../../Pages/Activities/education/Education2021To2022";
import Lessons from "../../Pages/Activities/lessons/Lessons";

const Navbarr = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary position-fixed shadow-lg border-5 rounded-bottom "
    >
      <Container>
        <Navbar.Brand href="/">
          <img alt="logo" src={logo} width="160px" height="auto" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-medium fs-5 align-items-center">
            <Nav.Link href="/" to={<Home />}>
              Anasayfa
            </Nav.Link>
            <NavDropdown title="Kurumsal" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about" to={<About />}>
                Hakkımızda
              </NavDropdown.Item>
              <NavDropdown.Item href="/yonetim-kurulu" to={<Management />}>
                Yönetim Kurulu
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/vizyon-ve-misyonumuz"
                to={<VisionAndMission />}
              >
                Vizyon ve Misyonumuz
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Faaliyetlerimiz" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="/egitimler-2020-2021"
                to={<Education2020To2021 />}
              >
                2020-2021 Eğitimlerimiz
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/egitimler-2021-2022"
                to={<Education2021To2022 />}
              >
                2021-2022 Eğitimlerimiz
              </NavDropdown.Item>
              <NavDropdown.Item href="/hocalarimiz" to={<Educators />}>
                Hocalarımız
              </NavDropdown.Item>
              <NavDropdown.Item href="/dersler" to={<Lessons />}>
                Derslerimiz
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/medya" to={<Media />}>
              Medya
            </Nav.Link>
            <Nav.Link href="/#contact" to={<Contact />}>
              İletişim
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
