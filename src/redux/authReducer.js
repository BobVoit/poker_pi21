import { checkInAPI } from '../api/api';

const SET_CHECK_IN_DATA = 'SET_CHECK_IN_DATA';


let initialState = {
    login: null,
    password: null,
    nickname: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHECK_IN_DATA: {
            return {
                ...state,
                login: action.data.login,
                password: action.data.password,
                nickname: action.data.nickname,
                isAuth: action.data.isAuth,
            };
        }
        default: 
            return state;
    }
}

export const setCheckInUserData = (login, password, nickname, isAuth) => ({ 
    type: SET_CHECK_IN_DATA, 
    data: {login, password, nickname, isAuth}
});
  


export const checkIn = (login, password, nickname) => (dispatch) => {
    checkInAPI.checkIn(login, password, nickname).then((response) => {
        if (response.data.resultCode === 0) {
            let { login, password, nickname } = response.data;
            dispatch(setCheckInUserData(login, password, nickname, true));
        }
    })
}

export default authReducer;
