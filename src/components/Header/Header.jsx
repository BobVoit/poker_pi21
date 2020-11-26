import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    
    return (
        <header className="header-container">
            {/* {props.isAuth
            ? <span>{props.login}</span>
            : null
            } */}
            <div>

            </div>
            <nav>
                <NavLink to="/checkin">Регистрация</NavLink>
            </nav>
        </header>
    )
}

export default Header;