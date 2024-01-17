import React from 'react'
import Navigation from './Navigation'
import Firstbody from './Firstbody'
import Photoslide from './Photoslide'
import Slider2 from './Slider2'
import Review from './Review'
import Instagram from './Instagram'
import Footer from './Footer'


const App = () => {
  return (
    <div>
      <Navigation/>
      <Firstbody/>
      <div className='mt-5 '>

      <Photoslide/>
      </div>
      <Slider2/>
      <div className='pt-5 '>

      <Review/>
      </div>
      <div className='pt-5 '>
      <Instagram/>
      </div>
      <div>
        <Footer/>
      </div>
   
    </div>
  )
}

export default App
