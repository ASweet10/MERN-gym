import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { BsPersonCircle } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { GiWeightLiftingUp } from 'react-icons/gi'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const [ navOpen, setNavOpen ] = useState(false)

    const handleLogoutClick = () => {
        logout()
    }

    return (
        <header className="flex w-full z-50 justify-between items-center h-24 md:h-16 px-6 md:px-12 py-4 bg-black text-white">
            <Link to="/" className='flex flex-row items-center gap-2'>
                <h1 className='text-2xl md:text-3xl font-bold text-primary'>EliteFitness</h1>
                <GiWeightLiftingUp className='text-center text-primary text-3xl' />
            </Link>

            {/* Desktop */}
            <nav className='hidden md:flex justify-center items-center gap-8'>

                <div className='flex flex-row items-center gap-8 text-white'>
                    <Link to="/about" className='font-semibold uppercase'>About</Link>
                    <Link to="/classes" className='font-semibold uppercase'>Classes</Link>
                    <Link to="/rates" className='font-semibold uppercase'>Rates</Link>
                    <Link to="/blog" className='font-semibold uppercase'>Blog</Link>
                    
                    { user && (
                        <div className='flex flex-row items-center gap-2 cursor-pointer'>
                            <BsPersonCircle className='text-2xl' />
                            <span className='font-bold'>{user.email}</span>
                        </div>
                    )}

                </div>


                { user 
                    ? (
                        <button onClick={handleLogoutClick} className='py-2 px-6 md:ml-8 rounded-md font-bold bg-primary text-white'>
                            Log out
                        </button>
                    ) 
                    : (
                        <div className='flex gap-6'>
                            <Link to="/login" className='py-2 px-6 rounded-md font-bold bg-primary text-white'>Login</Link>
                            <Link to="/signup" className='py-2 px-6 rounded-md font-bold bg-primary text-white'>Register</Link>
                        </div>
                    )
                }

            </nav>

            {/* Mobile */}
            <nav className='flex md:hidden justify-center items-center'>
                { navOpen && (
                    <div className={`${navOpen ? "opacity-100" : "opacity-0" } fixed z-30 top-0 bottom-0 left-0 right-0 w-full h-1/2 bg-black transition-opacity duration-500`}>
                        <div className='flex flex-col gap-8 py-12 items-center text-white justify-between'>

                            <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                <BsPersonCircle className='text-4xl' />
                                <span className='font-bold text-2xl'>{user.email}</span>
                            </div>

                            <Link to="/about" onClick={() => setNavOpen(!navOpen)} className='text-3xl font-semibold uppercase'>About</Link>
                            <Link to="/classes" onClick={() => setNavOpen(!navOpen)} className='text-3xl font-semibold uppercase'>Classes</Link>
                            <Link to="/rates" onClick={() => setNavOpen(!navOpen)} className='text-3xl font-semibold uppercase'>Rates</Link>
                            <Link to="/blog" onClick={() => setNavOpen(!navOpen)} className='text-3xl font-semibold uppercase'>Blog</Link>

                            <button onClick={handleLogoutClick} className='py-6 px-12 md:py-2 md:px-6 text-2xl md:text-md rounded-md font-bold bg-primary text-white'>
                                Log out
                            </button>
                        </div>
                    </div>
                )}
            </nav>
            
            { user && (
                <div onClick={() => setNavOpen(!navOpen)} className='z-50'>
                    { navOpen ? <AiOutlineClose className='text-white text-3xl' /> : <FaBars className='text-white text-3xl' /> }
                </div>
            )
            }

        </header>
    )
}

export default Navbar