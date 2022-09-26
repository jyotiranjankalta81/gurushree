
import './TestimonialCarousel.css';
import React, { useEffect, useRef, useState } from 'react';


function TestimonialCarousel() {
    const [card1, setCard1] = useState(0);
    const [card2, setCard2] = useState(1);
    const [card3, setCard3] = useState(2)
    const [testmonialContents, setTestimonialContents] = useState([])
    const cardRef = useRef(null)

    
    const getAPI = (data) => {
        fetch(data, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTestimonialContents(data.client);
                console.log(data.client)
            });
    };
    useEffect(() => {
        getAPI("/Testimonail.json");
    }, []);


    const navigateCard = (dir) => {
        cardRef.current.style.opacity = 0;
        cardRef.current.style.transform = 'translateY(-5%)'
        if (dir === 1) {
            if (card2 === 1) {
                setCard1(2)
                setCard2(0)
                setCard3(1)
            } else if (card2 === 0) {
                setCard1(1)
                setCard2(2)
                setCard3(0)
            } else {
                setCard1(0)
                setCard2(1)
                setCard3(2)
            }
        } else {
            if (card2 === 1) {
                setCard1(1)
                setCard2(2)
                setCard3(0)
            } else if (card2 === 2) {
                setCard1(2)
                setCard2(0)
                setCard3(1)
            } else {
                setCard1(0)
                setCard2(1)
                setCard3(2)
            }
        }
        setTimeout(() => {
            cardRef.current.style.opacity = 1;
            cardRef.current.style.transform = 'translateY(0)'
        }, 300)
        console.log("hello")
    }
    return (
        <>
    
            {
                testmonialContents && testmonialContents[0] &&
                <div className="testimonial-carousel-container">
                    <img src={testmonialContents[card1].path} alt="" className="static-avatar" />
                    <div className="testimonial-card" ref={cardRef}>
                        <img src={testmonialContents[card2].path} alt="" className="static-avatar" />
                        <h1>{testmonialContents[card2].clientName}</h1>
                        <p className="">
                            {testmonialContents[card2].description}
                        </p>
                        <div className="arrows-wrapper">
                            <img src='images/Client/Arrow1.png' alt="" onClick={() => navigateCard(1)} className="arrows" />
                            <img src='images/Client/Arrow2.png' alt="" onClick={() => navigateCard(-1)} className="arrows" />
                        </div>
                    </div>
                    <img src={testmonialContents[card3].path} alt="" className="static-avatar" />
                </div>
            }
     
        </>
    )
}
export default TestimonialCarousel;