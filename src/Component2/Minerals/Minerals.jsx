import * as React from 'react'
import Navbar from '../../component/Navbar/Navbar';
import './Minerals.css'



export default function Minerals() {

    React.useEffect(() => {
        window.scrollTo(0, 600);
    }, []);
    return (
        <>
            <div>
        <Navbar />
        <div className="header_img_div">
          <img src="images/Component2/Image 7.jpg" className="header-header-bg_style" />
        </div>
        <div class="text-block_style">
          <div className="header-title" data-aos="fade-right">
            <h1 className="header-title-h1_style">Gurushree Minerals Pvt. Ltd.</h1>
          </div>
        </div>
        <center>
        </center>
      </div>
            <div className='minerals'>
                <br />
                <h2>M/s Gurushree Minerals Pvt. Ltd.</h2>
                <div className="section1">
                    <img src="images/Component2/gatewala.jpeg" className='gatewala_img' alt="" />
                    <p>Gurushree Minerals Pvt. Ltd. is one of the major dolomite suppliers in the region and we supply processed dolomite ores to all major integrated steel manufacturing units in the region. The dolomite we supply are of very high grade and low in silica. Our mines are located at Baradwar, District Janjgir Champa, Chattishgarh</p>
                </div>

                <p> We provide Rake loading options for bulk supply of Dolomite. Our nearest rake point is Baradwar (BUA) and Barasuar Goods Shed Line NO.04- (PSBD), which is on the main line between Kolkata and Mumbai</p>

                <div className="slider">
                    <div className="slide_track">
                        <div className="slide">
                            <img src="images/Component2/Image 3.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/mineralsentry.jpeg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/cruser.jpeg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/sideminerla.jpeg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/Image 7.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/Image 8.png" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/Image 10.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/Image 12.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/Image 3.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/mineralsentry.jpeg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/cruser.jpeg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/sideminerla.jpeg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/Image 7.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/Image 8.png" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/Image 10.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/Image 12.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/Image 3.jpg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/mineralsentry.jpeg" alt="" className='sliding_img' />
                        </div>
                        <div className="slide">
                            <img src="images/Component2/cruser.jpeg" alt="" className='sliding_img' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
