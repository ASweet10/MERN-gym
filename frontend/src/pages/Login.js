import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const { login, isLoading, error } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault() // Default behavior is page refresh; disable
        await login( email, password )
    }

    return (
        <div className='flex justify-center items-center w-full h-screen bg-gray'>
            <form className="flex flex-col my-12 mx-auto p-5" onSubmit={ handleSubmit }>
                <h3 className='text-3xl md:text-4xl font-semibold text-primary text-center pb-6'>Sign In</h3>

                <input
                    type="email" // Expects email, not string
                    onChange={(e) => setEmail(e.target.value)} // setEmail with (e) supplied by input
                    value={ email } // If unchanged, value is email from state
                    className='w-full p-3 mt-2 mb-4 min-w-[250px] md:min-w-[400px] border-2 border-solid rounded-md focus:border-primary'
                    placeholder='Email'
                />
                <input
                    type="password" // Hide with *** while typing
                    onChange={(e) => setPassword(e.target.value)} // setPassword with (e) supplied by input
                    value={ password } // If unchanged, value is password from state
                    className='w-full p-3 mt-2 mb-2 border-2 border-solid rounded-md'
                    placeholder='Password'
                />
                <p className='text-sm mb-4 text-right text-blue-500 cursor-pointer hover:underline'>Forgot your password?</p>
                <button disabled={isLoading} className="bg-primary hover:bg-secondary text-white text-lg font-bold p-3 rounded-md cursor-pointer">
                    Sign In 
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

export default Login