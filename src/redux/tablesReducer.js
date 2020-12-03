import { tablesAPI } from '../api/api';

const SET_TABLE = 'SET_TABLE';


let initialState = {
    tables: [],
}

const tablesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLE: {
            return {
                ...state,
                tables: [...state.tables, {
                    name: action.name, 
                    quantPlayer: action.quantPlayer,
                    rates: action.rates,
                    password: action.password,
                }]
            }
        } 
        default: 
            return state;
    }
}


export const setTable = (tableToken, tableName) => ({ type: SET_TABLE, tableToken, tableName });


export const createTable = (token, name, quantPlayer = null, rates = null, password = null) => (dispatch) => {
    tablesAPI.createTable(token, name, quantPlayer, rates, password)
        .then((response) => {
            console.log(response);
            // if (response.data.result === 'ok') {
            // }
        })
}

export const connectToTable = (token, id) => (dispatch) => {
    tablesAPI.connectToTable(token, id)
        .then(response => {
            console.log(response);
        })
}


export default tablesReducer;
