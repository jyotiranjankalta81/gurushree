import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Product.css";
import Button from '@mui/material/Button';
import Datas from "./Data"

function Product() {

  // useEffect(() => {
  //   window.scrollTo(0,600);
  // }, []);
  


  return (
    <>
    <div>
        <Navbar />
        <div className="header_img_div">
          <img src="images/Product/productbg.png" className="header-header-bg_style" />
          <div className="circle_about">Product</div>
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
        {Datas.map((product) => (
          <div className="pro-sec">
            <div className="des-sec">
              <div className="sphare" data-aos="fade-down-right"></div>
              <div className='pro_btn' data-aos="fade-down-left"><Button>{product.btnName}</Button> </div>
            </div>
            <br />
            <div className="des-sec" data-aos="fade-down-left">
              <div className="verticle-line"></div>
              <div className="product-description">
                <p>{product.description}</p>
                <img src={product.images} alt="" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Product;
