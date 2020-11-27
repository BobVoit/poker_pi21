import React from 'react';
import { NavLink } from 'react-router-dom';


class Header extends React.Component  {
    
    render() {
        return (
            <header className="header-container">
                {this.props.isAuth
                ? <span className="header-container__user-login">{this.props.login}</span>
                : null
                }
                <div>
    
                </div>
                <nav>
                   { !this.props.isAuth &&
                        <div>
                            <NavLink to="/checkin">Регистрация</NavLink>
                            <NavLink to="/login">Войти</NavLink>
                        </div>
                    }
                </nav>
            </header>
        )
    }
}

export default Header;