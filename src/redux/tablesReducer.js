import { tablesAPI } from '../api/api';
import { errorsOfAPI } from '../another/errors';


const SET_TABLES = 'SET_TABLES';
const IS_FETCHING = 'IS_FETCHING';
const SET_ERROR = 'SET_ERROR';
const SET_CLEAR_ERROR = 'SET_CLEAR_ERROR';

let initialState = {
    tables: [],
    isFetching: false,
    error: ""
}

const tablesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLES: {
            return {
                ...state,
                tables: action.tables
            }
        } 
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: errorsOfAPI.find(elem => elem.value === action.error)
            }
        }
        default: 
            return state;
    }
}


export const setTables = (tables) => ({ type: SET_TABLES, tables});

export const setIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});

export const setErrorTable = (error) => ({type: SET_ERROR, error});

export const setClearErrorTable = () => ({type: SET_CLEAR_ERROR});


export const createTable = (token, name, quantPlayer = null, rates = null, password = null) => (dispatch) => {
    tablesAPI.createTable(token, name, quantPlayer, rates, password)
        .then((response) => {
            console.log(response);
            if (response.data.result === 'ok' && response.data.data === true) {
                dispatch(getАllTables());
            }
        })
}

export const connectToTable = (token, id) => (dispatch) => {
    tablesAPI.connectToTable(token, id)
        .then(response => {
            console.log(response);
        })
}

export const getАllTables = () => (dispatch) => {
    dispatch(setIsFetching(true));
    tablesAPI.getАllTables()
        .then(response => {  
            dispatch(setTables(response.data.data));
            dispatch(setIsFetching(false));
        })
        .catch(error => console.log(error));
}

export const getTableById = (id) => (dispatch) => {
    tablesAPI.getTableById(id)
        .then(response => {
            console.log(response);
        })
} 

export default tablesReducer;
