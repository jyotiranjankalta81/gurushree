import React, { useRef, useEffect, useState } from 'react'
import './VideoCarousel.css'
import ReactPlayer from "react-player";
import {Carousel} from "3d-react-carousal";

function VideoCrousel() {
    const [videoSlides, setVideoSlides] = useState([]);
    const callback = function(index){
        console.log("callback",index);
    }

    let slides = [
       
    <ReactPlayer url='https://www.youtube.com/watch?v=jUD_hvfERfI' className="react-player" />,
    <ReactPlayer url='https://www.youtube.com/watch?v=jUD_hvfERfI' className="react-player" />,
    <ReactPlayer url='https://www.youtube.com/watch?v=jUD_hvfERfI' className="react-player" />,
    <ReactPlayer url='https://www.youtube.com/watch?v=jUD_hvfERfI' className="react-player" />,
    <ReactPlayer url='https://www.youtube.com/watch?v=jUD_hvfERfI' className="react-player" />,

];

    return (
        <div className="Testimonial3dCarousel-Container">
            <div className="Testimonial3dCarousel">
                <Carousel slides={slides}  onSlideChange={callback} arrows={false}/>
            </div>
        </div>
    );
}
export default VideoCrousel;