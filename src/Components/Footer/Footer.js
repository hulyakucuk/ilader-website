import React from "react";
import logo from "../../assets/logo.jpg";
import "./style.css";

const Footer = () => {
  return (
    <footer className="text-white py-5 bg-blue">
      <div className="w-75 mx-auto">
        <div className="row text-center">
          <div className="col-md-4 mx-auto mt-4 text-lg-start">
            <span className="background-svg">
              <img alt="logo" src={logo} width="200" height="auto" />
            </span>
          </div>
          <div className="col-md-4 mx-auto mt-4 text-lg-start">
            <ul className="links">
              <li><a href="/hakkimizda">Hakkımızda</a></li>
              <li><a href="/yonetim-kurulu"> Yönetim Kurulu</a></li>
              <li><a href="/vizyon-ve-misyonumuz">Vizyon ve Misyonumuz</a></li>
              <li><a href="/medya">Medya</a></li>
              <li><a href="/#contact">İletişim</a></li>
            </ul>
          </div>

          <div className="col-md-4 mx-auto mt-4 text-lg-start">
            <ul className="links">
              <li>Ulaşım</li>
              <li>Selamiali, Gazi Cd. No: 8, 34664 Üsküdar/İstanbul</li>
              <li>Telefon: (0216) 343 50 00</li>
            </ul>
            <ul className="media-buttons d-flex justify-content-center justify-content-lg-start links">
              <li>
                <a href="https://twitter.com/marmarailader" className="link">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/marmarailader/" className="link">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
