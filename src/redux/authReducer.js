import { authAPI } from '../api/api';
import Cookies from 'js-cookie';

const SET_TOKEN = 'SET_TOKEN';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_REGISTRATION = 'SET_REGISTRATION';

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


export const checkIn = (login, password, nickname) => (dispatch) => {
    authAPI.checkIn(login, password, nickname).then((response) => {
        if (response.data.result === 'ok' && response.data.data === true) {
            dispatch(setRegistration(true));
        }
    })
    .catch((error) => {
        // написать логику
    })
}

export const login = (login, password) => (dispatch) => {
    authAPI.login(login, password)
        .then((response) => {
            console.log(response)
            if (response.data.result === 'ok') {
                dispatch(getUserByToken(response.data.data));
                Cookies.set('access_token', response.headers['x-access-token']);
                Cookies.get('token');
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
        }
    })
}

export default authReducer;
