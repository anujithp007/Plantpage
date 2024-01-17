import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slider2.css';


const Slider2 = () => {
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    }
  ];
  return (
    <>
      <div className='slide-head'>
        <span>OUR SHOP</span>
        <h3>Here are the best seller <br />
          from our varieties</h3>
        <input type="button" value="See All" />
      </div>

      {/* slider */}

      <div className='slides'>

        <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
          <div className='first-slide'>

            <p className=' plant-prize '>Fiddle-leaf fig</p>
          </div>

          <div className='second-slide'
          >

            <p className=' plant-prize '>Aloe vera</p>


          </div>
          <div className='third-slide'
          >

            <p className=' plant-prize '>Strelitzia nicolai</p>


          </div>
          <div className='fourth-slide'
          >


            <p className=' plant-prize '>Ficus microcarpa</p>




          </div>


        </Slide>

      </div>

    </>
  )
}

export default Slider2
