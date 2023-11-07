import React from 'react'
import { VscDebugBreakpointLog } from 'react-icons/vsc'
import benchPress from '../images/about-benchpress.jpg'
import boxingBags from '../images/about-boxingbags.jpg'
import cardio from '../images/about-cardio.jpg'
import cardioTwo from '../images/about-cardio2.jpg'
import sauna from '../images/about-sauna.jpg'
import spa from '../images/about-spa.jpg'
import treadmills from '../images/about-treadmills.jpg'
import lockers from '../images/about-lockers.jpg'

const About = () => {
    const aboutData = [
        { id: 1, text: "24/7 Gym access with card"},
        { id: 2, text: "Locker rooms with private showers"},
        { id: 3, text: "Excellent personal trainers"},
        { id: 4, text: "Day lockers with digital locks"},
        { id: 5, text: "Nutrition counselors"},
        { id: 6, text: "Routine sanitization of workout areas"},
        { id: 7, text: "High-quality, name-brand workout gear"},
        { id: 8, text: "Tanning beds and steam rooms"},
        { id: 9, text: "4 heavy boxing bags"},
        { id: 10, text: "Free weights and weight machines"},
        { id: 11, text: "6 squat racks"},
    ]

    const aboutGallery = [
        { id: 1, src: benchPress },
        { id: 2, src: boxingBags },
        { id: 3, src: cardio },
        { id: 4, src: cardioTwo },
        { id: 5, src: treadmills },
        { id: 6, src: sauna },
        { id: 7, src: spa },
        { id: 8, src: lockers },
    ]
  return (
    <div className='flex flex-col items-center w-full h-full px-4 md:px-8 py-20'>
        <h1 className='text-4xl md:text-5xl font-bold text-center'>About</h1>
        <h1 className='text-2xl font-normal text-left py-4'>Every <span className='text-primary'>EliteFitness</span> features:</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
          { aboutData.map((item) => {
              return(
                  <div className='flex flex-row justify-left items-center gap-2' key={item.id} >
                    <VscDebugBreakpointLog className='text-2xl text-primary' />
                    <h1 className='text-xl font-semibold'>{item.text}</h1>
                  </div>
              )
          })}
        </div>

        <h1 className='text-3xl font-bold text-left py-8'>Gallery</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 px-4'>
            { aboutGallery.map((item) => {
              return(
                  <img className='cursor-pointer' src={item.src} alt="" />
              )
            })}
        </div>
    </div>
  )
}

export default About