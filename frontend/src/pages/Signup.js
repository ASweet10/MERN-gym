import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const { signup, isLoading, error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault() // Default behavior is page refresh; disable
        await signup( email, password )
    }

    return(
        <div className='flex justify-center items-center w-full h-screen'>
            <form className="flex flex-col my-12 mx-auto p-5 bg-nav-bg rounded-md max-w-[400px]" onSubmit={ handleSubmit }>
                <h3 className='text-xl font-semibold text-primary text-center'>New to SmartFitness? Register free</h3>

                <input
                    type="email" // Expects email, not string
                    onChange={(e) => setEmail(e.target.value)} // setEmail with (e) supplied by input
                    value={ email } // If unchanged, value is email from state
                    className='w-full p-3 mt-2 mb-4 border-2 border-solid border-nav-bg rounded-md'
                    placeholder='Email'
                />
                <input
                    type="password" // Hide with *** while typing
                    onChange={(e) => setPassword(e.target.value)} // setPassword with (e) supplied by input
                    value={ password } // If unchanged, value is password from state
                    className='w-full p-3 mt-2 mb-2 border-2 border-solid border-nav-bg rounded-md'
                    placeholder='Password'
                />
                <Link to="/login"><p className='text-sm mb-4 text-right cursor-pointer'>Already have an account?</p></Link>
                <button disabled={isLoading} className="bg-primary text-nav-bg font-semibold p-3 rounded-md cursor-pointer">
                    Register
                </button>
                {error && // If error exists, create error div
                    <div className="p-3 my-5 mx-0 bg-white border-solid border-2 border-error text-error rounded-md">
                        {error}
                    </div>
                }
            </form>
        </div>
    )
}

export default Signup