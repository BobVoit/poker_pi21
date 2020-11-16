import React from 'react';
import { NavLink } from 'react-router-dom';

class FormAuthorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
        }
    }

    handleChangeLogin(event) {
        this.setState({login: event.target.value})
    }

    
    handleChangePassword(event) {
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <div className="form-authorization">
                <form onSubmit={this.handleChangeLogin}>
                    <div className="form-authorization__input-blocks">
                        <div className="form-authorization__login form-authorization__input-block">
                            <input type="text" placeholder="Login" />
                        </div>
                        <div className="form-authorization_password form-authorization__input-block">
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-authorization__submit">
                        <input type="submit" value="Войти" />
                    </div>
                    <div className="form-authorization__forgot-password">
                        <NavLink to="#">Забыли пароль?</NavLink>
                    </div>
                    <div className="form-authorization__check-in">
                        <button>Создать аккаунт</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormAuthorization;