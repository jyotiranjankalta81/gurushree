
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Product.css";
import Button from '@mui/material/Button';

function Product() {
  const [productsData, setProductData] = useState([]);
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
        setProductData(data.data);
      });
  };
  useEffect(() => {
    getAPI("/data1.json");
  }, []);

  return (
    <div className="">
      {/* ------------header section--------- */}



      {/*---------------- Production section----------- */}
      <section className="product-margin">
        {productsData.map((product) => (
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
