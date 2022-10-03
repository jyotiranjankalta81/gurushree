import * as React from 'react'
import './Buildcon.css'



export default function Buildcon() {

    React.useEffect(() => {
        window.scrollTo(0,600);
      }, []);
    return (
        <>
            <div className='buildcon'>
                <br />
                <h2>M/s Gurushree Buildcon Pvt. Ltd.</h2>
                <div className="section1">
                    <img src="images/Component2/buildcon.png" alt="" />
                    <p>Gurushree Minerals owns a large inventory of Heavy Earthmoving & Construction equipment like
                        Excavators, Pay Loaders, Backhoe Loaders, Tippers, Breakers, Water Tankers, Trailers, Tractors, DG and
                        Pneumatic Drill which are available for its broad range of activities. Along with the broad range of
                        machinery we have well trained operators to operate the machines and also have technical manpower
                        for maintenance & up keeping of the machinery.</p>
                </div>
                <br />
                <br />

                <div className="imgsecion">
                    <img src="images/Component2/b1.png" alt="" />
                    <img src="images/Component2/b2.png" alt="" />
                    <img src="images/Component2/b3.png" alt="" />
                    <img src="images/Component2/b4.png" alt="" />
                </div>

            </div>
        </>
    )
}
