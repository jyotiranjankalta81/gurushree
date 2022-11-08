import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./ourvision.css"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Footer from '../Footer/Footer';

const OurVision = () => {
    return (
        <>
            <Navbar />
            {/* <div className="header_img_div">
                <img src="images/Header/ourvisionbg.png" className="header-header-bg_style" />
                <div className="circle_about">Our Vision</div>
            </div> */}


            <section className="our_vision_cont">
                <div className="ourvisionline">

                    {/* <img src="images/Footer/logo_footer_new.jpeg" className='gurushree_img' data-aos="fade-down" alt="" /> */}
                    <div className="logo_in_vision">
                        <img src="images/Footer/logo_footer_new.jpeg" className='gurushree_img' data-aos="fade-down" alt="" />
                    </div>
                    <h2><b>GURUSHREE GROUP</b></h2>
                    <h1>VISION 2041</h1>
                    {/* <div className="vision_underline"></div> */}
                </div>
                <br />
                <div className="our_vision">
                    <div className="img_section">
                        <div data-aos="fade-right">
                            <img src="images/Career/Arrow.png" alt="" />
                            <img src="images/Career/Arrow1.png" alt="" />
                        </div>
                    </div>

                    <div className="cards_ourvision">
                        <div className="our_vision_card1" data-aos="fade-left">
                            <h3 className="vision_inside_heading" >Core Purpose</h3>
                            <p className="vision_inside_para">
                                <FormatQuoteIcon sx={{ transform: "rotate(180deg)", mt: -1.2 }} />
                                To help leading Enterprises become more competent, <br /> Productive  &amp; Satisfied.
                                <FormatQuoteIcon sx={{ mt: -1.2 }} />
                            </p>
                            <div className="our_vision_img1"></div>
                        </div>

                        <div className="our_vision_card2" data-aos="fade-down-left">
                            <h3 className="core_value_heading">Core Values</h3>
                            <p className="core_value_para">
                                <ul className="core_value_ul">
                                    <li>We Work with Passion</li>
                                    <li>We believe in Excellence</li>
                                    <li>We put Customer First</li>
                                </ul>
                            </p>
                            <div className="our_vision_img2"></div>
                        </div>

                        <div className="our_vision_card3" data-aos="fade-right">
                            <h3 className="vision_inside_heading">BHAG <br /> <span className="vision-goal">(Mount Everest Goal)</span> </h3>
                            <p className="vision_inside_para">
                                <FormatQuoteIcon sx={{ transform: "rotate(180deg)", mt: -1.2 }} />
                                Gurushree Group to achieve Annual Turnover of Rs. 10,000 Cr by 15’th August 2041.
                                <FormatQuoteIcon sx={{ mt: -1.2 }} />
                            </p>
                            <div className="our_vision_img3"></div>
                        </div>

                    </div>

                    <div className="img_section_new">
                        <div data-aos="fade-left">
                            <img src="images/Home/arrowrhs1.png" alt="" />
                            <img src="images/Home/arrowrhs2.png" alt="" />
                        </div>
                    </div>

                </div>
            </section>

            <Footer/>

        </>
    )
}

export default OurVision