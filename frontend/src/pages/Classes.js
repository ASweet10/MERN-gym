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
    {id: 1, title: 'Cycling', img: cycling, instructor: 'Tony Smith', time: 'Tues: 8am' },
    {id: 2, title: 'Pilates', img: pilates, instructor: 'Susan Jones', time: 'Wed: 6pm' },
    {id: 3, title: 'Yoga', img: yoga, instructor: 'Terry Arroyo', time: 'Mon: 9am' },
    {id: 4, title: 'Boxing', img: boxing, instructor: 'Kyle Jameson', time: 'Wed: 12pm' },
    {id: 5, title: 'Cardio', img: cardio, instructor: 'Matt Baker', time: 'Tues: 2pm' },
    {id: 6, title: 'Circuit', img: circuit, instructor: 'Elise Anderson', time: 'Fri: 9am' },
    {id: 7, title: 'Powerlifting', img: powerlift, instructor: 'Charlie Lee', time: 'Thurs: 3am' },
    {id: 8, title: 'Karate', img: karate, instructor: 'Aaron Martin', time: 'Sat: 10am' }, 
  ]

  return (
    <div className='flex w-full h-full bg-bg'>
      <div className='flex flex-col justify-center items-center w-full h-full px-4 md:px-32 py-20'>
        <h1 className='text-5xl font-bold text-center pb-8'>Classes</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-6'>
            { classData.map((item) => {
                return(
                    <div className='relative overflow-hidden rounded-lg items-center shadow-md shadow-black' key={item.id} >
                      <img className='' src={item.img} alt="" className="grayscale-[50%]" />
                      <div className='absolute w-full py-6 top-0 inset-x-0 text-white text-xs text-center'>
                        <h1 className='text-center text-4xl md:text-3xl font-bold pb-2 drop-shadow-xl'>{item.title}</h1>

                        <div className='flex flex-row gap-2 justify-center items-center text-center md:pr-0'>
                          <div className='flex flex-row gap-1 items-center'>
                            <IoTimeOutline className='text-2xl md:text-lg' />
                            <p className='md:text-base'>{item.time}</p>
                          </div>
                          <p className='md:text-base'>{item.instructor}</p>
                        </div>

                      </div>
                      <div className='absolute w-full py-4 bottom-0 inset-x-0 text-center'>
                        <button className='py-3 px-6 md:py-2 md:px-4 text-2xl md:text-base rounded-md font-bold bg-white text-black'>
                            <div className='flex flex-row items-center gap-2'>
                              <h1>Sign Up</h1>
                              <MdArrowOutward className='text-primary text-2xl md:text-xl'/>
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