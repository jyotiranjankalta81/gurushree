import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './Footer.css';
import MapDirection from '../Pages/MapDirection';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AOS from "aos";
import "aos/dist/aos.css";
import CallIcon from '@mui/icons-material/Call';
import { Call } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';


function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div >
      <div className='footer-bg'>
        <footer className='footer_container' data-aos="zoom-in">
          <div className="footer_div1">
            <h1 className='footer_head'>Gurushree Minerals Pvt. Ltd.</h1>
            <div className='para_div'>
              {/* <img src="images/Footer/location.png" className='location-img' /> */}
              <LocationOnIcon sx={{transform:"scale(1.3)"}}/>
              <p className='p_add'>
                39-42, Ground Floor, Krishna Crown
                Chaitanya Nagar, Raigarh, Chhattishgarh-496001.</p>
            </div>
            <section className='map_section'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15258072.40570261!2d82.75252935!3d20.98801345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a272531e0101161%3A0x86b40035be7b9641!2sGurushree%20Minerals%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1660806423162!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
          </div>

          <section className='map_section1'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15258072.40570261!2d82.75252935!3d20.98801345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a272531e0101161%3A0x86b40035be7b9641!2sGurushree%20Minerals%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1660806423162!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </section>

          <div className="footer_div2">
            <h3 className='link_head'>Links</h3>
            <Link to="/terms">Terms & Conditions</Link> <br />
            <Link to="/terms">Privacy Policy</Link> <br />
            <img className='iso_logo' src="images/Footer/iso.png" alt="" />
            <h4>An ISO certified organization</h4>
            {/* <Link to="/">Subscribe to Newsletter</Link> <br /> */}
            {/* <input type="text"  /><br />
            <button>Subscribe</button> */}
            {/* <input type="text" placeholder='Email' className='link_text' />   <br />
            <Button>Subscribe</Button> */}

          </div>
          <div className="footer_div3">
            <h3 className='link_head'>Get In Touch</h3>
            <div className="phone">
              {/* <img src="images/Footer/call.png" alt="" /> */}
               <Call sx={{transform:"scale(1.3)"}}/> &nbsp;
                <a href="tel:+91-7771012666">+91-7771012666</a> </div>
            <div className="phone">
              <EmailIcon sx={{transform:"scale(1.3)"}}/> &nbsp;
              {/* <img src="images/Footer/mail.png" alt="" /> */}
              <a href="mailto:contact@gurushree.in">
                contact@gurushree.in
              </a></div>

          </div>

          <div className="footer_div4">
            <img src="images/Footer/logo_footer_new.jpeg"  data-aos="fade-down" alt="" />
          </div>

        </footer>
        <p className='copyright'>Website designed and developed by<a href='https://techjain.com/' target="" > Techjain IT Solution</a></p>
      </div>
    </div>

  );
}

export default Footer;
