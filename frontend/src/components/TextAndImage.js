import React from 'react'
import { Link } from 'react-router-dom'
import bike from '../images/bike.jpg'
import classes from '../images/classes.jpg'
import friends from '../images/home-friends.jpg'

const TextAndImage = () => {
  const textImageData = [
    {
        id: 1,
        title: "Group Classes",
        desc: "We offer 12 different classes including yoga, boxing, and karate",
        btnText: "See All Classes",
        img: classes,
        type: "A",
        link: "/classes"
    },
    {
        id: 2,
        title: "EliteFitness Blog",
        desc: "Check out our blog for news and fitness advice",
        btnText: "Visit Blog",
        img: bike,
        type: "B",
        link: "/blog"
    },
    {
        id: 3,
        title: "Refer a Friend",
        desc: "Get $25 for each friend or family member that signs up for membership",
        btnText: "Learn More",
        img: friends,
        type: "A",
        link: ""
    },
]

  return (
    <div className='flex flex-col w-full bg-gray-950'>
      { textImageData.map((item) => {
        return (
        <div key={item.id} className='flex flex-col md:flex-row items-center'>
          <div className={`flex flex-col py-6 md:w-1/2 w-full h-full items-center order-last ${item.type === "A" ? "md:order-first" : "md:order-last"}`}>
            <h1 className='font-bold text-3xl md:text-5xl pt-6 text-yellow-600'>{item.title}</h1>
            <p className='items-center text-center px-8 md:px-12 py-12 text-xl text-white'>{item.desc}</p>
            <Link to={item.link} className='py-3 px-6 rounded-md text-lg font-bold bg-yellow-700 hover:bg-yellow-800 text-white'>{item.btnText}</Link>
          </div>
          
          <div className='md:w-1/2 w-full'>
            <img src={item.img} alt="" className='w-full md:h-full' />
          </div>
        </div>
      )})}

    </div>
  )
}

export default TextAndImage