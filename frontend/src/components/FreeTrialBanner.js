import React from 'react'
import { Link } from 'react-router-dom'

const FreeTrialBanner = () => {

  return (
    <div className='w-full h-32 bg-gray-900 text-white'>
      <div className='flex justify-between gap-6 items-center mx-auto w-4/5 md:w-2/3 h-full'>
          <h1 className='text-lg md:text-2xl 2xl:text-3xl font-bold text-center text-darkGrey uppercase'>We now offer a free trial for new members!</h1>
          <Link to="/signup" className='flex flex-col md:flex-row justify-center items-center px-4 md:px-10 py-4 gap-12 rounded-sm uppercase font-bold bg-transparent duration-300 hover:bg-yellow-800 border-2 border-yellow-800'>
              Learn More
          </Link>
      </div>
    </div>
  )
}

export default FreeTrialBanner