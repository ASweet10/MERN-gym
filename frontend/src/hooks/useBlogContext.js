import { BlogContext } from '../context/BlogContext'
import { useContext } from 'react'

export const useBlogContext = () => {
    const context = useContext(BlogContext)

    //Checks to see if context is used within scope of BlogContextProvider in Index.js
    if(!context) {
        throw Error('useBlogContext must be used inside a BlogContextProvider')
    }

    return context
}