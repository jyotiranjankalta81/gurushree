import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Business.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Business() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [Businessdata, setBusinessData] = useState([]);
  const [toggle, setToggle] = useState("1");
  const getAPI = (data) => {
    // console.log(data)
    fetch(data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBusinessData(data.Content);
      });
  };
  useEffect(() => {
    getAPI("/bussiness.json");
  }, []);


  return (
    <div className="">
      {/* <div className="business-header-bg">
        <Navbar />
        <img src="images/Header/dot1.png" className='business-dots-img' alt="" />
        <div className='business-nav-box'>
        </div>
        <div className='business-title'>
          <h1 className='business-title-h1'>
            Gurushree minrals Pvt.Ltd.
          </h1>
          <h3 className='business-title-detail'>Sophisticated mining by deploying
            <br /> state of the art machines
          </h3>
        </div>
        <center><img src="images/Header/dot2.png" alt="" className='text-center business-dot2-img' /></center>
      </div> */}

      {Businessdata.map(({ title, description, key, img, downSideContent, belowContent }) => {
        return (
          <>
            <div className="">
              {toggle === key ? (
                <div className="mx-5 my-5" data-aos="fade-in">

                  <p className="business-title">{title}</p>
                  <div className="business-title-line"></div>

                </div>
              ) : null}
            </div>
            <div className="">
              {toggle === key ? (
                <div className="business-content">
                  <div className="mining_img">
                    <img src={img} key={key} className="business-img" data-aos="zoom-in-right" />
                  </div>
                  <div className="mining_content" data-aos="fade-left">
                    <p className="business-img-content">{description}</p>
                    <p className="business-img-content">{downSideContent}</p>
                  </div>
                </div>
                
              ) : null}
              
              
            </div>
            



          </>
        );
      })}
      <div className="mining_container">
              <p className="business-img-content">Supplying our products is a job we undertake with full responsibility, and we thus also provide rake loading options for bulk orders. The nearest rake point is Baradwar, Chhattisgarh which is on the main railway line between Kolkata and Mumbai</p>
              </div>

      <div className="business-img-div">
        {Businessdata.map(({ key, img, title }) => {
          return (
            <>
              <div className="product_container1">
                <img src={img} onClick={() => setToggle(key)} data-aos="flip-right" />
                <p className="business-title">{title}</p>
              </div>

            </>
          );
        })}
      </div>
    </div>
  );
}
export default Business;
