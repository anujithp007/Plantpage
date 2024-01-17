
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from './bhkb.png'
import img2 from './unsplash_ZSZ6wzNU12Q.jpg'
import img3 from './unsplash_YAPZt8wxMO4.jpg'
import './.photoslide.css'



const Photoslide = () => {
  return (
    <div>
       <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${img1})` }}>
                    <span></span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${img2})` }}>
                    <span></span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${img3})` }}>
                    <span></span>
                </div>
            </div>
        </Slide>
        <div className='slide-text'>
            <h2 >We put everything together</h2>
        </div>
    </div>
  )
}

export default Photoslide
