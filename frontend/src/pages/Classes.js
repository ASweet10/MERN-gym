import React from 'react'
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
      <div className='flex flex-col justify-center items-center w-full h-full px-4 md:px-32 py-28'>
        <h1 className='text-5xl font-bold text-center pb-8'>Classes</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-6'>
            { classData.map((item) => {
                return(
                    <div className='relative overflow-hidden rounded-lg items-center shadow-md shadow-black group/card' key={item.id} >
                      <img src={item.img} alt="" className="grayscale-[60%]" />

                      <div className='absolute w-full pt-14 md:pt-20 top-0 inset-x-0 text-white text-xs text-center'>
                        <div className='flex flex-row justify-center items-center text-center md:pr-0'>
                          <h1 className='absolute top-0 inset-x-0 text-center text-white text-4xl md:text-5xl font-bold pt-2 md:pt-6 drop-shadow-xl'>{item.title}</h1>
                          <div className='flex flex-row gap-1 items-center'>
                            <IoTimeOutline className='text-3xl md:text-xl' />
                            <p className='text-xl md:text-base font-bold'>{item.time}</p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute w-full h-full gap-4 top-0 z-100 bg-darkGrey justify-center items-center text-center text-white hidden group-hover/card:flex flex-col">
                        <p className="mx-6 md:mx-16 pt-20 md:pt-0">
                          Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor euismod ipsum dignissim quisque in. 
                          Litora conubia rutrum facilisis finibus pharetra sed.
                        </p>
                        <button className='py-2 px-4 text-xl md:text-base rounded-md font-bold bg-white text-black opacity-80'>
                            <div className='flex flex-row items-center gap-2 group/button'>
                              <h1>Sign Up</h1>
                              <MdArrowOutward className='text-yellow-800 text-2xl md:text-xl group-hover/button:rotate-45 duration-200'/>
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