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
        <div className='flex justify-center items-center w-full h-screen bg-grey'>
            <form className="flex flex-col my-12 mx-auto p-5 max-w-[400px]" onSubmit={ handleSubmit }>
                <h3 className='text-3xl font-semibold text-primary text-center pb-2'>New to EliteFitness? Register free</h3>

                <input
                    type="email" // Expects email, not string
                    onChange={(e) => setEmail(e.target.value)} // setEmail with (e) supplied by input
                    value={ email } // If unchanged, value is email from state
                    className='w-full p-3 mt-2 mb-4 border-2 border-solid rounded-md'
                    placeholder='Email'
                />
                <input
                    type="password" // Hide with *** while typing
                    onChange={(e) => setPassword(e.target.value)} // setPassword with (e) supplied by input
                    value={ password } // If unchanged, value is password from state
                    className='w-full p-3 mt-2 mb-2 border-2 border-solid rounded-md'
                    placeholder='Password'
                />
                <Link to="/login"><p className='text-sm mb-4 text-lightBlue text-right cursor-pointer hover:underline'>Already have an account?</p></Link>
                <button disabled={isLoading} className="bg-primary hover:bg-secondary text-white text-lg font-bold p-3 rounded-md cursor-pointer">
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