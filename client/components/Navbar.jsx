import { Link, NavLink } from "react-router-dom";

export default function Navbar() { 
    return (
        <div>
            <h1>Navbar</h1>
            <Link to="/">Root </Link>
            <Link to="/home">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/login">Login </Link>
            <Link to="/register">Register </Link>
            <Link to="/test">Test </Link>
        </div>
    )
}   