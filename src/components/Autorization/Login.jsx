import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';

import { login, setAuthClearError } from '../../redux/authReducer';

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData.login);
        props.setAuthClearError();
        props.login(formData.login, formData.password);
    }
    let err = props.error;
    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return (
        <div className="authorization-container">
            <LoginForm errorAPI={props.errorAPI} onSubmit={onSubmit} />   
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorAPI: state.auth.error
})

export default connect(mapStateToProps, {
    login,
    setAuthClearError
})(Login);