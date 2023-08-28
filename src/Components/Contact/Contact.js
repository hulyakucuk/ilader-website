import React, { useRef, useState } from "react";
import { Col, Form, Row, Button, Modal } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import "./style.css";

const Contact = () => {
  const formRef = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_USER_PUBLIC_KEY
      )
      .then(() => {
        setShowModal(true);
      });
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Form ref={formRef} onSubmit={sendEmail}>
      <Row>
          <Col lg={6} md={6} sm={12} className="mb-5 mt-3">
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
              placeholder="Adınızı giriniz"
              className="mb-3"
              required
            />
            <Form.Label className="mb-3">Soyadınız:</Form.Label>
            <Form.Control
              name="user_surname"
              className="mb-3"
              placeholder="Soyadınızı giriniz"
              required
            />
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email Adresiniz:</Form.Label>
              <Form.Control
                name="user_email"
                type="email"
                placeholder="Email adresinizi giriniz"
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
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>İlader</Modal.Title>
        </Modal.Header>
        <Modal.Body>Mesajınız, gönderildi!</Modal.Body>
      </Modal>
    </>
  );
};

export default Contact;
