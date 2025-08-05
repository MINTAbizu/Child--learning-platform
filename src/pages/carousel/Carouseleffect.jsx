import React from 'react'
import {image} from '../carousel/Carouselimage'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../carousel/style.css'
function Carouseleffect() {
  return (
    <div>
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndecators={true}
        showThumbs={false}
        className='carousel'
        >
            {
                image.map((imagelink,i)=>{
                    return <img src={imagelink} alt="" key={i} />
                         })
            }
        </Carousel>
      
    </div>
  )
}

export default Carouseleffect
