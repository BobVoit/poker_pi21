import { authAPI } from '../api/api';

const SET_TABLE = 'SET_TABLE';


let initialState = {
    tableToken: null,
    tableName: null,
}

const tablesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLE: {
            return {
                ...state,
                tableToken: action.token,
                tableId: action.name
            }
        } 
        default: 
            return state;
    }
}


export const setTable = (tableToken, tableName) => ({ type: SET_TABLE, tableToken, tableName });




export default tablesReducer;
