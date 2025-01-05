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
        setNavOpen(!navOpen)
        logout()
    }

    return (
        <header className="flex w-full z-50 justify-between items-center h-24 md:h-16 px-6 md:px-20 py-4 bg-black text-white">
            <div className='hidden md:flex gap-8'>
                <Link to="/" className='flex flex-row items-center gap-2 group'>
                    <h1 className='text-2xl md:text-3xl font-bold text-secondary font-DMSans'>EliteFitness</h1>
                    <GiWeightLiftingUp className='text-center text-secondary group-hover:text-primary text-2xl' />
                </Link>
                <div className='flex flex-row items-center gap-8 text-white font-semibold uppercase'>
                    <Link to="/about">About</Link>
                    <Link to="/classes">Classes</Link>
                    <Link to="/rates">Rates</Link>
                    <Link to="/blog">Blog</Link>
                </div>
            </div>

            {/* Desktop Links */}
            {/*
            <div className='hidden md:flex'>
                <div className='flex flex-row items-center gap-8 text-white'>
                    <Link to="/about" className='font-semibold uppercase'>About</Link>
                    <Link to="/classes" className='font-semibold uppercase'>Classes</Link>
                    <Link to="/rates" className='font-semibold uppercase'>Rates</Link>
                    <Link to="/blog" className='font-semibold uppercase'>Blog</Link>
                </div>
            </div>
            */}

            {/* Desktop User/Login Section */}
            <div className='hidden md:flex gap-8'>
                { user 
                    ? (
                        <div className='flex'>
                            <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                <BsPersonCircle className='text-2xl' />
                                <span className='font-bold'>{user.email}</span>
                            </div>
                            <button onClick={handleLogoutClick} className='py-2 px-6 md:ml-8 rounded-md font-bold bg-primary text-white'>
                                Log out
                            </button>
                        </div>
                    ) 
                    : (
                        <div className='flex gap-4'>
                            <Link to="/login" className='py-2 px-6 rounded-md font-bold bg-transparent text-white'>Login</Link>
                            <Link to="/signup" className='py-2 px-6 rounded-md font-bold bg-primary hover:bg-secondary text-white'>Become a Member</Link>
                        </div>
                    )
                }
            </div>

            {/* Mobile */}
            <nav className='flex md:hidden justify-center items-center'>
                { navOpen && (
                    <div className={`${navOpen ? "opacity-100" : "opacity-0" } fixed z-30 top-0 bottom-0 left-0 right-0 w-full h-screen bg-black transition-opacity duration-500`}>
                        <div className='flex flex-col gap-6 py-12 items-center text-white justify-between'>
                            { user && (
                                <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                    <BsPersonCircle className='text-4xl' />
                                    <span className='font-bold text-2xl'>{user.email}</span>
                                </div>
                            )}

                            <Link to="/about" onClick={() => setNavOpen(!navOpen)} className='text-2xl font-semibold uppercase'>About</Link>
                            <Link to="/classes" onClick={() => setNavOpen(!navOpen)} className='text-2xl font-semibold uppercase'>Classes</Link>
                            <Link to="/rates" onClick={() => setNavOpen(!navOpen)} className='text-2xl font-semibold uppercase'>Rates</Link>
                            <Link to="/blog" onClick={() => setNavOpen(!navOpen)} className='text-2xl font-semibold uppercase'>Blog</Link>
                            
                            { user 
                                ? (
                                    <button onClick={handleLogoutClick} className='py-4 px-8 md:py-2 md:px-6 text-2xl md:text-md rounded-md font-bold bg-primary text-white'>
                                        Log out
                                    </button>
                                ) : (
                                    <div className='flex flex-col gap-6'>
                                        <Link to="/login" onClick={() => setNavOpen(!navOpen)} className='py-4 px-8 text-xl rounded-md font-bold text-center bg-darkGreyHover text-white'>Login</Link>
                                        <Link to="/signup" onClick={() => setNavOpen(!navOpen)} className='py-4 px-8 text-xl rounded-md font-bold text-center bg-primary text-white'>Become a Member</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )}
                <div onClick={() => setNavOpen(!navOpen)} className={`z-50 ${navOpen ? 'fixed pl-6' : ''}`}>
                    { navOpen ? <AiOutlineClose className='text-white text-3xl' /> : <FaBars className='text-white text-3xl' /> }
                </div>
            </nav>
        </header>
    )
}

export default Navbar