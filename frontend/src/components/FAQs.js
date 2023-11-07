import { useState } from 'react'
import Accordion from './Accordion'

const FAQs = () => {
  const faqData = [
    { id: 1, 
      question: "What locations are near me?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Quam nulla porttitor massa id neque aliquam vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Maecenas volutpat blandit aliquam etiam erat." + 
      "Dignissim cras tincidunt lobortis feugiat vivamus at augue eget."},
    { id: 2, 
      question: "Do you offer personal training?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Quam nulla porttitor massa id neque aliquam vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Maecenas volutpat blandit aliquam etiam erat." + 
      "Dignissim cras tincidunt lobortis feugiat vivamus at augue eget."},
    { id: 3, 
      question: "Can I go to any EliteFitness with my card?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Quam nulla porttitor massa id neque aliquam vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Maecenas volutpat blandit aliquam etiam erat." + 
      "Dignissim cras tincidunt lobortis feugiat vivamus at augue eget."},
    { id: 4, 
      question: "I lost my card. What should I do?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Quam nulla porttitor massa id neque aliquam vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Maecenas volutpat blandit aliquam etiam erat." + 
      "Dignissim cras tincidunt lobortis feugiat vivamus at augue eget."},
    { id: 5, 
      question: "Do you offer student or senior discounts?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Quam nulla porttitor massa id neque aliquam vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Maecenas volutpat blandit aliquam etiam erat." + 
      "Dignissim cras tincidunt lobortis feugiat vivamus at augue eget."},
  ]
  return (
    <div className='flex flex-col justify-center items-center w-full h-full py-20'>
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