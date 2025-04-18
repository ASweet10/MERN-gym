import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi'
import { FaXTwitter } from 'react-icons/fa6'
const Footer = () => {

  const footerLogoData = [
    {id: 1, logo: BiLogoFacebook, link: "https://www.facebook.com" },
    {id: 2, logo: BiLogoInstagram, link: "https://www.instagram.com" },
    {id: 3, logo: FaXTwitter, link: "https://x.com" },
    {id: 4, logo: BiLogoYoutube, link: "https://www.youtube.com" },
  ]
  return (
    <div className='flex flex-col h-full w-full text-gray-900 px-8 py-8'>
        <div className='flex flex-col md:flex-row justify-start md:justify-center md:items-center gap-8 lg:gap-16 px-3 md:px-12 py-8 lg:pt-24'>

            <div className='flex flex-col text-left gap-2'>
              <h1 className='text-2xl font-bold'>Contact</h1>
              <h2 className='text-sm'>(555) 786-5863</h2>
              <h2 className='text-sm'>mail@elitefitness.com</h2>
              <h2 className='text-xs md:text-sm'>42 West Palm Drive Lakeland, Florida 33101</h2>
            </div>

            <div className='flex flex-col justify-start md:px-8 pb-8'>
              <div className='flex flex-col items-left gap-2'>
                <h1 className='text-2xl font-bold'>Hours</h1>
                <p className='text-sm'><strong>Mon - Fri:</strong> 5am - 9pm</p>
                <p className='text-sm'><strong>Sat:</strong> 6am - 6pm</p>
                <p className='text-sm'><strong>Sun:</strong> 9am - 6pm</p>
              </div>
            </div>

            <div className='flex flex-row gap-6 pt-3 md:pb-3'>
                { footerLogoData.map((item) => {
                  return(
                    <a key={item.id} href={item.link} target="blank" className="rounded-full w-14 h-14 md:w-12 md:h-12 flex items-center justify-center cursor-pointer">
                      <item.logo className='text-3xl hover:text-yellow-800' />
                    </a>
                  )
                })}
            </div>

        </div>
        <div className='flex w-full h-4 px-4 py-3 justify-center items-center flex-col md:flex-row gap-x-2'>
          <h1 className='text-lg'>&copy; Copyright <span className='text-yellow-800'>EliteFitness</span>.</h1>
          <h1 className='text-lg'>All Rights Reserved.</h1>
        </div>
    </div>
  )
}

export default Footer