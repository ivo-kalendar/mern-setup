import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

/**
 * Redirects to the specified route using the provided navigation function.
 * @param {"string"} route - the route to redirect to
 */
export function useRedirect(route) {
    const navigate = useNavigate()
    console.log("redirected to: ", route)

    useEffect(() => {
        // window.scrollTo({ top: 0, behavior: 'smooth' })
        navigate(route)
    }, [])
}