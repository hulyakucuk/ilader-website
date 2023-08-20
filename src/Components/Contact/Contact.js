import React, { useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";
import "./Contact.css";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_PUBLIC_KEY
      )
      .then((result) => {
        handleShow();
      });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Form ref={form} onSubmit={sendEmail}>
        <Row>
          <Col lg={6} md={6} sm={12} className="mb-5 p-5">
            <FrequentlyAskedQuestions />
          </Col>

          <Col
            lg={6}
            md={6}
            sm={12}
            className=" mt-3 bg-img img-fluid p-5 text-white"
          >
            <Form.Label>Adınız:</Form.Label>

            <Form.Control
              name="user_name"
              placeholder="First name"
              className="mb-3"
              required
            />
            <Form.Label className="mb-3">Soyadınız:</Form.Label>
            <Form.Control
              name="user_surname"
              className="mb-3"
              placeholder="Last name"
              required
            />
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email Adresiniz:</Form.Label>
              <Form.Control
                name="user_email"
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mesajınız:</Form.Label>
              <Form.Control name="message" as="textarea" rows={3} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Gönder
            </Button>
          </Col>
        </Row>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>İlader</Modal.Title>
        </Modal.Header>
        <Modal.Body>Mesajınız, gönderildi!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Contact;
