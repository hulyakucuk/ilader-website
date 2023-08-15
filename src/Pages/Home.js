import React from 'react'
import Gallery from "../Components/Gallery/HomeGallery";
import Contact from '../Components/Contact/Contact';
import Footer from "../Components/Footer/Footer";
import AboutCard from '../Components/AboutCard/AboutCard';
import Slider from '../Components/Slider/Slider';

const Home = () => {
  
  return (
    <>
     <div className='bg-light mt-2'>
     <header className='container '>
        <section className='slider mt-3'>
          <Slider/>
        </section>
        </header>
        <main className='container'>
        <section className='about-card py-5'>
        <AboutCard withLink={true}/>

        </section>
        <section id="gallery" className='py-3'>
        <Gallery  withLink={true}/>
        </section>
       
        <section id="contact" className='py-5 bg-light'>
        <Contact/>
        </section>
        </main>


   
    </div>
    <section className='mt-5 '>
      <Footer/>
      </section>
</>
   
  )
}

export default Home
