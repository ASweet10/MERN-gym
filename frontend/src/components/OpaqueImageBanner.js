import React from 'react'
import { Link } from 'react-router-dom'
import { VscDebugBreakpointLog } from 'react-icons/vsc'

const OpaqueImageBanner = ({ src }) => {

  return (
    <div className='flex relative w-full h-96 md:h-[70vh] text-white text-left justify-start md:items-center overflow-hidden pb-10 md:mb-20'>
      <img src={src} alt="" className='opacity-90 grayscale'/>
      <h1 className='absolute flex text-[28px] md:text-4xl lg:text-6xl text-yellow-700 font-extrabold text-center pt-24 md:pb-60 lg:pb-96 gap-4 pl-10 md:pl-40'>Achieve Your Goals</h1>
      <p className='absolute flex text-lg font-semibold text-center pt-20 md:pb-40 lg:pb-60 gap-4 pl-10 md:pl-40'>Take advantage of our high-quality free-weights and equipment</p>
      <p className='absolute flex text-4xl font-extrabold text-center pt-64 md:pb-40 lg:pb-60 gap-4 pl-10 md:pl-40'>No experience? No problem.</p>
      <p className='absolute flex text-lg font-semibold text-center pt-[350px] md:pb-40 lg:pb-60 gap-4 pl-10 md:pl-40'>Our knowledgeable trainers can help you tailor your workout</p>
      <p className='absolute flex text-lg font-semibold text-center pt-[410px] md:pb-40 lg:pb-60 gap-4 pl-10 md:pl-40'>We also offer classes for all fitness levels</p>


      <Link to="/about" 
        className='absolute flex py-4 px-6 rounded-sm bg-transparent duration-300 hover:bg-yellow-800 border-yellow-800 border-2 text-white font-bold text-center gap-4 mt-[400px] md:mb-8 ml-10 lg:ml-[720px] 2xl:ml-[920px]'
      >
        Learn More
      </Link>
    </div>
  )
}

export default OpaqueImageBanner