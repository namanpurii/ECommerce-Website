import React, { useState } from 'react'
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import './Slider.scss'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "./img/pic1.jpg",
        "./img/pic2.jpg",
        "./img/pic3.jpg",
    ]

  const prevSlide=()=>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev-1)
  }
  const nextSlide=()=>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev+1)
  }
  return (
    <div className='slider'>
      <div className="container" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
        <img src={ data[0] } alt="" />
        <img src={ data[1] } alt="" />
        <img src={ data[2] } alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <NavigateBeforeOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <NavigateNextOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider