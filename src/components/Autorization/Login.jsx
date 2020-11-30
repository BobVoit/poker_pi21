import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password)
    }

    if (props.isAuth) {
        return <Redirect to="/" />
    }

    return (
        <div className="authorization-container">
            <div className="authorization-form__title">
                Покер
            </div>
            <LoginForm onSubmit={onSubmit} />   
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
    login
})(Login);