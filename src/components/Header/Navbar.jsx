import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = (props) => {

    return (
        <nav className="navbar">
            <NavLink to="/tables">Столы</NavLink>
            <NavLink to="/about">Об игре</NavLink>
        </nav>
    )
}

export default Navbar;