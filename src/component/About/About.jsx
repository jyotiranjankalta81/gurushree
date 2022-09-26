import React, { useEffect, useState } from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';
import AOS from "aos";
import Carousel from 'react-grid-carousel';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);



  const [isImagefile, setisImagefile] = useState([
    {
      id: 1,
      image: "images/certificate/CERTIFICATE-OF-INCORPORATION/img4.jpg",
    },
    {
      id: 2,
      image: "images/certificate/GURUSHREE INDUSTRIES-QMS/img4.jpg",
    },

    {
      id: 3,
      image: "images/certificate/GURUSHREE-INDUSTRIES-EMS/img4.jpg",
    },
    {
      id: 4,
      image: "images/certificate/GURUSHREE-INDUSTRIES-OHSMS/img4.jpg",
    },
    {
      id: 5,
      image: "images/certificate/GURUSHREE-INDUSTRIES-QMS/img4.jpg",
    },
    {
      id: 6,
      image: "images/certificate/GURUSHREE-MINERAL-EMS/img4.jpg",
    },
  ])

  return (
    <div className="">
      <section className='welcome_section1'>
        <div className="row1">
          <div className="arrow_img" data-aos="fade-right">
            <img src="images/Career/Arrow.png" alt='' />
            <img src="images/Career/Arrow1.png" alt='' />
          </div>

          <div className="about_info">
            <h1 data-aos="fade-down">Welcome to Gurushree Group</h1>
            <div className="about-line" data-aos="fade-down"></div>
            <p className='' data-aos="fade-left">Gurushree Group was the dream of entrepreneur and visionary of Mr. Nanak Bansal, Chairman & Managing Director,
              who established the company in the year 2006, based out at mineral-rich state of Chhattisgarh, India.
              The company achieved success and its growth accelerated regularly which in turn contributed to better business
              opportunities. Under the leadership of Mr. Nanak Bansal, Gurushree Group grew to become a trusted partner of
              our valued customers. Our company has installed a high capacity crushing and screening plant near to our Dolomite Mines,
              thereby we are able to process the Dolomite Ore to cater the various requirements of our valued customers. We are ensuring
              quality product on competitive rates and supply within scheduled time. We supply Dolomite to major steel industries in India.
            </p>
          </div>

        </div>

        <div className="row1">

          <div className="arrow_img" data-aos="fade-right">
            <img src="images/Career/Arrow.png" alt='' />
            <img src="images/Career/Arrow1.png" alt='' />
          </div>

          <div className="about_info">
            <p className='' data-aos="fade-left">In view of the augmentation of the company’s business,
              Mr. Mukesh Bansal, Director, is responsible for the complete operations in the Company.
              We anticipate rapid growth and expansion of the Group under his leadership. With our good management and planning,
              the dolomite mining becomes a smoother process which enable us to deliver the quality product within scheduled time to our valued customers.
              We at Gurushree Group follow the policy of changing with time and adopt new technological advancement in the process
              of mining to get better output as well as business opportunities.
              It’s of utmost importance to us that we ensure quality control at every level from mining to end product delivery to our valued customers, which is also possible with the dedicated attitude of our human resources and good infrastructures available with us. </p>
          </div>

        </div>
        <div className="row1">

          <div className="arrow_img" data-aos="fade-right">
            <img src="images/Career/Arrow.png" alt='' />
            <img src="images/Career/Arrow1.png" alt='' />
          </div>

          <div className="about_info">
            <p className='' data-aos="fade-left">Apart from our interest in mining, over the years, the company has successfully diversified into other
              business with equal success, which are Equipment Leasing (Gurushree Minerals Pvt. Ltd.), Real Estate
              (ELITE ASSOCIATES), and Ferro Alloy (GURUSHREE INDUSTRIES PVT LTD). The Gurushree Group operate
              the business in the following companies: </p>
          </div>

        </div>
      </section>
      {/* Circle section */}
      <section>
        <div className="circle_container">
          <Link to='/minerals' className="circle_card" data-aos="flip-left" style={{ textDecoration: "none", color: "black" }}>

            <div className="circle">1</div>
            <p className='circle_para' data-aos="zoom-in">Gurushree Minerals Pvt Ltd., Mining, Crushing and supply of Dolomite
            </p>
          </Link>

          <Link to='/industries' className="circle_card" data-aos="flip-left" style={{ textDecoration: "none", color: "black" }}>
            <div className="circle circle_bg">2</div>
            <p className='circle_para' data-aos="zoom-in">Gurushree Industries Pvt Ltd., Manufacture & supply of Ferro Vanadium, Ferro Moly and Calcined Dolomite</p>
          </Link>

          <Link to='/buildcon' className="circle_card" data-aos="flip-left" style={{ textDecoration: "none", color: "black" }}>
            <div className="circle circle_bg1">3</div>
            <p className='circle_para' data-aos="zoom-in">Gurushree Buildcon Pvt Ltd, Civil construction activities</p>
          </Link>

          <Link to='/associates' className="circle_card" data-aos="flip-left" style={{ textDecoration: "none", color: "black" }}>
            <div className="circle circle_bg2">4</div>
            <p className='circle_para' data-aos="zoom-in">Elite Associates, Real Estate business</p>
          </Link>

        </div>
      </section>

      {/* Our Vision Section */}

      <section className='our-vision-bg'>
        <h1 className="our_vision_head" data-aos="fade-up">
          Our Vision
        </h1>
        <div className="fullimg">
          <img src="images/About/ourmission.png" alt="" />
        </div>

        <div className="vision_card_container">
          <div className="vision_card" data-aos="zoom-out-right">
            <h3 className='vision_head'>Core Purpose</h3>
            <p className='vision_para'>To help leading enterprises
              more competent productive
              & satisfied</p>

          </div>

          <div className="vision_card1" data-aos="zoom-out-up">

            <h3 className='vision_head'>Core Values </h3>
            <ul>
              <li>We work with passion</li>
              <li>We believe in excellence</li>
              <li>We put customer first</li>
            </ul>
          </div>

          <div className="vision_card2" data-aos="zoom-out-left">
            <h3 className='vision_head'>BHAG <br /> <span>(Mount Everest Goal)</span> </h3>
            <p className='vision_para'>Gurushree Group to achieve annual turnoverof rs 10.000 cr by 15’th August 2041</p>

          </div>
        </div>
      </section>

      <section className='team-section'>
        <div className="our_team_head" data-aos="fade-up">
          <h1 className='h1'>Core Members</h1>
          <div className="our_team_line"></div>
        </div>
        <br />
        <div>
          <div className="core_members_container">
            <div className="core_members">
              <div className="member1" data-aos="flip-left">
                <img className='avatar_img' src="images/Home/avatar1.png" alt="" />
                <p>Nanak Bansal <br />
                  Chief Managing Director</p>
              </div>

              <div className="borderimg">
                <img src="images/About/leftborder.png" />
              </div>

              <div className="members_info">
                <p data-aos="zoom-in"> Progress for me has never been a dream. It has always been a distant reality
                  and once one milestone is achieved, there is always another one waiting to be crossed.
                  It is with this belief that I started Gurushree Minerals Pvt. Ltd. in 2006, a company that
                  is in the business of Mining &amp; Production of High Dolomite. Almost instantly, Gurushree Minerals Pvt.
                  Ltd. became a prominent name in its business segment, but like every entrepreneur sticks to their dream;
                  I always wanted to push my company to more prosperous milestones. Taking a path less traveled,
                  I expanded Gurushree into Gurushree Industries Pvt. Ltd., a highly sensitive business that requires a high amount of
                  technical know-how, expertise and specialized knowledge. Overcoming challenge after challenge with the support
                  of my brilliant team, I have been successful in bringing Gurushree Group to a new milestone of global recognition.
                  The journey of Gurushree Group is never ending. But with the support of my team and clients,
                  I am confident that the company will continue to scale milestones of excellence for years to come.

                </p>

              </div>
            </div>
            <div className="core_members">
              <div className="member1" data-aos="flip-left">
                <img className='avatar_img' src="images/Home/avatar1.png" alt="" />
                <p>Mukesh Bansal <br />
                  Managing Director</p>
              </div>

              <div className="borderimg" >
                <img src="images/About/leftborder.png" />
              </div>

              <div className="members_info">
                <br />
                <p data-aos="zoom-in">  Gurushree Group is an ISO 9001:2015 certified company and it has been established with a core values of Work with passion , We believe in Excellence & We put Customer First. Our aim is to continually improve our products and services. We know that learning is a life long continues process hence we keep on learning and translating our newly acquired knowledge by coming out with new product and building the team"

                  For the last two decades, Gurushree has provided  many products to our customers in Steel Industry in the region. Thus we have witnessed consistent growth. Our key strategic imperative now is to shift our focus in providing solutions to the end users . We shall work continuously to provide our customers with service and quality products at a competitive price. We pride ourselves on being the customer’s first choice.

                  Gurushree management team is committed to our company’s core values which are behind Gurushree's success for all these years. We expect that same commitment from our employees and business partners and stakeholders.
                  Regards

                </p>
              </div>
            </div>
          </div>

          {/* <div class="our_team">
            <div class="our_team_card">
              <div class="our_team_img" data-aos="flip-left">
                <img src="images/About/img.png" className='team-img' />
                <div className='team_info'>
                  <p>Nanak Bansal</p>
                  <span>Chief Managing Director</span>
                </div>
              </div>
              <p className='team-text' data-aos="zoom-in">

                Progress for me has never been a dream. It has always been a distant reality
                and once one milestone is achieved, there is always another one waiting to be crossed.
                It is with this belief that I started Gurushree Minerals Pvt. Ltd. in 2006, a company that
                is in the business of Mining &amp; Production of High Dolomite. Almost instantly, Gurushree Minerals Pvt.
                Ltd. became a prominent name in its business segment, but like every entrepreneur sticks to their dream;
                I always wanted to push my company to more prosperous milestones. Taking a path less traveled,
                I expanded Gurushree into Gurushree Industries Pvt. Ltd., a highly sensitive business that requires a high amount of
                technical know-how, expertise and specialized knowledge. Overcoming challenge after challenge with the support
                of my brilliant team, I have been successful in bringing Gurushree Group to a new milestone of global recognition.
                The journey of Gurushree Group is never ending. But with the support of my team and clients,
                I am confident that the company will continue to scale milestones of excellence for years to come.

              </p>
            </div>
            <div class="our_team_card">
              <div class="our_team_img" data-aos="flip-left">
                <img src="images/About/client3.png" className='team-img' />
                <div className='team_info'>
                  <p>Mukesh Bansal</p>
                  <span>Managing Director</span>
                </div>
              </div>
              <p className='team-text' data-aos="zoom-in">

                “Clients are our true assets and we prioritize all our efforts towards building long and sustainable relationship with them.”
                <br />
                <br />

                “Quality is never a short-term goal, but a life-long commitment – an immovable foundation on which depend the company’s current existence, continued survival and future growth potential.”
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
           
          </div> */}


          <div>
            <div className="our_team_head" data-aos="fade-up" style={{ "marginTop": "50px" }}>
              <h1 className='h1'>Our Certificates</h1>
              <div className="our_team_line"></div>
            </div>
            <div className="imagecertificate">

              <Carousel cols={3} rows={1} gap={20} showDots={true} loop={true} autoplay={5000} dotColorActive="#E39825">
                {isImagefile.map((data, index) => {
                  return (
                    <Carousel.Item >

                      <img src={data.image} alt="" className="crousel_img" />

                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </div>
            <div>
            </div>
          </div>
          <br />
        </div>
      </section>
    </div>
  );
}

export default About;
