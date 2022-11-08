import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useRef } from "react";
import Button from '@mui/material/Button';
import AOS from "aos";
import "aos/dist/aos.css";
import FeatherIcon from 'feather-icons-react';
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { QrCodeOutlined } from "@mui/icons-material";
import Footer from "../Footer/Footer";

function Home() {
  const myRef = useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>

      <Header />
      {/* Welocme section */}
      <section className="welcome_section">
        <div className="img_section">
          <div data-aos="fade-right">
            <img src="images/Career/Arrow.png" alt="" />
            <img src="images/Career/Arrow1.png" alt="" />
          </div>
        </div>
        <div className="infosection" >
          <h1 data-aos="fade-down">Welcome to Gurushree Group</h1>
          <div data-aos="fade-down" className="title-line"></div>
          <p data-aos="zoom-in">The company is located in the State of Chhattisgarh which is blessed with natures' abundance in every form and mineral rich state in India. We produce and provide high-grade dolomite that is regularly supplied to various Steel plants all over the country. <br /><br />
            Our company is today's largest Dolomite mining company amongst Chhattisgarh companies.
          </p>
          <Link to='/aboutus'> <Button data-aos="zoom-out">Read More</Button></Link>
          <div className="home-trans" data-aos="zoom-in-left">
            <img src="images/Career/Arrow-trans1.png" alt="" className="" />
            <img src="images/Career/Arrow-trans.png" alt="" className="" />
          </div>
        </div>
      </section>
      {/* Welocme section */}


      {/* Product section */}
      <section className="product-bg">
          <div class="product_container">
            <div class="left_img" data-aos="fade-right">
              <img src="images/Header/logo.png" alt="" />
              <h2>Gurushree Group</h2>
              <h2>Products & Services</h2>
            </div>

            <div class="right_card" >

              <div class="card-body text-center" data-aos="fade-down-right">
                <img src="images/Home/mining.png" alt="" className="product-icon" />
                <h6 class="card-title">Mining</h6>
                <p class="product-card-text">
                  Gurushree Minerals Pvt. Ltd. is one of the major dolomite suppliers in the region and we supply processed dolomite ores to all major integrated steel manufacturing units in the region. The dolomite we supply are of very high grade and low in silica. Our mines are located at Baradwar, District Janjgir Champa, Chattishgarh. We provide Rake loading options for bulk supply of Dolomite. Our nearest rake point is Baradwar (BUA) and Baradwar Goods Shed Line NO.04- (PSBD), which is on the main line between Kolkata and Mumbai
                </p>
              </div>


              <div class="card-body card-body1 text-center" data-aos="fade-down-left">
                <img
                  src="images/Home/production.png"
                  alt=""
                  className="product-icon"
                />
                <h6 class="card-title">Manufacturer of Noble Ferro Alloys</h6>
                <p class="product-card-text">
                  Gurushree Industries Pvt. Ltd. is an upcoming concern established in the year 2016 and has started
                  production with main objective of providing finest grade of Calcined Dolomite, Ferro Vanadium, Ferro
                  Molybdenum, Vanadium Pentoxide & Ammonium Meta Vanadate for use in Iron & Steel Industry.
                  Within a short span of time Gurushree Industries has been able to establish itself as a major supplier of
                  Calcined Dolomite in the region.
                </p>
              </div>

              <div class="card-body card-body2 text-center" data-aos="fade-up-right">
                <img
                  src="images/Home/hiring.png"
                  alt=""
                  className="product-icon"
                />
                <h6 class="card-title">Equipment Leasing Services</h6>
                <p class="product-card-text">
                  Gurushree Minerals owns a large inventory of Heavy Earthmoving & Construction equipment like
                  Excavators, Pay Loaders, Backhoe Loaders, Tippers, Breakers, Water Tankers, Trailers, Tractors, DG and
                  Pneumatic Drill which are available for its broad range of activities. Along with the broad range of
                  machinery we have well trained operators to operate the machines and also have technical manpower
                  for maintenance & up keeping of the machinery.


                </p>
              </div>
              <div class="card-body card-body3 text-center " data-aos="fade-up-left">
                <img
                  src="images/Home/real.png"
                  alt=""
                  className="product-icon"
                />
                <h6 class="card-title">Real Estate</h6>
                <p class="product-card-text">
                  ELITE ASSOCIATES, is a Gurushree Group firm which is into Real Estate Business and builds a variety of construction, structures for specific requirements which result in lasting pieces of architecture. We collaborate with various agencies and corporate houses for these projects, and undertake work on a turn-key basis or any specific sub-segment thereof.

                </p>
              </div>
            </div>
          </div>
        </section>
        
      {/* Product section */}
      <br />
      {/* <br /> */}
      {/* card section */}
      {/* <br /> */}
      {/* <div className="our_card" data-aos="zoom-in-down">
          <div className="our_card1">
            <h2 className="our_head">Our Companies</h2>
            <Link to='/minerals' className="our_para1">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p>M/s Gurushree Minerals Pvt. Ltd.</p>
            </Link>
            <Link to='/industries' className="our_para1">
              <img src='images/Home/pause2.png' className="our_img" />
              <p>M/s Gurushree Industries Pvt. Ltd.</p>
            </Link>
            <div className="our_para1">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p>M/s Gurushree Buildcon Pvt. Ltd.</p>
            </div>
            <Link to='/associates' className="our_para1">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p>M/s Elite Associates</p>
            </Link>
          </div>
          <div className="our_card2">
            <h2 className="our_head2">Our Businesses</h2>
            <div className="our_para2">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p> Mining</p>
            </div>
            <div className="our_para2">
              <img src='images/Home/pause2.png' className="our_img" />
              <p>Manufacturing</p>
            </div>
            <div className="our_para2">
              <img src='images/Home/pause2.png' className="our_img" />
              <p>Equipment Leasing Services</p>
            </div>
            <div className="our_para2">
              <img src='images/Home/pause2.png' className="our_img" />
              <p>Real Estate</p>
            </div>
          </div>
          <div className="our_card3">
            <h2 className="our_head">Our Clients</h2>
            <a target="_blank" href="https://www.sail.co.in/en/home" className="our_para3">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p><img src='images/Home/sail.jpeg' alt="" className='clients_img2' /></p>
            </a>
            <a target="_blank" href="https://www.aionjsw.in/" className="our_para3">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p><img src='images/Home/jsw1.jpeg' alt="" className='clients_img1' /></p>
            </a>
            <a target="_blank" href="https://www.vizagsteel.com/" className="our_para3">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p><img src='images/Home/vizag_logo1.jpeg' alt="" className='clients_img' /></p>
            </a>
            <a target="_blank" href="https://www.tatasteel.com/" className="our_para3">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p><img src='images/Home/tata.png' alt="" />
              <span style={{fontSize:"0.5rem",
              color:"#000000"
              }}>Tata Steel Ltd. Dhenkanal, Odisha</span>
              <span style={{fontSize:"0.5rem",
              color:"#000000"
              }}>Tata Steel Ltd. (Ferro Alloy Division), Joda, Odisha</span>
                            <span style={{fontSize:"0.5rem",
              color:"#000000"
              }}>Tata Steel Long Product Ltd. Adityapur, Jharkhand & Joda, Odisha</span>
                            <span style={{fontSize:"0.5rem",
              color:"#000000"
              }}>Tata Steel Long Product Ltd. Joda, Odisha</span>
              </p>
            </a>
            <a target="_blank" href="https://www.jswsteel.in/" className="our_para3">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p><img src='images/Home/jsw.jpeg' alt="" className='clients_img1' />
              <span style={{fontSize:"0.5rem",
              color:"#000000"
              }}>JSW Bhushan Power and Steel Limited, Sambalpur, Odisha
              </span>
              <span style={{fontSize:"0.5rem",
              color:"#000000"
              }} >JSW Ispat Special Product Ltd. Raigarh, Chhattisgarh.</span>
              </p>
            </a>
            <a target="_blank" href="https://www.jindalsteelpower.com/" className="our_para3">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p><img src='images/Home/jindal.png' alt="" />
              <span style={{fontSize:"0.5rem",
              color:"#000000"
              }}>Jindal Steel &amp; Power Ltd, Raigarh</span>
                            <span style={{fontSize:"0.5rem",
              color:"#000000"
              }}>Jindal Steel &amp; Power Ltd, Angul</span>
              </p>
            </a>
            <a target="_blank" href="https://www.rashmigroup.com/" className="our_para3">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p><img src='images/Home/rashmi_group.jpeg' alt="" className='clients_img2' />
              <span style={{fontSize:"0.5rem",
              color:"#000000"
              }}>Rashmi Metaliks Ltd.</span>
              <span style={{fontSize:"0.5rem",
              color:"#000000"
              }}>Rashmi Cement Ltd.</span>
              </p>
            </a>
          </div>

          <div className="our_card4">
            <h2 className="our_head2">Our Products</h2>
            <Link to='/product' className="our_para4">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p>Dolomite</p>
            </Link>
            <Link to='/product' className="our_para4">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p>Calcined Dolomite</p>
            </Link>
            <Link to='/product' className="our_para4">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p>Ferro Vanadium</p>
            </Link>
            <Link to='/product' className="our_para4">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p>Vanadium Pentoxide</p>
            </Link>
            <Link to='/product' className="our_para4">
              <img src='images/Home/pause2.png' className="our_img" alt="" />
              <p>Ferro Molybdenum</p>
            </Link>
          </div>

        </div> */}
      {/* <br /> */}




      {/* <section className="qoutes_section-4">

          <div className="qoutes-heading" data-aos="fade-down">
            <span> WHAT OUR CLIENTS SAY</span>
          </div>
          <div className="line"></div>
          <div className="qoutes-section" data-aos="flip-up">
            <div ref={myRef} className="main_div-qoutes-scroll ">
              <div className="first-qoutes">
                <img className='avatar_img' src="images/Home/avatar1.png" alt="" />
                <span>- Mr. Kushal Nigam</span>

              </div>
              <div className="first-content">
                <img src="images/doublecomma.jpg" alt="" />
                <p>"When it's comes to Gurushree, quality is always a priority"</p>
              </div>

            </div>

            <div ref={myRef} className="main_div-qoutes-scroll main_div-qoutes-scroll1">
              <div className="first-content">
                <img src="images/doublecomma.jpg" alt="" />
                <p> " I have been associated with Gurushree since a long time and this association has always been fruitful."</p>
              </div>
              <div className="first-qoutes">
                <img className='avatar_img' src="images/Home/avatar1.png" alt="" />
                <span>- Mr. Ankur Dubey</span>
              </div>
            </div>
            <div ref={myRef} className="main_div-qoutes-scroll ">
              <div className="first-qoutes">
                <img className='avatar_img' src="images/Home/avatar1.png" alt="" />
                <span>- Mr. Amit Gupta</span>
              </div>
              <div className="first-content">
                <img src="images/doublecomma.jpg" alt="" />
                <p>" Timely Delivery. Very Good customer support. Delighted to be a client of Gurushree. "</p>
              </div>
            </div>
            <div ref={myRef} className="main_div-qoutes-scroll main_div-qoutes-scroll1">
              <div className="first-content">
                <img src="images/doublecomma.jpg" alt="" />
                <p>"Leading manufacturer of Dolomite & Calcined Dolomite in Central India. "</p>
              </div>
              <div className="first-qoutes">
                <img className='avatar_img' src="images/Home/avatar1.png" alt="" />
                <span>- Mr. Manoj Sharma</span>
              </div>
            </div>



          </div>

        </section> */}

      <h1 style={{textAlign:'center'}}>Our Clients</h1>
      <div className="vision_underline"></div>
      <div className="slider">
        <div className="slide_track">
          <div className="slide">
            <a target="_blank" href="https://www.sail.co.in/en/home" className="our_para3">
              <p><img src='images/Home/sail.jpeg' alt="" className='clients_img2' /></p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.aionjsw.in/" className="our_para3">
              <p><img src='images/Home/jsw1.jpeg' alt="" className='clients_img1' /></p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.vizagsteel.com/" className="our_para3">
              <p><img src='images/Home/vizag_logo1.jpeg' alt="" className='clients_img' /></p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.tatasteel.com/" className="our_para3">
              <p><img src='images/Home/tata.png' alt="" />
              <ul>
                <li>Tata Steel Ltd. Dhenkanal, Odisha</li>
                <li>Tata Steel Ltd. (Ferro Alloy Division), Joda, Odisha</li>
                <li>Tata Steel Long Product Ltd. Adityapur, Jharkhand & Joda, Odisha</li>
                <li>Tata Steel Long Product Ltd. Joda, Odisha</li>
              </ul>
              </p>
            </a>
          </div>



          <div className="slide">
            <a target="_blank" href="https://www.jswsteel.in/" className="our_para3">
              <p><img src='images/Home/jsw.jpeg' alt="" className='clients_img1' />
              <ul>
                <li>JSW Bhushan Power and Steel Limited, Sambalpur, Odisha</li>
                <li>JSW Ispat Special Product Ltd. Raigarh, Chhattisgarh.</li>
              </ul>
              </p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.jindalsteelpower.com/" className="our_para3">
              <p><img src='images/Home/jindal.png' alt="" />
              <ul>
                <li>Jindal Steel &amp; Power Ltd, Raigarh</li>
                <li>Jindal Steel &amp; Power Ltd, Angul</li>
              </ul>
              </p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.rashmigroup.com/" className="our_para3">
              <p><img src='images/Home/rashmi_group.jpeg' alt="" className='clients_img2' />
              <ul>
                <li>Rashmi Metaliks Ltd.</li>
                <li>Rashmi Cement Ltd.</li>
              </ul>
              </p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.sail.co.in/en/home" className="our_para3">
              {/* <img src='images/Home/pause2.png' className="our_img" alt="" /> */}
              <p><img src='images/Home/sail.jpeg' alt="" className='clients_img2' /></p>
            </a>
          </div>


          <div className="slide">
            <a target="_blank" href="https://www.aionjsw.in/" className="our_para3">
              {/* <img src='images/Home/pause2.png' className="our_img" alt="" /> */}
              <p><img src='images/Home/jsw1.jpeg' alt="" className='clients_img1' /></p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.vizagsteel.com/" className="our_para3">
              <p><img src='images/Home/vizag_logo1.jpeg' alt="" className='clients_img' /></p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.tatasteel.com/" className="our_para3">
              <p><img src='images/Home/tata.png' alt="" />
              <ul>
                <li>Tata Steel Ltd. Dhenkanal, Odisha</li>
                <li>Tata Steel Ltd. (Ferro Alloy Division), Joda, Odisha</li>
                <li>Tata Steel Long Product Ltd. Adityapur, Jharkhand & Joda, Odisha</li>
                <li>Tata Steel Long Product Ltd. Joda, Odisha</li>
              </ul>
              </p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.jswsteel.in/" className="our_para3">
              <p><img src='images/Home/jsw.jpeg' alt="" className='clients_img1' />
              <ul>
                <li>JSW Bhushan Power and Steel Limited, Sambalpur, Odisha</li>
                <li>JSW Ispat Special Product Ltd. Raigarh, Chhattisgarh.</li>
              </ul>
              </p>
            </a>
          </div>

          <div className="slide">
            <a target="_blank" href="https://www.jindalsteelpower.com/" className="our_para3">
              <p><img src='images/Home/jindal.png' alt="" />
              <ul>
                <li>Jindal Steel &amp; Power Ltd, Raigarh</li>
                <li>Jindal Steel &amp; Power Ltd, Angul</li>
              </ul>
              </p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.rashmigroup.com/" className="our_para3">
              <p><img src='images/Home/rashmi_group.jpeg' alt="" className='clients_img2' />
              <ul>
                <li>Rashmi Metaliks Ltd.</li>
                <li>Rashmi Cement Ltd.</li>
              </ul>
              </p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.sail.co.in/en/home" className="our_para3">
              <p><img src='images/Home/sail.jpeg' alt="" className='clients_img2' /></p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.aionjsw.in/" className="our_para3">
              <p><img src='images/Home/jsw1.jpeg' alt="" className='clients_img1' /></p>
            </a>
          </div>



          <div className="slide">
            <a target="_blank" href="https://www.vizagsteel.com/" className="our_para3">
              <p><img src='images/Home/vizag_logo1.jpeg' alt="" className='clients_img' /></p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.tatasteel.com/" className="our_para3">
              <p><img src='images/Home/tata.png' alt="" />
              <ul>
                <li>Tata Steel Ltd. Dhenkanal, Odisha</li>
                <li>Tata Steel Ltd. (Ferro Alloy Division), Joda, Odisha</li>
                <li>Tata Steel Long Product Ltd. Adityapur, Jharkhand & Joda, Odisha</li>
                <li>Tata Steel Long Product Ltd. Joda, Odisha</li>
              </ul>
              </p>
            </a>
          </div>
          <div className="slide">
            <a target="_blank" href="https://www.jswsteel.in/" className="our_para3">
              <p><img src='images/Home/jsw.jpeg' alt="" className='clients_img1' />
              <ul>
                <li>
                JSW Bhushan Power and Steel Limited, Sambalpur, Odisha
                </li>
                <li>
                JSW Ispat Special Product Ltd. Raigarh, Chhattisgarh.
                </li>
              </ul>
              </p>
            </a>
          </div>
        </div>
      </div>
      <Footer/>

    </>
  );
}

export default Home;
