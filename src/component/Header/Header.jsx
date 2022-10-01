import './Header.css';
import React, { useState, useEffect } from "react";
import {Link, NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Navbar from '../Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";

const images = ["../images/Home/crs1.jpg", "../images/Home/crs2.jpg", "../images/Home/crs3.jpg", "../images/Home/crs4.jpg", "../images/Home/crs1.jpg", "../images/Component2/crouslemineral2.jpg","../images/Home/crousel4.jpg","../images/Home/crousel7.jpg","../images/Home/crousel8.jpg","../images/Home/crousel9.jpg","../images/Home/crousel10.jpg"];

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      }
      else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 2000)

    return () => clearInterval(intervalId);
  }, [currentIndex])


  return (
    <div>
      <div>
        <Navbar />
        <div className="header_img_div">
          <img src={images[currentIndex]} className="header-header-bg" />
        </div>
        <div class="text-block">
          <div className="header-title" data-aos="fade-right">
            <h1 className="header-title-h1">Gurushree Minerals Pvt. Ltd.</h1>
            <h3 className="header-title-detail" >
              Sophisticated mining by deploying
              <br /> state of the art machines
            </h3>
          </div>
        </div>
        <center>
        </center>
      </div>
    </div>
  );
}

export default Header;
