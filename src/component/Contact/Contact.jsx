import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axiosInstance from "../../helper/axiosInstance";

function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email && !textarea) {
      alert("all fields are menditory")
    }
    else {
      axiosInstance.post('admin/contacts', {
        CONTACT_NAME: name,
        CONTACT_EMAIL: email,
        CONTACT_MESSAGE: textarea,
      }).then(res => {
        try {
          if (res.data.status === 1) {
            alert(res.data.message);
            window.location.reload();
          }
        } catch (error) {
          console.log(error);

        }
      });
    }
  }
  return (
    <section className="contactus-form " data-aos="flip-left">
      <div className="form-fields" data-aos="fade-up-right">
        <div className="left-arrow"> </div>
        <span className="want-span">Want us to contact you</span>
        <br />
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control shadow-none"
            id="exampleFormControlInput1"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="form-control shadow-none"
            id="email"
            placeholder="Email id"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="form-control shadow-none"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
            onChange={(e) => setTextarea(e.target.value)}>

          </textarea>

          <div className="subscribe">
            <button type="button" onClick={handleSubmit} className="submit-btn" data-aos="flip-up">Submit</button>
          </div>


          <div className="contactsection">

            <div className="contactus-phone">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.34417 8.34042C5.72417 11.0525 7.9475 13.2758 10.6596 14.6558L12.7679 12.5475C13.0362 12.2792 13.41 12.2025 13.7454 12.3079C14.8188 12.6625 15.9688 12.8542 17.1667 12.8542C17.4208 12.8542 17.6646 12.9551 17.8443 13.1349C18.024 13.3146 18.125 13.5583 18.125 13.8125V17.1667C18.125 17.4208 18.024 17.6646 17.8443 17.8443C17.6646 18.024 17.4208 18.125 17.1667 18.125C12.8458 18.125 8.702 16.4086 5.64672 13.3533C2.59144 10.298 0.875 6.15415 0.875 1.83333C0.875 1.57917 0.975967 1.33541 1.15569 1.15569C1.33541 0.975967 1.57917 0.875 1.83333 0.875H5.1875C5.44167 0.875 5.68542 0.975967 5.86514 1.15569C6.04487 1.33541 6.14583 1.57917 6.14583 1.83333C6.14583 3.03125 6.3375 4.18125 6.69208 5.25458C6.7975 5.59 6.72083 5.96375 6.4525 6.23208L4.34417 8.34042Z" fill="#456BB4" />
              </svg>
              <a style={{ textDecoration: "none" }} href="tel:+91-7771012666"><p>+91-7771012666</p></a>
            </div>

            <div className="contactus-email">
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 4.33341L9.5 8.91675L2.5 4.33341V2.50008L9.5 7.08342L16.5 2.50008M16.5 0.666748H2.5C1.52875 0.666748 0.75 1.48258 0.75 2.50008V13.5001C0.75 13.9863 0.934374 14.4526 1.26256 14.7964C1.59075 15.1403 2.03587 15.3334 2.5 15.3334H16.5C16.9641 15.3334 17.4092 15.1403 17.7374 14.7964C18.0656 14.4526 18.25 13.9863 18.25 13.5001V2.50008C18.25 1.48258 17.4625 0.666748 16.5 0.666748Z" fill="#607B9C" />
              </svg>
              <a style={{ textDecoration: "none" }} href="mailto:contact@gurushree.in"><p > contact@gurushree.in </p></a>
            </div>

          </div>
        </form>
      </div>
      <div className="form-details">
        <div className="right-arrow">
        </div>
        <div className="contactus">
          <p data-aos="fade-down">Contact Us</p>
        </div>

        <div className="contacus-content" data-aos="fade-up-left">

          <div className="contactus-address">
            {/* <div className="contact-address-icon"> */}
            <img src="images/Footer/location.png" alt="address" />
            <div className="contact-address-address">
              <p>
                Shop No. 39-42, Ground Floor,
                <br />
                Krishna Crown
                <br />
                Chaitanya Nagar, Raigarh,
                <br />
                Chhattishgarh-496001
                <br />

              </p>

            </div>
          </div>
          <div className="contactus-address">
            <img src="images/Footer/location.png" alt="address" />
            <div className="contact-address-address">
              <p>
                Gurushree Minerals Pvt. Ltd
                <br />
                Vill : Amagolai, Basti Baradwar
                <br />
                Post: Naya Baradwar, Tehsil - Sakti,
                <br />
                Distt: Janjgir-Champa (C.G.)
                <br />

              </p>

            </div>
          </div>
          <div className="contactus-address">
            <img src="images/Footer/location.png" alt="address" />
            <div className="contact-address-address">
              <p>
                Gurushree Industries Pvt. Ltd.
                <br />
                Vill : Delari, Saraipali Road
                <br />
                Post: Gerwani,
                <br />
                Distt: Raigarh (C.G.)
                <br />

              </p>

            </div>

          </div>


        </div>
      </div>
    </section>

  );
}

export default Contact;
