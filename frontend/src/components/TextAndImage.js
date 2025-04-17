import React from 'react'
import { Link } from 'react-router-dom'

const TextAndImage = ({props}) => {

  return (
    <div className='flex flex-col w-full bg-grey pl-40'>
      <div key={props.id} className='flex flex-col md:flex-row text-center items-center'>
        <div className={`flex flex-col md:w-1/2 py-8 w-full h-full items-center order-last ${props.type === "A" ? "md:order-first" : "md:order-last"}`}>
          <h1 className='font-bold text-3xl md:text-5xl py-2'>{props.title}</h1>
          <p className='items-center px-4 md:px-12 py-12 text-xl'>{props.desc}</p>
          <Link to={props.link} className='py-4 px-8 rounded-md text-lg font-bold bg-darkGrey hover:bg-darkGreyHover text-white'>{props.btnText}</Link>
        </div>
        <div className='md:w-1/2 w-full'>
          <img src={props.img} alt="" className='w-full md:h-full' />
        </div>
      </div>
    </div>
  )
}

export default TextAndImage