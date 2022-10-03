import * as React from 'react'
import './Industries.css'



export default function Industries() {

    React.useEffect(() => {
        window.scrollTo(0,600);
      }, []);
    return (
        <>
            <div className='industries'>
                <br />
                <h2>M/s Gurushree Industries Pvt. Ltd.</h2>
                <div className="section1">
                    <img src="images/Component2/industries.jpeg" className='industry_into_img' alt="" />
                    <p>Gurushree Industries Pvt. Ltd. is an upcoming concern established in the year 2016 and has started
                        production with main objective of providing finest grade of Calcined Dolomite, Ferro Vanadium, Ferro
                        Molybdenum, Vanadium Pentoxide & Ammonium Meta Vanadate for use in Iron & Steel Industry.
                        Within a short span of time Gurushree Industries has been able to establish itself as a major supplier of
                        Calcined Dolomite in the region.</p>

                </div>
                <br />
                <br />

                <div className="slider">
                    <div className="slide_track">
                        <div className="slide">
                            <img src="images/Component2/Image 11.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/Image 2.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/Image 3.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/Image 4.jpg" alt="" className='sliding_img' />
                        </div>



                        <div className="slide">
                            <img src="images/Component2/Image 5.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                        <img src="images/Component2/Image 6.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                        <img src="images/Component2/Image 2.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                        <img src="images/Component2/Image 3.jpg" alt="" className='sliding_img' />
                        </div>


                        <div className="slide">
                            <img src="images/Component2/Image 4.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                        <img src="images/Component2/Image 5.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                        <img src="images/Component2/Image 6.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                        <img src="images/Component2/Image 11.jpg" alt="" className='sliding_img' />
                        </div>


                        <div className="slide">
                            <img src="images/Component2/Image 2.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                        <img src="images/Component2/Image 3.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                        <img src="images/Component2/Image 4.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                        <img src="images/Component2/Image 5.jpg" alt="" className='sliding_img' />
                        </div>


                        <div className="slide">
                            <img src="images/Component2/Image 6.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                        <img src="images/Component2/Image 11.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                        <img src="images/Component2/Image 2.jpg" alt="" className='sliding_img' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
