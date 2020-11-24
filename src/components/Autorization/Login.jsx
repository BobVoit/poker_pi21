import React from 'react';
import LoginForm from './LoginForm';


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log("formData");
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


export default Login;