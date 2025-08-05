import React from 'react'
import Carouseleffect from './carousel/Carouseleffect'
import hero from '../assets/hero.png'
import '../pages/home.css'

function Home() {
  return (
   <div className='top_container'>
     <div className='hero_section container'>
      {/* <Carouseleffect/> */}
      <div className="row hero-container align-items-center">
        <div className="hero_detail-box col-lg-6 col-12 mb-4 mb-lg-0">
          <h1>
            Best way
            to fund
            your study
            abroad
          </h1>
          <p>
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam
          </p>
          <div className="hero_btn-continer">
            <a href="#" className="call_to-btn btn_white-border">
              Read More
            </a>
          </div>
        </div>
        <div className="hero_img-container col-lg-6 col-12 text-center">
          <img src={hero} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
   </div>
  )
}

export default Home