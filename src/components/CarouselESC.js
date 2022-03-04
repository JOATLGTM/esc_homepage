import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import './carouselesc.css'

export default function CarouselESC() {
  return (
    <div className="main">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 heightfix"
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 heightfix"
                    src={image4}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 heightfix"
                    src={image5}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 heightfix"
                    src={image6}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
