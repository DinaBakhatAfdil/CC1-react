import React, { useState } from 'react';
import './style.css'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
export default function Slider(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
      image1,
      image2,
      image3,
      image4,
      image5,
      
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };
  
    return (
      <div className='container'>
        <br></br>
        <button onClick={prevSlide}  className='btn btn-secondary'>Précedent</button>
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className='img' />
        <button onClick={nextSlide} className='btn btn-secondary'>suivant</button>
      </div>
    )
}