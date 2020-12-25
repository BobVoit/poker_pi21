import Cookies from 'js-cookie';

import { authAPI, usersAPI } from '../api/api';
import { errorsOfAPI } from '../another/errors';
import { setPlayer } from './gameReducer';

const SET_TOKEN = 'SET_TOKEN';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_REGISTRATION = 'SET_REGISTRATION';
const SET_CLEAR_ERROR = 'SET_CLEAR_ERROR_AUTH';
const SET_ERROR = "SET_ERROR_AUTH";
const SET_STATS = "SET_STATS";

let initialState = {
    id: null,
    login: null,    
    password: null,
    nickname: null,
    money: null,
    token: null,
    isAuth: false,
    error: null,
    isRegistration: false,
    stats: {
        win: 0,
        loss: 0,
        biggest_win: 0,
        biggest_loss: 0,
        date_registration: ""
    }
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
                id: Number(action.id),
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
        case SET_STATS: {
            return {
                ...state,
                win: Number(action.win),
                loss: Number(action.loss),
                biggest_win: Number(action.biggest_win),
                biggest_loss: Number(action.biggest_loss),
                date_registration: action.date_registration
            }
        }
        default: 
            return state;
    }
}


export const setToken = (token) => ({ type: SET_TOKEN, token })

export const setRegistration = (isRegistration) => ({ type: SET_REGISTRATION, isRegistration }); 

export const setUserData = (login, password, nickname, id, money, token, bank, isAuth) => ({
    type: SET_USER_DATA, id, login, password, nickname, money, token, isAuth, bank
})

export const setAuthError = (error) => ({type: SET_ERROR, error});

export const setAuthClearError = () => ({ type: SET_CLEAR_ERROR});

export const setStats = (win, loss, biggest_win, biggest_loss, date_registration) => ({
    type: SET_STATS, win, loss, biggest_win, biggest_loss, date_registration
});


export const checkIn = (login, password, nickname) => async (dispatch) => {
    let response = await authAPI.checkIn(login, password, nickname);
    if (response.data.result === 'ok' && response.data.data === true) {
        dispatch(setRegistration(true));
    } else if (response.result === "error") {
        dispatch(setAuthError(response.data));
    }
}

export const login = (login, password) => async (dispatch) => {
    let response = await authAPI.login(login, password);
    if (response.data.result === 'ok') {
        dispatch(getUserByToken(response.data.data));
        Cookies.set('token', response.data.data, { expires: 365 });
    } else if (response.data.result === "error") {
        dispatch(setAuthError(response.data.data));
    }
}

export const logout = (token) => async (dispatch) => {
    let response = await authAPI.logout(token);
    if (response.data.result === "ok" && response.data.data) {
        dispatch(setUserData(null, null, null, null, null, null, false))
        Cookies.remove('token');
    } else if (response.result === "error") {
        dispatch(setAuthError(response.data.data));
    }
}

export const getUserByToken = (token) => async (dispatch) => {
    let response = await authAPI.getUserByToken(token);
    let data = response.data.data;
    if (response.data.result === 'ok') {
        dispatch(getStats(data.id));
        dispatch(setUserData(data.login, data.password, data.nickname, data.id, data.money, data.token, data.bank, true));
    } else if (response.result === "error") {
        dispatch(setAuthError(response.data.data));
    }
}

export const getUserById = (id) => async (dispatch) => {
    let response = await usersAPI.getUserById(id);
    dispatch(setPlayer(response.data.data));
}

export const getStats = (id) => async (dispatch) => {
    let response = await usersAPI.getStatsById(id);
    console.log(response);
    if (response.data.result === 'ok') {
        let data = response.data.data;
        dispatch(setStats(data.win, data.loss, data.biggest_win, data.biggest_loss, data.date_registration));
    }
}


export default authReducer;
