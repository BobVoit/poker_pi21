import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../../redux/authReducer';
import HeaderInfo from './HeaderInfo';
import Navbar from './Navbar';


class Header extends React.Component {

    logout = () => {
        this.props.logout(this.props.token);
    }

    render() {
        return (
            <header className="header-container">
                <HeaderInfo 
                    login={this.props.login}
                    isAuth={this.props.isAuth}
                    logout={this.logout}
                />
                <Navbar />
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