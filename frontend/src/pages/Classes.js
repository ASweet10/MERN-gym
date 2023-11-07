import React from 'react'
import classHero from '../images/hero-crossfit.jpg'
import Hero from '../components/Hero'

const Classes = () => {
  return (
    <div>
      <Hero src={classHero} />
      <h1 className='text-4xl md:text-5xl font-bold text-center py-8'>Classes</h1>
    </div>
  )
}

export default Classes