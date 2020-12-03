import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const HeaderInfo = (props) => {
    const logout = () => {
        props.logout(props.token);
    }

    return (
        <div className="header-info">
            {props.isAuth
            ? <div className="header-info__user">
                <div className="header-info__user-info">
                    <div className="header-info__login">
                        <span>{props.login}</span>
                    </div>
                    <div className="header-info__pnoto">
                        <div>
                            {/* <img src="" alt="" /> */}
                        </div>
                        <Button size="small" variant="contained" color="red" onClick={logout}>Logout</Button>
                    </div>
                </div>
                <div className="header-info__link-profile">
                    <NavLink to="/profile">Профиль</NavLink>
                </div>
            </div>
            : <div className="header-info__links">
                <NavLink to="/checkin">Регистрация</NavLink>
                <NavLink to="/login">Войти</NavLink>
            </div>
            }
        </div>
    )
}

export default HeaderInfo;