import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../../redux/authReducer';


class Header extends React.Component {
    logout = () => {
        this.props.logout(this.props.token);
    }


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
                    { !this.props.isAuth 
                        ? <div className="header-container__login">
                            <button className="header__btn-check-in">
                                <NavLink to="/checkin">Регистрация</NavLink>
                             </button> 
                             <button className="header__btn-login">
                                <NavLink to="/login">Войти</NavLink>
                            </button>  
                            <button className="info__btn ml-auto">
                              
                            </button> 
                            
                        </div>
                        : <button onClick={this.logout} >Выйти</button>
                    }
                </nav>
            </header>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    token: state.auth.token
})

export default connect(mapStateToProps, {
    logout
})(Header);