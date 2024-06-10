import { useRedirect } from "../hooks/navigation"
import Spinner from "../layout/Spinner"

/**
 * Redirects to the specified route using the provided navigation function.
 * @param {Object} props - the props object containing the route to redirect to
 * @return {void} 
 */
export default function Redirect(props) {
    useRedirect(props.route)
    return <Spinner />
}