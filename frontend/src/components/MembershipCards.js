import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillCreditCardFill} from 'react-icons/bs'
import {FaMapMarkedAlt} from 'react-icons/fa'
import {MdGroups} from 'react-icons/md'

const MembershipSection = () => {

  return (
    <div className='flex flex-col justify-center items-center w-full h-full bg-white'>
      <h1 className='text-5xl font-bold text-center text-darkGrey py-8 uppercase'>Memberships</h1>
      <div className='flex flex-col md:flex-row justify-center items-center w-full h-full px-4 md:px-32 pt-10 pb-20 gap-4'>

        {/* Classic */}
        <div className='border-2 border-lightGrey rounded-lg p-6 w-[350px] md:w-96 h-80 text-darkGrey'>
          <h1 className='text-2xl font-bold text-left pb-2 uppercase'>Classic (Monthly)</h1>
          <h2 className='flex text-xl font-bold text-left items-end'><h1 className='text-4xl text-primary'>$24.99</h1>/mo</h2>
          <p className='text-left text-xs pl-1 pt-1'>plus taxes & fees</p>
          <h1 className='text-xl font-semibold pt-4'>Standard membership that includes unlimited gym access.</h1>
          <hr class="h-px my-4 bg-lightGrey border-0"></hr>

          <div className='flex w-full justify-end pt-2'>
            <Link to="/rates" className='flex text-lg py-3 px-6 rounded-full bg-primary text-white font-bold text-center gap-4'>Learn More</Link>
          </div>
        </div>

        
        {/* Premium */}
        <div className='bg-darkGrey rounded-lg p-6 w-[350px] md:w-96 h-80 text-white'>
          <h1 className='text-2xl font-bold text-left pb-2 uppercase'>Premium</h1>
          <h2 className='flex text-xl font-bold text-left items-end'><h1 className='text-4xl text-primary'>$44.99</h1>/mo</h2>
          <p className='text-left text-xs pl-1 pt-1'>plus taxes & fees</p>
          <h1 className='text-xl font-semibold px-3 pt-4'>Premium membership includes discounts</h1>
          <hr class="h-px my-4 bg-lightGrey border-0"></hr>

          <div className='flex w-full justify-end pt-2'>
            <Link to="/rates" className='flex text-lg py-3 px-6 rounded-full bg-primary text-white font-bold text-center gap-4'>Learn More</Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default MembershipSection