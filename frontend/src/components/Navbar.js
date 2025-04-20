import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
    const location = useLocation()

    const handleLogoutClick = () => {
        setNavOpen(!navOpen)
        logout()
    }

    console.log(window.location.pathname)

    return (
        <header className={`
            absolute w-full z-40 justify-between items-center h-24 md:h-20 p-6 md:px-20 bg-transparent
            ${location.pathname === '/' ? 'text-white' : 'text-black'}
            `}>
            <div className='hidden md:flex justify-between'>
                <div className='flex gap-8'>
                    <Link to="/" className='flex flex-row items-center gap-2 group'>
                        <h1 className='text-2xl md:text-3xl font-bold text-yellow-700 font-DMSans'>EliteFitness</h1>
                        <GiWeightLiftingUp className='text-center text-yellow-700 group-hover:text-yellow-800 text-2xl' />
                    </Link>
                    <div className='flex flex-row items-center gap-8 font-semibold uppercase z-50'>
                        <Link className='hover:text-yellow-800' to="/about">About</Link>
                        <Link className='hover:text-yellow-800' to="/classes">Classes</Link>
                        <Link className='hover:text-yellow-800' to="/rates">Rates</Link>
                        <Link className='hover:text-yellow-800' to="/blog">Blog</Link>
                    </div>
                </div>

                <div className='flex gap-8'>
                    { user 
                        ? (
                            <div className='flex'>
                                <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                    <BsPersonCircle className='text-2xl' />
                                    <span className='font-bold'>{user.email}</span>
                                </div>
                                <button onClick={handleLogoutClick} className='py-2 px-6 md:ml-8 rounded-md font-bold bg-yellow-800'>
                                    Log out
                                </button>
                            </div>
                        ) 
                        : (
                            <div className='flex gap-4'>
                                <Link to="/login" className={`text-lg py-2 px-6 rounded-md font-bold bg-transparent
                                    ${location.pathname === '/' ? 'text-white' : 'text-black'}`}
                                >
                                    Login
                                </Link>
                                <Link to="/signup" 
                                    className={`text-lg py-2 px-6 rounded-sm font-bold bg-transparent duration-300 hover:bg-yellow-800 border-2 border-yellow-800
                                        ${location.pathname === '/' ? 'text-white' : 'text-black'}`}
                                >
                                    Join Today
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>

            {/* Mobile */}
            <nav className='flex md:hidden justify-center items-center'>
                { navOpen && (
                    <div className={`${navOpen ? "opacity-100" : "opacity-0" } fixed z-30 top-0 bottom-0 left-0 right-0 w-full h-screen bg-gray-900 transition-opacity duration-500`}>
                        <div className='flex flex-col gap-6 py-20 items-center text-white justify-between'>
                            { user && (
                                <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                    <BsPersonCircle className='text-4xl text-yellow-700' />
                                    <span className='font-bold text-2xl text-yellow-700'>{user.email}</span>
                                </div>
                            )}

                            <div className='flex flex-col pt-12 gap-6 text-center'>
                                <Link to="/about" onClick={() => setNavOpen(!navOpen)} className='text-2xl font-semibold uppercase'>About</Link>
                                <Link to="/classes" onClick={() => setNavOpen(!navOpen)} className='text-2xl font-semibold uppercase'>Classes</Link>
                                <Link to="/rates" onClick={() => setNavOpen(!navOpen)} className='text-2xl font-semibold uppercase'>Rates</Link>
                                <Link to="/blog" onClick={() => setNavOpen(!navOpen)} className='text-2xl font-semibold uppercase'>Blog</Link>
                            </div>
                            
                            { user 
                                ? (
                                    <button onClick={handleLogoutClick} className='py-4 px-8 text-2xl md:text-md rounded-md font-bold bg-primary text-white'>
                                        Log out
                                    </button>
                                ) : (
                                    <div className='flex flex-col gap-4 pt-16'>
                                        <Link to="/login" onClick={() => setNavOpen(!navOpen)} className='px-8 text-xl rounded-md font-bold text-center bg-darkGreyHover text-white'>Login</Link>
                                        <Link to="/signup" onClick={() => setNavOpen(!navOpen)} className='px-8 text-xl rounded-md font-bold text-center bg-primary text-yellow-700'>Become a Member</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )}
                <div onClick={() => setNavOpen(!navOpen)} className="z-50">
                    { navOpen ? <AiOutlineClose className='text-white text-3xl' /> : <FaBars className='text-white text-3xl' /> }
                </div>
            </nav>
        </header>
    )
}

export default Navbar