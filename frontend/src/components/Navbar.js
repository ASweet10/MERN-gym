import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { BsPersonCircle } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const [ navOpen, setNavOpen ] = useState(false) 

    const handleClick = () => {
        logout()
    }

    return (
        <header className="flex w-full justify-between gap-8 items-center h-20 px-8 md:px-12 py-4  bg-nav-bg text-black">
            <Link to="/" className='flex flex-row items-center gap-2'>
                <h1 className='text-2xl md:text-3xl font-bold text-primary'>EliteFitness</h1>
            </Link>

            {/* Desktop */}
            <nav className='hidden md:flex justify-center items-center'>
                {/* If user isn't null (exists in AuthContext), output user template */}
                {user && (
                    <div className='flex flex-row items-center gap-6'>
                        <Link to="/about">
                            <h1 className='font-semibold uppercase'>About</h1>
                        </Link>
                        <Link to="/classes">
                            <h1 className='font-semibold uppercase'>Classes</h1>
                        </Link>
                        <Link to="/blog">
                            <h1 className='font-semibold uppercase'>Blog</h1>
                        </Link>


                        <div className='flex flex-row items-center gap-2 cursor-pointer'>
                            <BsPersonCircle className='text-2xl' />
                            <span className='font-bold'>{user.email}</span>
                        </div>

                        <button
                            onClick={handleClick}
                            className='py-2 px-3 mx-2 rounded-md border-2 font-semibold border-solid'
                        >
                            Log out
                        </button>
                    </div>
                )}

                {!user && (
                    <div>
                        <Link to="/login" className='py-1.5 px-3 mx-1 rounded-md text-white border-2 border-solid border-white'>Login</Link>
                        <Link to="/signup" className='py-1.5 px-3 mx-1 rounded-md text-white border-2 border-solid border-white'>Register</Link>
                    </div>
                )}

            </nav>

            {/* Mobile */}
            <nav className='flex md:hidden justify-center items-center'>
                <div onClick={() => setNavOpen(!navOpen)}>
                    { navOpen 
                        ? <AiOutlineClose className='text-black text-3xl' />
                        : <FaBars className='text-black text-3xl' />
                    }
                </div>

            </nav>
        </header>
    )
}

export default Navbar