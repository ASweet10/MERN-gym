import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { BiLocationPlus, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'
const Footer = () => {

  const footerLogoData = [
    {id: 1, logo: BiLogoFacebook },
    {id: 2, logo: BiLogoInstagram },
    {id: 3, logo: BiLogoTwitter },
    {id: 4, logo: BiLogoYoutube },    
  ]
  return (
    <div className='flex flex-col h-full w-full bg-darkGrey text-white px-8 md:px-16 py-8'>
        <div className='flex flex-col justify-between md:flex-row gap-8 px-8 md:px-16 pt-8'>

            <div className='flex flex-col justify-start px-4'>

              <div className='flex flex-col items-left  gap-2'>
                <h2 className='text-lg'>Find a Gym</h2>
                <h2 className='text-lg'>Class Calendar</h2>
                <h2 className='text-lg'>Blog</h2>
                <h2 className='text-lg'>Terms & Conditions</h2>
              </div>

              <div className='flex flex-row gap-4 pt-8'>
                { footerLogoData.map((item) => {
                  return(
                    <a key={item.id} className='bg-transparent rounded-full w-12 h-12 flex items-center justify-center cursor-pointer'>
                      <item.logo className='text-2xl' />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className='flex flex-col justify-start px-4'>
                <h1 className='text-2xl font-bold pb-3'>Contact</h1>
                <div className='flex flex-row items-center gap-1 py-1'> 
                  <h2 className='text-sm'>(555) 555-5555</h2>
                </div>
                <div className='flex flex-row items-center gap-1 py-'>
                  <h2 className='text-sm'>mail@elitefitness.com</h2>
                </div>
                <div className='flex flex-row items-center gap-1 pt-4'>
                  <h2 className='text-sm'>425 West Palm Drive Miami, Florida 33101</h2>
                </div>
            </div>
        </div>
        <div className='flex w-full h-4 px-8 pt-16 pb-4 justify-center items-center'>
          <h1 className='text-lg'>&copy; Copyright <span className='text-primary'>EliteFitness</span>. All Rights Reserved.</h1>
        </div>
    </div>
  )
}

export default Footer