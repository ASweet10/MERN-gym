import { useAuthContext } from "./useAuthContext"
import { useBlogContext } from "./useBlogContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: blogDispatch } = useBlogContext()

    const logout = () => {
        localStorage.removeItem('user') // Remove user from localStorage
        dispatch({type: 'LOGOUT'}) // Dispatch logout action in AuthContext
        blogDispatch({type: 'SET_BLOGS', payload: null}) // Set user's blogs to null on logout
    }

    return { logout }
}