import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


class CheckInForm extends React.Component {
    state = {
        isCheckIn: false
    }

    componentDidMount() {
        this.setState({ isCheckIn: false });
    }

    // setIsCheckIn = () => {
    //     this.setState({ isCheckIn: !this.state.isCheckIn });
    // }

    render() {
        if (this.state.isCheckIn) {
            return <Redirect to={'login'} />
        }

        return (
            <div className="form-checkin-container">
                <div className="form-checkin-container__title">
                    Регистрация
                </div>
                <div className="form-checkin-container__form">
                    <form onSubmit={this.props.handleSubmit} >
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
}

export default reduxForm({
    form: "checkIn"
})(CheckInForm);