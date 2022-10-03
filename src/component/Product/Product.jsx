
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Product.css";
import Button from '@mui/material/Button';
import Datas from "./Data"

function Product() {

  useEffect(() => {
    window.scrollTo(0,600);
  }, []);
  


  return (
    <div className="">
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
    </div>
  );
}

export default Product;
