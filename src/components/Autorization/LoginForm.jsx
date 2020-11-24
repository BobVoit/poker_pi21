import React from 'react';
import { Field, reduxForm } from 'redux-form';

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div className="form-authorization__login">
                <Field placeholder={"Login"} name={"login"} component={"input"} />
            </div>
            <div className="form-authorization__password">
                <Field placeholder={"Password"} name={"password"} component={"input"} />
            </div>
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: "login",
})(LoginForm);