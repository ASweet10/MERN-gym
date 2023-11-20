import React from 'react'
import heroImg from '../images/legpress-hero.jpg'

const Hero = ({ src }) => {
  return (
    <div className='flex relative w-full h-96 md:h-full text-white text-center justify-center md:items-center overflow-hidden uppercase'>
      <img src={src} alt="" className='opacity-80 grayscale' />
      <h1 className='absolute flex text-3xl md:text-5xl font-extrabold text-center md:pb-80 gap-4'>Florida's <span className='text-primary'>Premier</span> Gym</h1>
      <p className='absolute flex text-lg md:text-xl font-extrabold text-center md:pb-48 gap-4'>Top-Quality Fitness located in Lakeland</p>
      <button className='absolute flex text-lg py-4 px-8 rounded-full bg-primary text-white font-bold text-center gap-4'>Learn More</button>
    </div>
  )
}

export default Hero