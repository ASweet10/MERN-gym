import React from 'react'
import { Link } from 'react-router-dom'
import benchpress from '../images/home-benchpress.jpg'
import classes from '../images/home-classes.jpg'
import blog from '../images/home-blog.jpg'
import friends from '../images/home-friends.jpg'

const TextAndImage = () => {

  return (
    <div className='flex flex-col w-full bg-background'>
      <div className='flex flex-col md:flex-row text-center'>
        <div className='flex flex-col md:w-1/2 py-8 w-full h-full items-center order-last md:order-first'>
          <h1 className='font-bold text-3xl py-2'>Expert Personal Trainers</h1>
          <p className='items-center px-4 md:px-12 py-12 text-xl'>Sign up for 1-on-1 or group training sessions</p>
          <button className='py-4 px-8 rounded-md text-lg font-bold bg-darkGrey text-white'>Learn More</button>
        </div>
        <div className='md:w-1/2 w-full'>
          <img src={benchpress} alt="" className='w-full h-[350px] md:h-full' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row text-center'>
        <div className='md:w-1/2 w-full'>
          <img src={classes} alt="" className='w-full h-[350px] md:h-full' />
        </div>
        <div className='flex flex-col md:w-1/2 py-8 w-full h-full items-center order-last'>
          <h1 className='font-bold text-3xl py-2'>Group Classes</h1>
          <p className='items-center px-4 md:px-12 py-12 text-xl'>We offer 12 different classes including yoga, boxing, and karate</p>
          <Link to="/classes" className='py-4 px-8 rounded-md text-lg font-bold bg-darkGrey text-white'>See All Classes</Link>
        </div>
      </div>
      <div className='flex flex-col md:flex-row text-center'>
        <div className='flex flex-col md:w-1/2 py-8 w-full h-full items-center order-last md:order-first'>
          <h1 className='font-bold text-3xl py-2'>EliteFitness Blog</h1>
          <p className='items-center px-6 md:px-12 py-12 text-xl'>Check out the blog for news and fitness advice</p>
          <Link to="/blog" className='py-4 px-8 rounded-md text-lg font-bold bg-darkGrey text-white'>Visit Blog</Link>
        </div>
        <div className='md:w-1/2 w-full'>
          <img src={blog} alt="" className='w-full h-[350px] md:h-full' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row text-center'>
        <div className='md:w-1/2 w-full'>
          <img src={friends} alt="" className='w-full h-[350px] md:h-full' />
        </div>
        <div className='flex flex-col md:w-1/2 py-8 w-full h-full items-center order-last'>
            <h1 className='font-bold text-3xl py-2'>Refer a Friend</h1>
            <p className='items-center px-4 md:px-12 py-12 text-xl'>Get $10 for each friend or family member that signs up for membership</p>
            <button className='py-4 px-8 rounded-md text-lg font-bold bg-darkGrey text-white'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default TextAndImage