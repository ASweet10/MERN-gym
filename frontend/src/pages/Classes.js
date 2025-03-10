import React from 'react'
import Hero from '../components/Hero'
import pilates from '../images/group-pilates.jpg'
import yoga from '../images/group-yoga.jpg'
import boxing from '../images/group-boxing.jpg'
import cycling from '../images/group-cycling.jpg'
import circuit from '../images/group-circuit.jpg'
import cardio from '../images/group-cardio.jpg'
import powerlift from '../images/group-powerlifting.jpg'
import karate from '../images/group-karate.jpg'
import { MdArrowOutward } from "react-icons/md";
import { IoTimeOutline } from 'react-icons/io5'


const Classes = () => {
  const classData = [
    {id: 1, title: 'Cycling', img: cycling, time: 'Tuesday 8am' },
    {id: 2, title: 'Pilates', img: pilates, time: 'Wednesday 6pm' },
    {id: 3, title: 'Yoga', img: yoga, time: 'Monday 9am' },
    {id: 4, title: 'Boxing', img: boxing, time: 'Wednesday 12pm' },
    {id: 5, title: 'Cardio', img: cardio, time: 'Tuesday 2pm' },
    {id: 6, title: 'Circuit', img: circuit, time: 'Friday 10am' },
    {id: 7, title: 'Powerlifting', img: powerlift, time: 'Thursday 3am' },
    {id: 8, title: 'Karate', img: karate, time: 'Saturday 9am' }, 
  ]

  return (
    <div className='flex w-full h-full bg-grey'>
      <div className='flex flex-col justify-center items-center w-full h-full px-4 md:px-32 py-20'>
        <h1 className='text-5xl font-bold text-center pb-8'>Classes</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-6'>
            { classData.map((item) => {
                return(
                    <div className='relative overflow-hidden rounded-lg items-center shadow-md shadow-black group/card' key={item.id} >
                      <img className='' src={item.img} alt="" className="grayscale-[60%]" />
                      <div className='absolute w-full py-6 top-0 inset-x-0 text-white text-xs text-center group-hover/card:hidden'>
                        <h1 className='text-center text-4xl md:text-5xl font-bold pb-4 md:pb-2 drop-shadow-xl'>{item.title}</h1>

                        <div className='flex flex-row gap-2 justify-center items-center text-center md:pr-0'>
                          <div className='flex flex-row gap-1 items-center'>
                            <IoTimeOutline className='text-3xl md:text-xl' />
                            <p className='text-xl md:text-base font-bold'>{item.time}</p>
                          </div>
                        </div>

                      </div>
                      {/*
                      <div className='absolute w-full py-4 bottom-0 inset-x-0 text-center'>
                        <button className='py-2 px-4 text-xl md:text-base rounded-md font-bold bg-white text-black'>
                            <div className='flex flex-row items-center gap-2 group'>
                              <h1>Sign Up</h1>
                              <MdArrowOutward className='text-primary text-2xl md:text-xl group-hover:rotate-45 duration-200'/>
                            </div>
                        </button>
                      </div>
                      */}

                      <div className="hidden group-hover/card:flex flex-col gap-4 absolute top-0 z-100 w-full h-full opacity-80 bg-darkGrey justify-center items-center text-center text-white">
                        <h1 className="font-bold text-4xl md:text-5xl">{item.title}</h1>
                        <p className="md:mx-12 pb-2">
                          Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor euismod ipsum dignissim quisque in. 
                          Litora conubia rutrum facilisis finibus pharetra sed. Cubilia dictum tellus pharetra vestibulum eleifend.
                        </p>
                        <button className='py-2 px-4 text-xl md:text-base rounded-md font-bold bg-white text-black'>
                            <div className='flex flex-row items-center gap-2 group/button'>
                              <h1>Sign Up</h1>
                              <MdArrowOutward className='text-primary text-2xl md:text-xl group-hover/button:rotate-45 duration-200'/>
                            </div>
                        </button>
                      </div>

                    </div>
                )
            })}
          </div>
      </div>

    </div>
  )
}

export default Classes