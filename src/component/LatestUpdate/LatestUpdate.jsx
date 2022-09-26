import React, { useEffect, useState } from "react";
import Carousel from 'react-grid-carousel';
import './LatestUpdate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import axiosInstance from "../../helper/axiosInstance";
import { BACKENDURL } from '../../config'

const LatestUpdate = () => {
  const [ImgDetail, setImgDetail] = useState([]);
  const [toggle, setToggle] = useState("1");
  const [innertoggle, setInnerToggle] = useState("1");
  const [Galleryheight, setGalleryheight] = useState("150px");
  const [GalleryWidth, setGallerywidth] = useState("150px");

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
        console.log(data.new);
        setImgDetail(data.new);
      });
  };
  useEffect(() => {
    getAPI("/new.json");
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleImageStyle = (uniqueId) => {
    setInnerToggle(uniqueId)
    setGalleryheight("250px");
    setGallerywidth("250px")
    console.log(uniqueId);
  }



  const [isBlogdata, setisBlogdata] = useState([]);
  const [isBlogId, setisBlogId] = useState(0);


  React.useEffect(() => {
    getallblog()
  }, []);

  const getallblog = () => {
    axiosInstance.get('admin/LatestUpdate').then((res) => {
      try {
        setisBlogdata(res.data.data)

      } catch (error) {
        alert(error.toString());

      }
    })
  }




  return (
    <div>

      <section>
        <div className="mx-5 my-5">
          <p className='new-header' data-aos="fade-down">Latest Updates</p>
          <div className="new-line" data-aos="fade-down"></div>
        </div>
      </section>

      <Carousel cols={4} rows={1} gap={10} showDots={true} loop={true} autoplay={5000} dotColorActive="#E39825">
        {isBlogdata && isBlogdata.length !== 0 && isBlogdata.map((data, index) => {
          return (
            <Carousel.Item >
              <div className="carousel_img_div">
                <img src={BACKENDURL + data.LU_IMAGE} alt="" className="crousel_img" />
                <text className="new-carosel-text" >{data.LU_TITLE} </text>
                <button className="new-btn1" onClick={() => setisBlogId(index)} >View</button>
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>

      <div>
        <div>
          {isBlogdata && isBlogdata.length !== 0 ? (
            <div>
              <div className="new-space"  >
                <div className="newimg">
                  <img src={BACKENDURL + isBlogdata[isBlogId].LU_IMAGE} key={isBlogId} className='new-img' data-aos="flip-left" />
                </div>
                <div className='new-p-content' data-aos="flip-up">
                  <h5>{isBlogdata[isBlogId].LU_TITLE}</h5>
                  <p >{isBlogdata[isBlogId].LU_TEXT}</p>
                </div>
              </div>
            </div>
          ) : null}
          <div >
            {/* {toggle === id ? (
                <div className="row my-5">
                  <div className="col-2"> </div>
                  <div className="toggle-id-img col-4 toggle-id2-img">
                    {
                      gallery.map((img) => (
                        <>
                          {

                            innertoggle === img.galleryId ?
                             <img src={img.GalleryImage} key={img.galleryId} className='new-img' style={{ width: GalleryWidth, height: Galleryheight }} onClick={() => handleImageStyle(img.galleryId)} />
                              : 
                              <img src={img.GalleryImage} key={img.galleryId} className='new-img' onClick={() => handleImageStyle(img.galleryId)} style={{ width: 150, height: 150 }} />
                          }
                        </>
                      ))
                    }
                  </div>
                  <div className="col-2"></div>
                </div>
              ) : null} */}
          </div>
        </div>
      </div>

    </div>
  )
}
export default LatestUpdate;