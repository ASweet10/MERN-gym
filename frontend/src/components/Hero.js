import React from 'react'
import heroImg from '../images/legpress-hero.jpg'

const Hero = ({ src }) => {
  return (
    <div className='flex w-full h-full bg-contain bg-no-repeat'>
        <img src={src} alt="" className='' />
        <h1 className='relative'>Classes</h1>
    </div>

  )
}

export default Hero