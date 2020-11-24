import React from 'react';
import CheckInForm from './CheckInForm';
import { checkIn } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const CheckIn = (props) => {
    const onSubmit = (formData) => {
        props.checkIn(formData.login, formData.password, formData.nickname)
    }

    if (props.isAuth) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <div>Регистрация</div>
            <CheckInForm  onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
    checkIn
})(CheckIn);