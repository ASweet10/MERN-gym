import React from 'react'
import { Link } from 'react-router-dom'
import benchpress from '../images/home-benchpress.jpg'
import classes from '../images/home-classes.jpg'
import blog from '../images/home-blog.jpg'
import friends from '../images/home-friends.jpg'
import merch from '../images/home-merch.jpg'

const TextAndImage = () => {

  const textImageData = [
    {id: 1, title: "Expert Personal Trainers", desc: "Sign up for one-on-one or small group training sessions", btnText: "Learn More", img: benchpress, type: "A", link: ""},
    {id: 2, title: "Group Classes", desc: "We offer 12 different classes including yoga, boxing, and karate", btnText: "See All Classes", img: classes, type: "B", link: "/classes"},
    {id: 3, title: "EliteFitness Blog", desc: "Check out the blog for news and fitness advice", btnText: "Visit Blog", img: blog, type: "A", link: "/blog"},
    {id: 4, title: "Refer a Friend", desc: "Get $10 for each friend or family member that signs up for membership", btnText: "Learn More", img: friends, type: "B", link: ""},

  ]

  return (
    <div className='flex flex-col w-full bg-background'>
        { textImageData.map((item) => {
          return (
              <div key={item.id} className='flex flex-col md:flex-row text-center'>
                <div className={`flex flex-col md:w-1/2 py-8 w-full h-full items-center order-last ${item.type === "A" ? "md:order-first" : "md:order-last"}`}>
                  <h1 className='font-bold text-3xl py-2'>{item.title}</h1>
                  <p className='items-center px-4 md:px-12 py-12 text-xl'>{item.desc}</p>
                  <Link to={item.link} className='py-4 px-8 rounded-md text-lg font-bold bg-darkGrey text-white'>{item.btnText}</Link>
                </div>
                <div className='md:w-1/2 w-full'>
                  <img src={item.img} alt="" className='w-full h-[350px] md:h-full' />
                </div>
              </div>
            )
        })}
    </div>
  )
}

export default TextAndImage