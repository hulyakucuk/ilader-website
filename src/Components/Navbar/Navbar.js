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
import Activities from "../../Pages/Activities/Activities";

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
            <NavDropdown  title="Kurumsal" id="basic-nav-dropdown">
              <NavDropdown.Item  href="/hakkimizda" to={<About />}>
                <span><i class="fa-regular fa-address-card"></i></span>
                Hakkımızda
              </NavDropdown.Item>
              <NavDropdown.Item  href="/yonetim-kurulu" to={<Management />}>
              <span><i class="fa-solid fa-user-group"></i></span>  Yönetim Kurulu
              </NavDropdown.Item>
              <NavDropdown.Item
              
                href="/vizyon-ve-misyonumuz"
                to={<VisionAndMission />}
              >
                <span><i class="fa-solid fa-head-side-virus"></i></span>
                Vizyon ve Misyonumuz
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/faaliyetler" to={<Activities />}>
            Faaliyetler
            </Nav.Link>
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
