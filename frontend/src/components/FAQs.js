import { useState } from 'react'
import Accordion from './Accordion'

const FAQs = () => {
  const faqData = [
    { id: 1, question: "How much is membership?",
      answer: "We offer premium and classic membership packages. Check out our Rates page for more information."},
    { id: 2, question: "Do you have free Wifi?",
    answer: "We do have a secure Wifi network for gym members. Ask a staff member for the current password as it rotates on a regular basis."},
    { id: 3, question: "Can I bring a friend?",
      answer: "You can purchase a guest pass for $10 at the front desk. Premium members get unlimited guest access."},
    { id: 4, question: "Do you offer student or senior discounts?",
      answer: "We currently offer student, senior, and military discounts. Make sure to mark the appropriate section when you sign up for membership."},
    { id: 5, question: "What is your cancellation policy?",
    answer: "The specifics of our cancellation policy are outlined in the membership agreement. It covers how to cancel and whether or not any cancellation fees may occur."},
  ]
  return (
    <div className='flex flex-col justify-center items-center w-full h-full py-20 bg-white'>
        <h1 className='text-4xl md:text-5xl font-bold text-center pb-12'>FAQs</h1>
        { faqData.map((item) => {
            return(
                <div className='flex w-full h-full' key={item.id}>
                    <Accordion question={item.question} answer={item.answer} />
                </div>
            )
        })}

    </div>
  )
}

export default FAQs