import React, { useState } from "react";
import TestimonialCarousel from "../Carousels/TestimonialCarousel/TestimonialCarousel";
import VideoCarousel from "../Carousels/VideoCarousel/VideoCarousel";
import Navbar from "../Navbar/Navbar";
import './Client.css'


function Client() {
	return (

		<div>
			<div className="Spring3d testimonial-bg">
				<div className="Spring3d-He">
					<h1>Testimonial</h1>
					<div className="what-about-line"></div>
				</div>
				<TestimonialCarousel />
			</div>
			<div className="VideoTestimonials-Carousel03">
				<div className="VideoTestimonials-Carousel03-Header">
					<h1>Video Testimonials</h1>
					<div className="video-line"></div>
					<div className="what-about-line1"></div>
					<VideoCarousel />
				</div>
			</div>
		</div>
	)
}
export default Client;