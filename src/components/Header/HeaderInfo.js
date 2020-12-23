import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button, Link } from '@material-ui/core';

const HeaderInfo = (props) => {


  return (
    <div className="header-container__info">
      <div className="header-container__name">
        {props.isAuth ? (
          <Link component={NavLink} to="/profile" >{props.nickname}</Link>
        ) : null}
      </div>
      {!props.isAuth ? (
        <div className="header-container__login">
          <Button component={NavLink} to="/checkin" variant="outlined">Регистрация</Button>
          <Button component={NavLink} to="/login" variant="outlined">Войти</Button>
        </div>
      ) : (
        <div className="header-container__btn-logout">
          {/* <button onClick={props.logout}>Выйти</button> */}
          <Button onClick={props.logout} color="primary" variant="contained">Выйти</Button>
        </div>
      )}
    </div>
  );
}

export default HeaderInfo;