import React from 'react';
import { Field, reduxForm } from 'redux-form';


const CheckInForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div className>
                <Field 
                placeholder={"Login"} name={"login"} component={'input'} />
            </div>
            <div>
                <Field 
                type={"Password"} placeholder={"password"} name={"password"} component={'input'} />
            </div>
            <div>
                <Field 
                name={"nickname"} placeholder={"Nickname"} component={'input'}/>    
            </div>
            <div>
                <button>Зарегистрироваться</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: "checkIn"
})(CheckInForm);