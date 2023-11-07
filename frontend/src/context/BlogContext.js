import { createContext, useReducer } from 'react'

export const BlogContext = createContext()

//Previous state, action to take
export const blogReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BLOGS':
            return {
                blogs: action.payload  //Payload: array of blogs; Passed into "dispatch" in BlogsContextProvider
            }
        case 'CREATE_BLOG':
            return {
                blogs: [action.payload, ...state.blogs]   // Pass new blog into array using spread operator
            }
        case 'DELETE_BLOG':
            return {
                blogs: state.blogs.filter((blog) => blog._id !== action.payload._id) // Filter and keep all blogs without given (deleted) id
            }
        default:
            return state
    }
}

export const BlogContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogReducer, {
        blogs: null
    })

    return (
        //Wrap all components so they have access to context
        <BlogContext.Provider value={{ ...state, dispatch}}>
            { children }
        </BlogContext.Provider>
    )
}