import React from "react";
import Gallery from "../../Components/Gallery/HomeGallery";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import AboutCard from "../../Components/AboutCard/AboutCard";
import Slider from "../../Components/Slider/Slider"
import {motion} from "framer-motion";
const Home = () => {
  return (
    <>
      <motion.div className="bg-light mt-2"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      >
        <header className="container ">
          <section className="slider mt-3">
            <Slider />
          </section>
        </header>
        <main className="container">
          <section className="about-card py-3">
            <AboutCard withLink={true} />
          </section>
          <section id="gallery" className="py-3 ">
            <Gallery withLink={true} />
          </section>

          <section id="contact" className="py-3 bg-light">
            <Contact />
          </section>
        </main>
   
      <section className="mt-5 w-100">
        <Footer />
      </section>
      </motion.div>
    </>
  );
};

export default Home;
