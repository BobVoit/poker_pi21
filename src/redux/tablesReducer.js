    import { tablesAPI } from '../api/api';

const SET_TABLES = 'SET_TABLES';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
    tables: [],
    isFetching: false
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
        default: 
            return state;
    }
}


export const setTables = (tables) => ({ type: SET_TABLES, tables});

export const setIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});


export const createTable = (token, name, quantPlayer = null, rates = null, password = null) => (dispatch) => {
    tablesAPI.createTable(token, name, quantPlayer, rates, password)
        .then((response) => {
            console.log(response);
            if (response.data.result === 'ok') {
            }
        })
}

export const connectToTable = (token, id) => (dispatch) => {
    tablesAPI.connectToTable(token, id)
        .then(response => {
            
        })
}

export const getTallTables = () => (dispatch) => {
    dispatch(setIsFetching(true));
    tablesAPI.getTallTables()
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
