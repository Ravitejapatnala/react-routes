import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navigation=()=>{
    return(
        <nav className="navbar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}

export default Navigation;

//Refreshes the react pages
{/* <a href="/home" >Home</a>
<a href="/about">About</a>
<a href="/blog">Blog</a>
<a href="/Contact">Contact</a> */}

//Will not refreshes the react pages
{/* <Link to="/home">Home</Link>
<Link to="/about">About</Link>
<Link to="/blog">Blog</Link>
<Link to="/contact">Contact</Link> */}

//Similar to Link but creates a class="active" to the active link. So that we can style the active link when it is active.
{/* <NavLink to="/home">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/blog">Blog</NavLink>
<NavLink to="/contact">Contact</NavLink> */}