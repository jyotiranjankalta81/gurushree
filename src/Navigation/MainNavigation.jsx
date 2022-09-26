
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "../component/About/About";
import Career from "../component/Career/Career";
import Contact from "../component/Contact/Contact";
import Home from "../component/Home/Home";
import Product from "../component/Product/Product";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Business from "../component/Business/Business";
import Client from "../component/Client/Client";
import Blog from "../component/Blog/Blogs"
import LatestUpdate from "../component/LatestUpdate/LatestUpdate";
import Minerals from "../Component2/Minerals/Minerals";
import Industries from "../Component2/Industries/Industries";
import Buildcon from "../Component2/Buildcon/Buildcon";
import Associates from "../Component2/Associates/Associates";
import Dropdown from "../component/Navbar/Dropdown";
import ScrollToTop from "../component/ScrollToTop";



function MainNavigation() {
    return (
        <div className="main">
            <Router>
                <ScrollToTop/>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/aboutus" element={<About />} />
                    <Route exact path="/client" element={<Client />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/career" element={<Career />} />
                    <Route exact path="/dropdown" element={<Dropdown />} />

<Route exact path="/product" element={<Product />} />
                    <Route exact path="/business" element={<Business />} />
                    <Route exact path="/vlog" element={<Blog />} />
                    <Route exact path="/latest-updates" element={<LatestUpdate />} />
                    <Route exact path="/minerals" element={<Minerals />} />
                    <Route exact path="/industries" element={<Industries />} />
                    <Route exact path="/buildcon" element={<Buildcon />} />
                    <Route exact path="/associates" element={<Associates />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default MainNavigation;
