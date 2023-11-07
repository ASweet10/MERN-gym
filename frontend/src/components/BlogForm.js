import { useState } from 'react'
import { useBlogContext } from '../hooks/useBlogContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCurrentDate } from '../hooks/useCurrentDate'

import toast from 'react-hot-toast'

const BlogForm = () => {
    const { dispatch } = useBlogContext()
    const { user } = useAuthContext()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [src, setSrc] = useState('')
    let date = useCurrentDate()
    //const email = user.email
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])


    const handleSubmit = async (event) => {
        event.preventDefault()   //Prevent default action (page refresh)

        //No user, return from function & return error
        if( !user ) {
            setError('You must be logged in')
            return
        }
        const blog = {title, content, src, date}
        console.log('attempted submit & date: ' + date)
        //console.log('email: ' + email)
        console.log(src)

        const response = await fetch('/api/blog', {
            method: 'POST',
            body: JSON.stringify(blog), //Turn object into json string
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error) // Return error property from code 400 json from blogController
            setEmptyFields(json.emptyFields) // Set empty fields from blogController
        }

        if(response.ok) {
            //Reset to default strings
            setTitle('')
            setContent('')
            setSrc('')
            date = ''
            setError(null) //Set error null if one existed
            setEmptyFields([])
            dispatch({type: 'CREATE_BLOG', payload: json})
            toast.success('Added ' + title)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3 className='text-xl font-semibold text-center capitalize'>Add a new blog post</h3>
            <input type="text" onChange={(event) => setTitle(event.target.value)} value={title} placeholder='Title'
                //className={emptyFields.includes('title') ? 'error' : ''}
                className='w-full p-3 mt-3 mb-5 border-2 border-solid border-nav-bg rounded-md'
            />
            <textarea onChange={(event) => setContent(event.target.value)} value={content} placeholder='Add your content here'
                className='w-full p-3 mt-3 mb-5 border-2 border-solid border-nav-bg rounded-md'
                //className={emptyFields.includes('weight') ? 'error' : ''}
            />
            <input type="text" onChange={(event) => setSrc(event.target.value)} value={src} placeholder='S3 Object URL'
                className='w-full p-3 mt-3 mb-5 border-2 border-solid border-nav-bg rounded-md'
            />

            <button className="bg-primary w-full text-nav-bg font-semibold p-3 mt-4 rounded-md cursor-pointer">Add</button>
            {error &&
                <div className="p-3 my-5 mx-0 bg-white border-solid border-2 border-error text-error rounded-md">
                    {error}
                </div>
            } {/* If error exists, create error div */}
        </form>
    )
}

export default BlogForm