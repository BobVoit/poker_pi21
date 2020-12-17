import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { login, setAuthClearError } from '../../redux/authReducer';

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData.login);
        props.setAuthClearError();
        props.login(formData.login, formData.password);
    }
    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return (
        <div className="authorization-container">
            <LoginForm errorAPI={props.errorAPI} onSubmit={onSubmit} />   
        </div>
    )
}

Login.propTypes = {
    isAuth: PropTypes.bool,
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorAPI: state.auth.error
})

export default connect(mapStateToProps, {
    login,
    setAuthClearError
})(Login);