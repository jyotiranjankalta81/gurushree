import React, { useState, useEffect } from "react";
import { Link, NavLink,useNavigate } from "react-router-dom";
import './Navbar.css';
import FeatherIcon from 'feather-icons-react';
import AOS from "aos";
import "aos/dist/aos.css";
import { StreetViewPanorama } from "@react-google-maps/api";
import Dropdown from "./Dropdown";


function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [popup, setPopup] = React.useState(false);

    const navigate = useNavigate();

    const handleIndustry = () => {
        navigate("/industries",{replace:"true"});
        window.location.reload();
    }
    const handleElite = () => {
        navigate("/associates",{replace:"true"});
        window.location.reload();
    }
    const handleMineral = () => {
        navigate("/minerals",{replace:"true"});
        window.location.reload();
    }

    const [view, setView] = useState(false);

    var getWidth = () => {
        if (window.innerWidth < 580) {
            return true;
        } else {
            return false;
        }
    }
    const handleOnClick = () => {
        setPopup(true);
    };


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (

        <nav className="navbar">
            <div 
            // data-aos="fade-right" 
            className="shadow"></div>
            <ul className={isMobile ? "nav-links-mobile navbar-links" : "navbar-links"} >
                <Link to='/'> <img src="images/Header/logo.png" className="header-dots-img" 
                // data-aos="fade-down"
                 alt="" /></Link>

                <div className="nav-item">
                    <NavLink className="nav-link" activeclassname="active" to="/" >Home</NavLink>
                </div>
                <div className="nav-item">
                    <div className="dropdown">
                        <div className="dropbtn">
                            {getWidth() ? (
                                <div style={{width:"100%"}}>
                                    <h3 style={{margin:"0%"}} className="nav-link" onClick={() => setPopup(true)} >About US</h3>
                                </div>
                            ) : (
                                <NavLink className="nav-link " to="/aboutus"  >About Us</NavLink>
                            )}
                        </div>
                        <div className="dropdown-content">
                            <p onClick={handleMineral}>M/s Gurushree Minerals Pvt. Ltd.</p>
                            <p onClick={handleIndustry}>M/s Gurushree Industries Pvt. Ltd.</p>
                            {/* <p>M/s Gurushree Buildcon Pvt. Ltd.</p> */}
                            <p onClick={handleElite}>M/s Elite Associates</p>
                        </div>
                    </div>
                    {/* {popup && <Dropdown Popup={setPopup} />} */}
                </div>
                <div className="nav-item ">
                    <NavLink className="nav-link " to="/product" >Our Products</NavLink>
                </div>
                <div className="nav-item ">
                    <NavLink className="nav-link " to="/career" >Career</NavLink>
                </div>
                <div className="nav-item ">
                    <NavLink className="nav-link " to="/contact" >Contact Us</NavLink>
                </div>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>{isMobile ? <i><FeatherIcon icon="x" /></i> : <i><FeatherIcon icon="menu" /></i>} </button>

        </nav>

    );
}

export default Navbar;
