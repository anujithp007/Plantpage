import React from 'react'
import './instagram.css'
import img6 from './a.jpg'
import img7 from './b.jpg'
import img8 from './images.jpeg'
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';

const Instagram = () => {
  return (
 <>

<MDBContainer>
      <MDBRow>
        {/* Single Column for All Screen Sizes */}
        <MDBCol className='mb-4 mb-lg-0'>
          {/* Flex Container for Top Images */}
          <div className="d-flex mb-4">
            <div className="flex-fill me-2">
              <img
                src={img6}
                className='w-100 shadow-1-strong rounded mb-4 img6'
                alt='Boat on Calm Water'
              />
            </div>
            <div className="flex-fill">
              <img
                src={img7}
                className='w-100 shadow-1-strong rounded mb-4 img7'
                alt='Wintry Mountain Landscape'
              />
            </div>
          </div>

          {/* Bottom Image */}
          <div className>
            <div className='image-text'>

            <h1>Get inspired from <br />
our Instagram</h1>
        <p>If you use the hashtag #bioomey on Instagram,
well spotlight you.</p>
<div className='d-flex align-items-baseline checkitout   '>

    <h4>Check it out</h4>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill svg1" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>
    
    </div>
</div>
          <img
            src={img8}
            className='w-100 shadow-1-strong rounded mb-4 img8'
            
            />
            </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <div className='d-flex justify-content-around subscribe '>
        <p>
        Stay update with special offers, <br />
plant-parenting tips, and more.
        </p>
    <div className='sub-input'>

            <input type="email" placeholder='your email' />
            <input type="submit" value='Subscribe' className='sub-button' />
    </div>
    </div>
  

  
    </>
  )
}

export default Instagram
