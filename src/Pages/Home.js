import React from 'react'
import Gallery from "../Components/Gallery/Gallery";
import Contact from '../Components/Contact/Contact';
import Footer from "../Components/Footer/Footer";
import AboutCard from '../Components/AboutCard/AboutCard';
import Slider from '../Components/Slider/Slider';

const Home = () => {
  
  return (
    <>
     <div className='py-5'>
 
        <section className='slider'>
          <Slider/>
        </section>
        <div className='container'>
        <section className='about-card py-5'>
        <AboutCard withLink={true}/>

        </section>
        <section id="gallery" className='py-3'>
        <Gallery/>
        </section>
        </div>
        <section id="contact" className='py-5 bg-light'>
        <Contact/>
        </section>



   
    </div>
    <section className='py-5 mt-5'>
      <Footer/>
      </section>
</>
   
  )
}

export default Home
