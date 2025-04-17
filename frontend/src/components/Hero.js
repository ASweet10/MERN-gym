import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ src }) => {
  return (
    <div className='flex relative w-full h-96 md:h-[100vh] text-white text-center justify-center md:items-center overflow-hidden uppercase'>
      <img src={src} alt="" className='opacity-80 grayscale'/>
      <h1 className='absolute flex text-[28px] md:text-4xl lg:text-6xl font-extrabold text-center pt-24 md:pb-60 lg:pb-96 gap-4'>Become <span className='text-yellow-700'>Elite</span></h1>
      <p className='absolute flex text-xl lg:text-2xl font-extrabold text-center pt-36 md:pb-40 lg:pb-60 gap-4'>Top-Quality Fitness located in Lakeland</p>
      <Link to="/about" 
        className='absolute flex py-4 px-6 rounded-sm bg-transparent duration-300 hover:bg-yellow-800 border-yellow-800 border-2 text-white font-bold text-center gap-4 mt-60 md:mb-8'
      >
        Learn More
      </Link>
    </div>
  )
}

export default Hero