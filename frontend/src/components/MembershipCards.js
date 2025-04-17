import React from 'react'
import { Link } from 'react-router-dom'

const MembershipSection = () => {

  const cardInfo = [
    {
      id: 0,
      title: "Monthly",
      backgroundAndText: "border-2 border-gray-300 text-darkGrey",
      textColor: "text-darkGrey",
      price: 24.99,
      descriptors: [
        "Standard unlimited gym access",
        "3 guest passes per month",
      ]
    },
    {
      id: 1,
      title: "Annual",
      backgroundAndText: "border-2 border-gray-300 text-darkGrey",
      price: 19.99,
      descriptors: [
        "Standard unlimited gym access",
        "5 guest passes per month",
        "No startup fee",
      ]
    },
    {
      id: 2,
      title: "Premium",
      backgroundAndText: "bg-gray-900 border-2 border-yellow-800 text-white",
      price: 34.99,
      descriptors: [
        "Elite equipment access",
        "Unlimited guest passes",
        "8 free classes per month",
        "Merch discounts",
      ]
    },
  ]

  return (
    <div className='flex flex-col justify-center items-center w-full h-full py-20'>
      <h1 className='text-5xl font-bold text-center text-darkGrey pt-8 uppercase'>Memberships</h1>
      <div className='flex flex-col md:flex-row justify-center items-center w-full h-full px-4 md:px-32 py-12 gap-12'>

        { cardInfo.map((card) => {
          return (
              <div key={card.id} className={`rounded-md p-6 w-[350px] md:w-72 h-80 md:h-96 ${card.backgroundAndText}`}>
                <h1 className='text-2xl font-bold text-center pb-2 uppercase'>{card.title}</h1>
                <h2 className='text-lg font-bold text-center items-end'><span className='text-4xl text-primary'>${card.price}</span>/mo</h2>
                
                <hr className="h-px my-4 bg-lightGrey border-0"></hr>

                <div className='h-32'>
                  { card.descriptors.map((desc, index) => {
                    return (
                      <h1 key={index} className='font-semibold pt-3'>{desc}</h1>
                    )
                  })}
                </div>

                <div className='flex w-full justify-center pt-6 md:pt-12'>
                  <Link to="/rates" className='flex text-sm py-2 px-4 rounded-md bg-yellow-800 hover:bg-yellow-700 text-white text-center'>Learn More</Link>
                </div>
              </div>
              )
        })}

      </div>
    </div>
  )
}

export default MembershipSection