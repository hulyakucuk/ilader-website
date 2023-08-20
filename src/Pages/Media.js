import React from "react";
import Gallery from "../Components/Gallery/HomeGallery";
import GallerySlider from "../Components/Gallery/GallerySlider";

const Media = () => {
  return (
    <>
      <div className="container py-2 mt-5">
      <h2 className="bg-blue text-white text-center mt-4 py-3">Galeri</h2>
        <GallerySlider />
      </div>
    </>
  );
};

export default Media;
