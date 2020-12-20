import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
                    nickname={this.props.nickname}
                    isAuth={this.props.isAuth}
                    logout={this.logout}
                />
                <Navbar />
            </header>
        )
    }
}

Header.propTypes = {
    isAuth: PropTypes.bool,
    nickname: PropTypes.string,
    token: PropTypes.string
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    nickname: state.auth.nickname,
    token: state.auth.token
})

export default connect(mapStateToProps, {
    logout
})(Header);