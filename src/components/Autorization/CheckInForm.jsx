import React from 'react';
import { Field, reduxForm } from 'redux-form';


const CheckInForm = (props) => {
    return (

        <div className="form-checkin-container">
            <div className="form-checkin-container__title">
                Регистрация
            </div>
            <div className="form-checkin-container__form">
                <form onSubmit={props.handleSubmit} >
                    <div className="form-checkin-container__login form-checkin-container__input">
                        <Field 
                        placeholder={"Login"} name={"login"} component={'input'} />
                    </div>
                    <div className="form-checkin-container__password form-checkin-container__input">
                        <Field  
                        type={"Password"} placeholder={"password"} name={"password"} component={'input'} />
                    </div>
                    <div className="form-checkin-container__nickname form-checkin-container__input">
                        <Field 
                        name={"nickname"} placeholder={"Nickname"} component={'input'}/>    
                    </div>
                    <div className="form-checkin-container__button">
                        <button>Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: "checkIn"
})(CheckInForm);