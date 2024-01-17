import React from 'react'
import img5 from './Star 5.png'
import './review.css'

const Review = () => {
  return (
    <>
    <div className='d-flex justify-content-around main-review'>

    <div className='review'>
        <h3>
            REVIEWS
        </h3>
        <p>
        Shop with confidance by reading customer <br />
reviews given by individuals who have used <br />
Bioomey. Excelient quality and streamlined <br />
service are both offered here.
        </p>
        <div className='d-flex align-items-start  '>
            <img src={img5} alt="" />
            <img src={img5} alt="" />
            <img src={img5} alt="" />
            <img src={img5} alt="" />
            <img src={img5} alt="" />
            <p>5/5</p>
        </div>
        <p>2.479 reviews</p>
    </div>
    <p className='review-para'>
    We adore all our friends atBloomey,<br />
especially the beauties who have come <br/>
to live with us! Great advice when <br />
needed, beautifully and safely packaged. <br />
Highly recommend, it's just the best <br />
place for healthy plants and great value!
    </p>
    </div>

    <p className='name' >Pamela S. <br />
    California US</p>

    </>
  )
}

export default Review
