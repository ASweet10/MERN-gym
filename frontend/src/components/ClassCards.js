import React from 'react'
import { Link } from 'react-router-dom'
import pilates from '../images/group-pilates.jpg'
import yoga from '../images/group-yoga.jpg'
import kickboxing from '../images/group-kickboxing.jpg'
import cycling from '../images/group-cycling.jpg'
import circuit from '../images/group-circuit.jpg'
import dance from '../images/group-cardio.jpg'

const ClassCards = () => {
  const classData = [
    {id: 1, title: 'Cycling', desc: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', img: cycling},
    {id: 2, title: 'Pilates', desc: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', img: pilates},
    {id: 3, title: 'Yoga', desc: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', img: yoga},
    {id: 4, title: 'Kickboxing', desc: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', img: kickboxing},
    {id: 5, title: 'Aerobic Dance', desc: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', img: dance},
    {id: 6, title: 'Circuit Training', desc: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', img: circuit},
  ]

  return (
    <div className='flex flex-col justify-center items-center w-full h-full px-4 md:px-36 py-20'>
        <h1 className='text-4xl md:text-5xl font-bold text-center'>Classes</h1>
        <h1 className='text-xl font-semibold text-center pt-4 px-8'>We offer classes ranging from 5 to 25 people</h1>
        <Link to="/classes" className='text-lg text-secondary pt-8'>See all group classes</Link>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-6'>
          { classData.map((item) => {
              return(
                  <div className='cursor-pointer' key={item.id} >
                    <Link to="/classes" className='h-68 w-68'>
                      <img className='' src={item.img} alt="" />
                    </Link>
                  </div>
              )
          })}
        </div>


    </div>
  )
}

export default ClassCards