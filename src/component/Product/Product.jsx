import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Product.css";
import Button from '@mui/material/Button';
import Datas from "./Data"
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";


const images = [
  "images/Product/productbg1.png",
  "images/Product/productbg2.png",
  "images/Product/productbg3.png",
  "images/Product/productbg4.png",
  "images/Product/productbg5.png",
  "images/Product/productbg6.png",
  "images/Product/productbg7.png",
];

function Product() {

  // useEffect(() => {
  //   window.scrollTo(0,600);
  // }, []);
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
    }, 3000)

    return () => clearInterval(intervalId);
  }, [currentIndex])



  return (
    <>
      <div>
        <Navbar />
        <div className="header_img_div">
          <img src="images/Product/productbg.png" className="header-header-bg_style" />
          <div className="circle_about">Products</div>
        </div>
        <div class="text-block_style">
          <div className="header-title" data-aos="fade-right">
            <h1 className="header-title-h1_style"></h1>
          </div>
        </div>
        <center>
        </center>
      </div>
      {/* ------------header section--------- */}



      {/*---------------- Production section----------- */}
      <section className="product-margin">
        <h3 data-aos="fade-down-left">Gurushree Minerals Pvt. Ltd.</h3>
        {/* <h3 data-aos="fade-down-right"><b>Dolomite</b></h3> */}
        <div className="pro-sec">
          <div className="des-sec">
            <div className="sphare" data-aos="fade-down-right"></div>
            <div className='pro_btn' data-aos="fade-down-left"><Button><b>Dolomite</b></Button> </div>
          </div>
          {/* <br /> */}
          <div className="des-sec" data-aos="fade-down-left">
            <div className="verticle-line"></div>
            <div className="product-description">
              <p>Dolomite is one of the main inputs other than iron ore and coal in the production of Iron & Steel. In blast furnace, dolomite is used as a flux. It is used as a de-sulfuring agent in DRI Process. It is also used in Sinter Plant and in the Iron Pellet making process. The Dolomite mined from our mines is sized at our crusher plant so as to produce the desired sizes as per requirement of plants. Some of the basic sizes used by plants are 10-40 MM, 40-80 MM, 2-8 MM, 30-60 MM & 0-6 MM.</p>
              <img src="images/Product/dolomite.jpg" alt="" />
            </div>
          </div>
        </div>
        <h3 data-aos="fade-down-left">Gurushree Industries Pvt. Ltd.</h3>
        <h3 data-aos="fade-down-right"><b>Noble Ferro Alloys</b></h3>
        {Datas.map((product) => (
          <div className="pro-sec">
            <div className="des-sec">
              <div className="sphare" data-aos="fade-down-right"></div>
              <div className='pro_btn' data-aos="fade-down-left"><Button> <b>{product.btnName} </b> </Button> </div>
            </div>
            {/* <br /> */}
            <div className="des-sec" data-aos="fade-down-left">
              <div className="verticle-line"></div>
              <div className="product-description">
                <p>{product.description}</p>
                <img src={product.images} alt="" />
              </div>
            </div>
          </div>
        ))}

<h3 data-aos="fade-down-left">Gurushree Industries Pvt. Ltd.</h3>
        {/* <h3 data-aos="fade-down-right"><b>Dolomite</b></h3> */}
        <div className="pro-sec">
          <div className="des-sec">
            <div className="sphare" data-aos="fade-down-right"></div>
            <div className='pro_btn' data-aos="fade-down-left"><Button><b>Calcined Dolomite</b></Button> </div>
          </div>
          {/* <br /> */}
          <div className="des-sec" data-aos="fade-down-left">
            <div className="verticle-line"></div>
            <div className="product-description">
              {/* <p>Dolomite is one of the main inputs other than iron ore and coal in the production of Iron & Steel. In blast furnace, dolomite is used as a flux. It is used as a de-sulfuring agent in DRI Process. It is also used in Sinter Plant and in the Iron Pellet making process. The Dolomite mined from our mines is sized at our crusher plant so as to produce the desired sizes as per requirement of plants. Some of the basic sizes used by plants are 10-40 MM, 40-80 MM, 2-8 MM, 30-60 MM & 0-6 MM.</p> */}
              <p>Calcium and Magnesium oxide or Calcined Dolomite are obtained from dolomitic minerals such as Calcium Carbonate and Magnesium Ca Mg (CO3) 2, through the calcination process in vertical shaft Kilns. Calcined Dolomite is a material that plays an important role in the steel sector, both for its purifying action and for the protection of refractory linings.</p>
              <img src="images/Product/calcined.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Product;
