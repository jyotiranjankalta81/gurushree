import React, { useState, useEffect } from 'react';
import './Career.css';
import Navbar from '../Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import axiosInstance from '../../helper/axiosInstance';

function Career() {
  const [isName, setisName] = useState(null);
  const [isEmailid, setisEmailid] = useState(null);
  const [isResume, setisResume] = useState(null)

  const onhandlesubmit = () => {
    if (!isName) {
      alert("please enter your name!!");
    } if (!isEmailid) {
      alert("please enter your Wmail!!");
    } if (!isResume) {
      alert("pleaseplease upload your resume!!");
    }


    const formdata = new FormData();
    formdata.append('CAREER_PERSON_NAME', isName)
    formdata.append('CAREER_PERSON_EMAIL', isEmailid)
    formdata.append('CAREER_PERSON_RESUME', isResume)

    axiosInstance.post('admin/career', formdata).then(res => {

      try {
        alert(res.data.message);
        setisName(null)
        setisEmailid(null)
        setisResume(null)
      } catch (error) {
        alert('somthing went wrong!!');

      }
    })


    console.log()

  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="header_img_div">
          <img src="images/Component2/Image 1.jpg" className="header-header-bg_style" />
        </div>
        <div class="text-block_style">
          <div className="header-title" data-aos="fade-right">
            <h1 className="header-title-h1_style">CAREER</h1>
          </div>
        </div>
        <center>
        </center>
      </div>
      <div className="career-h1" data-aos="fade-down">
        <h1>CAREERS</h1>
        <div className="career-line"></div>
      </div>
      <div class="career_card_container">

        <div className="career_img" data-aos="fade-right">
          <img src="images/Career/Arrow.png" alt='' />
          <img src="images/Career/Arrow1.png" alt='' />
        </div>

        <div class="card-con" data-aos="fade-down-right">
          <p className="card-text">Gurushree Group is proud of its man power, who represent different backgrounds and cultures with work passion, energy and motivation. Empowering them to explore new challenges and opportunities is something the company encourages, which leads to smart, confident and informed employees.
          </p>
        </div>
        <div class="card-con career_card_bg1" data-aos="fade-down-left">
          <p className="card-text">We believe in giving every person an equal chance and strictly condemn any form of discrimination. Our HR policy is very simple and straightforward − establishing an honest and enriching work environment for each individual. Our team comprises of 400 members, inclusive of senior, mid, junior level employees; skilled, semi-skilled and unskilled workers.
          </p>
        </div>

      </div>
      <div class="career_card_container">

        <div className="career_img" data-aos="fade-right">
          <img src="images/Career/Arrow.png" alt='' />
          <img src="images/Career/Arrow1.png" alt='' />
        </div>

        <div class="card-con career_card_bg2" data-aos="fade-up-right">
          <p className="card-text">In line with the company vision, we look forward for the persons to meet our requirements. With a decade of dedicated service to the sector, we have plans of reaching across and touching the sky, with people who are ready to touch the stars too.
          </p>

        </div>
        <div class="card-con career_card_bg3" data-aos="fade-up-left">
          <p className="card-text">If you are interested in working with us please email your current resume at hr@gsmpl.net or contact us at 7771012602 between time slot 10:00am to 6:00pm.
          </p>
        </div>

      </div>




      <section className='contact-career-form career-contact'>
        <div>
          <div className="mt-5">
            <div class="submit_container" data-aos="zoom-out-up">
              <h1 className="submit-text">Submit Resume</h1>
              <form action="">
                <input type="name" style={{ 'color': 'white' }} onChange={e => setisName(e.target.value)} id="form5Example21" className=" career-contact-name text-center" placeholder='Name' /> <br />
                <input type="email" style={{ 'color': 'white' }} onChange={e => setisEmailid(e.target.value)} id="form5Example21" className=" career-contact-name text-center career-border-input" placeholder='Email Id' />
                <div class="fileupload career-contact-name text-center upload-border submit-box mt-4">
                  <input type="file" onChange={(e) => setisResume(e.target.files[0])} className=' text-white ' placeholder=' Submit Your Resume' />
                  <img src="images/Career/upload.png" alt="" className='upload' />   Sumit your resume
                </div>

                <button type='button' onClick={onhandlesubmit} className='w-5 btn-color btn-subscribe  mt-3 sub-btn' data-aos="zoom-out">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default Career;
