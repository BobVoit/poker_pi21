import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import CheckInForm from './CheckInForm';
import { checkIn, setRegistration, setAuthClearError } from '../../redux/authReducer';

const CheckIn = (props) => {
    const onSubmit = (formData) => {
        props.setAuthClearError();
        props.checkIn(formData.login, formData.password, formData.nickname)
    }

    if (props.isRegistration) {
        console.log('5656');
        props.setRegistration(false);
        return <Redirect to="/login" />
    }

    return (
        <div>
            <CheckInForm errorAPI={props.errorAPI} onSubmit={onSubmit} />
        </div>
    )
}

CheckIn.propTypes = {
    isAuth: PropTypes.bool,
    isRegistration: PropTypes.bool,
    errorAPI: PropTypes.string
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isRegistration: state.auth.isRegistration,
    errorAPI: state.auth.errorAPI
})

export default connect(mapStateToProps, {
    checkIn, 
    setRegistration,
    setAuthClearError
})(CheckIn);