import { authAPI } from '../api/api';

const SET_CHECKIN_DATA = 'SET_CHECK_IN_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';

let initialState = {
    login: null,
    password: null,
    nickname: null,
    token: null,
    isAuth: false,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHECKIN_DATA: {
            return {
                ...state,
                login: action.data.login,
                password: action.data.password,
                nickname: action.data.nickname,
                isAuth: action.data.isAuth,
            };
        }
        case SET_LOGIN_DATA: {
            return {
                ...state,
                login: action.data.login,
                password: action.data.password,
                isAuth: action.data.isAuth,
            };
        }
        default: 
            return state;
    }
}

export const setUserData = (login, password, nickname, token, isAuth) => ({ 
    type: SET_CHECKIN_DATA, 
    data: {login, password, nickname, token, isAuth}
});

export const setLoginData = (login, password, isAuth) => ({
    type: SET_LOGIN_DATA,
    data: {login, password, isAuth}
}); 

export const checkIn = (login, password, nickname) => (dispatch) => {
    authAPI.checkIn(login, password, nickname).then((response) => {
        if (response.result = 'ok') {
            dispatch(setUserData(login, password, nickname, null, true));
        }
    })
    .catch((error) => {
        // написать логику
    })
}

export const login = (login, password) => (dispatch) => {
    authAPI.login(login, password).then(response => {
        dispatch(setUserData(login, password, nickname, true));
    })
    .catch(error => {
        // написать логику
    })
}

// export const logout = () => (dispatch) => {
//     authAPI.logout(login).then(response => {
//         dispatch(setLoginData(null, null, false));
//     })
// }

export default authReducer;
