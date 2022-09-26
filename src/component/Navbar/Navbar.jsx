import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import FeatherIcon from 'feather-icons-react';
import AOS from "aos";
import "aos/dist/aos.css";
import { StreetViewPanorama } from "@react-google-maps/api";


function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const[view,setView]=useState(true);
    const handleView = ()=>{
        console.log(view)
        if (getwidth()){
            setView(true);

        }
    }
    var getwidth = () => {
        if (window.innerWidth < 580) {
          return true;
        } else {
          return false;
        }
      }
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (

        <nav className="navbar">
            <div data-aos="fade-right" className="shadow"></div>
            <ul className={isMobile ? "nav-links-mobile navbar-links" : "navbar-links"} onClick={() => { setIsMobile(false) }}>

                <Link to='/'> <img src="images/Header/logo.png" className="header-dots-img" data-aos="fade-down" alt="" /></Link>

                <li className="nav-item">
                    <NavLink className="nav-link" activeclassname="active" to="/" >Home</NavLink>
                </li>
                {/* <li className="nav-item ">
                    <NavLink className="nav-link " to="/aboutus" >About Us</NavLink>
                </li> */}
                <li className="nav-item">
                <div className=  "dropdown">
                    <button className="dropbtn">
                        <NavLink className="nav-link " to="/aboutus"  onClick={handleView}  >About Us</NavLink>
                    </button>
                    <div className= {view ? "dropdown-contents" : "dropdown-content"}>
                        <Link to="/minerals">M/s Gurushree Minerals Pvt. Ltd.</Link>
                        <Link to="/industries">M/s Gurushree Industries Pvt. Ltd.</Link>
                        <p>M/s Gurushree Buildcon Pvt. Ltd.</p>
                        <Link to="/associates">M/s Elite Associates</Link>
                    </div>
                </div>
                </li>

                <li className="nav-item ">
                    <NavLink className="nav-link " to="/product" >Our Products</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link " to="/career" >Career</NavLink>
                </li>


                {/* <li className="nav-item ">
                    <NavLink className="nav-link " to="/latest-updates" >Latest Updates</NavLink>
                </li> */}
                {/* <li className="nav-item "> */}

                {/* <div class="dropdown"> */}
                {/* <button class="dropbtn"> */}
                {/* <NavLink className="nav-link " to="/blogs" >Blogs</NavLink> */}
                {/* </button> */}
                {/* <div class="dropdown-content">
                            <Link to="/blogs">Mining</Link>
                            <Link to="/blogs">Production</Link>
                            <Link to="/blogs">Hiring Services</Link>
                            <Link to="/blogs">Real Estate</Link>
                        </div> */}
                {/* </div> */}
                {/* </li> */}
                <li className="nav-item ">
                    <NavLink className="nav-link " to="/contact" >Contact Us</NavLink>
                </li>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>{isMobile ? <i><FeatherIcon icon="x" /></i> : <i><FeatherIcon icon="menu" /></i>} </button>

        </nav>

    );
}

export default Navbar;
