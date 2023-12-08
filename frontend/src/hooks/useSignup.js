import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [ error, setError ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(null)
    const { dispatch } = useAuthContext()
    const baseURL = "https://mern-gym-backend.onrender.com"

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)     //Reset error to null everytime new request made

        const response = await fetch(`${baseURL}/api/user/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        })
        const json = await response.json() // Success: Return info with JWT. Fail: Return error message

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error) // Set Error message equal to error property from json object
        }
        if(response.ok) {
            localStorage.setItem('user', JSON.stringify(json)) // Save user to localStorage; Stringify json object

            dispatch({type: 'LOGIN', payload: json}) // Update auth context
            setIsLoading(false)
        }
    }

    return { signup, isLoading, error }
}