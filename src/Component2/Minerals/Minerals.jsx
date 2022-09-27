import React from 'react'
import './Minerals.css'



export default function Minerals() {
    return (
        <>
            <div className='minerals'>
                <br />
                <h2>M/s Gurushree Minerals Pvt. Ltd.</h2>
                <div className="section1">
                    <img src="images/Component2/gatewala.jpeg" className='gatewala_img' alt="" />
                    <p>Gurushree Minerals Pvt. Ltd. is one of the major dolomite suppliers in the region and we supply processed dolomite ores to all major integrated steel manufacturing units in the region. The dolomite we supply are of very high grade and low in silica. Our mines are located at Baradwar, District Janjgir Champa, Chattishgarh</p>
                </div>

                <p> We provide Rake loading options for bulk supply of Dolomite. Our nearest rake point is Baradwar (BUA) and Barasuar Goods Shed Line NO.04- (PSBD), which is on the main line between Kolkata and Mumbai</p>

                <div className="imgsecion">
                    <div className='section_image1'>
                    {/* <img src="images/Component2/sideminerla.jpeg"  alt="" /> */}
                    </div>
                    <div className='section_image2'>
                    {/* <img src="images/Component2/cruser.jpeg" alt="" /> */}
                    </div>
                    <div className='section_image3'> 
                    {/* <img src="images/Component2/mine.jpeg" alt="" /> */}
                    </div>
                    <div className='section_image4'>
                    {/* <img src="images/Component2/crouselmineral.jpeg" alt="" /> */}
                    </div>
                </div>

            </div>
        </>
    )
}
