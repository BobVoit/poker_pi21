import Cookies from 'js-cookie';

import { authAPI } from '../api/api';
import { errorsOfAPI } from '../another/errors';

const SET_TOKEN = 'SET_TOKEN';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_REGISTRATION = 'SET_REGISTRATION';
const SET_CLEAR_ERROR = 'SET_CLEAR_ERROR';
const SET_ERROR = "SET_ERROR";

let initialState = {
    login: null,
    password: null,
    nickname: null,
    money: null,
    token: null,
    isAuth: false,
    error: null,
    isRegistration: false,
}



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        } 
        case SET_USER_DATA: {
            return {
                ...state,
                login: action.login,
                password: action.password,
                nickname: action.nickname,
                money: (action.isAuth ? Number(action.money) : null),
                token: action.token,
                isAuth: action.isAuth,
            }
        }
        case SET_REGISTRATION: {
            return {
                ...state,
                isRegistration: action.isRegistration
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: errorsOfAPI.find(elem => elem.value === action.error)
            }
        }
        case SET_CLEAR_ERROR: {
            return {
                ...state,
                error: ""
            }
        }
        default: 
            return state;
    }
}


export const setToken = (token) => ({ type: SET_TOKEN, token })

export const setRegistration = (isRegistration) => ({ type: SET_REGISTRATION, isRegistration }); 

export const setUserData = (login, password, nickname, money, token, bank, isAuth) => ({
    type: SET_USER_DATA,
    login,
    password,
    nickname,
    money,
    token,
    isAuth, 
    bank
})

export const setAuthError = (error) => ({type: SET_ERROR, error});

export const setAuthClearError = () => ({ type: SET_CLEAR_ERROR});


export const checkIn = (login, password, nickname) => (dispatch) => {
    authAPI.checkIn(login, password, nickname).then((response) => {
        if (response.data.result === 'ok' && response.data.data === true) {
            dispatch(setRegistration(true));
        } else if (response.result === "error") {
            dispatch(setAuthError(response.data));
        }
    })
    .catch((error) => {
        // написать логику
    })
}

export const login = (login, password) => (dispatch) => {
    authAPI.login(login, password)
        .then((response) => {
            if (response.data.result === 'ok') {
                dispatch(getUserByToken(response.data.data));
                Cookies.set('token', response.data.data, { expires: 365 });
                console.log(errorsOfAPI[0]);
            } else if (response.data.result === "error") {
                dispatch(setAuthError(response.data.data));
            }
        })
        .catch(error => {
            // написать логику
        })
}

export const getUserByToken = (token) => (dispatch) => {
    authAPI.getUserByToken(token)
        .then(response => {
            let data = response.data.data;
            if (response.data.result === 'ok') {
                dispatch(setUserData(data.login, data.password, data.nickname, data.money, data.token, data.bank, true));
                console.log(response);
            } else if (response.result === "error") {
                dispatch(setAuthError(response.data.data));
            }
        })
        .catch(error => {
            // написать логику
        })
}

export const logout = (token) => (dispatch) => {
    authAPI.logout(token).then(response => {
        if (response.data.result === "ok" && response.data.data) {
            dispatch(setUserData(null, null, null, null, null, false))
            Cookies.remove('token');
        } else if (response.result === "error") {
            dispatch(setAuthError(response.data.data));
        }
    })
}

export default authReducer;
