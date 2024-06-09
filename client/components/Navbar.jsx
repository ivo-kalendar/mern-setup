import { Link, NavLink, Outlet } from "react-router-dom";

export default function Navbar() { 
    return (
        <div>
            <h1>Navbar</h1>
            <hr />
            <Navlinks />
            <Links />
            <Hrefs />
            <hr />
            <Outlet />
        </div>
    )
}

const Navlinks = () => {
    return (
        <div>
            <h3>NavLinks: </h3>
            <NavLink to="/">Root </NavLink>
            <NavLink to="/home">Home </NavLink>
            <NavLink to="/about">About </NavLink>
            <NavLink to="/login">Login </NavLink>
            <NavLink to="/register">Register </NavLink>
            <NavLink to="/test">Test </NavLink>
        </div>
    )
}

const Links = () => {
    return (
        <div>
            <h3>Links: </h3>
            <Link to="/">Root </Link>
            <Link to="/home">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/login">Login </Link>
            <Link to="/register">Register </Link>
            <Link to="/test">Test </Link>
        </div>
    )
}

const Hrefs = () => {
    return (
        <div>
            <h3>Hrefs: </h3>
            <a href="/">Root </a>
            <a href="/home">Home </a>
            <a href="/about">About </a>
            <a href="/login">Login </a>
            <a href="/register">Register </a>
            <a href="/test">Test </a>
        </div>
    )
}