import { authAPI } from '../api/api';

const SET_CHECKIN_DATA = 'SET_CHECK_IN_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
const SET_TOKEN = 'SET_TOKEN';
const SET_USER_DATA = 'SET_USER_DATA';

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
        case SET_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        } 
        case SET_USER_DATA: {
            return {
                ...state,
                login: action.data.login,
                password: action.data.password,
                nickname: action.data.nickname,
                isAuth: action.isAuth,
            }
        }
        default: 
            return state;
    }
}


export const setToken = (token) => ({ type: SET_TOKEN, token })

export const setUserData = (data, isAuth) => ({
    type: SET_USER_DATA,
    data: data,
    isAuth
})


export const checkIn = (login, password, nickname) => (dispatch) => {
    authAPI.checkIn(login, password, nickname).then((response) => {
        if (response.data.result === 'ok') {
            // написать логику
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
                console.log(response.data.data);
                dispatch(setToken(response.data.data, true));
                dispatch(getUserByToken(response.data.data));
            }
        })
        .catch(error => {
            // написать логику
        })
}

export const getUserByToken = (token) => (dispatch) => {
    console.log(token);
    authAPI.getUserByToken(token)
        .then(response => {
            console.log(response);
            if (response.data.result === 'ok') {
                console.log(response.data);
                dispatch(setUserData(response.data.data, true));
            }
        })
}

// export const logout = () => (dispatch) => {
//     authAPI.logout(login).then(response => {
//         dispatch(setLoginData(null, null, false));
//     })
// }

export default authReducer;
