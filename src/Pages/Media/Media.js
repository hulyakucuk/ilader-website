import React from "react";
import GallerySlider from "../../Components/Gallery/GallerySlider";
import {motion} from "framer-motion";
const Media = () => {
  return (
    <>
      <motion.div className="container py-2 mt-5"
      
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
      <h2 className="bg-blue text-white text-center mt-4 py-3">Medya</h2>
        <GallerySlider />
      </motion.div>
    </>
  );
};

export default Media;
