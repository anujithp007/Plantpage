import React from 'react'
import img2 from './img3.jpg.png'
import './firstbody.css'

const Firstbody = () => {
    return (
        <>
        <div className='main-div1 w-100 align-items-center container pt-2  '>
            <div className='left-div1 w-50 '>
                <h1>Best house <br />
                    plants varieties.</h1>
                   <input type="button" value="Shop Now" className='mt-2 shop1-btn' />
                <p className='p1 pt-1 '>Beautiful living greenery for <br /> homes and offices</p>
                <p className='p2 '>Wer've been mentioned in the press</p>
                <div className=' bloomberg   '>
                    <h2>Bloomberg</h2>
                    <h2>Forbes</h2>
                </div>
            </div>
            <div className='img1'>

            <img src={img2} alt=""  />
            </div>
            
        </div>
        {/* second paragraph */}
        <div className='main-div2 pt-5 '>
            <p className='p1'>Each houseplant set is handled quickly and safely <br/>
before being sent to your destination in specially <br />
designed insulated packaging.</p>
<p className='p2 '>Learn how ve take care of your plant <br/>
at every stage of its journey from our <br />
greenhouse to your home.</p>
        </div>
            <h5 className='text-center yuu'>Learn More ▶</h5>
          
        
</>
    )
}

export default Firstbody
