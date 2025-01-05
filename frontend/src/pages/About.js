import React from 'react'
import { VscDebugBreakpointLog } from 'react-icons/vsc'
import benchPress from '../images/about-weights.jpg'
import boxingBags from '../images/about-boxingbags.jpg'
import cardio from '../images/about-cardio.jpg'
import cardioTwo from '../images/about-cardio2.jpg'
import sauna from '../images/about-sauna.jpg'
import helpdesk from '../images/about-helpdesk.jpg'

const About = () => {
    const aboutData = [
        { id: 1, text: "Ellipticals, stair climbers, treadmills"},
        { id: 2, text: "Free weights and weight machines"},
        { id: 3, text: "Locker rooms with private showers"},
        { id: 4, text: "Personal trainers"},
        { id: 5, text: "Lockers with digital locks"},
        { id: 6, text: "Nutrition counselors"},
        { id: 7, text: "Routine sanitization of workout areas"},
        { id: 8, text: "High-quality workout equipment"},
        { id: 9, text: "Tanning beds and steam room"},
        { id: 10, text: "4 heavy boxing bags"},
        { id: 11, text: "3 squat racks"},
    ]

    const aboutGallery = [
        { id: 1, src: helpdesk },
        { id: 2, src: cardio },
        { id: 3, src: cardioTwo },
        { id: 4, src: benchPress },
        { id: 5, src: boxingBags },
        { id: 6, src: sauna },
    ]
  return (
    <div className='flex flex-col items-center w-full h-full px-4 md:px-8 py-20 bg-grey'>
        <h1 className='text-4xl md:text-5xl font-bold text-center'>About</h1>
        <h1 className='text-2xl font-semibold text-left py-4'><span className='text-primary'>EliteFitness</span> features:</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
          { aboutData.map((item) => {
              return(
                  <div className='flex flex-row justify-left items-center gap-1' key={item.id} >
                    <VscDebugBreakpointLog className='text-xl md:text-2xl text-primary' />
                    <h1 className='text-lg md:text-xl font-semibold'>{item.text}</h1>
                  </div>
              )
          })}
        </div>

        <h1 className='text-3xl font-bold text-left py-8'>Gallery</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 px-4'>
            { aboutGallery.map((item) => {
              return(
                  <img className='rounded-lg' src={item.src} alt="" />
              )
            })}
        </div>
    </div>
  )
}

export default About