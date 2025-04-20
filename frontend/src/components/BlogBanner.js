import React, { useEffect } from 'react'
import { useBlogContext } from '../hooks/useBlogContext'
import { Link } from 'react-router-dom'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const BlogBanner = () => {
  const { blogs, dispatch } = useBlogContext()
  const baseURL = "https://mern-gym-backend.onrender.com"

  useEffect(() => {
      const fetchBlogs = async () => {
          const response = await fetch(`${baseURL}/api/blog`, {
              headers: { 'Access-Control-Allow-Origin': '*', }
          })
          const json = await response.json() // Array of blog objects
          if(response.ok) {
              dispatch({type: 'SET_BLOGS', payload: json}) // Payload: array of blogs
          }
      }
     fetchBlogs()
  }, [])

  return (
    <div className='flex flex-col justify-center items-center w-full h-full py-28 bg-grey'>
      <h1 className='text-5xl font-bold text-center text-yellow-900 pb-8 uppercase'>Latest News</h1>
      
      <div className="flex flex-col md:flex-row mx-10 md:gap-4 xl:mx-80">
        {blogs && blogs.slice(0, 3).map((blog) =>(

          <div className="my-5 relative" key={blog._id}>
            <div className='flex flex-col justify-left items-center mb-2'>
                <img src={blog.src} alt="" className='h-68 w-80 md:w-96 cursor-pointer rounded-sm' />
                <div className='flex flex-col py-4 md:px-6 text-left'>
                  <p className='text-sm'>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>{/* AddSuffix: Adds 'ago' after time */}
                  <Link className='font-bold text-2xl py-3 hover:cursor-pointer hover:underline'>{blog.title}</Link>
                  <p className='text-sm'>{blog.content.substring(0, 150)}...</p>
                  <Link className='pt-8 text-sm font-bold hover:cursor-pointer hover:underline'>Read More</Link>
                </div>
            </div>
          </div>

        ))}
      </div>
      <Link to="/blog" 
        className='flex py-4 px-6 rounded-sm bg-transparent duration-300 hover:bg-yellow-800 border-yellow-800 border-2 text-black hover:text-white font-bold text-center gap-4 mt-12 md:mb-8'
      >
        More Articles
      </Link>
    </div>
  )
}

export default BlogBanner