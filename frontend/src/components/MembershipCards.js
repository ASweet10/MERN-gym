import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillCreditCardFill} from 'react-icons/bs'
import {FaMapMarkedAlt} from 'react-icons/fa'
import {MdGroups} from 'react-icons/md'

const MembershipSection = () => {
  const cardData = [
    { id: "1", title: "Gyms wherever you are", desc: "We have over 2000 locations in the USA.", icon: FaMapMarkedAlt },
    { id: "2", title: "Smart Pass System", desc: "Your membership card works at all SmartFitness locations.", icon: BsFillCreditCardFill },
    { id: "3", title: "Group Classes", desc: "We offer 22 different group classes.", icon: MdGroups },
  ]

  return (
    <div className='justify-center items-center py-8'>
        <h1 className='text-4xl font-bold text-center'>Membership Perks</h1>

        <div className='flex flex-col md:flex-row gap-4 justify-center items-center py-16 md:px-12'>
            { cardData.map((card) => {
                return(
                  <div key={card.id} className='flex flex-col justify-center items-center rounded-md p-4 h-80 w-2/3 md:w-1/3 bg-black text-white'>
                      <card.icon className='text-primary text-3xl'/>
                      <h1 className='text-xl font-semibold text-center text-white pt-6'>{card.title}</h1>
                      <p className='py-4 px-4 text-lg font-normal text-center'>{card.desc}</p>
                  </div>
                )
            })}
        </div>

        <div className='flex justify-center pt-12'>
            <Link to="/about" className='rounded-md bg-black text-white px-16 py-6 font-bold text-2xl'>Learn More</Link>
        </div>
    </div>
  )
}

export default MembershipSection