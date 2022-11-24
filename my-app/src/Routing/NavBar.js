import React from "react";
import { NavLink } from "react-router-dom";
import style from './home.module.css';

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/user'>Users</NavLink>
            <NavLink to='/blogs'>Blogs</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    )
}

export default NavBar;