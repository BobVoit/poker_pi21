import React from 'react';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

let LoginForm = (props) => {
    return (
        <div className="form-login-container">
            <div className="form-login-container__title">
                Войти
            </div>
            <div className="form-login-container__form">
                <form onSubmit={props.handleSubmit} >
                    <div className="form-login-container__login form-login-container__input">
                        <Field placeholder={"Login"} name={"login"} component={"input"} />
                    </div>
                    <div className="form-login-container__password form-login-container__input">
                        <Field placeholder={"Password"} name={"password"} type={'password'} component={"input"} />
                    </div>
                    <div className="form-login-container__button">
                        <button>Войти</button>
                    </div>
                </form>
                <div className="form-login-container__link">
                    <NavLink to="/checkin">Зарегистрироваться</NavLink>
                </div>
            </div>
        </div>
    )
}

export default reduxForm({
    form: "login",
})(LoginForm);