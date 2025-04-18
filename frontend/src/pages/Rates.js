import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { IoFastFoodOutline, IoSunny, IoShieldCheckmark } from "react-icons/io5"
import { MdOutlineGroups, MdMoneyOff } from "react-icons/md"
import { FaPerson } from "react-icons/fa6"
import { CgSmartHomeWashMachine } from "react-icons/cg"
import { GiCycle } from "react-icons/gi"

const Rates = () => {

  return (
    <div className='flex w-full h-full bg-grey'>
      <div className='flex flex-col justify-center items-center w-full h-full px-4 md:px-32 py-28'>
        <h1 className='text-5xl font-bold text-center pb-8'>Rates</h1>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          
          {/* Classic Monthly */}
          <div className='border-2 border-lightGrey rounded-lg p-3 md:h-[520px] w-80'>
            <h1 className='text-2xl font-bold text-left pb-2 uppercase'>Classic (Monthly)</h1>
            <h2 className='flex text-xl font-bold text-left items-end'><span className='text-4xl text-primary'>$24.99</span>/mo</h2>
            <p className='text-left text-xs pl-1 pt-1'>plus taxes & fees</p>
            <hr className="h-px my-4 bg-lightGrey border-0"></hr>
            <div>
              <div className='flex gap-2 items-center'>
                <BsCurrencyDollar className='text-xl text-black' />
                <p>$25 start-up fee</p>
              </div>
              <div className='flex gap-2 items-center'>
                <BsCurrencyDollar className='text-xl text-black' />
                <p>$45 annual fee</p>
              </div>
              <div className='flex gap-2 items-center'>
                <IoShieldCheckmark className='text-xl text-black' />
                <p>Cancel Anytime</p>
              </div>
            </div>
            <hr className="h-px my-4 bg-lightGrey border-0"></hr>
            <div className='flex flex-col gap-3'>
              <h1 className='text-xl font-bold'>Perks</h1>
              <div className='flex gap-2 items-center'>
                <GiCycle className='text-xl text-black' />
                <p>Unlimited Gym Access</p>
              </div>
              <div className='flex gap-2 items-center'>
                <FaPerson className='text-xl text-black' />
                <p>3 Guest Passes Per Month</p>
              </div>
            </div>
          </div>

          {/* Classic Annual */}
          <div className='border-2 border-lightGrey rounded-lg p-3 md:h-[520px] w-80'>
            <h1 className='text-2xl font-bold text-left pb-2 uppercase'>Classic (Annual)</h1>
            <h2 className='flex text-xl font-bold text-left items-end'><span className='text-4xl text-primary'>$19.99</span>/mo</h2>
            <p className='text-left text-xs pl-1 pt-1'>plus taxes & fees</p>
            <hr className="h-px my-4 bg-lightGrey border-0"></hr>
            <div>
              <div className='flex gap-2 items-center'>
                <MdMoneyOff className='text-xl text-black' />
                <p>No start-up fee</p>
              </div>
              <div className='flex gap-2 items-center'>
                <BsCurrencyDollar className='text-xl text-black' />
                <p>$40 annual fee</p>
              </div>
              <div className='flex gap-2 items-center'>
                <IoShieldCheckmark className='text-xl text-black' />
                <p>Cancel Anytime</p>
              </div>
            </div>
            <hr className="h-px my-4 bg-lightGrey border-0"></hr>
            <div className='flex flex-col gap-3'>
              <h1 className='text-xl font-bold'>Perks</h1>
              <div className='flex gap-2 items-center'>
                <GiCycle className='text-xl text-black' />
                <p>Unlimited Gym Access</p>
              </div>
              <div className='flex gap-2 items-center'>
                <FaPerson className='text-xl text-black' />
                <p>5 Guest Passes Per Month</p>
              </div>
              <div className='flex gap-2 items-center'>
                <MdOutlineGroups className='text-xl' />
                <p>2 Free Classes Per Month</p>
              </div>
            </div>
          </div>

          {/* Premium */}
          <div className=' text-white border-2 border-yellow-800 bg-gray-900 rounded-lg p-3 md:h-[520px] w-80'>
            <h1 className='text-2xl font-bold text-left pb-2 uppercase'>Premium</h1>
            <h2 className='flex text-xl font-bold text-left items-end'><span className='text-4xl text-primary'>$34.99</span>/mo</h2>
            <p className='text-left text-xs pl-1 pt-1'>plus taxes & fees</p>
            <hr className="h-px my-4 bg-lightGrey border-0"></hr>
            <div className='text-white'>
              <div className='flex gap-2 items-center'>
                <MdMoneyOff className='text-lg' />
                <p>No start-up fee</p>
              </div>
              <div className='flex gap-2 items-center'>
                <BsCurrencyDollar className='text-lg' />
                <p>$30 annual fee</p>
              </div>
              <div className='flex gap-2 items-center'>
                <IoShieldCheckmark className='text-lg' />
                <p>Cancel Anytime</p>
              </div>
            </div>
            <hr className="h-px my-4 bg-lightGrey border-0"></hr>
            <div className='flex flex-col gap-3'>
              <h1 className='text-xl font-bold'>Premium Perks</h1>
              <div className='flex gap-2 items-center'>
                <GiCycle className='text-lg' />
                <p>Unlimited Gym Access</p>
              </div>
              <div className='flex gap-2 items-center'>
                <MdOutlineGroups className='text-lg' />
                <p>8 Free Classes Per Month</p>
              </div>
              <div className='flex gap-2 items-center'>
                <FaPerson className='text-lg' />
                <p>Bring a Guest Anytime</p>
              </div>
              <div className='flex gap-2 items-center'>
                <IoSunny className='text-lg' />
                <p>Use of Tanning Beds</p>
              </div>
              <div className='flex gap-2 items-center'>
                <CgSmartHomeWashMachine className='text-lg' />
                <p>Use of Body Scanner</p>
              </div>
              <div className='flex gap-2 items-center'>
                <IoFastFoodOutline className='text-lg' />
                <p>Discounts on Merch and Snack Bar</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Rates