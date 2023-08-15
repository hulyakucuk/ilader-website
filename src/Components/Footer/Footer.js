import React from 'react'
import logo from"../../assets/logo.jpg" ;
const Footer = () => {
  return (
    <footer className="text-white py-5 bg-blue ">
    <div className="w-75 mx-auto ">
      <div className="row ">
        <div className="col-md-12 col-lg-4 mx-auto mt-3 text-start">
          <span className="background-svg">
            <img 
            alt="logo"
            src={logo}
            width="200"
            height="auto"/>
          </span>

          <p className="mt-4 lh-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa. </p>
          <p className="fw-lighter mt-4">©AK PVT LTD 2021. All rights reserved</p>
        </div>
        <div className="col-md-4 col-lg-2 mx-auto mt-3 text-start">
          <h6 className='text-white'>Company</h6>
          <ul className="fw-lighter">
            <li><a href='/about'>About</a></li>
            <li><a>Testimonials</a></li>
            <li><a>Find a doctor</a></li>
            <li><a>Apps</a></li>
          </ul>
        </div>

        <div className="col-md-4 col-lg-2 mx-auto mt-3 text-start">
          <h6 className='text-white'>Region</h6>
          <ul className="fw-lighter">
            <li><a>Link</a></li>
            <li><a>Link</a></li>
            <li><a>Link</a></li>
            <li><a>Link</a></li>
          </ul>
        </div>

        <div className="col-md-4 col-lg-2 mx-auto mt-3 text-start">
          <h6 className='text-white'>Help</h6>
          <ul className="fw-lighter">
            <li><a>Help center</a></li>
            <li><a>Contact support</a></li>
            <li><a>Instructions</a></li>
            <li><a>How it works</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
