import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { BiMinus } from 'react-icons/bi'

const AccordionExample = ( props ) => {
    const [ open, setOpen ] = useState(false)

  return (
    <div className='bg-transparent flex justify-center w-full'>
        <div className='flex flex-col py-4 w-5/6 md:w-2/3'>
            <hr className='border-b border-grey'></hr>
            <div className='text-black flex justify-between items-center pt-3 pb-4 cursor-pointer' onClick={() => setOpen(!open)}>
                <h3 className='text-xl font-semibold px-1'>{props.question}</h3>

                { open 
                    ? (
                      <div className='bg-primary rounded-full w-5 md:w-7 h-5 md:h-7 flex justify-center items-center text-white'>
                        <BiMinus className='text-2xl' onClick={() => setOpen(!open)}/>
                      </div>
                    ) 
                    : (
                      <div className='bg-primary rounded-full w-5 md:w-7 h-5 md:h-7 flex justify-center items-center text-white'>
                        <MdAdd className='text-2xl' onClick={() => setOpen(!open)}/>
                      </div>
                  )
                }
            </div>
            {open && (<p className='text-base px-2'>{props.answer}</p>)}  

        </div>
        <hr className="h-[1px] my-8 bg-gray-700 border-0"></hr>
    </div>
  )
}

export default AccordionExample