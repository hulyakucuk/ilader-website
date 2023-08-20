import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import Images from "./SliderImages";
import "./gallery.css";
const GallerySlider = () => {
  // START MODAL
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  // END MODAL

  // CUSTOMIZE ARROW BUTTONS

  function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundColor: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  // RESPONSIVE SLİDER
  const settings = {
    dots: true,
    speed: 500,
    rows:2,
    slidesPerRow: 1,
    className: "center",
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container mb-5" style={{ overflow: "hidden" }}>
        <Slider {...settings}>
          {Images.map((item, index) => (
            <React.Fragment key={index}>
              <Card variant="w-auto" className="content">
                <Card.Img
                  variant="top img-auto mt-5 img-fluid"
                  src={item.image}
                  alt={`Image ${index}`}
                  onClick={() => openModal(item.image)}
                />
              </Card>
            </React.Fragment>
          ))}
        </Slider>

        <Modal show={showModal} onHide={closeModal} >
          <Modal.Body className="modal-image ">
            <img
              src={selectedImage}
              alt="Selected"
              className="img-fluid "
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default GallerySlider;
