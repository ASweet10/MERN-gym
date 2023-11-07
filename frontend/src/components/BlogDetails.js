import { useBlogContext } from '../hooks/useBlogContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { AiFillDelete, AiFillCheckCircle } from 'react-icons/ai'
import bike from '../images/pexels-bike.jpg'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const BlogDetails = ({ blog }) => {
    const { dispatch } = useBlogContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if( !user ) {
            return
        }

        const response = await fetch('/api/blog/' + blog._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_BLOG', payload: json})
            toast.error('Deleted ' + blog.title)
        }
    }

    return(
        <div className="text my-5 p-5 relative">
            <div className='flex flex-col md:flex-row justify-left items-center mb-2'>
                {/* <img src={'https://dr04meiydmd3r.cloudfront.net/blog-stretch.jpg'} alt="" className='h-68 w-80' /> */}
                <img src={blog.src} alt="" className='h-68 w-80' />
                <div className='flex flex-col py-4 md:px-10 text-left'>
                    <p className='text-sm'>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</p>{/* AddSuffix: Adds 'ago' after time */}
                    <h4 className='font-bold text-2xl py-3 hover:cursor-pointer hover:underline'>{blog.title}</h4>
                    <p className='text-lg'>{blog.content.substring(0, 100)}</p>
                    <Link to="/:id" className='pt-8'>
                        <p className='text-sm font-bold hover:cursor-pointer hover:underline'>Read More</p>
                    </Link>
                </div>
                { user.email === "test@test.com" && 
                    <span className="p-3 bg-white rounded-full cursor-pointer" onClick={handleClick}>
                        <AiFillDelete className='text-2xl text-primary' />
                    </span> 
                }

            </div>


        </div>
    )
}

export default BlogDetails