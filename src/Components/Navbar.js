import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/blogs'>Blogs</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/users'>User</NavLink>
        </nav>
    )
}

export default Navbar;