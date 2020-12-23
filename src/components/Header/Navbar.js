import { Link } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = (props) => {

    return (
        <nav className="navbar">
            <Link component={NavLink} to="/tables">Столы</Link>
            <Link component={NavLink} to="/about">Об игре</Link>
        </nav>
    )
}

export default Navbar;