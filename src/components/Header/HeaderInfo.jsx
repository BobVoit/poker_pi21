import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderInfo = (props) => {
    return (
      <div className="header-container__info">
        <div className="header-container__name">
          {props.isAuth ? (
            <NavLink to="/profile">{props.login}</NavLink>
          ) : null}
        </div>
        {!props.isAuth ? (
          <div className="header-container__login">
            <button className="header__btn-check-in">
              <NavLink to="/checkin">Регистрация</NavLink>
            </button>
            <button className="header__btn-login">
              <NavLink to="/login">Войти</NavLink>
            </button>
            <button className="info__btn ml-auto"></button>
          </div>
        ) : (
          <div className="header-container__btn-logout">
            <button onClick={props.logout}>Выйти</button>
          </div>
        )}
      </div>
    );
}

export default HeaderInfo;