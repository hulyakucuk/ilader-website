import React from 'react'
import Container from 'react-bootstrap/Container';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Activities from '../../Pages/Activities';
import Contact from '../Contact/Contact';
import logo from "./logo.jpg";
// import Gallery from '../Gallery/Gallery';
const Navbarr = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
    <Container>
      <Navbar.Brand href="/">
      <img
              alt="logo"
              src={logo}
              width="200"
              height="auto"
            />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto fw-medium fs-5 align-items-center">
          <Nav.Link  href="/" to={<Home/>}>Anasayfa</Nav.Link>
          <Nav.Link href="/about" to={<About/>}>Hakkımızda</Nav.Link>
          <Nav.Link href="/activities" to={<Activities/>}>Faaliyetler</Nav.Link>
          <Nav.Link href="#gallery" to={<Home/>}>Galeri</Nav.Link>
          <Nav.Link href="#contact" to={<Contact/>}>İletişim</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr
