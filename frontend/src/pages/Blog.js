import { useEffect } from 'react'
import { useBlogContext } from '../hooks/useBlogContext'
import { useAuthContext } from '../hooks/useAuthContext'

import BlogDetails from '../components/BlogDetails'
import BlogForm from '../components/BlogForm'

const Blog = () => {
    const { blogs, dispatch } = useBlogContext()
    const { user } = useAuthContext()
    const baseURL = "https://mern-gym-backend.onrender.com"

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch(`${baseURL}/api/blog`, {
                /* Not needed, removed requireAuth from blogs route
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
                */
            })
            const json = await response.json() // Array of blog objects
            if(response.ok) {
                dispatch({type: 'SET_BLOGS', payload: json}) // Payload: array of blogs
            }
        }
        /*
        if( user ) {
            fetchBlogs()
        }
        */
       fetchBlogs()

    //Dependency array parameter, only fires once (avoid multiple calls) 
    // Dispatch is a dependency of useEffect as it's an external function
    })

    return (
        <div className='flex flex-col w-full h-full justify-center items-center bg-bg py-16 px-8 lg:px-36 xl:px-60'>
            <h1 className='text-6xl text-black font-bold text-center pb-8 pt-8'>
                <span className='text-primary'>EliteFitness </span>Blog
            </h1>
            <div className="flex flex-col gap-8">
                {user && (
                    user.email === "test@test.com" && <BlogForm />
                )}
                <div>
                {blogs && blogs.map((blog) =>(
                    <BlogDetails key={blog._id} blog={blog} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Blog