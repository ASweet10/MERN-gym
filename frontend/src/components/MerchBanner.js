import React from 'react'
import { Link } from 'react-router-dom'
import nutrition from '../images/merchNutrition.jpg'
import apparel from '../images/merchApparel.jpg'
import { MdArrowOutward } from "react-icons/md"

const MerchBanner = () => {
  const merch = [
    {
      id: 0,
      src: nutrition,
      title: "Nutrition",
      content: "Nourish your gym gains. Proper nutrition is the foundation of a healthy lifestyle. Ask about out our new line of protein shakes and supplements.",
    },
    {
      id: 1,
      src: apparel,
      title: "New Threads",
      content: "Function meets form. Our products are designed to move as you move and make sure you look good while doing so.",
    },
  ]
  return (
    <div className='flex flex-col justify-center items-center w-full h-full py-28 bg-grey'>
      <h1 className='text-5xl font-bold text-center text-black pb-8 uppercase'><span className='text-yellow-800'>EliteFitness</span> Merch</h1>
      
      <div className="flex flex-col md:flex-row mx-10 md:gap-8 xl:mx-60">
        {merch.slice(0, 2).map((item) =>(

          <div className="my-4" key={item.id}>
            <div className='flex flex-col items-center mb-2'>
                <img src={item.src} alt="" className='cursor-pointer rounded-sm' />
                <div className='flex flex-col py-4 px-2 h-52 md:h-40'>
                  <Link className='font-bold text-2xl md:text-4xl py-3 hover:cursor-pointer'>{item.title}</Link>
                  <p className=''>{item.content}</p>
                </div>
                <Link className='flex gap-2 items-center group/button py-4 px-6 rounded-sm bg-transparent duration-300 hover:bg-yellow-800 border-yellow-800 border-2 text-black hover:text-white font-bold text-center mt-2'>
                  Shop Now
                 <MdArrowOutward className='text-yellow-800 text-2xl md:text-xl group-hover/button:rotate-45 duration-200 group-hover/button:text-white'/>
                </Link>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default MerchBanner