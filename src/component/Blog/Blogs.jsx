import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Navbar from '../Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import axiosInstance from '../../helper/axiosInstance';
import { BACKENDURL } from '../../config'

function Blogs() {
    const [isBlogdata, setisBlogdata] = useState([]);
    const [isBlogId, setisBlogId] = useState(0);

    React.useEffect(() => {
        getallblog()
    }, []);

    const getallblog = () => {
        axiosInstance.get('admin/Blog').then((res) => {
            try {
                setisBlogdata(res.data.data)

            } catch (error) {
                alert(error.toString());

            }
        })

    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div>

            <div>
                <div className="mx-5 my-4" data-aos="fade-in">
                    <p className='blog-header'>Blogs</p>
                    <div className="blogs-line"></div>
                </div>
                {
                    isBlogdata && isBlogdata.length !== 0 &&
                    <div className="blog-space">
                        <div className="blog_image">
                            <img src={BACKENDURL + isBlogdata[isBlogId].BLOG_IMAGE} className='blog-img' data-aos="flip-left" />
                        </div>
                        <div className='blog-p-content' data-aos="fade-left">
                            <h4>{isBlogdata[isBlogId].BLOG_NAME}</h4>
                            <p>{isBlogdata[isBlogId].BLOG_CONTANT}</p>
                        </div>
                    </div>

                }

                <div data-aos="flip-down">
                    <h1 className='blog-categorie  mx-5 my-5'>Categorie</h1>
                </div>
                <div className='blog-space1' data-aos="fade-right">
                    {
                        isBlogdata && isBlogdata.length !== 0 && isBlogdata.map((data, index) => <img src={BACKENDURL + data.BLOG_IMAGE} onClick={() => setisBlogId(index)} />)
                    }

                </div>
            </div>
        </div>
    )
}
export default Blogs;